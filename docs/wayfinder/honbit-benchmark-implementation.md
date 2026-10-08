# 혼빛(Honbit) 기능별 구현 방법 문서

- 목적: 혼빛의 각 기능이 어떻게 동작하는지 실측으로 밝히고, 재현에 필요한 설계 사양을 자체 표현으로 정리한다.
- 기준: 2026-10-08 아카이브 `/Users/hot14/honbit-archive/` / 저작권 경계 준수(지시서 §7). 원본 코드·문장을 복제하지 않고 구조와 방식만 기술한다.

---

## 1. 전체 아키텍처

실측 근거: 모든 페이지가 Next.js App Router의 RSC flight 페이로드를 포함한 정적 HTML이다(`site/ko/pro.html` 내 `self.__next_f.push` 블록). 컴포넌트 이름(AuthProvider, LangProvider, ConsentProvider, AdSenseLoader 등)과 빌드 청크 해시 파일명(`site/_next/static/chunks/`)으로 스택을 확정할 수 있다. Vercel 호스팅은 정적 자산 구성으로 뒷받침된다 [추정].

재현 설계:

- 프레임워크: Next.js App Router + 정적 출력(`output: export`에 상당하는 prerender). 라우트는 `/{lang}/...` 경로 매개변수 하나로 처리한다.
- 계산은 클라이언트로, 저장은 서버로 분리한다. 사주 연산은 번들에 상주시켜 오프라인 동작을 보장한다(실측: `site/_next/static/chunks/00c04u_vd4zs8.js` 등 3개 청크에 dayMaster·일간 문자열 존재).
- 서버 API는 계정·커뮤니티·결제·텔레메트리만 담당한다(§8, §9).

## 2. 사주 계산 엔진 (클라이언트 사이드)

동작 방식(실측+지시서 §3.2): 생년월일 입력이 들어오면 만세력 규칙으로 4기둥(연·월·일·시주)을 계산하고, 일간(10천간), 오행 분포 5값, 띠(12지지)를 도출한다. 제니 데이터 샘플이 스키마를 보여준다: `birthDate 1996-01-16 → dayMaster 壬(양의 수), element water, zodiac 돼지, dist "wood:1,fire:0,earth:2,metal:0,water:3"`(실측: `data/idols.json`의 `jennie-blackpink` 항목).

재현 설계 사양:

1. 달력 변환: 양력 생일을 절기 기준 월주로 환산한다. 연주는 입출력 경계(2월 4일 입춘)에서 바뀐다. 월주는 12절기일 테이블로 결정한다. 일주는 기준일(예: 1900-01-01의 갑자)로부터의 일수를 60으로 나눈 나머지로 계산한다. 시주는 출생시각이 없으므로 혼빛처럼 생일만으로 서비스할 경우 일주·연주·월주 3기둥을 쓰거나 시주를 생략한다 [추정: 혼빛 결과 화면의 4기둥 표시 방식은 미러에서 동적으로만 확인 가능].
2. 오행 분포: 8글자(천간 4+지지 4)를 오행 5값으로 집계한다. 지장간 반영 여부는 구현 선택인데, 혼빛의 `dist` 합계(제니 6)가 8 미만인 것으로 보아 간략 집계 방식이다(실측: `dist` 필드, 합=6).
3. 일간 판정: 일주의 천간. 음양은 천간 순번 짝수=양으로 정한다.
4. 대운: 아이돌 페이지에 "대운(大運) — 10년 단위의 흐름" 섹션이 존재한다(실측: `site/ko/idol/jennie-blackpink.html` H2). 월주에서 순행/역행을 정해 10년 구간을 나열하는 표준 방식을 쓴다.

## 3. 궁합 스코어링 설계

동작 방식: 두 생일의 오행 분포를 비교해 0~100 점수를 낸다. 상생(木→火→土→金→水→木)은 가점, 상극(木↔土, 土↔水, 水↔火, 火↔金, 金↔木)은 감점, 일간 음양 조합과 띠 관계를 보정한다(지시서 §3.2). 계산이 클라이언트에 있어 서버 호출 없이 즉시 결과가 나온다.

