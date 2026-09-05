# U1.5 사용성 재검증 · 구조 결함 2건 해소 설계의 화면 반영 대조

> 작성: 2026-09-05 · 담당: R4-UX 워커 (task_7a024bbf3574)
> 지위: UX 검증 리포트 §3 이탈 리스크 1·2위(구매 후 재접근 불능 · 컷 블록 설득력 부족, both 치명)의 해소 설계가 U1.5 렌더(`design-ssot/02-direction/flows-v2-en/`)에 반영됐는지의 대조 표. 판정 근거는 전부 기계 실측(macOS Vision OCR 밴드 전사 + PIL 픽셸 분석)이다.
> 비교 대상: `docs/reaccess-and-receipt-design.md`(재접근 설계, U2) · `docs/cutblock-copy-en-kr.md`(컷 블록 카피, U3)

**Design Read (tasteskill §0.B):** Reading this as: 치명 등급 구조 결함 2건의 설계 대비 화면 구현 차이를 항목별로 대조하는 검증 문서, with 비전 LLM 판독을 배격하고 OCR 전사만 근거로 삼는 증거 규율.

---

## 0. 결론 3줄

1. **두 결함 모두 "설계 확정 · 화면 미반영(또는 부분 반영)" 상태다.** 재접근(결제 화면 이메일 필드)은 렌더에서 0반영, 컷 블록은 구조(헤드라인·주제 3개·보조문)는 반영됐으나 핵심 설득 장치(본문 샘플 3문장·가치 프레임)가 빠지고 CTA 가격이 $12로 잘못 박혀 있다.
2. 근거는 결제 화면 OCR 전사에서 "Email" 문자열 0건, 무료 결과 전사에서 샘플 문장·가치 프레임 미검출 + "READ MY PATTERN • $12" 검출이다.
3. 반영은 다음 재생성 라운드(`docs/tickets-r4/T-15-screen-regeneration-assets-round.md`)의 수용조건에 항목으로 직결시켰다. 본 문서는 반영 여부의 기록이지 설계 자체의 재검토가 아니다.

## 1. 결함 #1 · 재접근 경로 (재접근 설계 §3.1 대비)

대상 화면: `payment_en.png`(780×2800, U1.5). OCR 전사 전문(핵심 행):

```
y   65  MULSANG
y  264  FULL READING • 7 TOPICS
y  348  $8
y  426  Available the moment you pay.
y  646  One-time payment. No subscription.
y  770  Delivered instantly.
y  891  Full refund, no questions asked.
y 1105  APPLE PAY
y 1243  GOOGLE PAY
y 1415  OR PAY WITH CARD
y 1547  CARD NUMBER
y 1741  EXPIRY DATE / SECURITY CODE
y 1998  PAY NOW
y 2722  MULSANG IS A READING TOOL FOR SELF-UNDERSTANDING.
```

| 재접근 설계 항목 (§3.1·§3.2) | 화면 관찰 [OCR] | 반영 판정 |
|---|---|---|
| 이메일 필드 1개 (상품 요약과 지불 수단 사이) | "Email" 문자열 0건. 상품 요약(y264~426) 다음이 곧바로 APPLE PAY(y1105) | **미반영** |
| 이메일 헬퍼 "영수증과 재열람 링크를 이 주소로 보냅니다."(EN판) | 유사 문장 0건 | **미반영** |
| 필드 에러 문안(형식) | 필드 자체가 없어 해당 없음 | 미반영(전제 결여) |
| 기구매 전환("링크 다시 받기") | 해당 없음(결제 전 상태 렌더) | 판정 불가(동작 미구현) |
| 결제 직후 발송 고지(⑥ 인라인) | 유료 결과 화면에서 "receipt"·"link" 계열 문자열 0건 | 미반영(별 화면 요소) |
| 월렛 경로에서도 이메일 필드 유지 | 필드 부재로 원칙 자체 미적용 | 미반영 |
| (참조) 상품 요약·보증 3줄 | "FULL READING • 7 TOPICS" · $8 · 보증 3줄 전부 관측 | **반영됨**(주변 구조는 정합) |

해석: 결제 화면의 신뢰 블록(요약·가격·보증)은 설계와 정합하나, 재접근 설계가 추가한 유일한 UI(이메일 1필드)가 빠져 있다. 리스크 #1의 화면층 해소는 이루어지지 않았다.

## 2. 결함 #2 · 컷 블록 설득력 (컷 블록 스펙 §2 대비)

대상 화면: `free_result_en.png`(780×2920, U1.5). OCR 전사(컷 블록 구간):

