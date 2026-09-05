# 컷 블록 카피 EN/KR (Cut Block Copy, 무료 결과 → 결제 전환점)

> 작성: 2026-09-05 · 담당: 톤-EN카피 워커 (task_f1678a5d7e98 · 2차 파견 태그 U3)
> 지위: `docs/copy-deck-v2-kr.md` 화면 4 컷 블록 행에 대한 갱신 제안 + EN 대응문의 소유 문서. 기존 파일 수정 금지 규칙에 따라 본 문서가 제안을 보유하고, 반영은 코디네이터 연결 작업이다.
> 짝 문서: `docs/copy-deck-v2-en.md` 화면 5(무료 결과)의 컷 블록 행은 본 문서의 문자열과 동일하다.

**Design Read (tasteskill §0.B):** Reading this as: the single highest-stakes copy moment of a 7-screen saju self-understanding funnel, where the free structure reading hands off to the paid 7-topic guidance, for overseas K-culture users, with a calm editorial voice that proves value by showing real sentences instead of naming locked titles.

## 1. 배경과 설계 의도

| 문제 | 근거 | 본 문서의 처리 |
|---|---|---|
| 컷 지점 설득력 부족: 잠긴 주제 제목 3개는 "무엇이 잠겼는지"만 말하고 "열면 얼마나 좋은지"를 증명하지 못한다 | UX 검증 리스크 #2 (치명) · 수정 #4 | 주제별 **본문 샘플 1문장씩 3개**를 프리뷰에 실제로 보여준다 |
| EN 초안 "HERE, THE DIAGNOSIS ENDS"의 의료 진단 무드 | UX 검증 Q10 · R7 | EN은 structure / work with it 어휘로 대체. KR은 확정 덱의 진단·처방 문안을 유지한다 |
| 가격 가치 프레임 부재: 월구독 서비스 대비 "한 번 결제로 영구 소유"가 최강 가치 제안인데 문안이 없었다 | UX 검증 Q11 가설 · 수정 #4 | 가치 프레임 1줄 신규 제안 (EN/KR) |
| 컷 지점은 최고 품질 디자인 순간이어야 한다는 원칙 | R2 | §4 레이아웃 노트에 디자인 요구사항 명시 |

톤 계승: `copy-deck-v2-kr.md`의 전역 룰을 그대로 따른다(주어 당신/you · 구조 단정과 미래 조건문 · em-dash 0 · 점술 어휘 0 · 물상 15 : 현상 85 · CTA 인텐트별 라벨 1종).

## 2. 컷 블록 전체 카피 EN/KR

데모 인스턴트는 KR 덱과 동일하게 임수(壬水)이며, 배지명은 EN 확정 전 토큰으로 둔다.

| 요소 | 한국어 | English |
|---|---|---|
| 컷 헤드라인 | 여기까지가 진단입니다. | This is your structure. |
| 전환문 | 다음부터는 처방입니다. | Next, how to work with it. |
| 주제 1 타이틀 | 강한 국면, 약한 국면 | Strong phases, weak phases |
| 주제 1 본문 샘플 | 당신의 힘은 확장하는 국면에서 붙고, 유지로만 남는 국면에서 닳습니다. | Your strength builds in phases that expand, and wears thin in phases that only maintain. |
| 주제 2 타이틀 | 관계에서 반복되는 패턴 | Patterns that repeat in relationships |
| 주제 2 본문 샘플 | 당신은 주고 쌓이는 관계에서 단단해지고, 주는 것만 흘러나가는 관계에서 반복해서 지칩니다. | You grow steady in relationships where what you give gathers, and tire, over and over, where it all drains away. |
| 주제 3 타이틀 | 언제 달라지는가 | When things change |
| 주제 3 본문 샘플 | 30대 중반에 흐름이 바뀌는 구간이 오고, 그때 무엇을 넓히는지에 따라 다음 물의 깊이가 정해집니다. | A turn in the current arrives in your mid-thirties, and what you widen then decides how deep the next water runs. |
| 컷 CTA | 내 패턴 읽기 · {{PRICE}} | Read my pattern · {{PRICE}} |
| 보조문 (1줄) | 1회 결제로 7개 주제 전체를 읽을 수 있습니다. | One payment unlocks all seven topics. |
| 가치 프레임 (신규 제안) | 결제 한 번으로 언제든 다시 읽을 수 있습니다. | Pay once, and reread it whenever you like. |
| 공유 유도 문장 | 카드 한 장으로 결과를 남기고, 나눌 수 있습니다. | Keep your result as a card, and share it. |
| 공유 버튼 | 카드 저장하기 | Save my card |

보존/신규 구분: 컷 헤드라인·전환문·CTA·보조문·공유 2행의 KR은 확정 KR 덱 문안 그대로다. 신규는 주제별 본문 샘플 3문장(KR/EN), 가치 프레임(KR/EN)이다.

## 3. 처방 본문 샘플 3문장 톤 해설

각 문장이 어떤 룰로 쓰였는지의 정답지. 화면 구현 시 이 톤에서 벗어나면 반려다.

