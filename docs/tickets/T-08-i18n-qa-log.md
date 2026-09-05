# T-08 · 카피 덱 × 타이포 CSS 상호검증 로그 (T7)

> 상태: open · 우선순위: **P1** · 담당 후보: I18N + TONE · 예상: 1h(CTO T7 승계) · 소스: tone-alignment-guide.md §9-6 + i18n-spec §3.3·§6-1 · GitHub: hot14/saju-report#1 연계
> Design Read: 카피 덱 문안의 실측 팽창을 10-로케일 조판 규칙과 대조하는 검증 로그, with 초과 키의 수정안까지를 산출물로 하는 실패 우선 검증.

## 배경

- 톤 가이드 §9-6(크로스 워커 의존): 카피 덱 v2의 줄바꿈 규칙과 `typography-multilang.css` 매트릭스의 상호 검증이 미실행. EN 덱 완성으로 이제 양쪽이 갖춰졌다.
- i18n-spec §3.3의 팽창 예산(en +20 · ja +10 · ru +30 등)이 실제 문안에 대해 검증된 적이 없다. §6-1 공통 QA의 "버튼·배지 2줄 랩 0건"도 미실측.

## 범위

- 할 것: 신규 `docs/i18n-qa-log.md` 생성. KR/EN 전 키의 팽창·줄바꿈·ICU 검증 기록.
- 하지 않을 것: 카피 덱·CSS 본문 수정(초과 키 수정안은 문안 제안으로만).

## 수용조건

- [ ] 카피 덱 KR·EN 전 키 대상: maxChars 예산 대비 팽창 실측표
- [ ] 버튼·배지·headline 키의 2행 랩 0건 확인 또는 초과 키 목록 + 문안 수정안
- [ ] ICU 문법 오류 0건(복수형·select 문법 전수)
- [ ] 줄나눔 매트릭스 위반(keep-all 오용·금칙 문자) 사례 목록
- [ ] 로그 형식이 T-03의 CI 게이트에 흡수 가능(키 단위 기계 판독 형식)
- [ ] 문서 em-dash 0건

## 체크리스트

- [ ] KR 원문 대비 EN 번역 길이 비율 산출(덱 단위·키 단위)
- [ ] 375px 기준 랩 시뮬레이션(또는 실측) 대상 키 선정 기준 명시
- [ ] 초과 키 수정안의 톤 게이트 통과 여부 1차 자가검증

## 의존성

- 선행: 없음(KR/EN 덱·CSS 존재). T-03과 병렬 가능, 완료분을 T-03 게이트에 이관.

## 관련 문서

`docs/copy-deck-v2-kr.md` · `docs/copy-deck-v2-en.md` · `styles/typography-multilang.css` · `docs/i18n-spec.md` §3.3·§4·§6 · `docs/tone-alignment-guide.md` §9-6
