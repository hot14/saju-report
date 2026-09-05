# Copy Deck V2 · English, 7 Screens (Copy Deck v2 EN)

> 작성: 2026-09-05 · 담당: 톤-EN카피 워커 (task_f1678a5d7e98 · 2차 파견 태그 I3·U4·U9·X5)
> 지위: V2 영어 화면 카피의 SSOT 후보. `docs/copy-deck-v2-kr.md`의 번안이면서, EN 고유 게이트(점술 어휘 3종 0건 · em-dash 0건 · CTA 인텐트별 라벨 1종)를 통과한 문안 집합. KR 덱과 충돌하는 행이 생기면 코디네이터 판정 전까지 KR 덱이 우선이다.
> 짝 문서: `docs/cutblock-copy-en-kr.md` (컷 블록 EN/KR 심층) · `docs/tone-alignment-guide.md` (팔레트·타이포·레이아웃 톤)

**Design Read (tasteskill §0.B):** Reading this as: the English copy deck for a saju-based self-understanding funnel of 7 screens, written for overseas K-culture users with no saju background, with a calm, structured editorial voice, leaning toward The Pattern family of prose where structure is stated in the declarative and the future stays conditional.

**추적(2차 지적 태그):** 재검증 태그 I3·U4·U9·X5의 원문 리포트는 본 워크트리에 반입되지 않았다. 확인 가능한 상류 근거로 아래를 흡수 처리했고, 매핑이 어긋나면 코디네이터가 태그를 재배정해도 본문 구조는 영향을 받지 않는다.

| 처리 내용 | 상류 근거 |
|---|---|
| EN 카피덱 신설 자체 | 게이트 머지 분석 누락 조각 #2 (EN 카피덱 부재) |
| "diagnosis" 의료 어휘 회피, 컷 헤드라인 대체 | UX 검증 Q10 · 수정 #4 |
| 대운 타이틀 오역 방지 (bank/dam 언어 미사용) | UX 검증 Q13 |
| 배지명 {{BADGE}} 토큰화, 확정 전 하드코딩 금지 | UX 검증 Q15 · 아카이브 O4 |
| 랜딩 3초 인지: birth chart·pattern 어휘, 점술 카테고리 단어 미사용 | UX 검증 Q1 |
| 데이원 가짐 수치 0건, 방법 투명성 문장으로 대체 | UX 검증 Q3 |
| 결제 신뢰 3줄 확정 문안 재사용 | UX 검증 §5.1 · P7/R3 |
| en +20% 길이 예산 준수 표기 | i18n-spec §3.3 |

---

## 1. 전역 카피 룰 (모든 화면에 적용)

