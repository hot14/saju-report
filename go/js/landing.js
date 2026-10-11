/* SajuRoot 랜딩 주제별 진입 변형 (?t=money | career | love)
   ----------------------------------------------------------
   오너 지시(유입 실험): src별 진입 최적화. 기존 랜딩 구조와 src 추적 로직은
   그대로 두고, ?t= 파라미터로 헤드라인(title)·부제(sub)·CTA 문구만 교체한다.

   - HTML 3벌 복제 없음: 변형 문구는 아래 VARIANTS 데이터 한 곳에만 존재하고,
     렌더 시 지정 id 요소에 데이터 주입으로 덮어쓴다.
   - src와 t는 독립 동작: ?src=community&t=money 조합에서 src 추적(인라인
     스크립트·chart.html app.js)은 영향받지 않는다. t는 localStorage에
     저장하지 않고(1회성 렌더 변형) CTA href에도 붙이지 않는다.
   - 파라미터가 없거나 알 수 없는 값이면 기본 헤드라인을 유지한다(변경 없음).
   - 물상 언어는 서비스 콘텐츠 용어를 따른다: 재성(재물·결실), 관성(직장과
     질서·방향), 일간 합·오행 보완(관계 읽기).
   - 노드 실측: window.SajuRootLanding.resolve(search)가 순수 함수라
     브라우저 스텁 없이도 변형 선택 로직을 직접 검증할 수 있다. */
(function () {
  "use strict";

  var VALID_T = ["money", "career", "love"];

  /* 변형 데이터: {title, sub, cta} 1쌍씩. title만 정적 <br>·accent 마크업을
     포함하는 HTML 문자열(자체 데이터라 안전), sub·cta는 textContent 주입. */
  var VARIANTS = {
    money: {
      title: '돈의 흐름이<br>보이는 사주<span class="accent">.</span>',
      sub: "재성은 내가 다루는 돈과 결실의 기운입니다. 생년월일에서 여덟 글자를 계산하고, 내 물상의 재성이 어디서 어떻게 작동하는지 그 계산 과정을 그대로 보여줍니다.",
      cta: "내 돈의 흐름 보기"
    },
    career: {
      title: '일과 방향이<br>보이는 사주<span class="accent">.</span>',
      sub: "관성은 직장과 질서, 내가 나아가는 방향의 기운입니다. 생년월일에서 여덟 글자를 계산하고, 어떤 일이 내 물상과 어울리는지 그 계산 과정을 그대로 보여줍니다.",
      cta: "내 일의 방향 보기"
    },
    love: {
      title: '관계의 그림이<br>보이는 사주<span class="accent">.</span>',
      sub: "일간이 일간을 만나면 합과 충, 채워지는 오행의 그림이 드러납니다. 생년월일에서 여덟 글자를 계산하고, 내 관계가 어떤 모양인지 그 계산 과정과 함께 보여줍니다.",
      cta: "내 관계의 그림 보기"
    }
  };

  /* ?t= 해석: 유효한 주제면 변형 데이터, 아니면 null(기본 유지).
     허용 목록 선확인이라 ?t=constructor 같은 값도 안전하게 기본 처리된다. */
  function resolveTopic(search) {
    var raw = "";
    try {
      raw = new URLSearchParams(search || "").get("t") || "";
    } catch (e) {
      return null;
    }
    return VALID_T.indexOf(raw) > -1 ? VARIANTS[raw] : null;
  }

  /* 렌더 주입. href는 건드리지 않는다: CTA 링크의 src 파라미터는 기존
     src 추적 로직(index.html 인라인 스크립트)이 채운다. */
  function applyTopic(search) {
    var v = resolveTopic(search);
    if (!v) return null;
    var titleEl = document.getElementById("hero-title");
    var subEl = document.getElementById("hero-sub");
    var ctaEl = document.getElementById("cta-chart");
    if (titleEl) titleEl.innerHTML = v.title;
    if (subEl) subEl.textContent = v.sub;
    if (ctaEl && v.cta) ctaEl.textContent = v.cta;
    return v;
  }

  var search = (typeof window !== "undefined" && window.location && window.location.search) || "";
  applyTopic(search);

  /* 노드 실측·향후 smoke 확장용 노출 */
  window.SajuRootLanding = {
    variants: VARIANTS,
    validTopics: VALID_T,
    resolve: resolveTopic,
    apply: applyTopic
  };
})();
