# K-Saju 국제화(i18n) 사양 v1.0

> 대상: 10 로케일 `ko-KR · en-US · en-GB · ja-JP · zh-Hans · th-TH · vi-VN · fil-PH · id-ID · ru-RU`
> 조판 구현: [`styles/typography-multilang.css`](../styles/typography-multilang.css) (v1.1 · base [`design-ssot/02-direction/typography.css`](../design-ssot/02-direction/typography.css)를 수정 없이 `@import` 확장)
> 검증: 2026-09-05 · ego-browser(Chromium) getComputedStyle 31/31 통과 · 10-로케일 :lang() 계산값 실측(@import 체인 포함)
> 근거: [`design-ssot/02-direction/typography-linebreak-system.md`](../design-ssot/02-direction/typography-linebreak-system.md) v1.0 · [`design-ssot/04-design-tokens/DESIGN.md`](../design-ssot/04-design-tokens/DESIGN.md) 타입 3본제
>
> Design Read: 조판 다국어만이 다국어가 아니다 · 로케일은 줄나눔·행간·폰트부터 달력·통화·복수형·사주 용어까지 제품 전층을 결정하며, 모든 규칙의 진실원천은 `html[lang]` 하나다.

## 0. 원칙

1. **언어가 규칙을 결정한다** · `html[lang]`이 단일 진실원천. `:lang()` 셀렉터는 BCP47 접두 매칭(`:lang(ja)` ≡ `lang="ja-JP"`)이므로 로케일 태그는 항상 정규형으로 기입한다.
2. **폴백은 2단 사슬** · 카피 `{locale} → en-US → ko-KR`, 폰트 `웹폰트 → OS 폴백 → 일반 패밀리`.
3. **키는 로케일 불가지적** · 카피덱 키로 로케일을 분기하지 않는다. 로케일 차이는 값(번역)과 glossary가 흡수한다.
4. **모든 서식은 ECMA-402(Intl)에 위임** · 날짜·숫자·통화·복수형 손서식 금지.
5. **진행형 보강** · 미지원 CSS 규칙은 자연 강등되고 조판이 깨지지 않는다(base v1.0 원칙 4 승계).

## 1. 로케일 우선순위

| 티어 | 로케일 | 근거 |
|---|---|---|
| T0 원천 | ko-KR | 카피·검수 단일 진실원천. 루트 URL. |
| T0 글로벌 기본 | en-US | 영어 우선 전략(해외 K컬처 유입). `x-default`·카피 폴백 루트. |
| T1 | en-GB | 카피만 분기(스펠링·날짜·인용부호). 조판은 en 공용. |
| T1 | ja-JP, zh-Hans | 사주 문화권 인접(四柱推命 · 八字 현지 관행 + 한자 온머닌트 직결). CJK 폰트 자산 공유. |
| T2 | th-TH, vi-VN, ru-RU | K컬처 수요 + 지불 인프라 양호. 조판 특수성(태국어 세그멘테이션·러시아어 하이픈) 존재. |
| T3 | fil-PH, id-ID | K팝 팬덤 최상위권이나 ARPU·지불 전환율 미검증. 라틴 조판으로 진입 비용 최소. |

기준 4축: 문화 근접도(물상론 수용) · 유입 트래픽(K컬처) · 지불 인프라($8 웹 단건) · 조판·폰트 비용. 출시 순서 확정은 랜딩 실측(전환·결제 완료율) 후 판정하며, 티어는 분기 단위 재조정한다.

## 2. URL 구조

path-prefix 방식(서브도메인 아님) · CDN 캐시 단순 + hreflang 통합 SEO.

| 로케일 | URL |
|---|---|
| ko-KR | `/` (기본 · 리다이렉트 없음) |
| en-US | `/en-US/` (`x-default` 지향) |
| en-GB | `/en-GB/` |
| ja-JP | `/ja-JP/` |
| zh-Hans | `/zh-Hans/` (지역 미지정 · 본토+싱가포르 겸용, zh-Hant 미출시) |
| th-TH | `/th-TH/` |
| vi-VN | `/vi-VN/` |
| fil-PH | `/fil-PH/` |
| id-ID | `/id-ID/` |
| ru-RU | `/ru-RU/` |

규약:

- `<html lang>` 값 = URL 접두사와 1:1. `lang` 누락 시 `:lang()` 전반이 무효화된다(QA 공통 항목 1).
- hreflang: 전 로케일 상호 alternate + `x-default` → `/en-US/`.