1. **주어는 항상 2인칭 "you"** (R6). 궁합에서 상대는 인물이 아니라 조건으로 서술한다. 상대의 감정·행동에 대한 단정 금지.
2. **구조는 단정, 미래는 조건문.** "You are ..." 가능, "You will ..." 불가. 미래는 "When ..., you ..." / "... decides ..." 형태로만 다룬다.
3. **금지어**: `docs/copy-deck-v2-kr.md` 룰 3의 EN 집합(점술 3형제 및 별 어구)과 학파 용어(십신·격국·용신 계열의 영역어)를 그대로 적용한다. 본 문서에는 해당 문자열을 재기입하지 않고, 준수는 §11 기계 검색으로 증명한다.
4. **em-dash 0건 (U+2014, U+2013 문자 자체를 파일에 두지 않는다).** 구분이 필요하면 가운뎃점 1개, 쉼표, 콜론. 가운뎃점은 카피 문자열 줄당 최대 1개.
5. **물상 15 : 현상 85.** 화면당 은유·물상 언급은 적게, 나머지는 사람의 현상 이야기 (P2).
6. **토큰**: 워드마크 `{{BRAND}}` (P2 · 확정 연기 선언), 가격 `{{PRICE}}` (P1 · $8 채택, 표기는 토큰만), 배지명 `{{BADGE}}` (badge-naming-en.md 확정 전 · O4). 화면 하드코딩 금지.
7. **CTA 라벨은 인텐트별 1종, sentence case, 문장부호 없음**: 읽기 `Read my pattern` / 결제 `Pay now` / 저장 `Save my card` / 공유 `Share`. 동의어 변주 금지. 인용 캡처 `Keep this line as a card`는 KR 덱이 별도 인텐트(문장 카드화)로 둔 버튼의 번안, `Skip`은 내비게이션 컨트롤로 라벨 규칙 밖이다.
8. **숫자·통계를 지어내지 않는다.** 표기 숫자는 7 topics, 10 forms, 결제 조건처럼 실제 설계값만. 데이원 사회적 증거(사용자 수·평점) 0건 (Q3).
9. 문단 서브카피는 25단어 이하. 문장은 짧게. 의역 없이 그대로 사용한다.
10. **Plain English only.** saju 고유 용어의 영역어(일간·천간·대운 등의 직역 학파 용어)는 i18n glossary 확정 전까지 신규 도입 금지. 본 덱은 letters, pattern, reading, form 같은 일상어만 쓴다. 여덟 글자의 정식 영역어(Four Pillars 등)도 glossary 확정 후 대체 여부를 판정한다.
11. **문체**: 헤드라인·선언문·신뢰 문장은 축약 금지(It is, do not). 필드 헬퍼·에러는 축약 허용(don't). 표기는 en-US(전 로케일 기본). 디스플레이 카피는 전부 sentence case.
12. **{{BADGE}} 문법 계약**: 배지명은 `You are {{BADGE}}.` 슬롯과 단독 라벨 슬롯 양쪽에 그대로 들어가는 명사구로 badge-naming-en.md가 확정해야 한다(관사 포함 여부는 명명 문서가 정한다). 배지 한 줄 선언문(§9)은 배지명과 무관한 물성 문장이므로 명명 확정과 독립적으로 유효하다.

---

## 2. 화면 1 · 랜딩

| 요소 | 문안 |
|---|---|
| 워드마크 | {{BRAND}} |
| 히어로 헤드라인 | You are {{BADGE}}. |
| 히어로 서브 | A short video shows the letters of your day. {{BRAND}} reads the lifelong pattern they make. |
| CTA (먹색 단색) | Read my pattern |
| 배지 스트립 라벨 (유일 eyebrow) | The ten forms |
| 배지 스트립 안내문 | Your birth date assigns you one of ten forms. |
| 배지 스트립 예시 배지 3종 | {{BADGE}} ×3 (KR 덱과 동일 슬롯: 임수·갑목·병화 인스턴스) |
| 카드 프리뷰 헤드라인 | The result stays as a single card. |
| 카드 프리뷰 캡션 | The badge and one line carry the meaning on their own. |
| 마무리 섹션 헤드라인 | Your reading begins with eight letters. |
| 마무리 CTA | Read my pattern |
| 푸터 면책 | {{BRAND}} is a reading tool for self-understanding. It is not medical, legal, or financial advice. |
| 푸터 링크 | Privacy Policy · Terms of Service |

비고: 히어로는 워드마크/헤드라인/서브/CTA 4요소로 닫는다(§4.7). CTA 아래 태그라인·신뢰 스트립 없음. 히어로 헤드라인의 {{BADGE}}는 KR 덱과 동일하게 데모 인스턴스(임수) 예시 선언이며, 확정 배지명으로 치환된다. "The ten forms"의 forms는 물상의 임시 영역어로, glossary 확정 시 일괄 재판정 대상이다. 점술 카테고리 단어는 본 화면 어디에도 없다(Q1).

## 3. 화면 2 · 입력

| 요소 | 문안 |
|---|---|
| 화면 타이틀 | Enter your date of birth. |
| 필드 라벨 | Year / Month / Day |
| 필드 헬퍼 | Dates default to the solar calendar. You can switch to lunar below. |
| 음력 토글 라벨 | Enter a lunar date |
| 섹션 (시각) 라벨 | Time of birth |
| 시각 헬퍼 | The closer to your exact time, the sharper the reading. |
| 시각 미상 옵션 (1급) | I don't know my birth time |
| 미상 옵션 헬퍼 | You can still get your reading. It covers fewer topics. |
| 필드 라벨 (선택) | City of birth |
| 도시 헬퍼 | Used only to adjust for local time. |
| 8슬롯 캡션 | Your eight letters fill these slots. |
| 프라이버시 라인 | Your entries are used only for your reading. Nothing is stored without separate consent. |
| CTA | Read my pattern |
| 필드 에러 (공통) | Please check this. |
| 필드 에러 (연도) | Enter the year in 4 digits. |
| 필드 에러 (범위) | Enter a year after 1900. |
| 필드 에러 (시각) | Pick a time, or tap I don't know my birth time. |

비고: 캘린더 위젯 없음(시드 규칙). 폼 라벨은 입력창 위(§4.6). 플레이스홀더를 라벨 대신 쓰지 않는다. 성별 필드의 사유 마이크로카피(UX Q4)는 제품 결정 전이라 본 덱에 미포함, 확정 시 갱신한다.

## 4. 화면 3 · 계산 중

| 요소 | 문안 |
|---|---|
| 상단 캡션 | Assembling your eight letters. |
| 4열 표기 (서브 비주얼 레이어) | 年 月 日 時 |
| 조립 단계 카피 (순차 리빌) | The letter of your birth year / The letter of your birth month / The letter of your birth day / The letter of your birth hour |
| 시각 미상 시 4열 표기 | 年 月 日 (時 생략) + 문장: With no birth hour, the reading uses the letters through the day. |
| 완료 문장 | Your eight letters are set. |
| 고정 캡션 (결정론 신뢰) | The same birth date always produces the same reading. |
| 스킵 버튼 | Skip |

비고: 단계 문구에 "Step 1" 류의 일련번호 금지(§9.F). 콘텐츠 자체가 라벨이다. 스피너·진행 바 없음(P1). 고정 캡션은 방법 투명성 라인으로, 데이원 가짜 수치를 대체하는 신뢰 장치다(Q3).

## 5. 화면 4 · 무료 결과 (구조)
| 요소 | 문안 |
|---|---|
| 정체성 카드 배지 | {{BADGE}} |
| 정체성 카드 선언문 | You are {{BADGE}}. |
| 정체성 카드 한 줄 | It gathers wide, and runs deep. |
| 정체성 카드 시그니처 | {{BRAND}} |
| 구조 본문 (샘플 3문장, 톤 정답지) | Your energy is water that weakens in tight places and does its work as it spreads wide. In work where narrow frames and short deadlines repeat, your pattern is to tire before your skill gives out. As your role widens, you grow steadier. |
| 컷 블록 헤드라인 | This is your structure. |
| 컷 블록 전환문 | Next, how to work with it. |
| 처방 프리뷰 (잠긴 3주제 타이틀) | Strong phases, weak phases / Patterns that repeat in relationships / When things change |
| 처방 프리뷰 (주제별 본문 샘플 1문장) | Your strength builds in phases that expand, and wears thin in phases that only maintain. / You grow steady in relationships where what you give gathers, and tire, over and over, where it all drains away. / A turn in the current arrives in your mid-thirties, and what you widen then decides how deep the next water runs. |
| 컷 블록 CTA | Read my pattern · {{PRICE}} |
| 컷 블록 보조문 (1줄) | One payment unlocks all seven topics. |
| 컷 블록 가치 프레임 (신규 제안) | Pay once, and reread it whenever you like. |
| 공유 유도 문장 | Keep your result as a card, and share it. |
| 공유 버튼 | Save my card |

비고: 정체성 카드는 입력 직후 첫 화면 최상단(가드레일 §4, 첫 10초). 무료 결과에는 카운트다운·할인·가짜 긴급성 없음. 컷 블록의 EN 문안은 의료 어휘를 쓰지 않는다(Q10): diagnosis 대신 structure, prescription 대신 how to work with it. 프리뷰 문장은 실제 결과 생성 시 나오는 것과 같은 문장이다(같은 입력 = 같은 문장, P1). 컷 블록 전체 명세와 KR 쌍은 `docs/cutblock-copy-en-kr.md`가 소유하며, 본 화면 행은 그 문자열과 동일하다. 가치 프레임 행은 UX 수정 #4의 월구독 대비 영구 소유 프레임 번안으로, KR 덱 반영은 코디네이터 연결 필요다. "구조 본문" 명칭은 KR 덱의 진단 본문에 대응하는 EN 화면 용어다(사용자 노출 문자열 아님).

## 6. 화면 5 · 결제

| 요소 | 문안 |
|---|---|
| 상품 요약 카드 | Full reading · 7 topics |
| 상품 요약 보조문 | Available the moment you pay. |
| 가격 표기 | {{PRICE}} |
| 보증 3줄 (영수증 스타일 고정) | One-time payment. No subscription. / Delivered instantly. / Full refund, no questions asked. |
| 지불 버튼 | Apple Pay (로고 포함 필수, 결함 #2) / Google Pay |
| 카드 폼 라벨 | Card number / Expiry date / Security code |
| 카드 폼 에러 | Check the card number. / Check the expiry date. |
| 최종 CTA | Pay now |
| 푸터 면책 | {{BRAND}} is a reading tool for self-understanding. It is not medical, legal, or financial advice. |

비고: 배지·타이머·업셀 없음(P7·시드 규칙). 지불 수단이 먼저, 카드 폼은 그 아래 조용히. 보증 3줄은 UX §5.1의 확정 문안 그대로다. 재접근 이메일+매직 링크(UX 수정 #3)와 통화 표기 정책(i18n 대기)은 결정 후 본 덱에 행을 추가한다. {{PRICE}}의 표시 통화 규칙은 i18n-spec과 합의 후 확정한다.

## 7. 화면 6 · 유료 결과 (처방, 7챕터)

| 요소 | 문안 |
|---|---|
| 상단 배지 | {{BADGE}} |
| 챕터 내비 | 7개 점 레일 (기능 콘텐츠, 라벨 없음) |
| 챕터 1 타이틀 | The form that made you |
| 챕터 2 타이틀 | How your energy moves |
| 챕터 3 타이틀 | Strong phases, weak phases |
| 챕터 4 타이틀 | Patterns in your work |
| 챕터 5 타이틀 | Patterns that repeat in relationships |
| 챕터 6 타이틀 | How you meet money |
| 챕터 7 타이틀 | When things change |
| 본문 처방 샘플 (톤 정답지) | A wide lake needs no dam. The work is to manage what flows in, so the water never runs dry. You recover not by widening the vessel, but by narrowing the places where it drains. |
| 대운 타임라인 리드 | Every ten years, your current turns. |
| 대운 샘플 (미래 조건문) | A turn in the current arrives in your mid-thirties. What you widen then decides how deep the next water runs. |
| 근거 태그 (모노, 인라인) | Node B2 · the river keeps its flow through metal |
| 인용 저장 버튼 | Keep this line as a card |
| 하단 고정 버튼 | Save my card |

비고: 챕터 제목은 KR 덱 확정본의 번안이다. 챕터 7과 대운 리드는 둑·제방 언어(allegory pun)를 쓰지 않는다(Q13): current, turn 어휘로 물 은유를 유지한다. 본문 처방 샘플의 EN은 처방을 "The work is ..." 로 서술해 의료 어휘를 회피했다. 근거 태그는 재현성 신뢰의 언어화(P1). 본문 640px 단일 단, 16px, en 행간 1.6 · 행폭 66ch (i18n 매트릭스 준용).

## 8. 화면 7 · 공유 카드

| 요소 | 문안 |
|---|---|
| 카드 배지 | {{BADGE}} |
| 카드 한자 (서브 레이어) | 壬水 |
| 카드 한 줄 | It gathers wide, and runs deep. |
| 카드 워드마크 | {{BRAND}} |
| 카드 시그니처 | 오행 5도트 (시맨틱, 장식 아님) |
| 카드 밖 안내문 | The card alone carries the meaning. |
| 저장 버튼 | Save my card |
| 공유 버튼 | Share |

비고: 카드 문구는 공개돼도 수치·민감 정보 미포함(R1). 1:1/4:5 규격, OG 겸용. 카드 수신자의 루프백 문안(카드에서 랜딩으로 가는 CTA·URL)은 공유카드 V2 스펙(UX §4.3) 확정 후 본 덱에 추가한다.

---

## 9. 10일간 배지 한 줄 문형 라이브러리

형식: 배지명은 전부 `{{BADGE}}` 토큰(badge-naming-en.md 확정 전 · O4). 한 줄 선언문은 구조 단정문만 쓰는 최종 카피며, 배지명이 어떻게 확정돼도 물성 서술이라 성립한다. KR 키 열은 명명 문서 작성자를 위한 참조다.

| {{BADGE}} | KR 키 (참조) | 한자 | 한 줄 선언문 |
|---|---|---|---|
| {{BADGE}} | 갑목 · 큰 나무 | 甲木 | A trunk that reaches up, roots that reach down. |
| {{BADGE}} | 을목 · 작은 나무 | 乙木 | It bends without breaking. |
| {{BADGE}} | 병화 · 태양 | 丙火 | Heat that reaches wide. |
| {{BADGE}} | 정화 · 달 | 丁火 | A light that lingers close. |
| {{BADGE}} | 무토 · 큰 산 | 戊土 | A ground too heavy to shift. |
| {{BADGE}} | 기토 · 정원 흙 | 己土 | Soil that keeps what you plant alive. |
| {{BADGE}} | 경금 · 큰 쇠 | 庚金 | The hardness of a forged surface. |
| {{BADGE}} | 신금 · 작은 쇠 | 辛金 | A gleam refined by fine work. |
| {{BADGE}} | 임수 · 넓은 호수 | 壬水 | Water that gathers wide and runs deep. |
| {{BADGE}} | 계수 · 시냇물 | 癸水 | Water that makes its way, and sinks in. |

주석: (a) 정화의 달은 물상명 텍스트로만 존재한다. 달 위상·천체 비주얼은 전면 금지(가드레일 §6). (b) 경금의 쇠는 도구 형상이 아니라 절삭면·경도의 물성(봉인 시트 참조). (c) KR 키의 명명은 design-direction v0.2 정식 표기(큰/작은 축)다. (d) EN 배지명은 astrobazi 계열과의 충돌 회피가 전제인 별도 명명 문서(badge-naming-en.md) 관할이며, 본 덱은 토큰만 둔다.

## 10. 관계 은유 한 줄 라이브러리 (궁합·공유용)

R6 원칙: 상대는 조건이다. "He is ..." 류의 상대 단정 대신 "When you meet ..., your ..." 조건문 구조만 쓴다. 노드명은 배지명이 아니라 일반 영어 명사라 토큰 없이 확정한다.

| 노드 | 문장 |
|---|---|
| dam | When you meet a dam, your water gathers and deepens. |
| stream | When you meet a stream, your lake mingles and widens. |
| great tree | When you meet a great tree, your water finds shade. |
| mountain | When you meet a mountain, your flow gains direction. |

KR 대응: `copy-deck-v2-kr.md` §10의 둑/시냿물/큰 나무/큰 산 4행과 1:1이다.

## 11. 기계적 자가검증 (tasteskill §9.G, §9.F, §4.5)

| 검사 | 기준 | 결과 |
|---|---|---|
| em-dash(U+2014) 및 en-dash(U+2013) | 0건 | 통과 (본 파일 전수 검색 0건, 검증 기록 참조) |
| 점술 어휘 3종 + 별 어구 (대소문자 무시) | 0건 | 통과 (금지 문자열을 본문에 기입하지 않았고, 전수 검색 0건) |
| 가운뎃점 | 카피 문자열 줄당 1개 이하 | 통과 (Read my pattern · {{PRICE}}, Full reading · 7 topics, Node B2 · ..., Privacy Policy · Terms of Service. 표 셀 안의 다중 문자열은 슬래시로 구분했고 UI에서는 각각 별도 줄) |
| CTA 인텐트 중복 | 인텐트별 라벨 1종 | 통과 (읽기 Read my pattern / 결제 Pay now / 저장 Save my card / 공유 Share. 별도 인텐트: 인용 캡처 Keep this line as a card. 컨트롤: Skip. 동의어 없음) |
| 상대 단정문 ("He is ...", "She will ..." 구조) | 0건 | 통과 (조건문형만 수록) |
| "You will ..." 미래 단정 | 0건 | 통과 (미래는 When 절과 decides 구조만) |
| 의료 어휘 (diagnosis, prescription, symptom 계열) | 사용자 노출 EN 카피 0건 | 통과 (Q10 대응: structure, work, phases 어휘로 대체. 본문 언급은 대체 설명을 위한 메타 텍스트다) |
| 히어로 서브 길이 | 25단어 이하 | 통과 (16단어) |
| en-US 길이 예산 (i18n-spec §3.3, +20%) | 주요 롱스트링 초과 없음 | 통과 (구조 본문 EN 43단어 / KR 3문장 대응, en은 ko 대비 정상 범위. 버튼·배지 라벨 전부 28자 이내) |

검증 기록: 본 파일 제출 전에 U+2014, U+2013, 금지 어휘 3종을 대소문자 무시로 전수 검색하여 0건을 확인했다. 규칙 문면에서도 해당 리터럴을 쓰지 않았다. 가운뎃점은 카피 문자열 기준으로 전 줄 최대 1개다.

### 남은 연결 필요 (코디네이터)

1. `docs/copy-deck-v2-kr.md` 화면 4: 컷 블록 행에 가치 프레임 1줄 추가와 본문 샘플 3문장 행 추가를 제안한다(`docs/cutblock-copy-en-kr.md` 참조).
2. `docs/i18n-spec.md` §3.3 예시문 `Read my full pattern`을 본 덱의 확정 라벨 `Read my pattern`으로 맞추는 일관화(i18n 소유).
3. 배지명 확정 시(badge-naming-en.md 수령 후): 본 덱의 {{BADGE}} 전 수 치환 + "The ten forms" 물상 영역어의 glossary 재판정.
4. UX 수정 #3(재접근 이메일)·공유카드 V2 스펙(루프백 문안) 확정 시 본 덱 갱신.
