# 플로우 생성·검증 기록 (2026-09-04)

> 3방향 × 6화면 = 18스크린 + 시작 화면 3스크린 = **총 21스크린 생성 완료** (Stitch 프로젝트 `11843585505944593298`)
> 파일: `flows/<A|C|AC>/<screen>.png` · 스크린 ID 매핑: `flows/manifest.json`

## 생성 커버리지

| 화면 | A (Ink & Hanji) | C (Obsidian Meridian) | AC (Nocturne Obang) |
|---|---|---|---|
| 시작 (랜딩) | ✅ | ✅ | ✅ |
| 입력 | ✅ 다크 유지 | ✅ 벤토 타일 폼 | ✅ **재생성 1회** (초안 라이트 이탈 → 다크 강제 프롬프트로 수정) |
| 계산 중 | ✅ | ✅ | ✅ 4열 年月日時 + 4단계 진행 (P1 결정론 준수) |
| 무료 결과 | ✅ | ✅ | ✅ 컷 블록("HERE, THE DIAGNOSIS ENDS") + 잠긴 3주제 구현 |
| 결제 | ✅ | ✅ | ✅ 보증 3줄 고정 + Pay/Google Pay |
| 유료 결과 | ✅ | ✅ | ✅ 7주제 챕터 레일 + **대운 타임라인 "WHEN THE BANKS ARRIVE"** 구현 |
| 공유 카드 | ✅ | ✅ REGISTRY NO. 코드 | ✅ 오행 5도트 시그니처 |

## 전수 검사 결과 (AC) + 표본 검사 (A·C)

통과:
- 슬로프 체크 21스크린 전부 통과 (보라 그라데이션·수정구·이모지·fortune 카피 0건)
- R1(공유 카드)·R2(컷 블록)·P7(보증 3줄) 설계 의도의 시각 구현 확인
- "I don't know my birth time" 1급 옵션 3방향 모두 구현 (R5)
- A entry 카피 "Privacy-first processing. No data stored without intent." — 채택 후보

## 알려진 결함 (OpenDesign 정제 단계에서 처리)

| # | 화면 | 결함 | 조치 |
|---|---|---|---|
| 1 | AC free_result | 렌더 비율 비정상 (99×512 소스 — 세로 압축) | 재생성 또는 .pen에서 재조판 |
| 2 | AC payment | Apple Pay 버튼이 "Pay" 텍스트만 ( 로고 누락) | 컴포넌트 교체 |
| 3 | AC paid_result | 워드마크가 "NOCTURNE OBANG"으로 렌더 (서비스명 미확정 상태의 자동 채움) | 서비스명 확정 후 전면 교체 |
| 4 | C share_card | 하단 가장자리 아티팩트 (고스트 텍스트) | 재생성 또는 크롭 |
| 5 | 전체 | Stitch 생성 카피는 영문 초안 수준 — 설계 문서 §5 문체 3원칙 검수 별도 필요 | 보닌 검수 단계 |

## 워드마크 유의

Stitch가 방향별로 'Saju', 'Saju Archive' 등 워드마크를 임의 생성했다. 서비스명·워드마크는 미확정 항목이며, 확정 후 전 화면 교체 대상. (A+C 방향 채택 시 "Nocturne Obang"은 무드명이지 서비스명이 아님)
