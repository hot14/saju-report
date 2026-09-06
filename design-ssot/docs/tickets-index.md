# 티켓 인덱스 (Tickets Index) · R3-UX /to-tickets

> 작성: 2026-09-05 · 담당: 티켓 분해 워커 (task_11b592042841 · R3-UX)
> 지위: 오픈 백로그의 단일 목록. 마스터 머지·G1-G8 통과 이후 잔여 작업의 티켓 SSOT.
> 입력 3종: `docs/ux-validation-report.md`(잔여 발견) + `docs/gate-cto-solutions.md` fix-next + GitHub 이슈 hot14/saju-report#1(잔여 fix-next 5건)
> 개별 티켓: `docs/tickets/T-<nn>-<slug>.md` (T-01 ~ T-12, 12건 전부 open)

**Design Read (tasteskill §0.B):** Reading this as: 게이트 루프 완료 직후 저장소의 잔여 과제를 즉시 배정 가능한 티켓으로 분해하는 인덱스, with 완료된 fix-now·G1-G8 통과분은 제외하고 open 상태만 티켓화하는 원칙, leaning toward 관문식 수용조건(파일 존재·grep·실측)으로 판정 가능한 티켓 설계.

---

## 0. 분해 원칙

1. **완료분 제외**: fix-now 19항목·G1-G8 통과·U1 EN 7화면(780px)·SSOT 정합 커밋은 티켓화하지 않는다(steering-log 루프 로그 참조).
2. **소스 추적**: 각 티켓은 UX 리포트 발견(Q/U 번호)·톤 리포트(T)·i18n(I)·CTO 크로스(X)·악마 게이트(A~D) ID를 소스로 명시한다.
3. **관문식 수용조건**: 전 티켓의 완료 판정은 파일 존재·grep 결과·실측 기록으로 떨어진다(G1-G8 방식 승계).
4. **새 파일만**: 워커는 신규 파일만 생성. 기존 파일 수정이 필요한 티켓(T-05·T-10 등)은 담당 후보를 COORD로 명시한다.

## 1. 소스 매핑 (입력 → 티켓)

| 입력 소스 | 내용 | 대응 티켓 |
|---|---|---|
| 이슈 #1 잔여 1 | §7 CTO 재심 문서화 | **T-01** |
| 이슈 #1 잔여 2 | 7화면 §14 재판정 (T9) | **T-02** |
| 이슈 #1 잔여 3 | 카피덱 JSON 스캐폴드 (I2) | **T-03** |
| 이슈 #1 잔여 4 | 10-로케일 데모 확장 (I6) | **T-04** |
| 이슈 #1 잔여 5 | {{BRAND}} 확정 데드라인 관리 (P2) | **T-05** |
| UX 리포트 §5.2·Q18 | 결제 신뢰 잔여 3건 (U5·U6) | **T-06** |
| UX 리포트 Q4~Q7 | 입력 마찰·시각 모름·타이밍 (U7·U8) | **T-07** |
| 톤 가이드 §9-6 | 카피 덱 × CSS 상호검증 (T7) | **T-08** |
| UX 리포트 §6 | 가독성 실기 검증 (U11 실기분) | **T-09** |
| 톤 가이드 §8-1 | 자산 배제 태그 (T6) | **T-10** |
| UX 리포트 Q2·Q3 | 그로스·신뢰 대체 (U15·U16·X5) | **T-11** |
| UX 리포트 Q17 | 로케일 순차 오픈 (U17·I5·I8) | **T-12** |

악마 게이트(A1~D3)·머지마스터 누락 조각은 산물별로 위 티켓에 흡수 배정했다(각 티켓 소스·관련 문서 참조). 전건 배정의 확정 판정은 T-01이 수행한다.

## 2. 티켓 목록

