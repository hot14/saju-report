# honbit 아카이브 역분석: SAJU 유입 채널 후보 도출

- 작성: 2026-10-01 (재개 순서 1번, wayfinder 디스커버리)
- 분석 대상: `/Users/hot14/Desktop/260822_리포트에이전트/honbit-archive/` (honbitsaju.com 전체 미러, 수집일 2026-08-30)
- 방법: `data/pages.json`·`data/idols.json`·`data/blog.json`을 node로 직접 로드해 계산. HTML·JS 청크는 site/ 미러에서 원문 인용. 추측 수치 없음, 모든 수치에 출처 파일 경로 병기.

## 핵심 요약 (3줄)

1. honbit은 9개 언어에 1,294페이지씩 균등 복제한 총 11,655페이지 사이트이고, 그중 아이돌 개인 페이지 842(65.1%)와 블로그 398(30.8%)이 95.8%를 차지한다. 즉 사이트 전체가 롱테일 SEO 자산이고, 유입은 "아이돌 이름+사주" 검색과 "그룹 궁합" 검색으로 모은다.
2. 수익화는 궁합 무료층(하루 10회, 게이지 UI "n/10회 남음")으로 재방문을 붙잡고, 유료(Couple Pro, ₩19,900/월, $6.99/월·$59.99/년·3개월 무료)는 "명식 자리 읽기, 빈 오행, 12개월 운세, 인생 시간표 16구간"이라는 자기 차트 심층 레이어에 둔다. 무료 제한은 전환 장치로 작동한다.
3. AI 답변 엔진 대응(AEO)이 명시적이다. robots.txt가 AI 봇 12종을 개별 Allow 하고, llms.txt(4,346자 요약)와 llms-full.txt(93,244자, 아이돌 전체 인벤토리 834+에디토리얼 가이드 38)를 루트에 둔다. SAJU는 셀럽 의존 채널(idol 842, group-chemistry 127, fan-diary 18)만 기각하면 나머지 구조를 그대로 이식할 수 있다.

---

## 1. 유입 구조 (Q1)

### 1-1. 규모와 언어 분포

전체 페이지 인벤토리 `data/pages.json`: 11,655행.

| 구분 | 수치 | 출처 |
|---|---|---|
| 전체 페이지 | 11,655 | `data/pages.json` 행 수 |
| 언어별 | ko/en/ja/zh/es/pt/id/th/vi 각 1,294페이지 (각 11.1%) + 루트 9페이지 | `data/pages.json` lang 필드 집계 |
| 사이트맵 URL | 7,384 (hreflang alternate 태그 73,820개, lastmod 2026-08-29) | `site/sitemap.xml` `<loc>`·`xhtml:link` 집계 |

언어 9개가 1,294페이지로 정확히 균등하다. 콘텐츠를 한 번 만들면 9개 언어로 완전 복제하는 파이프라인이라는 뜻이고, 이는 비영어권 K팝 팬 검색(ja/es/pt/id/th/vi)을 노린 설계다.

### 1-2. 섹션 구조 (ko 1,294페이지 기준)

`data/pages.json` section 필드 집계:

| 섹션 | 페이지 수 | 비중 | 내용 |
|---|---|---|---|
| idol | 842 | 65.1% | 아이돌 개인 사주 페이지 |
| blog | 398 | 30.8% | 포스트 382 + 블로그 목록·페이지네이션 16 (`/ko/blog`, `/ko/blog/page/2`~`16`) |
| mbti | 17 | 1.3% | MBTI 16유형 + 인덱스 |
| daily | 12 | 0.9% | 띠별 오늘 운세 (rat~pig 12동물) |
| topic | 8 | 0.6% | 주제 리딩 (love, career, wealth, health, study, travel, relationships, overall) |
| 단일 페이지 | 17 | 1.3% | pro, me, play, streaks, wrapped, idol-match, discover, share, faq, help, about, contact, advertise, circle, privacy, terms, refund |

아이돌+블로그 합계 1,240/1,294 = 95.8%. 랜딩·기능 페이지는 얇게, 인덱서블 콘텐츠는 두껍게 쌓은 전형적인 프로그램틱 SEO 구조다.

### 1-3. 아이돌 롱테일 SEO 구조 (842명)