재현 가중치 설계. 자체 설계안이며 혼빛 내부 수치는 비공개다:

- 시작 50점. 상대 오행 분포 대비 내 상생 오행 비율 ×최대 35점 가점.
- 상극 비율 ×최대 25점 감점. 단, 양쪽 분포가 0인 오행은 제외.
- 일간 음양: 음음·양양은 -5, 음양 조합은 +5(대표성 균형 보정).
- 띠 12지지: 삼합 2조(+8), 육합 6조(+5), 축 6조(-8) 테이블.
- 결과는 0~100으로 클램프하고, 밴드 서사(§10 스타일 가이드 연계)로 해설한다.

점수 밴드와 서사의 대응은 블로그 가이드가 정의한다: "60~79점대: 상극 점수가 실제로 묘사하는 것", "80점대: 상생, 실제로 느껴질 만큼의 가장자리 포함", "90점 이상: 모든 것이 한 번에 맞아떨어질 때"(실측: `site/ko/blog/gunghap-score-guide-what-71-80-90-96-mean.html` H2). 즉 낮은 점수도 해설이 가능하도록 밴드를 설계하는 것이 핵심 설계 포인트다.

## 4. 아이돌 DB 스키마

실측(`data/idols.json`, 868 slug × 9언어 = 7,812행)의 레코드 필드:

- `slug`: `{이름}-{그룹}` 형식의 URL 키(예: `jennie-blackpink`). 언어와 무관하게 동일.
- `name`, `group`, `groupKo`: 표시명. `lang`별로 현지화된 값이 들어간다.
- `birthDate`: ISO 날짜. 모든 파생값(사주, 궁합, OG 이미지)의 유일한 입력.
- `dayMaster`(한자), `dayMasterName`(언어별 명칭), `element`(5값), `zodiac`(띠, 언어별), `dist`(오행 분포 문자열).

재현 설계: 원천 테이블은 slug·이름·그룹·생일만 담고, 언어 테이블은 표시명 번역을, 파생 테이블은 birthDate에서 빌드 타임에 계산한 dayMaster·element·zodiac·dist를 둔다. 파생값을 저장하는 이유는 12,053페이지 prerender 시 계산을 1회만 하기 위함이다.

## 5. 프로그램매틱 prerender와 URL 설계

- URL 규칙: `/{lang}/idol/{slug}`, `/{lang}/blog/{slug}`, `/{lang}/mbti/{type}`, `/{lang}/daily/{띠}`, `/{lang}/topic/{주제}`. 전부 언어 접두어 1개가 붙는 평면 구조다(실측: `data/pages.json` path 필드, 섹션별 idol 7,893·blog 3,663·mbti 153·daily 108·topic 72).
- 빌드 파이프라인: 아이돌 868명 × 9언어를 정적 생성. 생일이 같으면 결과가 언제나 같으므로(결정론) OG 이미지 URL, JSON-LD, 본문 해설을 모두 빌드 타임에 확정할 수 있다.
- 콘텐츠 템플릿: 아이돌 페이지 H2 순서가 전원 동일하다. 궁합 CTA → 대운 → 멤버 궁합 순위 → 같은 일간 아이돌 → 같은 띠 아이돌 → 그룹 불문 최고·최난 궁합 → 오행 구성 → 올해 12개월 흐름 → FAQ → 관련 읽을거리(실측: 제니 페이지 H2 10개). 템플릿이 고정이므로 해설 문단만 데이터로 치환된다.
- 내부 링크 그물: 같은 일간·같은 띠·그룹 메이트 링크가 각 페이지 하단에 붙어 868페이지가 서로 연결된다. SEO 관점에서 이 링크 구조가 인덱싱의 핵심 동력이다.

## 6. i18n 설계

- 9개 언어(ko·en·ja·zh·es·pt·id·th·vi)를 경로로 구분하고, 페이지 수가 언어별로 사실상 동일하다(실측: `data/pages.json` 언어별 ko 1,339·en 1,339·타언어 1,338).
- 번역 범위는 UI뿐 아니라 해설 본문 전부다. 전문 용어 처리 방식이 특징인데, 한자(日干·四柱·大運)는 원형을 유지하고 설명은 각 언어로 쓴다(실측: 제니 ko 페이지 H2 "제니의 대운(大運)"과 지시서 §3.3).
- x-default는 en. hreflang을 사이트맵의 `xhtml:link`로도, 페이지 head에서도 이중 선언한다(실측: `sitemap_src.xml`, 제니 페이지).

