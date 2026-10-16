/*
 * SajuRoot 프리미엄 · Lemon Squeezy overlay 체크아웃 (스토어 개설 후 활성화)
 * ------------------------------------------------------------------------
 * [지금은 비활성 상태다. 스토어 개설 후 오너 작업 2단계]
 *   1) 아래 STORE_URL을 실제 상품 체크아웃 주소로 교체한다.
 *      현재 값: https://sajuroot.lemonsqueezy.com/checkout/buy/adbf35fc-0200-4b6e-a18c-78006893dd3b"프리미엄으로 열기" CTA가 라이선스 입력 패널 대신
 *   Lemon Squeezy overlay 체크아웃을 연다. 결제로 발급된 라이선스 키는 결과 화면
 *   하단 "라이선스 입력"에 넣어 언락한다(검증: js/license.js HMAC-SHA256).
 *
 * PLACEHOLDER 값에서는 enabled가 false이고, app.js의 CTA는 이 파일 없이도
 * 라이선스 입력 패널로 동작한다(데모 모드: 콘솔 SajuRoot.unlock('DEMO')).
 */
(function () {
  "use strict";
  var STORE_URL = "https://sajuroot.lemonsqueezy.com/checkout/buy/adbf35fc-0200-4b6e-a18c-78006893dd3b";
  var NS = window.SajuRoot || (window.SajuRoot = {});

  function enabled() { return STORE_URL.indexOf("PLACEHOLDER") === -1; }

  function openOverlay() {
    var w = window.LemonSqueezy;
    if (w && w.Url && typeof w.Url.Open === "function") {
      w.Url.Open(STORE_URL);
      return true;
    }
    window.open(STORE_URL, "_blank", "noopener");
    return true;
  }

  NS.premium = {
    storeUrl: STORE_URL,
    checkout: {
      enabled: enabled(),
      /* overlay 위젯이 아직 없으면 동적으로 주입하고 로드 후 1회 연다. */
      buy: function () {
        if (!enabled()) return false;
        if (!window.LemonSqueezy) {
          var s = document.createElement("script");
          s.src = "https://assets.lemonsqueezy.com/lemon.js";
          s.defer = true;
          s.onload = openOverlay;
          (document.head || document.documentElement).appendChild(s);
          return true;
        }
        return openOverlay();
      }
    }
  };
})();