1. **주제 1 (강한 국면, 약한 국면) · 구조 단정문.** 힘의 증감을 국면의 성질(확장/유지)로 돌리는 물성 서술이다. 사용자 노력이나 성격 결함으로 돌리지 않는다. EN은 builds / wears thin 대구로 확장과 마모를 짝지었다.
2. **주제 2 (관계에서 반복되는 패턴) · 반복의 증거 + R6 양립.** 상대를 특정하지 않고 관계의 조건(쌓이는가, 흘러나가기만 하는가)으로 패턴을 말한다. "over and over"(반복해서)가 반복 패턴 주제의 증거어다. 상대 단정문은 0건.
3. **주제 3 (언제 달라지는가) · 미래 조건문.** 시점(30대 중반)은 오지만 결과는 단정하지 않는다. "그때 무엇을 넓히는지에 따라 / what you widen then decides" 구조로, 변화의 주어가 사용자 행동에 남는다. KR 2문장판(유료 결과 본문용)은 KR 덱 화면 6의 대운 샘플과 동일하며, 본 프리뷰용은 1문장으로 압축했다.

물상 비율: 3문장 중 물 은유는 주제 3의 "흐름·물의 깊이"와 주제 1·2의 접지된 동사뿐이다. 나머지는 사람의 현상 서술로 채운다(물상 15 : 현상 85).

## 4. 레이아웃·디자인 노트 (구현 게이트)

1. 프리뷰 카드 3장은 타이틀 + 본문 샘플 1문장을 실제로 보여준다. 잠김 표시는 기능적 최소(자물쇠 1개 + 총량 안내)로 하고, 카운트다운·할인·가짜 긴급성은 금지(KR 덱 화면 4 비고 승계).
2. 샘플 문장은 결제 후 유료 결과에 실제로 나오는 문장 생성기의 출력이다. 같은 입력 = 같은 문장(P1). 컷 화면 전용으로 따로 쓰는 문장을 만들지 않는다.
3. 컷 지점은 퍼널에서 가장 높은 품질을 요구하는 순간이다(R2). 먹색 단색 CTA + 한지 여백 체계(tone 가이드 §6)를 그대로 쓰고, 별도 장식을 추가하지 않는다.
4. CTA 라벨은 인텐트 단일 원칙: KR "내 패턴 읽기 · {{PRICE}}" / EN "Read my pattern · {{PRICE}}". 가운뎃점 1개, em-dash 금지.
5. 데모 인스턴스 임수의 {{BADGE}} 치환은 badge-naming-en.md 확정 후 전 덱과 함께 일괄 실행한다.

## 5. i18n 카피덱 키 제안 (i18n 워커 연동)

| 키 | 값(en-US) | 비고 |
|---|---|---|
| free.cut.headline | This is your structure. | |
| free.cut.transition | Next, how to work with it. | |
| free.cut.preview.t1.title | Strong phases, weak phases | maxChars 40 |
| free.cut.preview.t1.sample | Your strength builds in phases that expand, and wears thin in phases that only maintain. | maxChars 130 |
| free.cut.preview.t2.title | Patterns that repeat in relationships | maxChars 50 |
| free.cut.preview.t2.sample | You grow steady in relationships where what you give gathers, and tire, over and over, where it all drains away. | maxChars 150 |
| free.cut.preview.t3.title | When things change | maxChars 30 |
| free.cut.preview.t3.sample | A turn in the current arrives in your mid-thirties, and what you widen then decides how deep the next water runs. | maxChars 140 |
| free.cut.cta | Read my pattern · {price, number, ::currency/USD} | i18n-spec §3.3 예시문과 라벨 단일화 필요(예시의 full 단어 제거) |
| free.cut.sub | One payment unlocks all seven topics. | |
| free.cut.value | Pay once, and reread it whenever you like. | 신규 |
| free.cut.share-lead | Keep your result as a card, and share it. | |
| free.cut.save | Save my card | |

## 6. 기계적 자가검증

| 검사 | 기준 | 결과 |
|---|---|---|
| em-dash(U+2014) 및 en-dash(U+2013) | 0건 | 통과 (본 파일 전수 검색 0건) |
| 점술 어휘 3종 (대소문자 무시) | 0건 | 통과 (본문 미기입 + 전수 검색 0건) |
| 가운뎃점 | 카피 문자열당 1개 이하 | 통과 (CTA 2언어 각 1개. 표 셀의 다중 문자열은 행 분리) |
| CTA 인텐트 중복 | 인텐트별 라벨 1종 | 통과 (읽기 내 패턴 읽기 / Read my pattern. 저장 카드 저장하기 / Save my card) |
| 상대 단정문 | 0건 | 통과 (관계 문장은 조건형) |
| 미래 단정 ("~될 겁니다", "You will") | 0건 | 통과 (주제 3은 조건문) |
| 의료 어휘 (EN) | 사용자 노출 카피 0건 | 통과 (structure, work with it 사용. §1의 원문 인용은 폐기 대상 문구의 기록이다) |

검증 기록: 본 파일 제출 전에 U+2014, U+2013, 점술 어휘 3종을 대소문자 무시로 전수 검색하여 0건을 확인했다.

## 7. 연결 필요 (코디네이터)

1. `docs/copy-deck-v2-kr.md` 화면 4: 컷 블록에 "처방 프리뷰 (주제별 본문 샘플)" 행 3개와 "가치 프레임" 행 1개 추가 반영.
2. `docs/i18n-spec.md` §3.3: 예시문의 CTA 라벨을 본 문서 §5 확정값과 일관화.
3. 배지명 확정 시 {{BADGE}} 일괄 치환(EN 덱과 동일 배치).