`data/idols.json`: 7,578행 = 842명 × 9언어. 아이돌별 행 키: slug, lang, name, birthDate, group, groupKo, dayMaster, dayMasterName, element, zodiac, dist(오행 분포).

- URL 패턴: `/{lang}/idol/{영문이름}-{그룹}` (예: `/ko/idol/ahyeon-babymonster`) — `data/pages.json`
- 타이틀 패턴 (언어별 현지화, 동일 골격): 842/842 페이지가 구분자(— 또는 -) 포함 단일 패턴
  - ko: `아현 사주 — 베이비몬스터 일간·궁합 무료 | 혼빛`
  - en: `Ahyeon Birth Chart & Saju (BABYMONSTER) — Zodiac & Compatibility | Honbit`
  - ja: `Ahyeon 四柱推命・サジュ — BABYMONSTER 日主と相性診断 無料 | Honbit`
  - es: `Saju (사주) de Ahyeon — Pilar del Día y compatibilidad de BABYMONSTER | Honbit`
  - (`data/pages.json` title 필드, ahyeon-babymonster 샘플)
- 메타 디스크립션도 템플릿: "아현 사주 — 일간 乙(木), 목(木) 기운이 2개로 가장 강해요. 베이비몬스터 멤버와 나의 궁합은 상위 몇 %일까? 생일만 넣으면 30초 무료 — 혼빛." (`site/ko/idol/ahyeon-babymonster.html.gz`)
- 그룹 142개. Solo 25명(3.0%), tripleS 22, SEVENTEEN 13, TREASURE 10, THE BOYZ 10, xikers 10, CRAVITY 9, OH MY GIRL 9, NiziU 9, EXO 9 (`data/idols.json` group 필드 유니크 집계)
- 출생연도 분포(842명): 2000~04년생 325명(38.6%), 1995~99년생 199명(23.6%), 1990~94년생 133명(15.8%), 2005~09년생 131명(15.6%), 1985~89년생 48명(5.7%), 1980~84년생 6명(0.7%) — 현역 K팝 4~5세대 중심. `data/idols.json` birthDate 집계
- 내부 링크: 아이돌 개인 페이지 1장(`site/ko/idol/ahyeon-babymonster.html.gz`, 302KB)에 총 273개 링크 중 207개가 다른 아이돌 페이지. 아이돌 페이지끼리 메시(mesh)로 연결해 크롤 깊이를 평평하게 만든다. JSON-LD 4블록(Organization+WebSite+WebApplication, Person+MusicArtist, FAQPage, BreadcrumbList), canonical 존재
- 데이터 정합 주의: pages.json 842명, llms-full.txt "All idols (834)", idol-match 페이지 문구 "830명", llms.txt "830+". 스냅샷 시점(2026-08-30) 사이 소폭 증가. 보고서 인용 시 출처별 수치를 그대로 표기

### 1-4. 블로그 382포스트 주제 분포 (상위 10)

`data/blog.json`: 3,438행 = 382slug × 9언어. slug 접두어 규칙으로 1차 분류(포스트당 1개 주제, 중복 없음):

| 순위 | 주제 | 포스트 수 | 비중 | 예시 slug |
|---|---|---|---|---|
| 1 | 아이돌 사주 가이드 (`saju-guide-*`) | 208 | 54.4% | saju-guide-karina-aespa |
| 2 | 그룹 멤버 궁합 테스트 (`group-chemistry-*`) | 127 | 33.2% | group-chemistry-seventeen |
| 3 | 팬 다이어리 체험후기 (`fan-diary-*`) | 18 | 4.7% | fan-diary-i-ran-my-saju-with-karina |
| 4 | 월별 K팝 생일 총정리 (`kpop-birthdays-2026-*`) | 8 | 2.1% | kpop-birthdays-2026-07 |
| 5 | 기타 에디토리얼 | 7 | 1.8% | what-is-korean-saju-guide-for-kpop-fans, saju-glossary-for-kpop-fans-beginners, ten-gods-saju-explained-for-kpop-fans, gunghap-score-guide-what-71-80-90-96-mean |
| 6 | 궁합 에디토리얼 | 5 | 1.3% | does-bad-saju-compatibility-actually-mean-bad |
| 7 | 오행·일간 가이드 | 5 | 1.3% | five-elements-guide-for-kpop-fans, five-element-generative-cycle-explained |
| 8 | MBTI×사주 | 2 | 0.5% | (mbti-* slug) |
| 9 | 생일 관련 기타 | 1 | 0.3% | how-honbit-birthday-roundups-are-made |
| 10 | 띠별 운세 | 1 | 0.3% | (zodiac slug) |

