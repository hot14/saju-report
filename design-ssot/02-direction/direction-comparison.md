# 방향 비교 — 시작 화면 3안 (Stitch 생성, 2026-09-04)

> Stitch 프로젝트 `11843585505944593298` (K-Saju Design) · MOBILE · GEMINI_3_PRO
> 각 안은 Stitch가 자체 디자인 시스템까지 생성함. 확정 안의 DS ID를 이후 모든 화면 생성에 주입해 일관성 유지.

## 생성물

| 안 | 이미지 | DS 이름 | DS ID | Screen ID |
|---|---|---|---|---|
| A Nocturne | `variants/A_nocturne.png` | Ink & Hanji | `assets/e27d9cd459e542ab939c371353dd88bf` | `1a1374d364a443638cc8d859572f17be` |
| C Obang | `variants/C_obang.png` | Obsidian Meridian | `assets/3ddca0d460764dddab2ab9adb3c4f99f` | `d509acb9a64e4300b5fae452159bfd47` |
| **A+C Hybrid** | `variants/AC_hybrid.png` | **Nocturne Obang** | `assets/eb0e569bc76a4af680d4ee6eb43ee128` | `593bb3d25ac045aa90e5be099d77bf94` |

## 관찰

**A (Ink & Hanji)** — 먹 배경+한지 세리프+수묵 워터마크(水). 가장 차분하고 신뢰감 높음. 그러나 후킹 요소 부재(배지·카드 프리뷰 없음), CTA가 아웃라인만, 헤드라인 줄바꿈("wide," 단독 줄) 어색. *우아하지만 조용.*

**C (Obsidian Meridian)** — 벤토 구조+오방 5원소 타일(木火土金水 + 색 도트 + 박물관 라벨). "REGISTRY NO. 01" 카탈로그 무드가 차별적. 5색 시스템이 가장 완성도 있게 구현. 그러나 상단 히어로 타일에 큰 빈 영역(아트 필요), 신뢰 라인이 그라데이션 텍스트로 렌더되는 미세 slop.

**A+C (Nocturne Obang)** — A의 무드 + C의 배지 스트립 + **공유 결과 카드 프리뷰**(R1 개념을 실제 화면에 구현 — "Dominant Yin Energy" 벤토 카드). 서사가 완결됨: 히어로 → 5원소 배지 → 카드 프리뷰 → CTA. 중단 밀도가 약간 높은 것이 유일한 감점 요소.

## 채점 (가중치: 공유카드 30 · 신뢰 25 · 확장성 25 · 차별성 20)

| 안 | 공유카드 | 신뢰 | 확장성 | 차별성 | **합계** |
|---|---|---|---|---|---|
| A | 12 | 22 | 12 | 10 | **56** |
| C | 18 | 18 | 24 | 16 | **76** |
| **A+C** | **27** | 20 | 22 | 18 | **87** |

## 슬로프 체크 (전 안 공통)

- [x] indigo/violet 그라데이션 없음
- [x] 수정구·타로 클리셰 없음
- [x] 이모지 없음
- [x] fortune/destiny/fate 카피 없음
- [!] C: 신뢰 라인 그라데이션 텍스트 (채택 시 수정 항목)

## 권고

**A+C "Nocturne Obang" 확정** — DS `assets/eb0e569bc76a4af680d4ee6eb43ee128`을 디자인 시스템으로 고정하고, 남은 화면 5종(입력·계산 중·무료 결과·결제·유료 결과) + 공유 카드 확장을 동일 DS로 생성.
