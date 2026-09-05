# T-06 · 결제 신뢰 실행 계획 (U5·U6)

> 상태: open · 우선순위: **P1** · 담당 후보: UX · 예상: 1d(CTO U5+U6 승계) · 소스: ux-validation-report §5.2 미비 1·4·5 + Q18/R7 · GitHub: hot14/saju-report#1 연계(구현 착수 게이트)
> Design Read: 결제 화면의 신뢰 문구를 이행 가능한 운영 장치로 환원하는 실행 계획 문서, with PSP 심사·통화·환불 남용의 3축을 재접근 설계와 중복 없이 분담.

## 배경

- `docs/payments-trust-plan.md` 부재 [파일 확인]. UX 리포트 §5.2 미비 5건 중 3건이 잔여다: 환불 이행 장치(→ reaccess 설계 §3.6이 1클릭 장치 설계로 흡수), 통화 표기 정책, PSP 심사 계획.
- 악마 A3(결제 이행 장치 부재, 치명)의 잔여분: PSP 선택·업종 심사·남용 정책은 여기 미정.
- R7: 점술은 일부 결제사에서 고위험 업종. 계획 부재는 "결제 화면 디자인은 완성돼도 오픈 불가" 상황을 만든다.

## 범위

- 할 것: 신규 `docs/payments-trust-plan.md` 생성.
- 하지 않을 것: 재접근 설계가 확정한 매직 링크·영수증·환불 1클릭 플로우의 재설계(참조만).

## 수용조건

- [ ] PSP 2곳 사전 심사 체크리스트: "entertainment & self-reflection" 면책 증빙 패키지(카피·면책 화면 배치·환불 정책) 포함
- [ ] 통화 정책: 1차 $USD 단일 표기, 지역 통화 병기는 로케일 순차 오픈(T-12)과 연동(i18n-spec §4.1 정합)
- [ ] 환불 남용 정책 3줄 + 재접근 설계 §3.6과의 책임 경계 정리(문서 간 중복 0)
- [ ] Apple Pay·Google Pay 우선 전략 + Apple 로고 요건(flows 결함 #2) 명시
- [ ] 문서 em-dash 0건·금지어 0건

## 체크리스트

- [ ] PSP 후보별 점술 업종 정책 조사 결과 기록
- [ ] 환불 1클릭의 PSP API 의존성(reaccess §3.6-3) 확인 항목화
- [ ] chargeback 방어 증빙 세트(영수증·면책 기록) 정의

## 의존성

- 선행: 없음(재접근 설계는 존재). T-01의 악마 A3 편입 결과 반영(soft).
- 후속: PSP 확정 시 reaccess 설계 §9-6 재검 항목과 연결.

## 관련 문서

`docs/ux-validation-report.md` §5 · `docs/reaccess-and-receipt-design.md` §3.6·§6-6·§9-6 · `design-ssot/01-analysis/product-analysis.md` R7·P7 · `docs/gate-cto-solutions.md` U5·U6
