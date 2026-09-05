# GitHub 이슈 #2~#6 · 티켓 T-01~T-05 대응 상태 맵

> 작성: 2026-09-05 · 담당: i18n 워커 R4(task_a25de4acb8ee) · 지위: 이슈 5건과 P0 티켓 5건의 현재 대응 상태 스냅샷
> 원천: GitHub `hot14/saju-report` 이슈 #2~#6(2026-09-05 발행, 전건 라벨 `ready-for-agent`) · `docs/tickets-index.md` · `docs/tickets/T-01~T-05` · 저장소 커밋 실측
>
> **Design Read (tasteskill §0.B):** Reading this as: 게이트 루프 종료 후 백로그 추적 체계(이슈·티켓)와 저장소 실상의 대응 관계를 커밋 해시로 묶는 상태 문서, with 완료 판정은 티켓 수용조건 기준으로 내리고 이슈 본문 범위와 티켓 원 수용조건이 어긋나는 곳은 그 어긋남 자체를 기록하는 방식.

## 1. 총괄표

| 이슈 | 티켓 | 제목 | 담당 | 상태 판정 | 근거(실측) | 잔여 |
|---|---|---|---|---|---|---|
| [#2](https://github.com/hot14/saju-report/issues/2) | [T-01](tickets/T-01-cto-recheck.md) | §7 CTO 재심 문서화 | CTO/COORD | **완료(본 디스패치)** | `docs/cto-reverification.md` 신규 작성: 19건 판정 + 치명 6건 누락 0 + 잔여 전건 티켓 배정 + G1~G8 증감 기록 | 이슈·티켓 체크박스 클로징(COORD) |
| [#3](https://github.com/hot14/saju-report/issues/3) | [T-02](tickets/T-02-tone-14-recheck.md) | V2 EN 7화면 §14 재판정 | TONE | **open(미착수)** | 화면 실물은 존재(U1 EN 7화면 780px `eaaaf4a` + U1.5 먹선 재생성 `272da71`, flows-v2/ 확인). 재판정 문서·판정표 미생성 | §8 체크리스트 재판정 + D1 적용 규칙(SSOT 15.52 우선) 반영 |
| [#4](https://github.com/hot14/saju-report/issues/4) | [T-03](tickets/T-03-copydeck-json-scaffold.md) | 카피덱 JSON 변환 | I18N | **이슈 범위 충족 · 티켓 원 수용조건 잔여(in-progress)** | `copydeck/v2.json` 존재(`8ba4ef5` R3: ko-KR 111키 · en-US 123키 · 토큰 보존) + R4 배지 치환표 추가(badges 10종, 본 커밋) | 티켓 원안의 `locales/` 2건·`schema.json`·`glossary.md`·CI 게이트 4종·receipt 키군은 미수행. 이슈 본문(축소 범위)과 티켓 원 수용조건의 어긋남을 COORD가 판정해야 함 |
| [#5](https://github.com/hot14/saju-report/issues/5) | [T-04](tickets/T-04-multilang-demo.md) | 10-로케일 데모 확장 | I18N | **완료** | `styles/typography-demo-multilang.html`(`8ba4ef5`): multilang.css @import 체인 로딩 · 10 로케일 검체 · getComputedStyle 실측 표(Chromium 150) · 재방문 자체검증 스크립트 전 행 일치 · F1(en 하이픈 전역) 결함 기록 | 없음(수용조건 3종 충족. 이슈 클로징만 남음) |
| [#6](https://github.com/hot14/saju-report/issues/6) | [T-05](tickets/T-05-brand-deadline.md) | {{BRAND}} 확정 데드라인 | COORD | **임정 채택 절차 가동(이슈 본문과 동일)** | `3dfa7ca` product-decisions P2 갱신: 데드라인 도래로 SajuRoot 기본 채택 임정, 이의 시 변경 절차 명시 | 이의 기간 확정 · 도메인 4종 등록 기록 · 상표 검색 기록 · {{BRAND}} 전수 치환 계획(티켓 수용조건 잔여) |

## 2. 판정 상세

### #2 · T-01 (완료)

이슈 본문 요구("악마 게이트 리포트 도착분에 대한 CTO §7 재심, fix-now 증감 판정")를 `docs/cto-reverification.md`가 수행했다. 티켓 수용조건 5건 대응: 19건 판정행 존재(§2 표) · 치명 6건 누락 0(A1~A3·C1·D2 포함 전수) · 잔여 항목 T-02~T-12 배정 전건 명시 · G1~G8 증감 기록(§4) · em-dash 0건. 체크리스트 4건도 충족: 악마 검증메모 재대조(§8), R2 커밋 6건 매핑(§1), fix-now 증감 확인(증감 있음 4건을 T-07 승격 + T-13·T-14·T-15 신규 제안으로 처리, §3), 미공격 영역 승계 판정(§7). 파일명이 티켓 예상(`gate-cto-recheck.md`)과 다른 점(`cto-reverification.md`)은 배치 지시 기준이며 재심 문서 §헤더에 별칭 관계를 기록했다.

### #3 · T-02 (open)

재판정의 입력(7화면 실물)은 갖춰졌다. U1.5 재생성분(먹선 스타일)이 최신판이므로 재판정은 `272da71` 기준 화면으로 할 것. 재심 문서 D1의 적용 규칙(톤 가이드 17.18은 문서화된 오류, SSOT 값 15.52 우선)을 재판정 시 준용할 것을 권고한다.

### #4 · T-03 (이슈 범위 충족 · 티켓 원안 잔여)

이슈 #4 본문은 범위를 "copydeck/v2.json · KR·EN 덱 locale 키 구조 변환(토큰 유지)"로 축소했고 이는 R3에서 완료했다. 티켓 원 수용조준(locales/ 분할·schema.json·glossary.md·CI 게이트·receipt 키군)은 i18n-spec §3의 원 설계대로라면 여전히 유효한 과제다. 권고: (a) 이슈 #4는 v2.json 기준으로 클로징, (b) 티켓 원안 잔여분은 T-08(QA 로그)과 묶어 신규 티켓 또는 T-03 재개로 추적. 본 맵이 판정을 대신하지 않고 어긋남을 기록하는 이유는 "기존 티켓 재작성 금지" 규칙 때문이다.

### #5 · T-04 (완료)

수용조건 3종 충족: 데모 페이지 존재 · ko/en 폰트 적용층 채택(데모 크롬에서 `--font-sans-latin` 채택 + 위임 원칙 주석, base·multilang이 ko/en font-family를 사이트 크롬에 위임한 공백의 명시적 처리) · 실측 기록(10행 표 + 자체검증 스크립트 전 행 일치). 부가 산출: base v1.0 en 하이픈 전역 결함(F1) 발견·기록 → T-15로 배정됨(재심 문서 §5).

### #6 · T-05 (임정 채택 절차 가동)

이슈 본문("데드라인 도래 · product-decisions 절차에 따라 SajuRoot 기본 채택 임정")과 `3dfa7ca` 커밋이 정확히 일치한다. 이미 product-decisions.md에 "미확정 시 SajuRoot 기본 채택 자동 승격" 절차가 문서화돼 있어 절차 정합성은 확보됐다. 잔여는 실행분: 이의 기간 종료 판정, 도메인 4종 등록, 상표 검색 기록, 전 화면·카피덱 {{BRAND}} 치환 계획 수립.

## 3. 체계 운영 메모

- 이슈 5건 전부 브랜치 표기가 `wt-ux-reaccess-r2`(티켓 분해 워커 브랜치)로 되어 있다. 이는 티켓 발행 창구의 브랜치이며 실제 수행 브랜치는 각기 다르다(T-01·T-04·T-03 일부 = `wt-i18n-badge-r2` 계열). 이슈 브랜치 필드 정정은 코디네이터 몫이다.
- 갱신 규칙(tickets-index §3-4 승계): 티켓 완료 판정 시 대응 이슈를 같은 커밋 회차로 클로징한다. 본 맵 기준 즉시 클로징 후보는 #2(T-01)와 #5(T-04)다. #4는 §2의 범위 판정 후 클로징.
- 본 문서 생성 시점 상태: T-01 완료 1 · 잔여 open 3(#3·#4·#6) · 이슈 클로징 대기 2(#2·#5). P0 5건 중 3건(T-01·T-04·T-05 절차분)이 마감 또는 진행돼 구현 착수 게이트의 전제는 재심 문서 §4 권고(T-07·T-13 완료 전제)와 함께 관리된다.

## 4. 검증 기록(본 문서 자체)

- 이슈 #2~#6 본문·라벨·상태는 GitHub에서 직접 열람(2026-09-05, 전건 OPEN · ready-for-agent).
- 근거 커밋 해시·파일 존재는 저장소에서 실측(git log + 디렉터리·grep).
- 기존 파일 수정 0건(신규 본 문서 1건 · 본인 소유 copydeck/v2.json 갱신은 배치 지시 범위).
- em-dash(U+2014·U+2013) 전수 검색 0건.
