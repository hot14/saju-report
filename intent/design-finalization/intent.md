# Intent: 디자인 방향 확정 및 잔여 화면 확장
Author: hot14 (프로젝트 오너) + Claude
Status: draft
Date: 2026-09-06
Related Ticket: [보류 — 방향 확정 후 wayfinder 맵 차팅 가능]

## 1. Problem (문제 정의)
- 디자인 시안 44장(brutal-20 · taste-20 각 EN/KO + html-impl 4방향 각 EN/KO)이 생성·검증 완료됐지만 **방향이 확정되지 않아** 후속 작업이 전부 대기 중이다.
- 증거: 리뷰 페이지(https://hot14.github.io/saju-report/)에 "방향 확정 지시 대기" 상태로 세 종료. 잔여 화면(온보딩 · 입력 · 결과 · 공유카드) 확장, OpenDesign 이관, 실제 앱 구현 모두 이 결정에 막혀 있다.

## 2. Proposed Outcome (기대 결과 및 성공 지표)
- 컨셉 1개(예: taste-20-ko k06 한지 퀴에트) 확정 → 해당 문법으로 잔여 화면 4~6장 확장 → OpenDesign 이관 준비 완료.
- 성공 지표: 확정 컨셉의 디자인 언어로 온보딩·결과·공유카드까지 시안 완결(100%), 확정 커밋 기록.

## 3. Affected Users and Systems (영향 대상)
- Affected Users: SAJU 글로벌 MZ 사용자(25-35), 프로젝트 오너, 이후 개발 세션
- Affected Systems: `design-ssot/02-direction/` (시안·리뷰 페이지), GitHub Pages 허브, 이후 앱 프론트엔드 구현

## 4. Constraints (제약 조건)
- Must-follow:
  - 브랜드 법: 오컬트 심벌 금지 · 운세/운명 어휘 금지 · em-dash 금지 · 다크 배경 금지
  - 렌더 파이프라인: Stitch 생성 → htmlCode 다운로드 → 개행 복원 → HTTP 서빙 → Tailwind JIT → 390px@2x 네이티브 렌더
  - KO/EN 쌍 유지 (카피덱 v2-en/-ko)
  - Taste Skill v2 프리플라이트(§14) 통과
- Out of scope: 백엔드 · 사주 계산 엔진 · 배포 인프라 (이 intent는 디자인 확정까지만)

## 5. Open Questions (미해결 질문)
- 어떤 컨셉으로 확정하는가? (44장 중 1개 — 오너 결정 필요, Gate 1의 실질 내용)
- 잔여 화면의 정확한 목록과 우선순위는? (온보딩/입력/결과/공유카드 외 추가?)
- OpenDesign 이관 시점: 잔여 화면 완결 후인가, 병렬인가?