```html
<link rel="alternate" hreflang="ko"    href="https://example.com/">
<link rel="alternate" hreflang="en"    href="https://example.com/en-US/"> <!-- en-US·en-GB 공용 카노니컬 -->
<link rel="alternate" hreflang="en-GB" href="https://example.com/en-GB/">
<link rel="alternate" hreflang="ja"    href="https://example.com/ja-JP/">
<link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-Hans/">
<link rel="alternate" href="https://example.com/en-US/" hreflang="x-default">
```

- `Accept-Language` 협상: 최초 방문 1회만 302 + `__locale` 쿠키(1년). 캐노니컬 URL로의 강제 리다이렉트 금지(공유 링크·크롤러 보존). 협상 실패·미신뢰 시 `/en-US/`.
- URL 정규화: BCP47 대소문자 정규형(`ja-JP`·`zh-Hans`). 비정형 접두(`ja_jp`)는 301.
- 응답 헤더 `Content-Language` 병기 · sitemap은 로케일별 alternate 그룹핑.
- OGP(공유 카드): `og:locale` + `og:locale:alternate`. 카드 이미지의 로케일별 문구는 렌더러(서버 사이드)가 생성 · 폰트는 §5 서브셋 재사용.

## 3. 카피덱 키 구조

### 3.1 배치·스키마

```
copydeck/
  locales/{locale}.json      # ko-KR.json en-US.json en-GB.json ja-JP.json zh-Hans.json ...
  schema.json                # 키 셋·maxChars·ICU 문법 검증 규칙
  glossary.md                # 사주 고유어 단일 정의 (Day Master · 물상 10종 · 60갑자 등)
```

### 3.2 키 네이밍

- 형식: `screen.block.element[.state]` · 소문자·케밥 단어 · 점 계층.
- 예: `entry.form.birth-date.label` · `result.pay.cta` · `share.card.headline.2l`.
- 번역 키는 값과 무관하게 고정(로케일 불가지적). 화면 추가 시에만 키가 늘어난다.

### 3.3 ICU MessageFormat

```json
{
  "result.pay.cta": "Read my full pattern · {price, number, ::currency/USD}",
  "result.streak.days": "{count, plural, one {# day} other {# days}}",
  "share.card.hook": "{name}, your Day Master is {dayMaster}."
}
```

- 복수형 CLDR 카테고리: ru는 `one/few/many/other` 4형 필수(2·5 규칙). en은 `one/other`. ko·ja·zh·th·id·fil·vi는 `other` 단일. ru 누락 형태는 CI에서 실패.
- 문법 성(ru): 사주 카피 어휘는 무성 명사(pattern·tendency 계열)로 설계되어 성 일치를 회피한다(guardrail §5 승계). 성 불가피 시 `{gender, select, ...}` 사용.
- 길이 예산(ko 기준 팽창률): en-US +20 · en-GB +20 · ja +10(한자 압축) · zh -10 · th +15 · vi +25 · ru +30 · fil +25 · id +20 (%). 버튼·배지·headline 키에는 `maxChars` 메타를 두고 스키마 검증한다.

### 3.4 폴백·무결성

- 런타임 폴백: `{locale} → en-US → ko-KR`. 누락 키는 `[missing:key]` 렌더 + 로그(사일런트 폴백 금지 · QA 블라인드 스팟 방지).
- CI 게이트: (1) 전 로케일 키 셋 동일성 (2) ICU 파싱 통과 (3) `maxChars` 초과 경고 (4) glossary 용어 미준용 경고.
- glossary: 사주 고유어는 `glossary.md`에서 단일 정의 후 로케일 번역은 참조만 허용(번역어 이중 파생 방지). ja·zh는 전통 용어와 1:1(日主 · 日主/八字). th·vi·ru·fil·id는 en-US 용어 기반 음역 + 최초 등장 시 1회 주석.

## 4. 로케일별 조판 매트릭스 (CSS 매핑)

구현: `styles/typography-multilang.css`. ko·en 열은 base v1.0(`typography.css` §3·§4)이 담당한다.