| ID | 제목 | 수용조건 요약 | 의존성 | 담당 후보 | 우선순위 |
|---|---|---|---|---|---|
| [T-01](tickets/T-01-cto-recheck.md) | CTO 재심 문서화 (악마 19건 편입) | 재심 문서 존재 + 19건 판정 누락 0 + G1-G8 증감 기록 | 없음 | CTO/COORD | **P0** |
| [T-02](tickets/T-02-tone-14-recheck.md) | V2 EN 7화면 §14 재판정 | 7화면 판정표 + 조건부 4건 처리 + U12·U13 준수 판정 | 없음 | TONE | **P0** |
| [T-03](tickets/T-03-copydeck-json-scaffold.md) | 카피덱 JSON 스캐폴드 (I2) | copydeck/ 4자산 + CI 게이트 4종 실행 기록 | 없음 | I18N | **P0** |
| [T-04](tickets/T-04-multilang-demo.md) | 10-로케일 데모 확장 (I6+I4) | 데모 페이지 + ko/en 폰트 적용층 채택 + 실측 기록 | 없음 | I18N | **P0** |
| [T-05](tickets/T-05-brand-deadline.md) | {{BRAND}} 확정 절차 진행 | product-decisions 갱신 + 도메인·상표 기록 + 치환 계획 | 없음(후속 전제) | COORD | **P0** |
| [T-06](tickets/T-06-payments-trust-plan.md) | 결제 신뢰 실행 계획 (U5·U6) | payments-trust-plan.md + PSP 체크리스트 + 통화·남용 정책 | T-01 soft | UX | P1 |
| [T-07](tickets/T-07-input-unknown-time-design.md) | 입력·시각모름·타이밍 설계 (U7·U8·I7·X6) | input-and-unknown-time-design.md + 5개 확정안 + 정합 인계 목록 | T-01 soft | UX+I18N | P1 |
| [T-08](tickets/T-08-i18n-qa-log.md) | 카피 덱 × CSS 상호검증 (T7) | i18n-qa-log.md + 팽창 실측표 + 랩 0건 확인 | 없음(병렬) | I18N+TONE | P1 |
| [T-09](tickets/T-09-device-readability-qa.md) | 실기 가독성 검증 (U11 실기분) | 실기 스크린샷 기록 + 200% 줌 확인 + 판정 | 없음 | UX/COORD | P2 |
| [T-10](tickets/T-10-asset-exclusion-tags.md) | 자산 배제 태그 (T6) | INDEX.md 2표본 배제 태그 + 사유 | 없음 | COORD | P2 |
| [T-11](tickets/T-11-launch-growth-plan.md) | 출시 그로스 계획 (U15·U16·X5) | launch-growth-plan.md + 발견 전략 답변 + 샘플 차트 설계 | T-05 권장 | UX+프로덕트 | P3 |
| [T-12](tickets/T-12-locale-rollout-plan.md) | 로케일 순차 오픈 계획 (U17) | locale-rollout-plan.md + 3단계 + C1~C3 승계 축 + 오독 방지 주석 | T-01 soft | I18N | P3 |

**통계**: 12건 전부 open · P0 5건(이슈 #1 잔여와 1:1) · P1 3건 · P2 2건 · P3 2건. 합산 예상 ~5.5 근무일(CTO 추정 승계).

## 3. GitHub 이슈 연결 계획 (생성은 코디네이터 몫)

본 워커는 이슈 생성·수정을 실행하지 않았다(기존 파일·원격 변경 금지). 권장 연결 방식:

1. **T-01~T-05는 이슈 #1의 잔여 체크리스트 5항목과 1:1**이다. #1 본문의 각 체크박스에 티켓 파일 경로를 코멘트로 연결하거나 태스크리스트에 `docs/tickets/T-0n-*.md` 링크 추가.
2. 개별 티켓을 별도 이슈로 발행할 경우: 본문 상단에 `Part of #1` 기록 + 라벨은 `docs/agents/triage-labels.md` 어휘 사용 제안(T-01~T-04·T-06~T-08 = `ready-for-agent`, T-05·T-09 = `ready-for-human`(외부 절차·실기), T-10 = `ready-for-agent`, T-11·T-12 = `needs-triage` 후 지정).
3. 의존 관계는 GitHub 네이티브 의존성 또는 `Blocked by:` 라인으로 표현(soft 의존은 기록만, 블로킹 아님).
4. 티켓 완료 시 대응 이슈·체크박스를 같은 커밋 회차에서 갱신(잔여 목록과 티켓 상태의 드리프트 방지).

## 4. 상태·갱신 규칙

- 티켓 상태는 open · in-progress · done · dropped 4종. 본 인덱스는 분해 시점 스냅샷이므로 완료 판정은 개별 티켓의 수용조건 체크박스를 우선한다.
- 수용조건 전체 충족 시에만 done. 부분 완료는 in-progress 유지 + 체크박스 기록.
- 신규 발견(차기 게이트·악마 재심 포함)은 T-01의 편입 판정을 거쳐 T-13 이후로 추가 번호를 부여한다(기존 티켓 재작성 금지).
- P0 5건은 구현 착수 전 완료 권장. P1은 첫 구현 사이클과 병행. P2·P3은 출시 로드맵.

## 5. 검증 기록 (본 문서 자체)

- 기존 파일 수정 0건: 신규 생성은 본 인덱스 + 티켓 12건뿐(`git status`로 확인).
- em-dash(U+2014)·en-dash(U+2013) 전수 grep 0건(인덱스·티켓 전체).
- 잔여 팩트 실측 확인: `copydeck/` 부재 · `payments-trust-plan.md` 부재 · `input-and-unknown-time-design.md` 부재 · `i18n-qa-log.md` 부재 · `styles/`에 `typography-demo-multilang.html` 부재 · INDEX.md 배제 태그 부재 · `flows-v2-en/` 7화면 780px 존재 · gate-cto-solutions.md §7 공백.
- 티켓 수 12건(요구 최소 8건 충족).
