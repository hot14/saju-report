# /grill-with-docs · 사이트+앱 본격 구축 요구사항 정렬 v1 (R4)

> 작성: 2026-09-05 · 담당: R4-grill 워커 (task_15501a52193d)
> 목적: 디자인 SSOT 단계(게이트 G1~G8 통과, 밝은 v0.2/v0.3 확정)를 마치고 **본격 구축(구현 페이즈)**에 들어가기 전, 확정된 것·물어야 할 것·기록될 결정을 한 문서로 정렬한다.
> 입력: `design-ssot/01-analysis/product-analysis.md` · `design-ssot/02-direction/concept-guardrail.md` · `design-ssot/docs/product-decisions.md` · `docs/tickets-index.md` · `CONTEXT.md` + 보조 전수(`docs/gate-cto-solutions.md` G1-G8 · `docs/i18n-spec.md` · `docs/reaccess-and-receipt-design.md` · `docs/share-card-v2-spec.md` · `docs/badge-naming-en.md` · `docs/copy-deck-v2-{kr,en}.md` · `docs/cutblock-copy-en-kr.md` · `docs/logo-concept-spec.md` · `docs/illustration-seal-sheet.md` · `design-ssot/04-design-tokens/DESIGN.md` v0.3 · `orchestration/steering-log.md`)
> 스냅샷 기준: main `ee4c660` 시점의 저장소 상태.

**Design Read (tasteskill §0.B):** Reading this as: 구현 착수 직전의 요구사항 정렬 게이트 문서, with SSOT에 "확정"으로 기록된 사실만 요구사항으로 내리고 미결정은 잠정 답변·확신도를 붙인 질문으로 분리하는 원칙, leaning toward 모든 행에 출처 경로를 남겨 역추적 가능하게 만드는 관문식 구성. em-dash 0(게이트 G2 습속 승계).

**사용법**: §2의 각 질문 아래 "답변:"란에 사용자가 기입한다. 답변은 다음 grill 세션에서 ADR(§3)·CONTEXT.md(§4)·티켓(T-13+)으로 승격된다.

---

## 1. 확정 요구사항 목록 (SSOT 도출, 출처 명시)

판정 기준: SSOT에 "확정"·"승계"·게이트 통과로 기록된 사실만 수록했다. open 티켓이 소유한 미완 항목은 §1.10에 별도 목록으로 둔다(요구사항으로 오독 금지).

### 1.1 제품 형태·범위

| # | 요구사항 | 출처 |
|---|---|---|
| R-01 | 웹 전용·모바일 퍼스트. 반응형 기준 375px. 설치 유도 배너 금지 | product-analysis §2 팩트시트 |
| R-02 | 퍼널 6화면(시작·입력·계산중·무료결과·결제·유료결과) + 공유카드 = 제7 화면 | product-analysis §2·§7 |
| R-03 | 로그인·설정·커뮤니티 화면 없음(P6) | product-analysis §5 P6 |
| R-04 | 영어 우선(본문 EN, 한글·한자는 이중 레이어) | product-analysis §2 |
| R-05 | 상품 3종 구조: ①개인 리포트(7주제) ②관계 궁합 ③K-아티스트 궁합. 같은 템플릿 3벌 | product-analysis §2 |
| R-06 | 주어는 항상 "당신". 궁합에서 상대는 객체가 아닌 조건으로 서술 | product-analysis R6 |
| R-07 | 남반구 출생자 제외, 출생시각 "모름"은 1급 시민 옵션 | product-analysis §2·R5 |
| R-08 | 사용자 노출 분류는 12~18개 압축 유형(내부 정밀도 52만 조합은 미노출). 무료 화면에는 1개 체계만 노출 | concept-guardrail §5 · CTO U13 |
| R-09 | 10 일간 정체성 카드 = 제품 1번 자산. 입력 완료 직후 즉시 출력("당신은 작은 물입니다") | concept-guardrail §4 |