| 로케일 | 셀렉터 | 줄나눔 | line-break | 하이픈 | 본문 행간 | 디스플레이 행간* | 행폭 | 본문 자간 | 본문 스택(주) |
|---|---|---|---|---|---|---|---|---|---|
| ko-KR | `:lang(ko)` | keep-all | strict | 없음 | 1.8 | 1.8 | 38em | +0.01em | Noto Sans KR |
| en-US/GB | `:lang(en)` | normal | 기본 | 협폭만 auto | 1.6 | 1.6 | 66ch | 0 | Noto Sans/Inter |
| ja-JP | `:lang(ja)` | normal | **strict(금칙)** | 불가 | 1.8 | 1.8 | 36em | 0 | Noto Sans JP |
| zh-Hans | `:lang(zh)` | normal | **strict(금칙)** | 불가 | 1.8 | 1.8 | 34em | 0 | Noto Sans SC |
| th-TH | `:lang(th)` | normal(사전 분할) | 기본 | 불가 | **1.9** | **1.3(명시)** | 30em | 0 | Noto Sans Thai |
| vi-VN | `:lang(vi)` | normal | 기본 | 협폭만 auto | **1.7** | **1.25(명시)** | 60ch | 0 | Noto Sans Vietnamese |
| fil-PH | `:lang(fil)`,`:lang(tl)` | normal | 기본 | 협폭만 auto | 1.6 | 1.6 | 66ch | 0 | 라틴 공용 |
| id-ID | `:lang(id)` | normal | 기본 | 협폭만 auto | 1.6 | 1.6 | 66ch | 0 | 라틴 공용 |
| ru-RU | `:lang(ru)` | normal | 기본 | **전역 auto** | 1.6 | 1.6 | 60ch | 0 | Noto Sans/Inter |

\* **base v1.0 특이성 충돌(실측 발견 · 2026-09-05 ego-browser 계산값)**: base §5 `h1,h2,h3 { line-height: var(--lh-display) }`(0,0,1)는 §3·§4 `:lang(ko/en) { line-height }`(0,1,0)에 밀려 de-facto 사망 · 모든 로케일에서 본문 행간이 헤드라인에 그대로 적용된다. v1.1은 이 de-facto 동작을 승계해 일관성을 유지하고, 마크 쌓임이 있는 th(1.3)·vi(1.25)만 명시 오버라이드를 둔다. 1.15 디스플레이 행간 복원은 base 소유 과제(v1.0 무수정 원칙 · 후속 base 개정에서 해결 권장).

- CJK keep-all 금지: ja·zh는 띄어쓰기가 없어 keep-all 시 오버플로한다. 금칙처리는 `line-break: strict`가 담당.
- 태국어: `overflow-wrap: break-word`가 사전 미탑재 UA의 안전판. 마침표가 없는 문법 · 문단 구분은 공백 유지.
- 러시아어: `hyphenate-limit-chars: 9 3 3`(9자 미만 단어·행두/행말 3자 미만 분절 금지).
- 디스플레이 세리프(.font-display): ko `Cinzel+Noto Serif KR` · ja `+Noto Serif JP` · zh `+Noto Serif SC` · th `+Noto Serif Thai` · vi `Cormorant` · ru `Playfair Display` · en/fil/id `Cinzel/Italiana/Cormorant`.
- 혼합 런: 문장 속 외래어는 `<span lang="en">` 등으로 감싸고 행간은 문단 상속(base §6 패턴의 전 스크립트 확장 · CSS §8). 역방향(en 문장 속 비라틴 런)은 base v1.0이 규칙을 두지 않아 v1.1도 두지 않는다 · 카피 가이드상 삽입 런은 en 중심.

### 4.1 서식 매트릭스 (Intl 위임)

| 로케일 | 날짜 예(2026-09-05) | 달력 | 숫자 | 통화 표기 |
|---|---|---|---|---|
| ko-KR | 2026. 9. 5. | 그레고리 | 1,000 | ₩11,000 |
| en-US | Sep 5, 2026 | 그레고리 | 1,000 | $8.00 |
| en-GB | 5 Sept 2026 | 그레고리 | 1,000 | $8.00 |
| ja-JP | 2026年9月5日 | 그레고리 | 1,000 | $8(US$8) |
| zh-Hans | 2026年9月5日 | 그레고리 | 1,000 | US$8 |
| th-TH | 5 ก.ย. 2569 | **불기(+543)** | 1,000 | ฿280 |
| vi-VN | 5 tháng 9, 2026 | 그레고리 | 1.000 | 8 USD |
| fil-PH | Set 5, 2026 | 그레고리 | 1,000 | ₱450 |
| id-ID | 5 Sep 2026 | 그레고리 | 1.000 | Rp 130.000 |
| ru-RU | 5 сент. 2026 г. | 그레고리 | 1 000 | 8 $ |