## 7. SEO·AI-SEO 엔지니어링

실측(제니 ko·en 페이지 head, `sitemap_src.xml`, `site/llms.txt`):

1. JSON-LD 구성: Organization, WebSite, WebApplication(+Offer, price 0), MusicGroup, FAQPage(Question/Answer 다중), BreadcrumbList. 지시서 §3.1이 기재한 Person·MusicArtist는 제니 페이지에서 검출되지 않았고 MusicGroup으로 통일되어 있다.
2. FAQ 스키마의 질문은 실검색 쿼리형이다: "제니의 일간(日干)은 무엇인가요?", "나와 블랙핑크 제니의 사주 궁합은 어떻게 확인하나요?" 등 4문(실측: 제니 페이지 JSON-LD).
3. OG 이미지 동적 생성: `opengraph-image` 엔드포인트가 언어·대상별 이미지를 렌더한다(실측: pro 페이지 og:image URL, 지시서 §3.1 `/api/og?type=saju&...`).
4. AI 크롤러 대응: `llms.txt`(서비스 요약)와 `llms-full.txt`(100,163바이트, 아이돌 전수)를 루트에 두고 `<link rel="llms.txt">`로 선언한다. AI 검색 시대의 프로그램매틱 SEO 표준 장치로 벤치마킹 가치가 크다.
5. 검색엔진 검증: 네이버 사이트 검증과 핀터레스트 도메인 검증 메타가 있다. 한국·해외 팬 채널을 동시에 노리는 배치다.

## 8. 계정·텔레메트리·컨센트

서버 API 목록(지시서 §3.1 실측 인용): `/api/account`, `/api/auth/{providers,email-link}`, `/api/profile`, `/api/favstars`, `/api/fan-stories`, `/api/comments`, `/api/gifts`, `/api/inventory`, `/api/groups`, `/api/idol-ranking`, `/api/bootstrap`, `/api/consent`, `/api/push`, `/api/pageview`, `/api/event`, `/api/visit`, `/api/attribution`, `/api/version`, `/api/partners`, `/api/contact`.

- 인증은 next-auth 이메일 링크 방식이다(지시서 §3.1). 비밀번호 없는 인증이라 해외 팬의 가입 마찰을 최소화한다.
- 클라이언트에 트래커 컴포넌트 4종(VisitTracker, DailyTracker, PageViewTracker, AttributionSync)과 ConsentBanner, MarketingConsent가 배치된다(실측: `site/ko/pro.html` RSC flight 컴포넌트 목록). 쿠키 동의 배너에서 맞춤/비맞춤 광고를 선택하게 하는 GDPR 대응 구조다.
- 스트릭·배지는 DailyTracker가 쌓은 데이터를 `/{lang}/streaks`에서 표시하는 구조로 추정된다 [추정].

## 9. 결제 연동

실측: Pro는 31일 이용권 19,900원 일회 결제다(`site/ko/pro.html` "가장 인기 커플 PRO ₩19,900 · 31일", "로그인 없이 31일 이용권, 한 번 결제"). 번들 청크에 gumroad(8회), toss(5회), kakaopay(4회) 문자열이 있다(`site/_next/static/chunks/`). API는 `/api/checkout`, `/api/checkout/kakaopay/ready`, `/api/checkout/kakaopay/cancel` 2단 구성이다(지시서 §3.1).

재현 설계:

1. 가격 모델: 구독 대신 기간권. 상품 정의는 {기간: 31일, 가격: 19,900원, 갱신 없음}.
2. 결제 흐름: 클라이언트가 `/api/checkout`으로 주문 생성 → PG SDK로 본인인증·결제 → `/ready` 콜백으로 권한 활성화, 취소 시 `/cancel`. 국내는 KakaoPay, 해외 팬은 Gumroad를 병행하는 이중 채널 설계(청크 문자열 근거). 지시서 §2의 PortOne 표기는 미러에서 미검출이므로 PG 앞단 애그리게이터 여부는 미확정이다.
3. 로그인 없는 결제: 주문을 이메일이나 세션 토큰에 묶고, ProThanks 컴포넌트(실측: flight 컴포넌트 목록)에서 완료 처리한다.

## 10. UGC 큐레이션

동작 방식(지시서 §2 + 실측 페이지): 팬이 `/{lang}/blog/submit`에서 스토리를 제출하면 pending 상태가 되고, 운영 승인 후 approved로 블로그에 게재된다. 게재된 팬 다이어리 18편이 워크플로의 산출물이다(실측: `data/blog.json` ko 슬러그 접두사 `fan-diary-` 18건). 댓글과 신고 API(`/api/comments`)가 함께 운영된다.

재현 설계: 제출 폼 필드는 {제목, 본문, 본인 생일, 최애 slug, 언어}. 승인 큐는 상태 3값(draft/pending/approved)으로 관리하고, 승인 시 slug 규칙 `fan-diary-{닉네임}-{조합}`을 적용한다. 실측 예: `fan-diary-theo-the-drummer-ran-seungkwans-saju`. 승인 전까지 게재 URL이 없어야 하며, 스팸 필터와 신고 버튼을 기본 장착한다.

## 11. 그룹 케미 매트릭스

`/{lang}/circle`은 "우리 그룹의 사주 궁합 매트릭스"다(실측: `site/ko/circle.html` 타이틀). 그룹 멤버 전원의 오행 분포를 N×N 궁합 매트릭스로 렌더하고, 각 셀 점수를 블로그의 그룹 케미 포스트 135편(실측: `data/blog.json` 슬러그 접두사 `group-chemistry-` ko 135건)으로 심화 링크한다. 재현에는 그룹별 멤버 집합 + 셀별 스코어(§3 엔진 재사용) + 상위·하위 조합 서사 자동 생성이면 충분하다.

## 12. 오프라인 검증 서버 (아카이브 운영용)

아카이브의 `server.cjs`(4KB)는 미러를 실서비스처럼 재생한다: URL 경로를 `.html` 파일로 매핑하고, gzip 파일을 투명 서빙하며, `?_rsc=` 요청에 RSC flight를 응답해 클라이언트 라우팅을 오프라인에서 작동시키고, `/{lang}/idol`을 `/{lang}/idol-match`로 308 리다이렉트하며, `/api/*`는 로컬 스텁으로 응답한다(지시서 §1). 포트 기본값은 8787이고 인자로 변경한다. 벤치마킹 대상 서비스를 검증할 때 이런 "정적 미러 + RSC 재생 서버" 조합은 의존 서버 없이 UI·계산 로직을 통째로 보존하는 실용적 방법이라 재사용 가치가 있다.

## 13. 기능-근거 대응표

| 기능 | 동작 요약 | 실측 근거 |
|---|---|---|
| 궁합 매칭 | 생일→4기둥→점수·서사, 클라이언트 계산 | chunks 00c04u_vd4zs8.js, 지시서 §3.1 검증(63점) |
| 아이돌 프로필 | 868×9 prerender, H2 10단 고정 템플릿 | data/idols.json, site/ko/idol/jennie-blackpink.html |
| 그룹 케미 | N×N 매트릭스 + 135편 블로그 | site/ko/circle.html, data/blog.json |
| 오늘의 카드·스트릭 | 데일리 카드 + 배지 | site/ko/streaks.html 타이틀 |
| MBTI·데일리·토픽 | 17×9, 12×9, 8×9 페이지 | data/pages.json 섹션 집계 |
| 오늘의 편지 | 매일 편지(리텐션) | site/ko/letter.html |
| Pro 결제 | 31일권 19,900원 일시불 | site/ko/pro.html |
| UGC | 제출→승인, 팬 다이어리 18편 | site/ko/blog/submit.html, data/blog.json |
| Wrapped | 연간 결산 | site/ko/wrapped.html |