### 1.2 판정 엔진·콘텐츠

| # | 요구사항 | 출처 |
|---|---|---|
| R-10 | 판정은 결정론적 코드. 같은 사주 = 같은 노드 = 같은 배지·같은 카드·같은 시퀀스(P1 재현성). AI는 문장 생성만 | product-analysis §1·§5 P1 |
| R-11 | 계산 투명성: "Calculations shown" 계열 근거 표기. 계산은 내부 양력 그레고리 연산, 표시 계층에서만 로케일 서식 | i18n-spec §4.1 · archive digest 확정 카피 |
| R-12 | 대운(10년 주기) 타임라인 = 7번 주제 "언제 달라지는가". 경쟁사 부재 차별화 자산 | product-analysis §2 |
| R-13 | 무료 = 진단(구조 설명), 유료 = 처방(7~8 영역 행동 지침). 컷 지점 일치 | product-analysis R2 · guardrail §5 |
| R-14 | 관계성은 핵심 패턴 3~5개의 짧은 장면만. 전체 흐름도 1장 금지("물상은 이미지, 해석은 텍스트") | guardrail §4 |

### 1.3 비즈니스·프로덕트 결정

| # | 요구사항 | 출처 |
|---|---|---|
| R-15 | 가격 $8 단건 확정(P1 결정). 모든 표기는 {{PRICE}} 토큰, 하드코딩 금지 | product-decisions P1 · G1 |
| R-16 | 서비스명 SajuRoot 임정 채택(P2 갱신, 자동 승격 절차). 표기는 {{BRAND}} 토큰 유지, 이의 시 문서 수정 | product-decisions P2 갱신 |
| R-17 | 결제 1회로 반복 조회. 구독·광고 없음, 동일가 | product-analysis §2 · guardrail §5 |
| R-18 | 배지명 토큰 {{BADGE}} = docs/badge-naming-en.md 확정값으로 치환 | CONTEXT.md 토큰 § |

### 1.4 디자인 시스템 (v0.2 밝은 방향, DESIGN.md v0.3 단일 원천)

| # | 요구사항 | 출처 |
|---|---|---|
| R-19 | 유일 토큰 원천은 DESIGN.md v0.3: 한지 #F7F3EA 배경 · 먹 #1B1B1E 텍스트 · 골드 #B98A2C(시그니처 한정). 다크 v0.2 값(#141416·#C9A227·Fraunces·Motion 5)은 무효 | DESIGN.md v0.3 머리글 · G2 통과 |
| R-20 | 신규 토큰 3종: Muted #6F6A63 · Field line #8E887F · Surface #FDF8F8. #A8A29A는 다크 전용 강등, #D8D2C7는 장식 헤어라인 전용 | tone-alignment-guide §3 · G6 |
| R-21 | CTA는 먹색 단색 필 + 한지 문자(17.18:1). 골드 필에는 먹 문자만(5.51:1), 골드 텍스트 금지 | tone-alignment-guide §2.3·§2.4 |
| R-22 | 오컬트/점성학 전면 금지: 다크 배경 히어로, 별·달·천체, 성운 그라데이션, 수정구·타로, 보라·인디고, 십장생 도상 | guardrail §6 |
| R-23 | 다이얼 고정: DESIGN_VARIANCE 6 · MOTION_INTENSITY 4(결정론적 리빌만) · VISUAL_DENSITY 3. 랜덤 스피너·프로그레스 바 금지, prefers-reduced-motion 필수 | worker-brief · DESIGN.md §6 |
| R-24 | 타이포 3본제+1: 디스플레이 세리프(정당화 충족)·본문·데이터 태그 역할 분리. Inter/Roboto 기본 금지, Fraunces·Instrument Serif 금지 | DESIGN.md §3 · tasteskill §4.1 · tone §4 |
| R-25 | 가독성 하한: 본문 16px, 캡션 12px, 신뢰·면책 문구 13px+ 잉크 색상 | UX 리포트 §6 · G6 |
| R-26 | Shape Lock: 카드 radius 0, 입력 필드 8px, CTA 풀-필. Page Theme Lock: 7화면 라이트 단일 | tone-alignment-guide §6 |
| R-27 | EYEBROW 상한: 화면별 ceil(섹션수/3), 챕터 번호·폼 라벨은 기능 콘텐츠 미산입. 퍼널 전체 장식 eyebrow 1개 이하 | worker-brief · tone §5 |
| R-28 | em-dash(U+2014)·en-dash(U+2013) 전 산출물 0건 | tasteskill §9.G · G2 |

