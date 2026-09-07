# OpenDesign 캔버스 작업 계획 (연결 즉시 실행)

> 사전 조건: Antigravity IDE에서 Pencil 캔버스 열림 (소켓 `~/.pencil/socket/antigravity` 생성 확인)
> 근거: `05-handoff/HANDOFF.md` · `tokens.css v1.0`

## Phase 1 — 기초 (토큰 → 캔버스)

1. 문서 생성: `saju-swiss-ledger.pen` (프로젝트 루트 `design-ssot/06-opendesign/`)
2. 토큰 변수 등록 (`set_variables`):
   - `bg #FFFFFF` · `ink #111111` · `accent #E0311D` · `ink-soft #444748` · `mute #6F6A63` · `hairline #D0CDC6`
   - `font-display "Noto Serif KR"` · `font-body "Noto Sans KR"` · `font-mono "IBM Plex Mono"`
3. 프레임 7개 (390×텍스트높이, 라운드 0) — 화면 순서대로 배치:
   `01 랜딩 · 02 입력 · 03 해석 · 04 결과 · 05 공유 · 06 리포트 · 07 도감`

## Phase 2 — 화면 재구성 (HTML 소스 → 캔버스)

각 화면을 final-swiss-ko HTML 소스 + PNG를 근거로 캔버스에 재구성:

- 컴포넌트 우선 제작: 도판 캡션 · 레지스트리 표 행 · PATTERN_CARD · 풀필 CTA · 하이라이트 행(YOU) · 진행 슬롯 · 푸터
- 컴포넌트 → 7 프레임 배치 (PNG를 시각 근거로 오탈·간격 대조)
- 스크린샷(`get_screenshot`)으로 PNG와 대조 검증

## Phase 3 — OpenDesign 후속 디자인 (오너 작업)

- 확장 화면 (도판 08~): 결제 · 히스토리 · 설정 등
- 인터랙션 프로토타입 (스위스 문법: 모션 절제, V6/M4/D4 유지)
- 하드 룰 유지: 3색 체계 · 라운드 0 · 브랜드 법 (CI eval이 레포 푸시마다 검증)
