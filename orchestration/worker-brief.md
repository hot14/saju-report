# Worker Brief — K-Saju 디자인 V2 오케스트레이션 (2026-09-05)

## 프로젝트 한 줄
남촌 물상론 기반 사주 자기이해 웹서비스. 영어 우선(해외 K컬처 유입), 웹 전용, 6화면 퍼널 + 공유카드, $8 단건.

## 확정 방향 (절대 준수)
- v0.2 "밝은 모던 K-컬처 물성": 한지 화이트 #F7F3EA + 먹 #1B1B1E + 골드 #B98A2C(브랜드 정당화 문서화 필수 — tasteskill §4.2 오버라이드).
- 오컬트/점성학 전면 금지: 다크 배경, 별·달·천체, 성운 그라데이션, 수정구·타로, 보라·인디고.
- 물상 = 물성의 스틸컷(점성·파쇄·흡수·표면결) — 상징물 그림 금지.
- 10 일간 정체성 카드 = 1번 자산. 사용자 노출 유형은 12-18개로 압축.
- 무료 = 정교한 진단+공감 / $8 = 7-8개 영역 처방. 결제 1회 반복 조회.

## tasteskill(design-taste-frontend) 게이트 — 전 작업 공통
- §9.G: **em-dash(—) 전면 금지.** 카피에서 "임수 — 넓은 호수" → "임수 · 넓은 호수", "내 패턴 읽기 — $8" → "내 패턴 읽기 · $8".
- §0.B: 모든 산출물에 Design Read 한 줄 선언.
- 다이얼(확정): DESIGN_VARIANCE 6 · MOTION_INTENSITY 4(결정론적 리빌만 — P1) · VISUAL_DENSITY 3.
- EYEBROW RESTRAINT: 장식 소형 캡스 라벨 최소화(섹션 3개당 1개 이하). 리포트 챕터 번호는 기능 콘텐츠라 허용.
- §14 Pre-flight를 QA 게이트로 사용.

## 규칙
1. **새 파일만 생성. 기존 파일 일절 수정 금지.** 기존 파일과 연결이 필요하면 worker_done 보고에 명시.
2. 완료 시 worker_done 보고(한 일/발견/남은 것 + files-modified).
3. 근거 문서: design-ssot/01-analysis/, 02-direction/concept-guardrail.md, design-direction.md, flows-v2/manifest.json
4. 사용자 중간 피드백은 coordinator가 전달 — 수신 시 최우선 반영.