### 1.5 카피·톤

| # | 요구사항 | 출처 |
|---|---|---|
| R-29 | 금지어: fortune, destiny, fate, "the stars say", 십신·격국 학파 용어, 의료 진단 무드(Diagnosis) | product-analysis §5 P4 · DESIGN.md §7 |
| R-30 | 문체: 구조는 단정, 미래는 조건문. 어휘 pattern/tendency/the way you're built. 물상 15 : 현상 85 | product-analysis §2·§8 |
| R-31 | 카피 이중 원천 해소: EN·KR 카피덱 존재 + 동일 게이트(금지어 0·em-dash 0·CTA 인텐트별 라벨 1종) | G5 · copy-deck-v2-en/kr |
| R-32 | 랜딩 포지셔닝: "Your Korean birth chart, explained clearly." 상단 라벨 + astrology·fortune 어휘는 검색 메타로만 하향 | CTO U4 채택본 |
| R-33 | 대운 챕터 타이틀 오역 금지: "WHEN THE BANKS ARRIVE" 폐기, 재명명안 채택 | CTO U9 · copy-deck EN |

### 1.6 i18n

| # | 요구사항 | 출처 |
|---|---|---|
| R-34 | 10 로케일 스펙 확정: ko-KR·en-US·en-GB·ja-JP·zh-Hans·th-TH·vi-VN·fil-PH·id-ID·ru-RU. 조판은 styles/typography-multilang.css v1.1(base v1.0 무수정 확장) | concept-guardrail §7 · i18n-spec |
| R-35 | html[lang] 단일 진실원천. URL은 path-prefix, hreflang x-default 는 en-US. 카피 폴백 {locale} → en-US → ko-KR | i18n-spec §0·§2 |
| R-36 | 카피덱은 JSON(copydeck/v2.json)+ICU MessageFormat, CI 게이트 4종(키 동일성·ICU 파싱·maxChars·glossary) | i18n-spec §3 · copydeck/v2.json |
| R-37 | 서식 전부 ECMA-402(Intl) 위임. th 불기 연도 입력 가드(CE 병기+범위 검증) 필수 | i18n-spec §0·§4.1·I7 |

### 1.7 신뢰·결제

| # | 요구사항 | 출처 |
|---|---|---|
| R-38 | 결제 3줄 보증 고정: "One-time payment. No subscription. Delivered instantly. Full refund, no questions." | product-analysis P7·R3 |
| R-39 | 면책 프레임 "entertainment & self-reflection" + 푸터 고정 슬롯. 의료·금융 진단 룩앤필 금지 | product-analysis R7 |
| R-40 | Apple Pay / Google Pay 자리 확보(실측 로고). 카드 입력 대체 경로 병행 | P7 · UX §5.3 |
| R-41 | 재접근 설계 확정: 결제 시 이메일 1필드 + 영수증·매직 링크 발송(만료·재발급 규칙 포함). 계정은 만들지 않는다 | reaccess-and-receipt-design · G4 |

### 1.8 확산·자산

