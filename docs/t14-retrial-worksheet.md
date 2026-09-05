# §14 재판정 워크시트 (T9 지원) · U1.5 EN 7화면

> 작성: 2026-09-05 · 담당: R4-UX 워커 (task_7a024bbf3574)
> 지위: `docs/tone-alignment-guide.md` §8(§14 pre-flight의 V2 적용 판정표)의 재판정 지원 근거 시트. **판정 확정은 사람(TONE·코디네이터)의 몫이고 본 문서는 근거 정리만 제공한다.** 모든 판정 칸은 의도적으로 공란이다.
> 대상: `design-ssot/02-direction/flows-v2-en/*.png` 7장 (U1.5, 커밋 272da71 · 780px 렌더)
> 짝 문서: `docs/tickets-r4/T-15-screen-regeneration-assets-round.md`(결함 소거) · `docs/u15-usability-recheck.md`(구조 결함 대조)

**Design Read (tasteskill §0.B):** Reading this as: 프리플라이트 체크리스트의 항목별 판정에 필요한 관찰 근거를 기계적으로 수집한 워크시트, with 비전 모델 자유 판독을 배격하고 OCR·픽셸 실측만 증거로 인정하는 증거 규율.

---

## 1. 방법론과 증거 등급

| 태그 | 의미 |
|---|---|
| [OCR] | macOS Vision 프레임워크(ocrmac) 밴드별 전사. y좌표는 화면 상단부터 픽셀 |
| [픽셸] | PIL 색상 분석(팔레트 토큰 근사 매칭·최다색) |
| [파일] | sips 차원 측정·커밋 해시 |
| [추론] | 위 증거의 해석 |

**비전 LLM 판독 기각 기록(중요)**: 동일 파일에 대한 자유 비전 판독 2회가 상충하는 결과를 반환했다(예: payment_en 하단을 "PDFgear $67 -60% OFF 파란 CTA"로 읽은 회차와 보증 3줄·$8로 읽은 회차. 픽셸 실측에서 파란 채색 0.00%로 전자는 기각 확정). 이는 UX 리포트 §1이 V1 썸네일에서 확인한 것과 동일한 실패 모드다. 본 워크시트는 이에 따라 **OCR·픽셸 실측만 증거로 채택**했다.

## 2. 화면별 관찰 기록 (OCR 전사 요약)

전사 전문이 아니라 판정에 필요한 행만 남겼다. OCR 문장 부호(~ · •)는 인식 노이즈 가능성이 있어 렌더 보증 아니다.

| 화면 | 차원 [파일] | 배경 [픽셸] | 주요 텍스트 [OCR] |
|---|---|---|---|
| landing_en | 780×5020 | 한지 #F7F3EB 74% · 남보라 0% | MIRROR LAKE / "You are Mirror Lake." / "A short video shows the letters of your day. SAJU reads the lifelong pattern they make." / READ MY PATTERN / THE TEN FORMS / "Your birth date assigns you one of ten forms." / 배지 예시 MIRROR LAKE · HEARTWOOD · NOON MARK / "The result stays as a single card." / "Your reading begins with eight letters." / 면책 EN / "© 2024 MIRROR LAKE. REFLECTION THROUGH TRADITION." |
| entry_en | **780×15792 (이상)** | 백색 42% · 먹 분산 9.1% | **전 영역 판독 불가(노이즈 전사만 반환)** |
| calculating_en | 780×2800 | 한지계 #F9F5F5 | "ASSEMBLING YOUR EIGHT LETTERS." / "- The letter of your birth year/month/day/hour -" 4행 / "Your eight letters are set." / "The same birth date always produces the same reading." / SKIP |
| free_result_en | 780×2920 | 시트 #FCF8F8 63% | EN · YU-YEON / MIRROR LAKE / "THIS IS YOUR STRUCTURE." / "Next, how to work with it." / "Strong phases, weak phases" / "Patterns that repeat in relationchips"(OCR 왜곡) / "When things change" / "READ MY PATTERN • $12" / "ONE PAYMENT UNLOCKS ALL SEVEN TOPICS." / "Keep your result as a card, and share it." / SAVE MY CARD / 면책 EN(YU-YEON) |
| payment_en | 780×2800 | 시트 #FCF8F8 76% | MULSANG / "FULL READING • 7 TOPICS" / $8 / "Available the moment you pay." / "One-time payment. No subscription." / "Delivered instantly." / "Full refund, no questions asked." / APPLE PAY / GOOGLE PAY / OR PAY WITH CARD / CARD NUMBER · EXPIRY DATE · SECURITY CODE / PAY NOW / 면책 EN(MULSANG) |
| paid_result_en | 780×4100 | 한지 #F7F3EB 71% | Full Report · SAJU / MIRROR LAKE / "The form that made you" / 처방 본문("...manage what flows in, so the water never runs dry...") / "NODE B2 • THE RIVER KEEPS ITS FLOW THROUGH METAL" / KEEP THIS LINE AS A CARD / "Every ten years, your current turns." / "NEXT: WHAT IS MISSING" / PREVIOUS / 대운 샘플("A turn in the current arrives in your mid-thirties...") / METHODOLOGY · PRIVACY · TERMS / "© 2024 IMSU. FOR INTROSPECTIVE PURPOSES ONLY." |
| share_card_en | 780×2800 | 한지 #F7F3EB 90% | SAJU / MIRROR LAKE / "It gatbers wide, and runs deep."(OCR 왜곡, gathers 추정) / "Your oatherino vears..."(왜곡, 판독 불확실) |