```
y 1006  THIS IS YOUR STRUCTURE.
y 1070  Next, how to work with it.
y 1214  Strong phases, weak phases
y 1345  Patterns that repeat in relationchips   (OCR 왜곡, relationships 추정)
y 1528  When things change
y 1686  READ MY PATTERN • $12
y 1777  ONE PAYMENT UNLOCKS ALL SEVEN TOPICS.
y 2206  Keep your result as a card, and share it.
y 2315  SAVE MY CARD
```

| 컷 블록 스펙 항목 (§2 EN 문안) | 화면 관찰 [OCR] | 반영 판정 |
|---|---|---|
| 컷 헤드라인 "This is your structure." | y1006 일치 | **반영됨** |
| 전환문 "Next, how to work with it." | y1070 일치 | **반영됨** |
| 주제 1 타이틀 "Strong phases, weak phases" | y1214 일치 | **반영됨** |
| 주제 2 타이틀 "Patterns that repeat in relationships" | y1345 일치(OCR 왜곡) | 반영됨 |
| 주제 3 타이틀 "When things change" | y1528 일치 | **반영됨** |
| **주제별 본문 샘플 3문장**(스펙의 핵심: 리스크 #2의 직접 해소 장치) | 타이틀 사이·아래 어디에서도 샘플 문장("Your strength builds..." 등) 미검출 | **미반영** |
| CTA "Read my pattern · {{PRICE}}" | 라벨은 일치하나 **가격이 $12로 하드코딩**(P1 결정 $8, payment 화면은 $8) | 부분 반영(가격 오류) |
| 보조문 "One payment unlocks all seven topics." | y1777 일치 | **반영됨** |
| 가치 프레임 "Pay once, and reread it whenever you like."(신규 제안) | 미검출 | **미반영** |
| 공유 유도 "Keep your result as a card, and share it." | y2206 일치 | **반영됨** |
| 저장 버튼 "Save my card" | y2315 일치 | **반영됨** |
| 잠김 표시 최소(자물쇠 + 총량 안내)·카운트다운·할인 부재 | 카운트다운·할인 문구 0건 | 반영됨(자물쇠 도형은 육안 확인 필요) |

해석: 컷 블록의 뼈대(헤드라인·전환문·주제 3·보조문·공유)는 스펙 그대로 렌더됐다. 그러나 스펙이 리스크 #2의 해법으로 제시한 **"타이틀만 보여주지 않고 실제 문장을 보여준다"** 는 장치(본문 샘플 3문장)와 가치 프레임이 빠졌고, CTA 가격이 $12로 토큰이 아닌 잘못된 값으로 박혀 있다. 컷 지점 설득력은 문서 설계 수준에서만 해소됐다.

## 3. 종합 판정과 조치 연결

| 결함 | 설계 문서 | U1.5 반영 | 잔여 조치 |
|---|---|---|---|
| #1 재접근 불능(치명) | `docs/reaccess-and-receipt-design.md` 확정 | 이메일 필드 0반영 | T-15 수용조건에 "이메일 필드 + 헬퍼 EN" 포함 완료 |
| #2 컷 블록 설득력(치명) | `docs/cutblock-copy-en-kr.md` 확정 | 구조 반영 · 샘플 3문장·가치 프레임 미반영 · $12 오류 | T-15 수용조건에 "샘플 3문장 + 가치 프레임 + {{PRICE}} 1관화" 포함 완료 |

두 결함 모두 설계→화면 전달 단계(재생성 프롬프트 주입 누락 추정 [추론])에서 끊겼다. T-15의 수용조건이 이 갭을 직접 검사하므로, 재생성 후 본 문서의 대조 표를 같은 OCR 방법으로 재실행하면 반영 여부가 기계적으로 확정된다.

## 4. 방법론·한계

- 증거: macOS Vision(ocrmac) 밴드(1400px)별 전사, y좌표 상단 기준 픽셀. 비전 LLM 자유 판독은 2회 상충(결제 화면을 서로 다른 서드파티 페이월로 읽음)으로 기각했다. 상세는 `docs/t14-retrial-worksheet.md` §1.
- OCR 미검출은 "부재"의 강증거이지만 소형·저대비 텍스트를 놓칠 수 있다. 본 문서의 미반영 판정 중 이메일 필드·샘플 문장은 화면 구조상 중형 텍스트여서 누락 가능성이 낮다 [추론]. 최종 육안 확인은 사람이 한다.
- 워크플로 상 이 문서는 판정 기록이며, 화면 수정 권한(재생성 실행)은 코디네이터·STITCH 태스크에 있다.