| # | 요구사항 | 출처 |
|---|---|---|
| R-42 | 공유카드 = OG 겸용. 밝은 한지 카드 + 하단 잉크 밴드 이중 구조, 1:1/4:5 겸용, 루프백("Read your own"+URL), 민감 정보 0노출 | share-card-v2-spec · P3·R1 |
| R-43 | 일러스트는 물성 스틸컷 원칙의 봉인 시트(10 일간+보조 노드)가 발주·검수 기준. 먹선 균일 스트로크, 여백 60% 이상 | guardrail §3 · illustration-seal-sheet |
| R-44 | 로고 상징 마크는 매듭 문법 3안 컨셉 스펙 준거. 워드마크는 타이포 시스템 관할, {{BRAND}} 확정 전 인쇄 금지 | logo-concept-spec · O3 |
| R-45 | V2 화면 실물: flows-v2-en/ 7화면(780px) 기준. 재생성 시 Stitch DS 고정값 주입 필수 | DESIGN.md v0.3 · G3 통과 |

### 1.9 품질 게이트

| # | 요구사항 | 출처 |
|---|---|---|
| R-46 | 구현 산출물에 tasteskill §14 pre-flight + P1~P7 체크리스트 적용. 구현 게이트 항목: reduced-motion·useEffect 정리·CWV·CLS·혼합 행간 | worker-brief · tone §8 조건부 |
| R-47 | 관문식 판정: 완료는 파일 존재·grep·실측으로 떨어진다(G1~G8 방식 승계) | gate-cto-solutions §4 · tickets-index §0 |

### 1.10 잔여 백로그(요구사항 아님, 착수 전제 조건군)

티켓 T-01~T-12 전부 open(스냅샷 시점). P0 5건(T-01 CTO 재심 문서화 · T-02 7화면 §14 재판정 · T-03 카피덱 스캐폴드 완결 · T-04 10-로케일 데모 완결(F1 결함) · T-05 {{BRAND}} 확정 절차)은 구현 착수 전 완료 권고. 출처: tickets-index §2·§4.

---

## 2. 사용자에게 던질 질문 15건

형식: 각 질문에 SSOT 기반 잠정 답변과 확신도(높음/중/낮음)를 붙였다. 잠정 답변은 근거의 요약이지 확정이 아니다. **답변란은 비워둔다.**

### Q1. "앱"의 정의: 네이티브 앱을 이 페이즈에 포함하는가?
- 근거: product-analysis §2 "웹 전용(앱스토어 없음)"·P6. 그러나 본 태스크 제목은 "사이트+앱 서비스"로 표기되어 SSOT와 어긋난다.
- 잠정 답변: 웹 전용 유지. 필요 시 PWA(홈화면 추가)로 앱감 충족. 네이티브는 점술 정책 심사·스토어 수수료 회피 관점에서도 후순위.
- 확신도: 중(SSOT 명시 vs 태스크 문구 불일치)
- 답변:

### Q2. 구현 스택: Next.js(React)로 굳히는가?
- 근거: tone-alignment-guide §8의 구현 게이트가 useEffect 정리·GSAP 스켈레톤을 전제(React 생태 가정). OG 동적 렌더는 서버 사이드 필요(R-42). SSOT에 스택 확정 기록은 없다.
- 잠정 답변: Next.js App Router + TypeScript. SSR/OG 렌더·정적 로케일 페이지·Vercel 배포 모두 한 몸에서 해결.
- 확신도: 중
- 답변:

### Q3. 사주 계산 엔진 조달: 자체 구현인가, 라이브러리/API인가?
- 근거: R-10 재현성·R-11 투명성은 결정론 자체 코드를 전제. 만세력·절기·대운 방향(성별)·태양시 보정 범위가 구현 스코프.
- 잠정 답변: Node 런타임 자체 엔진 + 이미 답이 검증된 사주 case 세트로 회귀 테스트. 외부 API는 재현성·장애 관점에서 배제.
- 확신도: 중
- 답변:

### Q4. 리포트 콘텐츠 생산: 노드 수와 AI 문장 개입 범위는?
- 근거: R-08 12~18 압축 유형·R-10 "AI는 문장만 쓴다"·R-13 7~8 영역 처방. 노드별 처방 문장 총량(예: 18 노드 × 8 영역)의 저작 방식은 미기록.
- 잠정 답변: 노드 템플릿 + 승인된 카피 라이브러리 조합을 사람이 검수, AI는 초안 가속만. 최종 문장은 카피덱 게이트(금지어·문체) 통과본만.
- 확신도: 중
- 답변:

### Q5. 1차 출시 로케일: EN+KR 선행인가, 10개 동시인가?
- 근거: guardrail §7은 "10개 로케일 1차 지원", CTO U17·i18n-spec §1 티어는 "EN+KR 1차, 순차 오픈" 권고. SSOT 내부 긴장.
- 잠정 답변: 출시 EN+KR 단일 시작, T1(ja·zh·en-GB) 2차, T2·T3 순차. 조판 자산(v1.1)은 이미 10로케일 준비분이라 폐기 아님.
- 확신도: 중
- 답변:

### Q6. 상품 스코프 순서: 1차는 개인 리포트만인가?
- 근거: R-05 3상품 확정이지만 V2 화면·카피덱은 개인 리포트 퍼널만 다듬어졌다. 궁합·아티스트는 그로스 엔진 후보(UX Q2).
- 잠정 답변: 1차 = 개인 리포트 단독 출시. 궁합은 2차(공유 루프 강화 시점), 아티스트 궁합은 파트너십·법 검토 후 3차.
- 확신도: 중
- 답변:

### Q7. K-아티스트 궁합에서 실존 아티스트를 어떻게 다루는가?
- 근거: product-analysis §2 상품 ③·R6 프라이버시 원칙. 실명 사용의 초상권·팬덤 리스크, 가명·장르 프록시 대안은 SSOT 무기록.
- 잠정 답변: 실명 직접 매칭 회피. 출생년 공개 아티스트 한정 + 공식적 공개 정보만, 또는 "아티스트 유형" 프록시. 법 검토 전 출시 금지.
- 확신도: 낮음
- 답변:

### Q8. 데이터·프라이버시 정책: 무엇을 저장하고 얼마나 보관하는가?
- 근거: R-41 이메일은 결제 시만 수집. 생년월일·출생시각·도시의 저장 여부, 보존 기간, GDPR·캘리포니아 대응은 미기록.
- 잠정 답변: 최소 수집. 매직 링크 재접근에 필요한 최소한(이메일 해시·구매·노드 ID)만 보관, 생년월일은 리포트 생성 후 원문 폐기 옵션. 처리 방침 문서화는 출시 전제.
- 확신도: 낮음
- 답변:

### Q9. 결제 PSP 최종 선택은?
- 근거: R-40 Apple/Google Pay 자리·R-39 면책 프레임은 확정. PSP 특정(Stripe 등)·점술 고위험 업종 심사 대응은 T-06 open.
- 잠정 답변: Stripe(월렛 우선) + 예비 1곳. "자기이해 도구" 포지셔닝 증빙 패키지(면책·카피 화면)를 심사에 동봉.
- 확신도: 낮음
- 답변:

### Q10. 서비스명 SajuRoot 임정 채택을 최종 승인하는가? 도메인 4종 등록 상태는?
- 근거: product-decisions P2 갱신(자동 승격 절차). 도메인 등록 확인은 미결로 남음(O3).
- 잠정 답변: SajuRoot 확정 승인 + {{BRAND}} 치환 착수. 도메인(후보 4종) 등록을 이번 페이즈 첫 주에 실행.
- 확신도: 중
- 답변:

### Q11. 가격 지역화: USD 단일 고정인가?
- 근거: R-15 $8 확정. CTO U5는 "1차 $USD 단일 표기, 지역 통화 병기는 순차 오픈 시" 권고. i18n-spec §4.1은 통화 표기 매트릭스 보유.
- 잠정 답변: 1차 $USD 단일(부가세 포함 여부 명시). PPP 조정·지역 통화는 로케일 확장 시점에 재결정.
- 확신도: 중
- 답변:

### Q12. 계측·분석: 퍼널 지표를 어떻게 수집하는가?
- 근거: SSOT에 계측 무기록. R-03 무계정·Q8 최소 수집 원칙과 쿠키·지문 계측의 정합 필요. 출시 후 전환율 실측이 로케일 확장(i18n-spec §1)과 그로스(T-11)의 전제.
- 잠정 답변: 쿠키리스 1st-party 퍼널 이벤트(화면 도달·컷 통과·결제 완료·공유 생성) 최소 집계. 개인 식별 결합 없음.
- 확신도: 낮음
- 답변:

### Q13. 호스팅·인프라: 어디에 올리는가?
- 근거: SSOT 무기록(현 GitHub Pages는 연구 아카이브 용도, S2). 이메일 발송(매직 링크·영수증)·OG 렌더·폰트 셀프호스트(i18n-spec §5.1)가 인프라 요구.
- 잠정 답변: Vercel(앱·OG) + 트랜잭셔널 이메일 서비스(Resend 등) + 폰트 self-host /fonts/. CDN 캐시 1년·버저닝은 i18n-spec §5.1 승계.
- 확신도: 낮음
- 답변:

### Q14. 디자인→코드 전달: 시안을 픽셀 목표로 볼 것인가?
- 근거: DESIGN.md v0.3 "본 문서가 유일한 토큰 원천"·R-45 화면은 참조 실물. 구현의 정답 소스가 시안 이미지인지 토큰+카피덱+봉인시트인지 미기록.
- 잠정 답변: 코드의 원천은 토큰(DESIGN.md v0.3)·카피덱·조판 CSS. flows-v2-en 시안은 레이아웃·구성 참조용(픽셀 목표 아님). §14 재판정(T-02)이 레이아웃 준거를 확정.
- 확신도: 중
- 답변:

### Q15. 구현 착수 조건: P0 티켓 5건 완료를 문턱으로 둘 것인가?
- 근거: tickets-index §4 "P0 5건은 구현 착수 전 완료 권고". 착수를 지금 병행할지 아니면 문턱을 지킬지는 운영 결정.
- 잠정 답변: 문턱 유지. T-01~T-05 완료 후 착수(합산 ~2 근무일 추정, CTO 승계). 그 사이 인프라·계약(PSP·도메인) 준비는 병행 가능.
- 확신도: 높음
- 답변:

---

## 3. ADR 후보 5건 (제목 + 컨텍스트 요약)

작성 규칙은 ADR-0001(MADR, docs/adr/) 승계. 아래는 확정 대기 상태의 후보이며, §2의 답변에 따라 본문이 확정된다.

### ADR-0002 후보 · 웹 전용 단일 코드베이스 채택
컨텍스트: 무계정 6화면 웹 퍼널(P6)·공유 링크 유입 중심(P3)·점술 카테고리의 앱스토어 심사 리스크(R7). 네이티브 이중 유지보수는 팀 규모 대비 과하다. 결정 사항: 반응형 웹(PWA 옵션) 단일 코드베이스, 네이티브는 요구 증거 시 재론.

### ADR-0003 후보 · 결정론적 사주 엔진의 자체 구현과 노드 캐시
컨텍스트: 재현성이 신뢰의 물리적 근거(P1, 같은 사주=같은 노드). 만세력·절기·대운 방향·태양시 보정을 자체 코드화하고 검증된 사주 case 세트로 회귀 테스트. 남반구 제외·시각 모름 규칙(R5·R-07)도 엔진 소관. 외부 API 의존은 장애·변경 시 재현성 훼손 우려.