## 3. §14 항목별 근거 시트

tone 가이드 §8의 항목 중 화면 렌더로 근거를 모을 수 있는 것. 구현 단계 항목(reduced-motion·useEffect·CWV·폰트 로딩)은 애초에 렌더 판정 불가라 제외했다. **판정 칸은 사람이 채운다.**

### A. 전 화면 공통

| §14 항목 | 근거 | 판정 기준(제안) | 판정 |
|---|---|---|---|
| Page Theme Lock(7화면 라이트 단일) | [픽셸] landing·paid_result·share_card·calculating = 한지계 밝은 톤. **payment·free_result = 시트 #FCF8F8면이 페이지 전면**. 남보라·다크 히어로 0건 | 7화면 전부 한지 #F7F3EA 베이스면 합격. 시트면 전면 사용은 톤 가이드 §2.4-1 위반 여부 판정 | |
| Color Consistency(먹+골드 시그니처+오방 배지) | [픽셸] 골드 #B98A2C 검출 0%(허용오차 30). 오방색 유의 검출 없음 | 골드는 시그니처 한정이므로 0%도 합격 가능. 오방 도트 유무는 사람 육안 확인 필요 | |
| AI Tells §9(보라·인터 등) | [픽셸] purple_indigo 0.0% 전 화면 | 0%면 합격 | |
| em-dash 0 | [OCR] 전사에서 em-dash 문자 미검출(텍스트 원천 덱 0건과 정합) | 재생성 프롬프트 원천 0건이면 간접 보증 | |
| 단일 시스템(토큰) | [픽셸] 색역은 한지·먹·시트 범위 내 | 폭주 색 없음 | |

### B. 화면별