발행 리듬(`data/blog.json` published 필드): 382편 중 358편(93.7%)이 2026-06 한 달에 발행. 2026-07 11편, 2026-08 7편, 1~5월은 매월 1편. 즉 6월에 콘텐츠 팩토리를 일제히 가동해 사이트맵을 한 번에 채웠다. 제목·설명 텍스트 키워드 빈도(중복 허용): 일간 348, 띠별 344, 연애·사랑 211, 성격 188, 궁합 135, 특정 아이돌명 85.

---

## 2. 퍼널 재구성 (Q2)

페이지 구조에서 복원한 동선:

1. **유입 (검색)**: 아이돌 개인 페이지 842 + 블로그 382가 진입점. 전체 페이지의 95.8%가 이 층 (`data/pages.json`).
2. **아이돌 페이지 → 궁합 진입**: 모든 아이돌 페이지가 "베이비몬스터 멤버와 나의 궁합은 상위 몇 %일까? 생일만 넣으면 30초 무료" CTA를 디스크립션과 본문에 배치 (`site/ko/idol/ahyeon-babymonster.html.gz`).
3. **궁합 실행**: `site/ko/idol-match.html` (title: "아이돌 궁합 — 830명 중 내 최애랑 얼마나 맞을까? | 혼빛"). 입력은 생일뿐, 가입 불필요. FAQ에 "네, 무료이고 아이돌 궁합을 보는 데 가입이 필요 없어요" 명시.
4. **무료 제한 게이지**: JS 청크 `_next/static/chunks/0.m_1p8fonn.l.js`에 3단계 상태 문자열이 8개 언어 전부 현지화되어 있음:
   - 잔여 있음: `오늘 무료 궁합 ${n}/10회 남음 ✨` / `${n}/10 free matches left today ✨`
   - 소진: `오늘 무료 궁합 다 썼어 🌙` / `Out of free matches`
   - 업셀: `👑 Pro · 무광고 · 무제한 궁합` / `👑 Pro · ad-free · unlimited`
5. **Pro 전환**: `site/ko/pro.html` 가격표:
   - 무료 ₩0: 사주 원국 + 전체 풀이, 오늘/이번 주/이번 달 운세, **K-pop 궁합 하루 10회**, 주제별 리딩 8종, MBTI×사주
   - 커플 PRO (ko ₩19,900/월, en $6.99/month, $59.99/year, 3개월 무료, "가장 인기"): 명식 자리 읽기(직업 자리·파트너 자리·빈 오행), 2026 열두 달, 인생 시간표 16구간, 오늘의 시너지 자동 전달
   - 카피: "아이돌 궁합이랑 네 사주 원국은 계속 무료야. Pro는 네 명식 자리 읽기·비어 있는 오행·2026 열두 달·인생 시간표 16구간을 열고" (`site/ko/pro.html`)
6. **리텐션층(전환 지원)**: daily 띠별 운세 12페이지, play(사주 도감 0/80장, 오늘 카드, 주간 퀘스트), streaks, wrapped(연말결산), me(레벨·스트릭·뱃지) (`site/ko/` 하위 페이지들)

### 판정: 무료 제한은 전환 장치인가 → 예

- 하루 10회 캡은 신규 방문자의 탐색(최애 몇 명 확인)에는 넉넉하고, 열성 팬의 반복 실행에만 걸린다. 소진 시 UI가 상시 노출되는 게이지("n/10 남음")라 제한이 보이는 곳에서 바로 업셀로 연결된다.
- 그런데 업셀 문구는 "무제한 궁합"이 아니라 "Pro · 무광고 · 무제한"이고, pro 페이지는 궁합 무료층을 유지하면서 유료 가치를 **자기 차트 심층 해석**(명식 자리, 빈 오행, 12개월, 시간표 16구간)에 둔다. 즉 10회/일 제한은 '잠금'이 아니라 당일 재방문·습관화 장치이고, 실제 결제 이유는 자기이해 심층이다. 게이미피케이션(도감 80장, 스트릭)이 이 습관화를 보강한다.
- 요약: 궁합(셀럽)은 무료 유입·리텐션 채널, 자기 차트 심층이 유료 상품. 이 이중 구조가 honbit 퍼널의 핵심 설계다.