### ADR-0004 후보 · 계정 없는 재접근: 이메일 영수증 + 매직 링크
컨텍스트: "결제 1회 반복 조회"(guardrail §5)와 무계정(P6)의 모순을 해소하는 U2 확정 설계. 이메일은 로그인이 아니라 저장·해금 장치. 만료·재발급·환불 이메일 하단 링크 규칙 포함. 계정 도입은 명시적 요구 시에만 재론.

### ADR-0005 후보 · 카피덱 JSON 단일 원천 + html[lang] i18n 파이프라인
컨텍스트: 10 로케일 스펙·ICU/Intl 위임·폴백 체인·CI 게이트 4종이 i18n-spec으로 확정됐고 copydeck/v2.json이 시작됐다. 화면 문안은 코드에 문자열을 두지 않고 카피덱만 참조한다. maxChars·팽창률 검증을 CI에 못 박는다.

### ADR-0006 후보 · 공유카드·OG 이미지의 서버 사이드 동적 렌더
컨텍스트: 공유카드가 OG를 겸용하는 확산 유일 수단(P3·share-card-v2-spec). 로케일별 문구(i18n-spec §2 OGP)·10 일간 배지 조합·1:1/4:5 규격을 정적 자산으로 전부 미리 굽는 것은 조합 폭발(R8)이다. 노드 ID 입력 → 서버 렌더 → CDN 캐시 구조와 잉크 밴드 토큰 재사용을 확정한다.

---

## 4. CONTEXT.md 추가 용어 후보

한 줄 정의 규칙(CONTEXT.md 머리글) 준수. 확정 시 해당 파일에 추가한다(본 워커는 기존 파일 수정 금지).

| 용어 | 후보 정의 | 근거 |
|---|---|---|
| SSOT | 단일 진실원천. 항목별 원천은 하나뿐: 토큰=DESIGN.md v0.3, 카피=카피덱, 조판=typography.css 계열 | DESIGN.md v0.3 선언 |
| 게이트(G1~G8) | master 머지 최소 통과 조건 8종. 판정은 파일·grep·실측으로만 | gate-cto-solutions §4 |
| 카피덱(copydeck) | 화면 문안의 단일 원천. docs/copy-deck-v2-{kr,en}.md + copydeck/v2.json | i18n-spec §3 |
| 티켓(T-nn) | 잔여 백로그 단위(docs/tickets/). 완료 판정은 수용조건 체크박스 | tickets-index §4 |
| 봉인 시트(seal sheet) | 일러스트 발주·검수 기준표. 현행: 일간 배지 10종+보조 노드 | illustration-seal-sheet |
| 물성 스틸컷 | 물상을 상징물 형상이 아니라 물리적 성질의 이미지로 찍는 원칙 | concept-guardrail §3 |
| 매직 링크 재접근 | 결제 영수증 이메일의 재열람 링크. 계정이 아니라 해금 장치 | reaccess-and-receipt-design |
| 컷 블록 | 무료 진단과 유료 처방의 경계를 만드는 전환 연출 블록 | cutblock-copy-en-kr |
| 다이얼 | 디자인 3축 확정값: DESIGN_VARIANCE 6 · MOTION_INTENSITY 4 · VISUAL_DENSITY 3 | worker-brief |
| 픽스나우/픽스넥스트/디퍼 | 잔여 과제의 3단 우선순위 분류 | gate-cto-solutions §2 |

---

## 5. 자체 검증 기록

- 기존 파일 수정 0건: 신규 `docs/grill/requirements-site-app-v1.md` 1건만 생성.
- em-dash(U+2014)·en-dash(U+2013) 본문 0건(기계 확인).
- §2 질문 15건 전부에 잠정 답변·확신도·빈 답변란 확보 확인.
- 요구사항 R-01~R-47 전 행에 출처 명시. open 티켓은 §1.10으로 요구사항과 분리.
- 스냅샷 기준 커밋 ee4c660에서 인용 파일 전부 실재 확인(copydeck/v2.json·flows-v2-en 7장·DESIGN.md v0.3 포함).