| 화면 | §14 항목 | 근거 | 판정 기준(제안) | 판정 |
|---|---|---|---|---|
| landing | Hero 스택 ≤4 요소 | [OCR] 워드마크·헤드라인·서브·CTA 순 4요소 관측 | 4요소 초과 여부 육안 | |
| landing | EYEBROW 1개 이하 | [OCR] "THE TEN FORMS" 1개만 대문자 라벨 관측 | 배지 스트립 라벨은 기능 콘텐츠(허용) | |
| landing | 히어로 버전 라벨·신뢰 스트립 부재 | [OCR] "© 2024 MIRROR LAKE..." 푸터는 존재, 히어로 내 신뢰 스트립 미관측 | © 연도·슬로건("REFLECTION THROUGH TRADITION")의 톤 가이드 준수 여부는 사람 판정 | |
| landing | 푸터 링크 카피 덱 정합 | [OCR] Journal · Terms · Principles · Privacy 4종 관측(덱은 개인정보 처리방침·이용약관) | 불일치 항목 존재 → 수정 권고 | |
| entry | (전 항목) | [파일·OCR] **렌더 실패: 15792px·노이즈** | 판정 불능. 재생성 후 재판정(T-15) | |
| calculating | 결정론 문구·스킵 | [OCR] "The same birth date always produces the same reading." + SKIP 관측 | P1 문구 렌더 확인 | |
| calculating | 단계 일련번호 부재 | [OCR] "The letter of your birth year" 등 콘텐츠 라벨만, 번호 없음 | 합격 후보 | |
| free_result | 영어 카드 먼저·한자 하단(U12) | [OCR] 상단 MIRROR LAKE 카드, 한자 8글자 격자 미검출(OCR 한자 약함·사람 확인) | 배치 순서 육안 필수 | |
| free_result | 단일 유형 체계(U13) | [OCR] 정체성 카드 1종만 관측, 이중 분류 흔적 없음 | 합격 후보 | |
| free_result | 점수 게이지 부재 | [OCR·픽셸] 게이지·바 관측 없음 | 육안 확인 | |
| free_result | 카운트다운·가짜 긴급성 부재 | [OCR] 관측 없음 | 합격 후보 | |
| payment | 3줄 보증 | [OCR] "One-time payment. No subscription." / "Delivered instantly." / "Full refund, no questions asked." 3행 관측 | 문안은 확정 보증 3줄과 실질 동일(표지 문구 "~"·"V"는 아이콘 OCR 왜곡 추정) | |
| payment | Apple Pay 실측 로고(결함 #2) | [OCR] APPLE PAY · GOOGLE PAY 버튼 텍스트 관측, 로고 도형은 사람 확인 | 로고 존재 여부 육안 | |
| payment | 가격 토큰 무결성(G1) | [OCR] **$8 표기. $12 하드코딩은 free_result에 존재** | 결제 화면 자체는 값 정합. 크로스 스크린 불일치는 §5-3 | |
| payment | 이메일 필드(재접근 설계) | [OCR] Email 문자열 0건 → **미반영** | 구조 결함 #1 대조 문서 참조 | |
| paid_result | 대운 타이틀 재명명(U9) | [OCR] "Every ten years, your current turns." · "WHEN THE BANKS ARRIVE" 미검출 | 재명명 반영 확인 | |
| paid_result | 근거 태그 | [OCR] "NODE B2 • THE RIVER KEEPS ITS FLOW THROUGH METAL" 관측 | 카피 덱 §7 태그와 일치 | |
| paid_result | 인용 저장 버튼 | [OCR] "KEEP THIS LINE AS A CARD" 관측 | 문안은 덱("이 문장을 카드로 남기기" EN)과 대응 | |
| share_card | 카드 3요소(배지·한 줄·시그니처) | [OCR] MIRROR LAKE · "It gathers wide, and runs deep."(왜곡 복원) · SAJU 관측 | 오행 5도트·잉크 밴드·골드 워드마크는 픽셸·육안 확인 필요 | |
| share_card | 루프백 라인(공유카드 v2 스펙 §7) | [OCR] "READ MY PATTERN · FREE"·URL 미검출 | 미반영 가능성 높음. 사람 확인 | |

## 4. 구현 이관 항목 (렌더 판정 불가)

reduced-motion 대응 · useEffect 정리 · Core Web Vitals(LCP·폰트 self-host) · CLS 0 수렴 · 모션 고립(클라이언트 리프). 전부 구현 단계 게이트로 승계한다(tone 가이드 §8 조건부 판정 그대로).

## 5. 크로스 스크린 결함 목록 (재판정 전 수정 권고)

U1.5가 §14 재판정의 대상으로 적합한지에 관한 하드팩트. **아래가 해소되기 전의 §14 최종 판정은 무효화 리스크가 있다**(특히 1·2·3번). T-15 티켓의 수용조건으로 직결됐다.

| # | 결함 | 근거 | §14·게이트 영향 |
|---|---|---|---|
| 1 | entry 렌더 실패(780×15792, 노이즈) | [파일·OCR] | 7화면 재판정 전제 붕괴. 재생성 필수 |
| 2 | 워드마크 5종 난립: MULSANG · YU-YEON · MIRROR LAKE(+SAJU) · IMSU | [OCR] | G1 토큰 규칙·flows 결함 #3 계보 |
| 3 | 가격 불일치: payment $8 vs free_result "READ MY PATTERN • $12" | [OCR] | G1 하드코딩 금지 위반 |
| 4 | 결제 화면 이메일 필드 부재 | [OCR] | 구조 결함 #1 미반영(별도 문서) |
| 5 | 컷 블록 본문 샘플 3문장·가치 프레임 미검출 | [OCR] | 구조 결함 #2 부분 미반영(별도 문서) |
| 6 | payment·free_result 페이지 베이스가 시트 #FCF8F8 | [픽셸] | Page Theme Lock·톤 가이드 §2.4-1 |
| 7 | 템플릿 흔적: "© 2024" 연도(landing·paid_result)·푸터 링크 불일치(Journal·Principles) | [OCR] | 카피 덱 정합·AI tell 인접 |

## 6. 한계 선언

- OCR은 텍스트층 증거이며 도형(로고·도트·아이콘·일러스트 품질)은 판정하지 못한다. 해당 항목은 "사람 확인"으로 표기했다.
- OCR의 문자 오인(gatbers→gathers, relationchips→relationships)은 원문 복원 추정을 병기했으나, 확정은 원본 이미지 육안으로 해야 한다.
- 한자(壬水 등)는 Vision 한글·영어 설정에서 전사 신뢰도가 낮아 채택하지 않았다.
- 본 워크시트 작성 시점의 렌더(U1.5)가 T-15로 재생성되면 §2~§3 전체를 다시 채워야 한다.
