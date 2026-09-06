# Intent: OpenDesign 이관 패키지 구축
Author: hot14 + Claude
Status: completed
Date: 2026-09-06
Related Ticket: intent/design-finalization (completed — 전제)

## 1. Problem (문제 정의)
- 확정 디자인(스위스 레저 7화면: 랜딩+여정 6장)이 Stitch HTML 산출물로 흩어져 있어, **OpenDesign에서 이어서 디자인을 완성하려면 체계화된 이관 패키지가 필요**하다. 또한 구버전 토큰(v0.2 Nocturne Obang, 다크 · 9/4 폐기 대상)이 최신 확정 방향과 충돌한다.
- 증거: design-ssot/04-design-tokens/tokens.css는 다크 기본 — 확정 컨셉은 라이트 스위스 레저.

## 2. Proposed Outcome (기대 결과 및 성공 지표)
- `design-ssot/05-handoff/`에 OpenDesign 바로 투입 가능한 패키지 완성: 토큰 v1.0(스위스 레저) · 컴포넌트 인벤토리 · 화면 인벤토리 · 이관 가이드.
- 성공 지표: 7화면 전부 소스 링크 · 토큰이 실제 시안에서 추출한 값과 1:1 일치 · 이관 가이드만 읽어도 재현 가능.

## 3. Affected Users and Systems
- Users: OpenDesign에서 이어 작업할 오너/디자이너, 이후 개발 세션
- Systems: design-ssot/05-handoff/ 신규, 04-design-tokens v0.2는 deprecated 표기로 보존

## 4. Constraints (제약)
- Must-follow: 확정 스위스 레저 값만 기록 (#FFFFFF/#111111/#E0311D · Noto Serif KR/Noto Sans KR/IBM Plex Mono) · 7화면 소스는 final-swiss-ko/ 그대로 링크 (복제 금지 — 단일 소스)
- Out of scope: OpenDesign에서의 후속 디자인 자체 (패키지만)

## 5. Open Questions
- 없음

## 6. Gate 1 결정 (2026-09-06)
- 오너 위임("진행해줘") — design-finalization·result-report 완결의 자연 후속.

## Gate 완료 기록 (2026-09-06)
- 05-handoff/ 패키지 완성: HANDOFF.md · tokens v1.0 · 인벤토리 2종
- 수용 기준 충족: 7화면 전부 링크 · 토큰 실사용 1:1 · v0.2 deprecated 명시
