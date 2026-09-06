# Spec: 결과 상세 리포트 화면
Based on: [intent.md](intent.md)
Status: approved
Date: 2026-09-06

## 1. Requirements
| # | 화면 | 슬러그 | 목적 |
|---|---|---|---|
| 1 | 리포트 메인 | `report` | 여덟 글자 분해(년월일시 4행 · 천간+지지 · 음양·오행 라벨) + 오행 구성 표 |
| 2 | 열 가지 형태 도감 | `forms` | 10행 레지스트리 표(甲~癸 · 이름 · 한 줄 설명) + 내 형태(壬 거울 호수) 하이라이트 |

## 2. Architecture / Design
- 스위스 데이터-에디토리얼: 도판 06 - 리포트 / 도판 07 - 열 가지 형태
- 표 문법만 사용 — 점수 바·게이지 금지 (레지스트리 정밀 문법 유지)
- 산출물: `design-ssot/02-direction/final-swiss-ko/` 확장 (report · forms)

## 3. Policy Compliance
- 브랜드 법 · 카피덱 v2-KO · 프리플라이트 동일. Flagged concerns: 없음.

## 4. Acceptance Criteria
- [ ] 2화면 780px 네이티브 렌더
- [ ] 도판 번호 체계 연속 (06 · 07)
- [ ] 10행 표 완전성 (갑~癸 누락 0) + 壬 하이라이트
- [ ] CI evals 통과
