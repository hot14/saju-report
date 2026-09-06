# Spec: 디자인 방향 확정 및 잔여 화면 확장
Based on: [intent.md](intent.md)
Status: draft
Date: 2026-09-06

## 1. Requirements (요구사항)

확정 컨셉 **스위스 레저(Swiss Ledger, KO)** 문법으로 랜딩 이후 사용자 여정 4화면을 신규 생성:

| # | 화면 | 슬러그 | 목적 |
|---|---|---|---|
| 1 | 입력 (온보딩) | `onboarding` | 생년월일시 4요소 입력 → 리딩 시작 |
| 2 | 해석 중 | `analyzing` | 여덟 글자 등장 + 분석 진행 — 기대감 구축 |
| 3 | 결과 카드 | `result` | PATTERN_CARD 전체 뷰 — 핵심 산출물 |
| 4 | 공유 | `share` | 공유 최적화 단일 카드 + 진입 CTA |

## 2. Architecture / Design (설계)

- **디자인 언어**: 스위스 데이터-에디토리얼 (V6/M4/D4) — 순백 #FFFFFF, 잉크 #111111, 레드 마침표 #E0311D, 도판(FIG.) 캡션, 모노 라벨, 그리드 정렬, 표 같은 배지 행
- **폰트**: Noto Serif KR(디스플레이 900) + Noto Sans KR(본문) + IBM Plex Mono(라벨·데이터)
- **카피**: 카피덱 v2-KO 그대로 (당신은 거울 호수입니다 · 내 패턴 읽기 · 열 가지 형태 · 결과는 단 하나의 카드로 남습니다)
- **생성 파이프라인**: Stitch `generate_screen_from_text` (GEMINI_3_PRO + SAJU 리서치 DS) → htmlCode 다운로드 → 개행 복원 → HTTP 서빙 → Tailwind JIT 14s → 390px@2x 네이티브 렌더
- **산출물 위치**: `design-ssot/02-direction/final-swiss-ko/` (PNG + HTML) + 리뷰 페이지 1종

## 3. Policy Compliance (정책 준수)

- 브랜드 법: 오컬트 심볼 0 · 운세/운명 어휘 0 · em-dash 0 · 다크 배경 없음 — CI eval 3가 매 푸시 검증
- Taste Skill v2 §14 프리플라이트 전 화면 적용
- **Flagged concerns**: 없음 — 스위스 문법은 44장 중 브랜드 법·파이프라인·품질 3축 모두 검증된 유일 계열

## 4. Acceptance Criteria (인수 기준)

- [ ] 4화면 모두 780px+ 네이티브 렌더 (업스케일 없음)
- [ ] 카피덱 v2-KO 텍스트 정확 반영 (오타 0)
- [ ] 도판 번호 체계 일관 (랜딩 도판 01 → 입력 도판 02 · 해석 도판 03 · 결과 도판 04)
- [ ] CI agent-evals 3 eval 통과
- [ ] 리뷰 페이지 + 허브 링크 추가
