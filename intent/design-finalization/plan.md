# Plan: 디자인 방향 확정 및 잔여 화면 확장
Based on: [spec.md](spec.md)
Status: approved
Date: 2026-09-06

## 1. Work Order (작업 순서)

1. intent Status 전환 (draft → approved) + spec.md/plan.md 작성 — Gate 1~3 기록 ✅
2. 4화면 Stitch 병렬 생성 (onboarding · analyzing · result · share) — 스위스 레저 KO 프롬프트
3. htmlCode 다운로드 → 개행 복원 → HTTP 서빙 → Tailwind JIT → 390px@2x 렌더
4. `final-swiss-ko/` 저장 + 브랜드 법 eval 드라이런
5. 리뷰 페이지 `review-final-swiss-ko.html` + 허브 인덱스 링크 추가
6. 육안 검증 (카피 정확성 · 도판 체계 · 품질) → intent `completed` 전환
7. 커밋 · 푸시 · CI 그린 확인 · 웹 반영

## 2. File Changes (파일 변경 목록)

- 생성: `intent/design-finalization/spec.md` · `plan.md`
- 수정: `intent/design-finalization/intent.md` (Status approved + Gate 1 결정 기록)
- 생성: `design-ssot/02-direction/final-swiss-ko/{onboarding,analyzing,result,share}.{html,png}`
- 생성: `design-ssot/02-direction/review-final-swiss-ko.html`
- 수정: `index.html` (허브에 최종 시안 섹션 추가)
- 수정: `intent/README.md` (인덱스 상태 갱신)

## 3. Risks (리스크와 롤백)

- Stitch 생성 변동(오타 · 문법 이탈): 렌더 후 스팟 검증 → 위반 시 해당 화면만 재생성 (eval 3이 기계 검증)
- 생성 실패: 3회 재시도 → 실패 시 단독 재실행 (기존 배치 스크립트 재사용)
- 롤백: git revert 단일 커밋 — 산출물 전부 신규 파일이라 충돌 없음

## 4. Test Strategy (테스트 전략)

- eval 1~3 (CI) 전부 통과 필수
- 카피덱 v2-KO 정확성: 렌더 PNG 육안 + HTML 원문 grep 이중 검증
- 4화간 도판 번호 체계 grep 검증
