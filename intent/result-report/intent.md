# Intent: 결과 상세 리포트 화면
Author: hot14 + Claude
Status: completed
Date: 2026-09-06
Related Ticket: intent/design-finalization (completed — 이 intent의 후속)

## 1. Problem (문제 정의)
- 사용자 여정이 랜딩+4화면으로 완결됐지만, 결과 카드 이후의 **깊이 있는 해석 화면이 없다**. 열 가지 형태 중 왜 '거울 호수'인지, 여덟 글자가 각각 무엇인지 설명하는 화면 부재.
- 증거: result 화면이 "PRIMARY PATTERN - 거울 호수"에서 끝남 — 상세 근거가 다음 화면으로 이어지지 않음.

## 2. Proposed Outcome (기대 결과 및 성공 지표)
- 결과 카드에서 이어지는 리포트 2화면: (1) 여덟 글자 분해 + 오행 구성 (2) 열 가지 형태 도감(내 형태 하이라이트).
- 성공 지표: 2화면 스위스 레저 문법 완결 · 카피덱 정확 · CI evals 통과.

## 3. Affected Users and Systems
- Users: 결과를 받은 SAJU 사용자 (자기이해 깊이 탐색)
- Systems: `design-ssot/02-direction/final-swiss-ko/` 확장, 리뷰 페이지, 허브

## 4. Constraints (제약)
- Must-follow: 스위스 레저 문법(V6/M4/D4) · 카피덱 v2-KO · 도판 번호 체계 연속(05 다음 06·07) · 브랜드 법 · 렌더 파이프라인
- Out of scope: 유료 결제 화면 · 회원 시스템

## 5. Open Questions
- 없음 — design-finalization에서 문법·파이프라인 확증 완료

## 6. Gate 1 결정 (2026-09-06)
- 오너 위임("진행해줘") — 이전 intent 완결 후 자연 후속으로 승인.

## Gate 완료 기록 (2026-09-06)
- 2화면 생성·렌더 완료 (report 780px · forms 780px), 브랜드 법 클린, 도판 06·07 체계 연속
- 오타 1건(촉록→초록) 발견·수정 — eval + 육안 이중 검증
