# SAJU → OpenDesign 이관 패키지

> 확정 컨셉: **스위스 데이터-이터터리얼 (Swiss Ledger, KO)** · intent/design-finalization + result-report 완결
> 이 문서만 읽으면 OpenDesign에서 이어서 작업할 수 있다.

## 1. 시작점

| 항목 | 값 |
|---|---|
| 디자인 토큰 | [tokens.css](tokens.css) — 7화면 실사용 값 추출 (v1.0) |
| 카피덱 | [copy-deck-v2-ko.md](../02-direction/copy-deck-v2-ko.md) (EN: [copy-deck-v2-en.md](../02-direction/copy-deck-v2-en.md)) |
| 컨셉 정의 | [taste-20-concepts.md](../02-direction/taste-20-concepts.md) ① Swiss Ledger |
| 검토 리뷰 | [review-final-swiss-ko.html](../02-direction/review-final-swiss-ko.html) (7화면 갤러리) |

## 2. 화면 인벤토리 (도판 체계)

| 도판 | 화면 | HTML 소스 (실행 코드) | PNG |
|---|---|---|---|
| 01 | 랜딩 | [taste-20-ko-html/k01.html](../02-direction/taste-20-ko-html/k01.html) | [taste-20-ko/k01.png](../02-direction/taste-20-ko/k01.png) |
| 02 | 입력 | [final-swiss-ko/onboarding.html](../02-direction/final-swiss-ko/onboarding.html) | [onboarding.png](../02-direction/final-swiss-ko/onboarding.png) |
| 03 | 해석 중 | [final-swiss-ko/analyzing.html](../02-direction/final-swiss-ko/analyzing.html) | [analyzing.png](../02-direction/final-swiss-ko/analyzing.png) |
| 04 | 결과 카드 | [final-swiss-ko/result.html](../02-direction/final-swiss-ko/result.html) | [result.png](../02-direction/final-swiss-ko/result.png) |
| 05 | 공유 | [final-swiss-ko/share.html](../02-direction/final-swiss-ko/share.html) | [share.png](../02-direction/final-swiss-ko/share.png) |
| 06 | 리포트 | [final-swiss-ko/report.html](../02-direction/final-swiss-ko/report.html) | [report.png](../02-direction/final-swiss-ko/report.png) |
| 07 | 열 가지 형태 | [final-swiss-ko/forms.html](../02-direction/final-swiss-ko/forms.html) | [forms.png](../02-direction/final-swiss-ko/forms.png) |

## 3. 컴포넌트 인벤토리

| 컴포넌트 | 문법 | 사용 화면 |
|---|---|---|
| 도판 캡션 | 모노 라벨 `도판 0N - 제목` · mute · 좌상단 | 전 화면 |
| 히어로 헤드라인 | Noto Serif KR 900 · 마침표만 레드 | 01 · 04 |
| 레지스트리 표 | 헤더행 + 데이터행 · 헤어라인 · 모노 데이터 우측 정렬 | 02 · 06 · 07 |
| PATTERN_CARD | ID 헤더 + 필드 4행 + 대형 한자 그리드 + 바코드 | 04 · 05 |
| 풀필 CTA | 잉크 필 · 백색 텍스트 · 마침표 레드 | 02 · 07 |
| 하이라이트 행 | 레드 보더 + `YOU` 모노 태그 | 07 |
| 진행 슬롯 | 여덟 글자 슬롯 (채움/빈 밑줄) + 모노 상태 | 03 |
| 푸터 | 면책문 + 개인정보처리방침 · 서비스 이용약관 | 전 화면 |

## 4. 하드 룰 (OpenDesign에서도 유지)

1. 브랜드 법: 오컬트 심볼 0 · 운세/운명 어휘 0 · em-dash 0 · 다크 배경 0 · 점수 바 0
2. 색은 3색 체계만 (배경/잉크/액센트) — 액센트는 마침표·하이라이트 전용, 남용 금지
3. 라운드 0 · 그림자 없음 — 라인과 그리드로만 위계
4. 도판 번호 체계 연속 — 신규 화면은 도판 08부터
5. 한글 카피는 카피덱 v2-KO 준수, 신규 카피는 같은 톤(담백 · 행동 동사 · 금지 어휘 회피)

## 5. 검증

- 수정 산출물은 이 레포 CI(`agent-evals.yml`)로 브랜드 법 자동 검증 — 규칙 준수 여부는 푸시만 하면 확인된다
- 토큰 v0.2(Nocturne Obang, 다크)는 [04-design-tokens/](../04-design-tokens/tokens.css)에 DEPRECATED 보존 — 사용 금지