---

## 3. AI 크롤 대응 / AEO (Q3)

`site/robots.txt` 원문 구조:

- 공통: `Allow: /`, Disallow는 `/api/`, `/admin`, `/review-login` 3경로만 (백엔드·로그인만 차단, 콘텐츠는 전면 개방)
- AI 봇 12종을 하나씩 명시하고 전부 `Allow: /`: GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, OAI-SearchBot, CCBot, Google-Extended, Applebot-Extended, cohere-ai, meta-externalagent, Bytespider

`site/llms.txt` (4,346자, 89줄): 사람이 읽는 요약. 사이트 정체성, 커버리지("830+ K-pop idols"), 기능(일간·오행·띠·궁합·그룹 케미스트리), FAQ.

`site/llms-full.txt` (93,244자 ≈ 0.09MB, 969줄, 마크다운 헤더 15개): 머신용 전체 인벤토리. `## All idols (834)` 섹션에 아이돌 전원을 "이름(그룹) — 생일 — 개인 페이지 URL" 한 줄씩 나열, `## Editorial guides`에 에디토리얼 38편 링크, FAQ 한국어 요약 포함.

보조 장치: 사이트맵 7,384 URL에 xhtml:link hreflang alternate 73,820개(언어 변형을 답변 엔진에 명시), 아이돌 페이지마다 JSON-LD 4블록(Person+MusicArtist, FAQPage 등), canonical 설정. 아이돌 페이지 본문에 `/llms.txt` 링크 1개 노출.

평가: 콘텐츠 전면 개방 + 구조화된 전체 인벤토리 1개 파일 + 봇별 명시 허용. "AI가 우리 데이터를 인용하게 하라"는 AEO 표준 전략을 3개 정적 파일로 구현했다. 비용은 거의 0이고, 아이돌 사주처럼 팩트성 질문("BTS RM 일간이 뭐야?")에 답변 엔진이 이 사이트를 출처로 인용할 확률을 높인다.

---

## 4. SAJU 적용 판단 (Q4)

SAJU 포지션은 셀럽 궁합이 아니라 "자기 차트 자기이해"(물상론 기반). 유입 채널 후보를 이 기준으로 평가한다.

### 채널 후보 순위표

| 순위 | 채널 | 근거 수치 (출처) | SAJU 적용 판단 |
|---|---|---|---|
| 1 | 개념 롱테일 SEO 페이지 팩토리 (다국어 균등 복제) | 9언어 × 1,294페이지 균등(각 11.1%); idol 842 + blog 398 = ko 페이지의 95.8%; 블로그 93.7%(358/382)가 2026-06 한 달 집중 생산; 타이틀 템플릿 842/842 일관 (`data/pages.json`, `data/blog.json`) | **채택**. 셀럽 이름을 물상 개념으로 바꾸면 그대로 이식된다. 일간 10 × 오행 분포 × 물상 조합(예: 목화·금수) 페이지를 ko/en(확대 시 ja 등)으로 복제. "{개념} 사주" 검색은 셀럽 검색보다 의도 일치율이 높다 |
| 2 | AEO 패키지 (llms.txt 2종 + AI 봇 명시 허용 + JSON-LD + hreflang 사이트맵) | robots.txt AI 봇 12종 개별 Allow, Disallow 3경로뿐; llms.txt 4,346자 + llms-full.txt 93,244자(아이돌 834 전수 + 가이드 38); sitemap 7,384 URL·alternate 73,820개; JSON-LD 4블록/페이지 (`site/robots.txt`, `site/llms.txt`, `site/llms-full.txt`, `site/sitemap.xml`) | **채택**. 물상론은 용어 밀도가 높아 "목화가 뭐야?" 같은 팩트 질의에 답변 엔진 인용 대상이 되기 쉽다. 개념 전수 인벤토리를 llms-full 1파일로 제공하는 방식을 그대로 따른다. honbit보다 유리한 점: 원론 개념은 저작권·초상권 이슈가 0이다 |
| 3 | 자기 차트 심층 프리미엄 + 데일리 습관화 리텐션 | 무료 ₩0에 궁합 10회/일·원국 풀이 포함, PRO ₩19,900/월($6.99/월·$59.99/년·3개월 무료)은 심층 4종(명식 자리·빈 오행·12개월·시간표 16구간); 게이지 "n/10회 남음"→"다 썼어"→"Pro" 8언어; 도감 0/80장·주간 퀘스트·스트릭 (`site/ko/pro.html`, `site/en/pro.html`, `_next/static/chunks/0.m_1p8fonn.l.js`, `site/ko/play.html`) | **채택(전환 구조만)**. SAJU는 이미 유료 상품이 자기이해 심층이므로 honbit의 유료 레이어 정의와 정확히 일치. 무료층은 "일간+오행 분포"까지만 열고 물상 조합·용신·대운을 심층으로. 다만 10회/일 게이지는 '궁합 반복 실행'용 설계라 SAJU에서는 데일리 리딩 1회/일+스트릭으로 치환하는 게 자연스럽다 |

