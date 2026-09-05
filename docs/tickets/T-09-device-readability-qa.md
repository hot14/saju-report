# T-09 · 실기 가독성 검증 (U11 실기분)

> 상태: open · 우선순위: **P2** · 담당 후보: UX/COORD · 예상: 0.5d(CTO 승계) · 소스: ux-validation-report §6 + O2(아카이브 승계) · GitHub: hot14/saju-report#1 연계
> Design Read: 토큰 상향이 완료된 타이포그래피를 실제 저사양 기기 렌더로 검증하는 QA 티켓, with 합격 기준을 스크린샷 증거로 판정하는 관문식 접근.

## 배경

- 가독성 토큰 상향(본문 하한 16px·캡션 12px·신뢰 문구 잉크 색상)은 SSOT 반영 완료 [파일: typography.css `--fs-body: clamp(16px, …, 17px)` 확인].
- UX 리포트 §6의 잔여는 실기 검증뿐: MaruBuri 한글 세리프의 자모 획 밀도·Cormorant x-height·caption 12px를 iPhone SE·Android 저밀도 기기에서 확인. 반응 보조(200% 줌 1컬럼·가로 스크롤 0)도 미검증.
- O2(아카이브 이슈)의 완결 분야.

## 범위

- 할 것: 실기 검증 계획 + 결과 기록(신규 문서 또는 검증 로그). 대상: 375px(iPhone SE급)·Android 저밀도.
- 하지 않을 것: 토큰 값 임의 변경(불합격 시 조정안 제시 후 COORD 커밋).

## 수용조건

- [ ] 대상 기기(또는 에뮬레이터 + 근거)에서 본문 16px·캡션 12px·한자 오너먼트 렌더 스크린샷 기록
- [ ] 200% 텍스트 줌 시 1컬럼 유지·가로 스크롤 0 확인(UX §6 반응 보조 항목)
- [ ] 신뢰 문구(면책·보증) 잉크 색상 렌더 확인(#6F6A63 아님 잉크 #1B1B1E)
- [ ] 합격/불합격 판정 + 불합격 시 토큰 조정안(파일·값·근거 명시)
- [ ] 검증 환경(기기·브라우저·버전) 기록

## 체크리스트

- [ ] 검증 대상 화면 선정: 무료 결과 본문·결제 보증 3줄·카드 캡션
- [ ] 다크 대비 환경(야외 밝기 근사) 1케이스 추가 여부 판정
- [ ] 결과의 SSOT 환원 위치 제안(예: UX 리포트 후속 로그)

## 의존성

- 선행: 없음. 실기 기기 확보가 유일한 외부 조건(확보 불가 시 에뮬레이터 근거 기록).

## 관련 문서

`docs/ux-validation-report.md` §6 · `design-ssot/02-direction/typography.css` · `design-ssot/02-direction/github-pages-archive-digest.md` O2 · `docs/tone-alignment-guide.md` §3
