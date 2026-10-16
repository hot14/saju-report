/*
 * SajuRoot 프리미엄 라이선스 검증 · 언락 상태 관리 (Lemon Squeezy 연동)
 * ---------------------------------------------------------------------
 * 키 형식:  SR-<payload>-<시그니처>
 *   payload   : 오너가 발급하는 영문 대문자+숫자 식별자(예: 주문번호 축약, 3~32자)
 *   시그니처  : HMAC-SHA256(서명 시크릿, payload)의 64자리 hex
 * 검증: Web Crypto HMAC-SHA256(crypto.subtle). 서명 시크릿은 js/license-secret.js의
 *   window.SAJU_LICENSE_SECRET이며, 현재 값은 PLACEHOLDER("LS_SECRET_PLACEHOLDER")
 *   이다. 오너가 실제 값으로 교체하면 실제 키 검증이 켜진다. PLACEHOLDER인 동안에는
 *   실제 키가 어떤 형식이어도 항상 검증 실패이고, 데모 경로만 동작한다.
 *
 * [오너 키 발급 원라이너] 시크릿 교체 후 Node에서:
 *   node -e "const c=require('crypto');const s='실제시크릿';const p='A1B2C3';console.log('SR-'+p+'-'+c.createHmac('sha256',s).update(p).digest('hex').toUpperCase())"
 *
 * [데모 모드 · 스토어 개설 전 개발자 확인 경로]
 *   차트 화면 개발자 콘솔에서  SajuRoot.unlock('DEMO')  를 입력하면 이 브라우저의
 *   전체 리딩이 열린다. 상태는 localStorage('sajuroot_license')에 저장되어 이후
 *   방문에서 자동 적용된다. 되돌리기는 결과 화면 하단 '라이선스 해제' 버튼 또는
 *   콘솔에서  SajuRoot.license.lock()  이다.
 *
 * 공개 API: window.SajuRoot.license = { isUnlocked, unlock, lock, onChange, getState }
 *   app.js는 render마다 isUnlocked()로 잠금을 판정하고 onChange로 재렌더한다.
 *   unlock()은 Promise를 돌려준다({ ok, mode }). onChange 리스너는 상태 변화 직후
 *   동기 호출된다(데모 경로) 또는 검증 완료 직후 호출된다(실제 키 경로).
 */
(function () {
  "use strict";
  var NS = window.SajuRoot || (window.SajuRoot = {});
  var LS_KEY = "sajuroot_license";
  var KEY_RE = /^SR-([A-Z0-9]{3,32})-([0-9A-F]{64})$/;
  var state = { unlocked: false, mode: null, key: null };
  var listeners = [];

  function secret() {
    var s = "";
    try { s = String(window.SAJU_LICENSE_SECRET || ""); } catch (e) {}
    return s.trim();
  }

  function enc(text) { return new TextEncoder().encode(text); }

  function toHex(buffer) {
    var bytes = new Uint8Array(buffer);
    var out = "";
    for (var i = 0; i < bytes.length; i++) out += ("0" + bytes[i].toString(16)).slice(-2);
    return out;
  }

  function hmacHex(payload) {
    if (!window.crypto || !window.crypto.subtle) return Promise.reject(new Error("crypto unavailable"));
    return window.crypto.subtle.importKey(
      "raw", enc(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    ).then(function (key) {
      return window.crypto.subtle.sign("HMAC", key, enc(payload));
    }).then(toHex);
  }

  /* 길이 고정 비교(64자리 hex끼리). 조기 탈출 없이 자릿수 전부를 비교한다. */
  function safeEqual(a, b) {
    var diff = a.length === b.length ? 0 : 1;
    for (var i = 0; i < a.length && i < b.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
  }

  function normalizeKey(raw) {
    return String(raw == null ? "" : raw).trim().toUpperCase();
  }

  function persist(key) {
    try {
      if (key) localStorage.setItem(LS_KEY, key);
      else localStorage.removeItem(LS_KEY);
    } catch (e) {}
  }

  function readStored() {
    try { return localStorage.getItem(LS_KEY) || ""; } catch (e) { return ""; }
  }

  function notify() {
    for (var i = 0; i < listeners.length; i++) {
      try { listeners[i](getState()); } catch (e) {}
    }
  }

  function apply(key, mode) {
    state = { unlocked: true, mode: mode, key: key };
    persist(key);
    notify();
  }

  /* 실제 키 검증. PLACEHOLDER 시크릿에서는 항상 실패(데모만 허용). */
  function verifyRealKey(key) {
    var m = normalizeKey(key).match(KEY_RE);
    if (!m) return Promise.resolve(false);
    var s = secret();
    if (!s || s.indexOf("PLACEHOLDER") !== -1) return Promise.resolve(false);
    return hmacHex(m[1]).then(function (mac) {
      return safeEqual(mac.toUpperCase(), m[2]);
    }).catch(function () { return false; });
  }

  function unlock(rawKey) {
    var key = normalizeKey(rawKey);
    if (key === "DEMO") {
      apply("DEMO", "demo");
      return Promise.resolve({ ok: true, mode: "demo" });
    }
    return verifyRealKey(key).then(function (ok) {
      if (ok) {
        apply(key, "license");
        return { ok: true, mode: "license" };
      }
      return { ok: false, mode: null };
    });
  }

  function lock() {
    state = { unlocked: false, mode: null, key: null };
    persist("");
    notify();
  }

  function isUnlocked() { return state.unlocked === true; }

  function getState() { return { unlocked: state.unlocked, mode: state.mode, key: state.key }; }

  function onChange(fn) {
    if (typeof fn === "function") listeners.push(fn);
  }

  /* 초기화: 저장 키 복원. DEMO는 즉시 언락, 실제 키는 재검증 통과 시 언락하고
     실패하면 저장을 지운다(위조·만료 키의 재유입 차단). */
  (function restore() {
    var stored = readStored();
    if (!stored) return;
    if (stored === "DEMO") {
      state = { unlocked: true, mode: "demo", key: "DEMO" };
      return;
    }
    verifyRealKey(stored).then(function (ok) {
      if (ok) {
        state = { unlocked: true, mode: "license", key: stored };
        notify();
      } else {
        persist("");
      }
    });
  })();

  NS.license = {
    isUnlocked: isUnlocked,
    unlock: unlock,
    lock: lock,
    onChange: onChange,
    getState: getState
  };
  /* 콘솔 데모 경로: SajuRoot.unlock('DEMO') */
  NS.unlock = unlock;
})();
