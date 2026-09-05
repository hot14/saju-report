# T-03 · 카피덱 JSON 스캐폴드 (I2)

> 상태: open · 우선순위: **P0** · 담당 후보: I18N · 예상: 1d(CTO I2 승계) · 소스: i18n-spec.md §3 + ux-validation-report §8-6 · GitHub: hot14/saju-report#1 잔여 항목 3
> Design Read: 카피 덱 KR/EN 문서 두 벌을 실행 가능한 단일 카피덱 자산으로 전환하는 스캐폴드 구축, with 키 동일성·ICU·maxChars·glossary 4종 CI 게이트 동반.

## 배경

- i18n-spec §3이 정의한 `copydeck/` 실체가 없다 [파일: copydeck/ 디렉터리 부재 확인]. 스펙만 존재하고 데이터·검증 체계가 없다.
- 원천은 갖춰졌다: `docs/copy-deck-v2-kr.md`(7화면 KR SSOT) + `docs/copy-deck-v2-en.md`(EN). 재접근 설계 §7이 `receipt.*`·`resend.*`·`refund.*` 키군을 제안했다.
- i18n 폴백 체인의 루트가 en-US인데 en-US 데이터가 없으면 `[missing:key]` 정책을 검증할 수 없다.

## 범위

- 할 것: `copydeck/` 신규 생성. locales 2건 + schema + glossary + CI 검증 스크립트(또는 검증 명령 문서).
- 하지 않을 것: 나머지 8로케일 번역(T-12 순차 오픈 연계). 기존 문서 수정.

## 수용조건

- [ ] `copydeck/locales/ko-KR.json`(카피 덱 v2 전수)·`copydeck/locales/en-US.json`(EN 덱 전수) 존재
- [ ] `copydeck/schema.json`: 키 셋 동일성·ICU 문법·maxChars 초과·glossary 미준용 4종 검증 규칙 수록
- [ ] `copydeck/glossary.md`: 물상 10종·Day Master·절기 등 고유어 단일 정의 + 로케일 번역 참조 규칙
- [ ] 키 네이밍 `screen.block.element[.state]`(소문자·케밥·점 계층) 준수, 로케일 불가지적
- [ ] `receipt.*`·`resend.*`·`refund.*` 키군 포함(재접근 설계 §7 제안 분)
- [ ] CI 게이트 실행 결과(통과 로그) 기록
- [ ] 파일 전체 em-dash 0건

## 체크리스트

- [ ] KR/EN 덱의 표를 키·값으로 기계 변환(누락 요소 0건 대조)
- [ ] ICU 복수형(ru 4형 제외 1차, en one/other) 문법 점검
- [ ] maxChars 메타 등록(버튼·배지·headline 키 우선)
- [ ] 스키마 위반 예시 1건씩으로 게이트가 실제 실패하는지 확인(게이트 자체 검증)

## 의존성

- 선행: 없음.
- 후속: T-08(QA 로그가 게이트에 흡수 가능 형식으로 작성).

## 관련 문서

`docs/i18n-spec.md` §3·§6-1 · `docs/copy-deck-v2-kr.md` · `docs/copy-deck-v2-en.md` · `docs/reaccess-and-receipt-design.md` §7