- **th-TH 불기 주의**: `Intl` 기본이 불기 연도. 생년월일 입력은 서기(ค.ศ.)로 받는다 · 폼 라벨에 CE 병기 + 검증(1900~2026 범위).
- 결제는 $8 USD 고정(워커브리프) · 지역 통화 병기는 지역화 가격 결정 시 추가.
- 사주 계산(만세력)은 내부적으로 양력 그레고리로만 연산 · 표시 계층에서만 로케일 서식 적용.

## 5. 폰트 로딩 전략 (subset)

### 5.1 원칙

1. **self-host woff2 + unicode-range 서브셋** · 로케일 페이지는 해당 스크립트 서브셋만 다운로드한다(브라우저가 코드포인트로 자동 선택 · `html[lang]` 스코핑 불필요).
2. **font-display: swap + 폴백 메트릭 보정** · OS 폴백에 `size-adjust`·`ascent-override`·`descent-override`를 맞춰 스왑 시 CLS 0 목표.
3. **preload는 본문 400 1개만** · `<link rel="preload" as="font" crossorigin>` 대상은 로케일 본문 산세리프 400. 디스플레이 세리프(Cinzel·Cormorant 등)는 히어로 뷰포트 진입 시에만.
4. **CDN 캐시 1년 + 파일명 버저닝** · 전 로케일 폰트는 동일 오리진 `/fonts/`에서 서빙.

### 5.2 로케일별 전략

| 그룹 | 로케일 | 전략 |
|---|---|---|
| CJK | ko·ja·zh | Noto 계열 **스플릿 정적 서브셋**(Google Fonts 방식 · 100+ 조각). 가변 폰트는 CJK에서 수 MB급이라 부적합. 첫 뷰포트 서브셋만 로드. |
| 태국어 | th | `Noto Sans Thai` VF 단일 파일(약 45KB) · 세리프 `Noto Serif Thai`는 디스플레이 한정 지연 로드. |
| 베트남어 | vi | `Noto Sans Vietnamese` VF(빌드 시 패밀리 공급 확인 · 미제공 시 `Be Vietnam Pro` VF로 스택 1줄 교체) + latin. |
| 키릴 | ru | `Noto Sans`/`Inter` VF의 cyrillic+cyrillic-ext 서브셋. |
| 라틴 | en·fil·id | `Noto Sans` latin/latin-ext 서브셋(전 로케일 공용 캐시). |

### 5.3 바이트 예산 (최초 방문 · 본문 400 기준 근사)

ko 90KB · ja 90KB · zh 85KB · th 45KB · vi 35KB · ru 40KB · en/fil/id 25KB. 디스플레이 세리프는 뷰포트 노출 분량만 +15~40KB.

### 5.4 자형(글리프) 주의

- **한자 자형은 로케일 폰트가 다르다**: Noto Serif KR(한국식) · Noto Serif JP(일본식) · Noto Serif SC(중국식) · 직·곡·획수 미세 차이. 로케일별 스택이 이미 분기하며 혼용 금지(QA 6.4·6.5).
- **Cinzel은 라틴(+latin-ext) 한정**: 베트남어 조합 문자(U+1EA0~) 미지원 → vi 디스플레이는 Cormorant(베트남어 서브셋 포함), ru는 Playfair Display(키릴 지원)로 토큰 분기 완료.
- 태국어 폰트는 루프리스(Noto Sans Thai) 기준 · 루프형 전환 시 스택 전면 교체가 필요하다(문화적 선호調査 후).

## 6. 로케일별 QA 체크리스트

### 6.1 공통 (전 로케일 · 구현·출시마다)

- [ ] `html[lang]` 누락 0건 · URL 접두와 1:1
- [ ] 375px / 1280px · 토큰(`$8`·`12,400`·고유명사) 분절 0건
- [ ] headline 2l/3l 가드 · 3줄 초과 0건 · 첫 줄 쏠림 없음(balance)
- [ ] `.measure` 준수 · 매트릭스(§4) 행폭값
- [ ] 카피덱 누락 키 `[missing:]` 0건 · CI 게이트 통과
- [ ] 버튼·배지 2줄 랩 0건(팽창 예산 §3.3)
- [ ] 폰트 스왑 시 레이아웃 시프트(CLS) 0에 수렴
- [ ] 혼합 문장 행간 이중화 0건

