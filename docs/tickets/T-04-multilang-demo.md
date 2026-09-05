# T-04 · 10-로케일 타이포 데모 확장 (I6 + I4)

> 상태: open · 우선순위: **P0** · 담당 후보: I18N · 예상: 0.5d(CTO I6 승계) + 적용층 정의 2h · 소스: i18n-spec.md §7-4 + gate-merge-master.md 누락 조각 #7 + gate-devil-advocate.md C4 · GitHub: hot14/saju-report#1 잔여 항목 4
> Design Read: 10-로케일 조판 규칙을 눈으로 검증 가능한 데모 페이지 신규 구축, with ko/en 본문 폰트 적용층이라는 구현 공백을 데모가 먼저 메우는 접근.

## 배경

- `typography-demo.html`은 v1.0 미수정 상태이고 10-로케일 확장이 §7-4 후속 과제로 남아 있다. multilang.css의 신규 로케일 규칙은 링크 교체 전 적용 대상이 없다(I4).
- gate-merge-master 누락 조각 #7 + 악마 C4: ko/en 본문 font-family가 CSS 어디에도 정의되지 않는다(base v1.0 무정의 + v1.1 위임). 후보 3중 불일치: 마루부리(DESIGN.md) / IBM Plex Sans KR(tone §4) / Noto Sans KR(i18n 매트릭스).

## 범위

- 할 것: 신규 `styles/typography-demo-multilang.html` 생성 + ko/en 본문 폰트 적용층 정의(신규 CSS 또는 데모 내 스타일, 채택 근거 1줄).
- 하지 않을 것: 기존 `typography-demo.html`·`typography.css`·`typography-multilang.css` 수정.

## 수용조건

- [ ] 10 로케일(ko·en-US·en-GB·ja·zh-Hans·th·vi·fil·id·ru) 샘플 섹션 존재, `html[lang]`과 1:1
- [ ] i18n-spec §6 QA 체크리스트 항목이 데모 내 하이라이트로 표시
- [ ] ko/en 본문 폰트 적용층: 후보 3중 중 채택 + 근거 기록, 데모에 실제 렌더
- [ ] 특수 케이스 샘플 포함: th 마크 쌓임(1.9/1.3) · ru 하이픈 규칙 · ja·zh 금칙 문자
- [ ] ego-browser(getComputedStyle) 계산값 실측 기록(매트릭스 §4 값과 일치)
- [ ] I4 데모 적용분: 데모 페이지의 stylesheet link가 `/styles/typography-multilang.css`를 참조
- [ ] 파일 em-dash 0건

## 체크리스트

- [ ] 로케일별 본문·디스플레이·캡션 3계층 샘플
- [ ] 375px 뷰포트에서 1컬럼 유지 확인
- [ ] 계산값 실측 결과 표(31항목 승계 + ko/en 신규분)

## 의존성

- 선행: 없음(병렬 가능).
- 협업: T-08 결과를 반영해 팽창 초과 키 샘플 교정 가능.

## 관련 문서

`docs/i18n-spec.md` §4·§5·§6·§7 · `styles/typography-multilang.css` · `design-ssot/02-direction/typography-demo.html`(참조만) · `docs/gate-merge-master.md` 누락 조각 #7