### 기각 목록과 이유

| 기각 항목 | 근거 수치 | 이유 |
|---|---|---|
| 셀럽 의존 채널 전체: 아이돌 개인 페이지 842, 그룹 궁합 테스트 블로그 127, 팬 다이어리 18, 생일 총정리 8 | ko 페이지의 65.1%가 idol; 블로그의 87.4%(334/382)가 셀럽 이름 기반 (`data/pages.json`, `data/blog.json`) | SAJU 포지션(자기 차트 자기이해)과 유입 의도가 다르다. 셀럽 검색자는 궁합을 원하지 자기이해 상품으로 전환하지 않는다. 한국 초상권·퍼블리시티권 리스크도 SAJU에는 불필요한 비용. 단, fan-diary의 "실사용 후기 콘텐츠" 형식 자체는 셀럽 이름 없이(예: "목화 일간의 직장 스트레스 해석 후기") 재해석하면 채널로 재사용 가능 |
| 10회/일 무료 궁합 캡의 직접 이식 | 하루 10회 캡 + 소진 시 업셀 (`_next/static/chunks/0.m_1p8fonn.l.js`) | SAJU에는 '반복 가능한 매치 실행' 동작이 없다. 그대로 이식하면 제한만 걸리고 습관화가 안 생긴다. 데일리 리딩+스트릭(3번 채택 항목의 치환안)으로 대체 |
| 광고 기반 무료층 수익화 | 업셀 문구 "Pro · 무광고" (`_next/static/chunks/0.m_1p8fonn.l.js`), 무료층에 광고 전제 | SAJU 초기 트래픽 규모에서 애드센스 수익은 미미하고 UX·브랜드(전문성) 비용이 크다. 유료 구독 단일화가 맞다. (참고: 아카이브 HTML에서 adsbygoogle 스크립트는 미확인, 무광고 업셀 문구로 광고 존재만 간접 확인) |

### SAJU 실행 시 주의 (관찰 메모)

- honbit의 "830명/834/842" 처럼 카운트 불일치가 llms.txt·페이지·DB 사이에 발생한다. SAJU는 개념 페이지 수를 단일 소스(빌드 시 생성)로 관리해 이 문제를 피한다.
- 6월 집중 발전(358편)은 검색 엔진이 한 번에 색인하도록 만든 전략으로 보인다. SAJU도 개념 페이지를 빌드로 일괄 생성한 뒤 사이트맵+llms-full로 동시 제출하는 방식이 현실적이다.
- 가격 벤치: 한국형 사주 구독이 $6.99/월(₩19,900/월)에 팔리는 시장가 근거로 참고 가능 (`site/en/pro.html`, `site/ko/pro.html`).

## 윤문 게이트

윤문 게이트: 경로 light, 변경률 0%(작성 단계에서 규칙 직접 적용: 조사·어미 완결 문장, 엠대시 본문 미사용, 템플릿 타이틀 인용부의 —는 원문 보존), 법령 검증 해당없음(법령 인용 없음, 초상권 언급은 일반론).