### 6.2 로케일별

**ko-KR** · base v1.0 체크리스트 승계(`typography-linebreak-system.md` §6).

**en-US** · 본문 75ch 초과 0건 · 하이픈 협폭 한정 확인.

**en-GB** · -ise 스펠링 게이트 · 날짜 순서(5 Sept 2026) · 인용부호 'single' 관례 · 조판은 en 공용.

**ja-JP**
- [ ] 행두 금칙 문자(。、」・) 노출 0건 · 행말 개괄호(「) 분절 0건
- [ ] 한자가 Noto Sans/Serif JP로 렌더(한국 폰트 폴백 = 스택 버그) · 임의 글자 3개 육안 확인
- [ ] `text-autospace`(한자↔라틴 경계) 렌더 확인(미지원 UA 자연 강등 허용)
- [ ] 날짜 2026年9月5日 · 통화 US$8

**zh-Hans**
- [ ] 행두 。·？·” 노출 0건
- [ ] 간체 자형 확인(번체 혼입 0건 · 폰트가 SC로 렌더)
- [ ] 전각 부호 인접 압축 렌더(`text-spacing-trim`)
- [ ] zh-Hant 미출시 확인 · 도입 시 폰트 스택 분기 필요

**th-TH**
- [ ] 본문 행간 계산값 1.9 · 디스플레이 1.3
- [ ] 상하부 마크 쌓임(สื ไ ๆ 조합) 클리핑 0건
- [ ] 어경계 분할 품질 · 사전 미탑재 환경(Safari 구버전) `overflow-wrap` 폴백 오버플로 0건
- [ ] 문단 구분 공백 유지(마침표 없는 문법)
- [ ] 생년월일 입력 서기(ค.ศ.) 명시 · 불기 연도 혼입 0건
- [ ] 날짜 5 ก.ย. 2569 · 통화 ฿

**vi-VN**
- [ ] 겹받침 마크(ề ậ ộ) 클리핑 0건 · 본문 행간 1.7 · 디스플레이 1.25
- [ ] uppercase 변형 시 마크 위치 정상(변형 쓰기 전 디자인 확인 · 가능한 본문 normal case)
- [ ] 날짜 5 tháng 9, 2026 · 숫자 1.000(점 그룹) · 통화 8 USD

**ru-RU**
- [ ] 하이픈 행두 3자·행말 3자 준수 · 9자 미만 단어 분절 0건
- [ ] 연속 하이픈(같은 단어 2회 분절) 0건 · 고아 하이픈(행말 끝 -) 0건
- [ ] 인용부호 «ёлочки» · ё 사용 일관성(카피 게이트)
- [ ] 복수형 4형(one/few/many/other) 키 충실
- [ ] 날짜 5 сент. 2026 г. · 숫자 1 000(공백 그룹) · 통화 8 $

**fil-PH**
- [ ] Ñ/ñ 렌더 정상(Cinzel latin-ext 확인)
- [ ] Taglish 코드스위칭은 카피 게이트 별도 검수(조판 아님)
- [ ] 날짜 Set 5, 2026 · 통화 ₱

**id-ID**
- [ ] 숫자 1.000(점 그룹) · 통화 Rp 접두
- [ ] 날짜 5 Sep 2026
- [ ] 조판은 라틴 공용 · en 퍼널과 동일 게이트

## 7. 연결 노트 (커넥션 · base 무수정 원칙)

1. `styles/typography-multilang.css`가 `@import url("../design-ssot/02-direction/typography.css")`로 base v1.0을 포함한다 · base 파일은 불변.
2. **페이지 적용은 link 교체 필요**: 기존 `<link rel="stylesheet" href="…/typography.css">`를 `/styles/typography-multilang.css`로 바꾼다(교체 전까지 신규 로케일 규칙 미적용 · 기존 페이지는 무손상).
3. `@import`는 왕복 1회를 직렬 추가한다 · 프로덕션 번들 시 lightningcss/esbuild 병합 권장(병합 시 §7.1 경로 재계산).
4. `typography-demo.html`(v1.0 검증 페이지)은 미수정 · 10-로케일 데모 페이지 확장은 후속 과제.
