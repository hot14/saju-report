# 게이트-CTO 해결사 · 발견별 실행 해결책 (2026-09-05)

> Design Read (tasteskill §0.B): Reading this as: 게이트 산출물 3건(UX 검증·톤 정합·i18n)의 결함 목록과 비판 포인트를 마스터 머지 가능한 실행 계획으로 환원하는 CTO 리뷰 문서, with 의사결정 우선순위·소유자·시간 추정 포함, leaning toward 기존 파일 수정 금지 원칙 하의 "결정 기록 + 신규 문서 + 코디네이터 연결 커밋" 3트랙 해결.

## 0. 입력물 상태와 요약 결론 3줄

**입력물 (전수 열람 완료):**

| 소스 | 위치 | 상태 |
|---|---|---|
| UX 검증 리포트 | `wt-ux-validation-5/docs/ux-validation-report.md` (28KB) | 열람. 발견 Q1~Q18 + 이탈 리스크 12건 + 수정 TOP10 + 연결 6건 |
| 톤 정합 가이드 | `wt-tone-alignment-5/docs/tone-alignment-guide.md` (25KB) | 열람. §14 조건부 합격 + 필수 수정 4건 + 연결 7건 |
| 카피 덱 v2 KR | `wt-tone-alignment-5/docs/copy-deck-v2-kr.md` (13KB) | 열람. 7화면 카피 SSOT + 배지 문형 라이브러리 |
| i18n 사양 | `wt-i18n-multilang-5/docs/i18n-spec.md` (17KB) + `styles/typography-multilang.css` (220줄) | 열람. 10-로케일 조판·카피덱 스펙 + base 특이성 결함 발견 |
| 악마적 비판 리포트 | `docs/gate-devil-advocate.md` | **미발행.** wt-gate-devil-advocate 워크트리에 docs/ 없음. 본 문서는 3리포트 기준으로 작성, §7에 재심 슬롯 확보 |

**결론 3줄:**

1. **모든 지적은 3트랙으로 해결된다**: (a) 코디네이터 프로덕트 결정 2건(가격·서비스명), (b) SSOT 기존 파일 정합 커밋(다크 v0.1 잔여·Fraunces·em-dash·토큰), (c) 워커 2차 신규 문서(재접근 설계·컷 블록 카피·EN 카피 덱·공유카드 스펙·EN 배지명). 새 프레임워크나 재작업은 불필요하다.
2. **최우선 블로커는 EN 배지명 10종 미확정이다**(O4 미완결). 공유카드 생성(U1)·EN 카피 덱(I3)·배지 자산 제작이 전부 이것에 걸려 있으므로 fix-now 최선순위로 올린다. 가격 결정(P1)은 그 다음이다.
3. **크리티컬 패스는 약 2 근무일**이다: 결정+배지명(0.5일) → EN 카피 덱·스펙 문서 병렬(0.5일) → V2 화면 재생성+게이트 검증(1일). 악마 게이트는 이 패스와 병렬 발행 가능하다.

---

## 1. 발견 인벤토리와 해결안

ID 체계: P=프로덕트 결정 · U=UX 리포트 발견 · T=톤 리포트 발견 · I=i18n 발견 · X=CTO 크로스 발견.
소유자: COORD=코디네이터(기존 파일 수정 권한 보유) · UX=UX-검증 워커 2차 · TONE=톤-정합 워커 2차 · I18N=i18n 워커 2차 · STITCH=화면 생성 태스크(COORD 배경 작업) · DEVIL=악마 게이트 워커 · CTO=본 해결사.
시간: h=시간, d=근무일. 근거 파일은 전부 실재 확인 완료.

### 1.1 프로덕트 결정 (워커 산출물의 공통 전제)

| ID | 발견 | 해결안 (파일·작업) | 소유 | 시간 | 단계 |
|---|---|---|---|---|---|
| P1 | 가격 $8/$12 불일치. DESIGN.md §4가 "$12 표기" 예시와 "불일치 미해결"을 스스로 기록. UX Q11은 $8~9.90 밴드 권고(경쟁: Co-Star $8.99/월, SajuRoot T1 $9.90) | **$8 확정 채택 권고.** 신규 `docs/product-decisions.md`에 결정 기록(근거 3줄: 월구독 1개월 대비 영구 소유 프레임, 경쟁 밴드 중간, 업셀 여지 보존). COORD가 DESIGN.md·worker-brief의 $12 잔여를 "USD 8 확정"으로 정합 커밋. 카피 덱 `{{PRICE}}`는 치환 금지 유지(하드코딩 방침 승계) | COORD | 1h | **fix-now** |
| P2 | 서비스명·워드마크 미확정(O3). Stitch 임의 워드마크 "NOCTURNE OBANG" 등이 전 화면 교체 대상(결함 #3) | 두 갈래 중 택일을 `docs/product-decisions.md`에 선언: (a) 도메인 4종·상표 검토 후 확정(2h 조사) 또는 (b) **{{BRAND}} 토큰 유지 결정**(0.5h, 구현 직전까지 연기하는 것이 정직). 어느 쪽이든 "워드마크 자리 토큰 외 문자 0" 규칙을 게이트 G2에 추가 | COORD | 0.5~2h | **fix-now** |

### 1.2 UX 검증 리포트 발견

| ID | 발견 (출처) | 해결안 (파일·작업) | 소유 | 시간 | 단계 |
|---|---|---|---|---|---|
| U1 | **V2 화면 실물 부재.** flows-v2/ = landing_ko.png 1장(105×512, 금지 카피 "운명" 판독) [파일]. steering-log S4 "KR 7장" 기록과 불일치. 검증·구현 전체의 전제 | STITCH 재생성: EN 6화면 + 공유카드 ≥750px 폭, flows-v2/ 적재. 프롬프트에 T1 재작성본(교체된 stitch-prompts.md) + 확정 카피 덱 EN/KR 문장 + U12·U13 배치 규칙 + 금지어 게이트(운명·운·운세·fortune·luck·destiny) 주입. landing_ko.png 폐기. 수검 체크리스트는 기존 stitch-prompts.md §생성 후 체크리스트 활용 | STITCH(COORD) | 1d | **fix-now** |
| U2 | **구매 후 재접근 불능**(이탈 리스크 #1 치명). P6 "계정 없음"과 guardrail §5 "결제 1회 반복 조회" 모순. 환불 분쟁·CS 귀결 | 신규 `docs/reaccess-and-receipt-design.md`: 결제 화면 이메일 1필드 + "영수증과 재열람 링크를 보냅니다" 안내 + 매직 링크 발송 플로우(만료·재발급 규칙 포함) + 결제 화면 카피 덱 반영분 제안(EN/KR 각 3문장). 구현은 후속, 설계 확정이 게이트 | UX | 0.5d | **fix-now** |
| U3 | **컷 블록 설득력 부족**(리스크 #2 치명). "HERE, THE DIAGNOSIS ENDS" 의료 무드 + 프리뷰가 주제 제목 3개뿐 | 신규 `docs/cutblock-copy-en-kr.md`: 컷 헤드라인 대체안(KR "여기까지가 진단입니다."는 카피 덱 확정본 유지, EN 대체 3후보 제안) + **처방 본문 샘플 3문장**(7챕터에서 1문장씩 실제 톤 정답지 수준) + 가치 프레임 1줄("1회 결제로 7개 주제 전체" EN판 + 월구독 대비 영구 소유 프레임). 카피 덱 v2 확정문은 수정 불가이므로 본 문서가 증보 SSOT | TONE | 0.5d | **fix-now** |
| U4 | 3초 카테고리 불명(리스크 #3). product-analysis R4 "Korean astrology 병기"와 guardrail §1 점성학 차단 충돌 | EN 카피 덱(I3) 랜딩 히어로에 **"Your Korean birth chart, explained clearly. Calculations shown."**(확정 카피, archive digest §4) 채택 + "Korea's oldest personality system" 서브 라벨. astrology·fortune 어휘는 검색 메타(description·og 태그)로만 하향 이동하는 규칙을 동반 기록. R4 조항의 정합 커밋은 COORD 인계 목록에 추가 | TONE | 2h | **fix-now** |
| U5 | 결제 신뢰 미비 5건 중 잔여 3건(환불 이행 장치·통화 표기 정책·영수증=U2로 흡수) | 신규 `docs/payments-trust-plan.md`: 환불 1클릭 경로(영수증 이메일 하단 링크)·처리 기준·남용 정책 3줄, 통화 정책(1차: $USD 단일 표기, 지역 통화 병기는 U17 순차 오픈 시) | UX | 0.5d | fix-next |
| U6 | PSP 점술 제한 업종 리스크의 실행 계획 부재(Q18, R7) | `docs/payments-trust-plan.md` §PSP: "entertainment & self-reflection" 면책 증빙 패키지(카피·면책 문구 화면 배치) + Apple Pay/Google Pay 우선 전략 + PSP 2곳 사전 심사 체크리스트. 외부 조사 포함 | UX | 0.5d | fix-next |
| U7 | 입력 마찰: 성별 필드 사유 부재(Q4)·도시 필수 여부 미정(Q5)·시각 모름 결과 화면 미정의(Q6) | 신규 `docs/input-and-unknown-time-design.md`: (a) 성별 필드 사유 마이크로카피 + 응답 옵션·계산 규칙 명시안, (b) 도시 필수+자동완성 확정안(X6 불일치 해소, 아래 참조), (c) 시각 모름 결과 상태 설계(시주 공백 표기·신뢰도 표기·±40분 경계 카드 + "다른 계산기와 왜 다른가" 카드의 이식 판정) | UX | 0.5d | fix-next |
| U8 | 계산중 인위적 대기 이탈(리스크 #7). 스킵 노출 시점 미정 | `docs/input-and-unknown-time-design.md` §타이밍: 총 3~4초 상한·1초 후 스킵 노출·같은 입력 동일 시퀀스(P1 유지)를 설계 상수로 기록. 구현 게이트 항목화 | UX | 1h | fix-next |
| U9 | "WHEN THE BANKS ARRIVE" 대운 타이틀 오역(리스크 #8). 차별화 1번 자산 첫인상 오염 | EN 카피 덱(I3) 챕터 7 타이틀 재명명: "When your decades turn" / "Your ten-year map" 2후보 + KR "언제 달라지는가"(카피 덱 확정)와의 대응표. 채택 후 U1 재생성 프롬프트에 반영 | TONE | 1h | **fix-now** |
| U10 | 공유카드 V2 스펙 부재(§4.2 종합: 문구 덱·루프백·피드 대비·OG 렌더 방식 전부 미정). 확산 유일 수단 | 신규 `docs/share-card-v2-spec.md` §4.3의 5항을 상세화: 구성(오방 도트+한자 배지+영어 물상명+한 줄+하단 잉크 밴드), 문구는 카피 덱 §9·U14 배지명과 연동, 루프백("Read your own" 1행+URL), 밝은 카드+잉크 밴드 이중 구조(Q16), OG 동적 렌더 방식(서버 사이드, i18n-spec §2 OGP 항목과 연결), 1:1/4:5 겸용 규격. 실물 카드 3종(개인·궁합·아티스트)은 스펙 확정 후 U1에 추가 발주 | UX 주관 + TONE 카피 | 0.5d | **fix-now** |
| U11 | 가독성 토큰 하한: 본문 15px·캡션 10.5px·muted 대비 2.6:1 [실측] | COORD 정합 커밋: typography.css 개정에서 본문 하한 16px·캡션 12px·신뢰 문구 13px+잉크 색상 반영(I1 개정에 동반). 실기 검증(iPhone SE·Android 저밀도) 절차는 fix-next 문서로 | COORD 커밋 + UX 검증 | 2h + 0.5d(실기) | **fix-now**(토큰) / fix-next(실기) |
| U12 | 한자 격자 선행 노출 시 첫 화면 장벽(리스크 #10, Q8) | U1 재생성 프롬프트에 배치 규칙으로 주입: 영어 Day Master 카드 먼저, 한자 8글자 격자는 근거로 하단. 프롬프트 1줄이면 충분 | STITCH | 0.5h | **fix-now** |
| U13 | 10 일간 배지 vs 12-18 압축 유형 이중 노출(Q9). MBTI식 경계 명확성 훼손 | 노출 규칙 확정: 무료 결과 = 10 일간 정체성 카드 1체계만, 12-18 유형은 유료 처방 목차로. U1 프롬프트 주입 + COORD가 concept-guardrail §4·§5에 배치 문구 1줄 정합 커밋 | STITCH + COORD | 0.5h | **fix-now** |
| U14 | **EN 배지명 10종 미확정**(Q15·O4). astrobazi "The Flowing River 壬" 선점 회피 필요. 배지·카드·EN 카피 덱의 공통 전제인데 i18n 스펙이 구조만 정의하고 명명 제안을 누락 | 신규 `docs/badge-naming-en.md`: 10종 + 보조 1종(둑) EN 명명안. 문법은 "자연물 라벨 + 한 줄 정의" 유지, 어휘 교체(壬 = "The Open Lake" 계열 내부 후보 출발) + 한국 기원 서사 1줄. KR 명명(카피 덱 §9)과 1:1 대응표. **게이트 최선순위: U1·I3·U10이 대기 중** | I18N + TONE 검수 | 0.5d | **fix-now** |
| U15 | 데이원 그로스·SEO 유입 전략 부재(Q2). 공유카드 단일 채널 의존 | `docs/launch-growth-plan.md`(후속): K-pop 커뮤니티 시딩·크리에이터 협업·검색 메타 전략. 단 금지어 체계(점성 키워드 불가)와의 양립 답을 포함할 것 | UX + 프로덕트 | 1d | defer |
| U16 | 가짜 사회적 증거 리스크(Q3). 카피 덱 v2는 이미 수치 지어내기 0 원칙 준수로 대부분 해소 | 잔여: 샘플 차트 프리뷰(실제 계산 예시 1건)를 랜딩 신뢰 요소로 설계. `docs/launch-growth-plan.md` §신뢰에 수록 | UX | 0.5d | defer |
| U17 | 10 로케일 1차 지원 vs 폰트·줄나눔 정의 미완(Q17). i18n 스펙이 조판은 해결, 출시 순서는 "실측 후 판정"으로 열림 | `docs/locale-rollout-plan.md`: 1차 출시 EN+KR 단일, T1(ja·zh·en-GB) 2차, T2·T3 순차. i18n-spec §1 티어 체계를 출시 계획으로 전환. 스펙의 조판 자산은 그대로 유효하므로 폐기 아님 | I18N | 0.5d | defer |
| U18 | flows-verification.md 기록 부정확: 결함 #1을 "1건 렌더 비율"로 기록했으나 V1 21스크린 전수가 저해상도 썸네일. review.html 채점(A 56·C 76·A+C 87)은 화면 단위 근거로 승격 불가 | COORD 정합 커밋: flows-verification.md에 (a) 전수 저해상도 사실 재기록, (b) V1 flows/를 "참고용"으로 등급 강등, (c) 채점표는 방향 탐색 근거로 한정하는 주석 추가 | COORD | 0.5h | **fix-now** |

### 1.3 톤 정합 리포트 발견

| ID | 발견 (출처) | 해결안 (파일·작업) | 소유 | 시간 | 단계 |
|---|---|---|---|---|---|
| T1 | stitch-prompts.md 3결함: (a) "serif display (Fraunces)" 지시(tasteskill §4.1 금지 서체), (b) 화면 6 "deep ink background #211E1B"(가드레일 §1·§6 다크 금지 충돌), (c) 공통 접두어 배경 #FAF7F2가 확정 한지 #F7F3EA와 불일치 | COORD 정합 커밋: 04-design-tokens/stitch-prompts.md 재작성. (a) 라틴 디스플레이 Cormorant Garamond급으로 교체, (b) 화면 6을 한지 라이트 읽기 모드(640px 단일 단)로 재기술, (c) 배경 #F7F3EA 통일. 추가로 화면 1 헤드라인 "You are a great tree."·화면 2 "See my matches" 등 Stitch 초안 카피를 카피 덱 EN(I3) 확정문으로 교체. **U1 재생성의 직접 입력값이므로 최우선** | COORD | 1h | **fix-now** |
| T2 | 폼 필드 경계 #D8D2C7 대비 1.36:1 [실측]. 입력 경계로 불가 | COORD 정합 커밋: 신규 토큰 `--field-line #8E887F`(3.17:1)을 DESIGN.md·design-direction.md 토큰표에 편입. #D8D2C7는 장식 헤어라인 전용으로 용도 한정 주석 | COORD | T5에 포함 | **fix-now** |
| T3 | 서브텍스트 #A8A29A on 한지 2.28:1 [실측] 불합격. 다크 전용 뮤트를 라이트에 사용 | COORD 정합 커밋: 신규 토큰 `--muted-light #6F6A63`(4.84:1) 편입, #A8A29A는 다크 전용으로 강등 주석. U11 신뢰 문구 잉크 색상 규칙과 동일 커밋 | COORD | T5에 포함 | **fix-now** |
| T4 | 기존 문서 em-dash 잔여 2건(design-direction.md·product-analysis.md 예시 카피) | COORD 정합 커밋: 가운뎃점 또는 콜론 문장으로 치환. 대체문은 카피 덱 v2 수록본 사용. 기계 검증으로 전 design-ssot 0건 확인(게이트 G2 스크립트) | COORD | 0.5h | **fix-now** |
| T5 | DESIGN.md 전체가 v0.1 다크("Nocturne Obang" 먹 배경·Gold fill CTA)를 기술한 채임. worker-brief v0.2 밝은 토큰과 충돌. 워커 3인이 각기 다른 토큰을 읽는 상태(UX 수정#5) | COORD 정합 커밋(본 게이트 최대 커밋): 04-design-tokens/DESIGN.md을 v0.2 단일 원천으로 개정. 반영: 한지 #F7F3EA 배경·먹 #1B1B1E 텍스트·골드 #B98A2C(시그니처 한정), "Primary CTA: Gold fill" 삭제·먹색 단색 필+한지 문자(17.18:1)로 교체(tone 가이드 §2.4 확정본), 다크 배경 서술 전면 삭제, 다이얼 MOTION 4(DESIGN.md의 5는 brief 4와 불일치) 수정. design-direction.md는 v0.1 원본을 "폐기 아카이브" 머리글 추가 후 v0.2 지침은 DESIGN.md로 단일화 | COORD | 2h | **fix-now** |
| T6 | assets 표본 fraunces.png·instrument-serif.png 배제 미표기 | COORD 정합 커밋: 04-assets/INDEX.md에 배제 태그 + 이유(tasteskill §4.1) 1줄 | COORD | 0.5h | fix-next |
| T7 | 카피 덱 v2 줄바꿈 규칙 ↔ typography-multilang.css 상호 미검증(크로스 워커 의존) | I18N 2차: 카피 덱 EN/KR 전 키의 maxChars·줄바꿈을 매트릭스(i18n-spec §4)와 대조 검증. 결과를 `docs/i18n-qa-log.md`에 기록 | I18N + TONE | 1h | fix-next |
| T8 | §4.2 오버라이드 정당화(한지·먹·골드 소재 근거)와 대안 팔레트(Olive+Brick+Paper)·Surface 토큰이 워커 문서에만 존재. worker-brief "브랜드 정당화 문서화 필수"의 SSOT 편입 미완결 | COORD 정합 커밋: tone-alignment-guide.md §2·§3을 DESIGN.md 부록("팔레트 오버라이드 정당서")으로 편입 또는 링크 채택. 신규 토큰 3종(Muted·Field line·Surface #FDF8F8)도 동일 커밋에 편입 | COORD | 1h | **fix-now** |
| T9 | 6화면 미수령으로 §14 판정이 규칙 수준(조건부). 실물 수령 후 재판정 필요 | U1 완료 직후 TONE이 §8 체크리스트로 7화면 재판정. 조건부 4건 중 구현 게이트 항목(reduced-motion·useEffect·CWV)은 구현 단계 이관 기록 | TONE | 0.5d | fix-next |
| T10 | paid_result 다크 배경 폐기 확정(tone §6-3)이 프롬프트에 미반영 | T1에 흡수(화면 6 재기술). 별도 작업 없음 | COORD | T1에 포함 | **fix-now** |

### 1.4 i18n 발견

| ID | 발견 (출처) | 해결안 (파일·작업) | 소유 | 시간 | 단계 |
|---|---|---|---|---|---|
| I1 | base typography.css 특이성 충돌 [실측]: `h1,h2,h3 { line-height: var(--lh-display) }`(0,0,1)이 `:lang()` 규칙(0,1,0)에 밀려 de-facto 사망. 디스플레이 행간 1.15 미적용 | COORD 정합 커밋(base 개정은 i18n 워커 수정 금지로 COORD 소유): typography.css v1.2에서 `:lang(ko) h1, :lang(ko) h2...` 계층 셀렉터로 특이성 상향 후 1.15 복원. multilang.css의 th 1.3·vi 1.25 명시 오버라이드는 유지. 재검증: ego-browser getComputedStyle 31항목 재실측 | COORD | 1h | **fix-now** |
| I2 | 카피덱 실체 미생성. 스펙(copydeck/locales·schema.json·glossary.md)만 존재 | I18N 2차: `copydeck/` 스캐폴드 생성. 1차는 ko-KR.json(카피 덱 v2 전수 이식) + en-US.json(EN 카피 덱 I3 이식) + schema.json + glossary.md(물상 10종·Day Master). CI 게이트 4종(키 동일성·ICU·maxChars·glossary) 스크립트 동봉 | I18N | 1d | fix-next |
| I3 | **EN 카피 덱 부재.** copy-deck-v2-kr.md는 KR뿐. 영어 우선 서비스의 1차 언어 카피가 없음(i18n 폴백 en-US 루트인데 en-US 원본이 존재하지 않음). CTO 크로스 확인 | 신규 `docs/copy-deck-v2-en.md`: 7화면 EN 전체 문안. 원천: 확정 카피(archive digest §4) + 카피 덱 KR의 충실한 대역 + U3 컷 블록 EN + U4 포지셔닝 + U9 재명명 타이틀 + U14 배지명. 기계 자가검증(금지어·em-dash·CTA 4종 라벨 EN판: Read my pattern 등) 동봉. **U1 재생성 프롬프트의 직접 입력값** | TONE | 1d | **fix-now** |
| I4 | multilang.css 적용을 위한 link 교체 미착수(교체 전 신규 로케일 규칙 미적용) | 구현 단계 작업 목록에 등록: 데모·프로덕션 페이지 link를 /styles/typography-multilang.css로 교체. 본 게이트 범위 외(문서 저장소에 적용 대상 HTML은 typography-demo.html뿐이고 이는 I6와 동일 작업) | 구현 | 0.5h | fix-next |
| I5 | @import 왕복 직렬 비용(프로덕션 번들 시 병합 권장) | 구현 파이프라인 과제로 등록: lightningcss/esbuild 병합 + §7.1 경로 재계산. 게이트 외 | 구현 | 0.5d | defer |
| I6 | typography-demo.html 10-로케일 확장 미실시(§7-4) | I18N 2차: `styles/typography-demo-multilang.html` 신규 생성(기존 데모 무수정). 10 로케일 샘플 + §6 QA 체크리스트 하이라이트 | I18N | 0.5d | fix-next |
| I7 | th 불기 연도 입력 가드(폼 라벨 CE 병기 + 1900~2026 검증) | 구현·U7 문서에 반영: input-and-unknown-time-design.md §로케일 검증 규칙으로 기록 | UX + I18N | 1h | fix-next |
| I8 | ja·zh 한자 자형 폰트 렌더 QA(KR 폰트 폴백 = 스택 버그) | 구현 단계 QA 게이트로 이관(i18n-spec §6.2 항목 승계). 별도 문서 불요 | 구현 | 0 | defer |

### 1.5 CTO 크로스 발견 (3리포트 교차·게이트 운영)

| ID | 발견 | 해결안 | 소유 | 시간 | 단계 |
|---|---|---|---|---|---|
| X1 | 3리포트의 "연결 필요 사항" 합계 17건이 전량 코디네이터 인계로 누적. 코디네이터가 단일 병목 | 본 문서 §1·§4가 우선순위와 소유자를 재편: COORD 작업은 정합 커밋 5건(T1·T4·T5·T8·U18)으로 압축, 나머지는 워커 2차 신규 파일로 분산. COORD 순수 작업량 ~6h | CTO(편성 완료) | 0 | 완료 |
| X2 | docs/gate-devil-advocate.md 미발행. 게이트 입력 불완전 | DEVIL 워커 발행 후 본 문서 §7 재심 슬롯에서 fix-now 목록 증감. 악마 리포트의 신규 지적은 본 문서 ID 체계(P/U/T/I/X 뒤 D-)로 편입 | DEVIL + CTO | 0.5d | **fix-now**(병렬) |
| X3 | P1·P2 결정 미결이 워커 산출물 {{PRICE}}·{{BRAND}} 치환을 전면 대기시킴 | §1.1 해결안대로. 결정 없이는 G1 통과 불가 구조로 게이트에 명시 | COORD | §1.1 참조 | **fix-now** |
| X4 | 산출물 6파일이 3개 worktree에 분산(docs/ 5건 + styles/ 1건). 전부 새 파일이라 충돌은 없으나 통합 커밋 순서 필요 | COORD 머지 시퀀스 고정: (1) ux-validation → (2) tone-alignment → (3) i18n(styles/ 포함) → (4) 본 문서. 각 커밋 후 grep 게이트(G2 스크립트) 재실행 | COORD | 1h | **fix-now** |
| X5 | 카피 덱 히어로 서브 "짧은 영상은 하루의 글자를 알려줍니다"는 TikTok 데이원 채널 전제인데 해당 전략(U15)이 문서화되지 않음. EN 전환 시 맥락 소실 위험 | EN 카피 덱(I3) 랜딩 서브는 TikTok 특정을 제거한 일반형("A short video tells you the letter of your day..." 대신 채널 중립 문장)으로 작성하고, KR 원문 유지 여부는 U15 전략 확정 시 재판정. 카피 덱 v2는 수정 금지이므로 EN 덱에서 먼저 정합 | TONE | I3에 포함 | fix-next |
| X6 | 카피 덱 v2 입력 화면과 UX 권고 불일치: (a) 성별 필드가 카피 덱에 누락(Q4는 계산상 필요), (b) 도시가 "선택"으로 기재된 반면 UX Q5는 필수+자동완성 권고 | U7 문서(input-and-unknown-time-design.md)에서 단일 확정안을 내리고 COORD가 양쪽 문서의 정합 주석 커밋. 성별은 "계산에만 사용" 사유 카피와 함께 필드 유지가 기본안(대운 방향 계산 근거) | UX | U7에 포함 | fix-next |

---

## 2. 3단 분류 요약

### fix-now · 마스터 머지 전 완료 (19항목, 크리티컬 패스 ~2 근무일)

결정: **P1**(가격 $8) · **P2**(서비스명 선언)
재생성 전제: **U14**(EN 배지명) · **T1**(프롬프트 재작성) · **I3**(EN 카피 덱) · **U9**(대운 재명명)
화면: **U1**(V2 EN 7화면 재생성) · **U12**·**U13**(배치 규칙 프롬프트 주입)
치명 설계: **U2**(재접근) · **U3**(컷 블록) · **U4**(포지셔닝) · **U10**(공유카드 스펙)
SSOT 정합 커밋(COORD): **T5**(DESIGN.md v0.2 단일화, T2·T3 토큰 포함) · **T4**(em-dash) · **T8**(오버라이드 편입) · **U18**(검증 기록 정정) · **I1**(base 행간 개정) · **U11 토큰분**
게이트 운영: **X2**(악마 리포트 병렬 발행) · **X4**(통합 커밋 시퀀스)

### fix-next · 머지 직후 1~2 사이클 (11항목)

**U5**·**U6**(결제 신뢰 실행계획) · **U7**+**X6**+**I7**(입력·시각모름·로케일 검증 설계) · **U8**(계산중 타이밍) · **T6**(assets 배제 태그) · **T7**(카피 덱·CSS 상호검증) · **T9**(7화면 §14 재판정) · **I2**(카피덱 스캐폴드) · **I4**(link 교체) · **I6**(10-로케일 데모) · **X5**(히어로 서브 채널 중립화) · **U11 실기분**(가독성 실기 검증)

### defer · 출시 로드맵 (5항목)

**U15**(그로스·SEO 채널 전략) · **U16**(사회적 증거 대체·샘플 차트) · **U17**(8 로케일 순차 오픈 계획) · **I5**(폰트 번들 병합 파이프라인) · **I8**(ja·zh 자형 QA, 구현 게이트)

---

## 3. 워커 재배정 계획 (누가 무엇을)

| 워커 | 2차 임무 (신규 파일만 생성) | 선행 조건 | 예상 시간 |
|---|---|---|---|
| **COORD** (코디네이터) | ① P1·P2 결정 기록 `docs/product-decisions.md` ② SSOT 정합 커밋 5건: T1(stitch-prompts 재작성) → T5(DESIGN.md v0.2 단일화·T2·T3 토큰 편입) → T4(em-dash) → T8(오버라이드 부록) → U18+I1(typography.css·flows-verification 정정) ③ U1 재생성 지휘 ④ X4 통합 머지 시퀀스 | 즉시 착수 가능. ①이 전체의 시작점 | ~6h + 머지 1h |
| **UX-검증** (재배정) | ① `docs/reaccess-and-receipt-design.md`(U2) ② `docs/share-card-v2-spec.md`(U10, TONE 카피 협업) ③ `docs/payments-trust-plan.md`(U5·U6) ④ `docs/input-and-unknown-time-design.md`(U7·U8·I7·X6) | ①②는 즉시. ③④는 머지 후 | fix-now분 1d + fix-next분 1d |
| **TONE** (재배정) | ① `docs/copy-deck-v2-en.md`(I3+U4+U9+X5) ② `docs/cutblock-copy-en-kr.md`(U3) ③ U14 배지명 검수 ④ T9 7화면 재판정(머지 후) | ①은 U14 완료 후 착수가 이상적(배지명 참조). U14 확정 전이라면 배지명 자리 {{BADGE}} 토큰으로 먼저 작성 후 치환 | fix-now분 1.5d + fix-next분 0.5d |
| **I18N** (재배정) | ① `docs/badge-naming-en.md`(U14, **최선착수**: O4 완결) ② `copydeck/` 스캐폴드(I2) ③ T7 상호검증 + `docs/i18n-qa-log.md` ④ `styles/typography-demo-multilang.html`(I6) ⑤ `docs/locale-rollout-plan.md`(U17, defer) | ①은 즉시. 나머지는 머지 후 | fix-now분 0.5d + fix-next분 1.5d |
| **STITCH 태스크** (COORD 배경) | flows-v2/ EN 6화면+공유카드 ≥750px 재생성(U1). 입력: T1 재작성 프롬프트 + EN/KR 카피 덱 + U14 배지명 + U10 카드 스펙 + U12·U13 배치 규칙 + 금지어 게이트 | T1·I3·U14·U10 완료 후 | 1d |
| **DEVIL 워커** (신규 또는 기존 gate-devil-advocate) | `docs/gate-devil-advocate.md` 발행(X2). 입력: 본 문서 + 3리포트 | 본 문서 머지와 병렬 | 0.5d |
| **CTO 해결사** (본인) | 악마 리포트 도착 시 §7 재심·fix-now 목록 증감 | DEVIL 완료 후 | 0.5d |

**순서 다이어그램 (크리티컬 패스):**

```
D0 오전   P1·P2 결정(COORD) ──┐
D0 오전   U14 배지명(I18N+TONE) ─┤
D0 오후   T1 프롬프트 재작성(COORD, P1·P2 반영) ─┤
D0 오후   I3 EN 카피 덱(TONE) · U2·U10 설계(UX) [병렬]
D1 오전   U1 화면 재생성(STITCH) · SSOT 정합 커밋(COORD) [병렬]
D1 오후   게이트 검증(G1~G8 스크립트+수검) → X4 통합 커밋
D1~D2    DEVIL 리포트 → CTO 재심 → master 머지
```

---

## 4. master 머지 전 필수 통과 조건 (최소집합 8건)

각 조건은 관문 하나로 검증 가능해야 한다. "기분"이 아니라 스크립트·파일 존재 여부로 판정한다.

| # | 조건 | 판정 방법 |
|---|---|---|
| G1 | **프로덕트 결정 기록 존재**: 가격 채택($8 권고)과 서비스명(확정 또는 {{BRAND}} 유지 선언)이 `docs/product-decisions.md`에 기록됨. 모든 화면·카피의 가격·워드마크는 여전히 토큰 표기(하드코딩 0) | 파일 존재 + `grep -rn '\$8\|\$12\|USD 8\|USD 12' design-ssot/02-direction design-ssot/04-design-tokens`가 토큰 외 표기 0건 |
| G2 | **SSOT v0.2 단일화 완료**: DESIGN.md·stitch-prompts.md·design-direction.md가 밝은 토큰(#F7F3EA·#1B1B1E·#B98A2C + 신규 3종 #6F6A63·#8E887F·#FDF8F8) 단일 기술. Fraunces 지시 0건, 다크 배경 지시(#211E1B·#141416 배경 용도) 0건, em-dash(U+2014·U+2013) 0건 | `grep -rPn '[\x{2014}\x{2013}]' design-ssot docs` 0건 · `grep -rn 'Fraunces' design-ssot/04-design-tokens` 0건 · `grep -rn '#FAF7F2\|#211E1B' design-ssot/04-design-tokens` 0건 |
| G3 | **V2 화면 실물 존재**: flows-v2/에 EN 6화면+공유카드 ≥750px 폭 적재, 금지어 게이트(운명·운·운세·fortune·luck·destiny·Diagnosis·BANKS) 통과, steering-log S4 정정, landing_ko.png 폐기 | 파일 폭 실측(`sips -g pixelWidth` 또는 Pillow) + 화면별 수검 체크리스트 기록 |
| G4 | **치명 2구멍 설계 확정**: 재접근(이메일+매직 링크) 설계 문서와 컷 블록 카피(처방 본문 샘플 3문장 포함) 문서 존재, 각 EN/KR 문안 수록 | `docs/reaccess-and-receipt-design.md`·`docs/cutblock-copy-en-kr.md` 존재 + 금지어 기계검사 통과 |
| G5 | **카피 이중 원천 해소**: EN·KR 카피 덱이 모두 존재하고 동일 게이트(금지어 0·em-dash 0·CTA 인텐트별 라벨 1종)를 통과. EN 배지명 10종 확정 | `docs/copy-deck-v2-en.md` + `docs/badge-naming-en.md` 존재 + 검사 표 수록 |
| G6 | **토큰·가독성 교정 반영**: Muted·Field line·Surface 토큰과 본문 하한 16px·캡션 12px가 SSOT(typography.css·DESIGN.md)에 편입, base 행간 특이성 결함(I1) 개정 | 토큰 grep + multilang.css 계산값 재실측(ego-browser) |
| G7 | **악마 게이트 통과**: `docs/gate-devil-advocate.md` 발행 완료, 본 문서 §7 재심에서 fix-now 증감 없음 또는 증감분 처리 완료 판정 | 파일 존재 + 본 문서 증보 (§7) |
| G8 | **통합 무충돌**: 3 브랜치 산출물 + 신규 문서 전체가 master에 병합되고 충돌 0, 머지 후 G2 스크립트 재실행 통과 | 머지 커밋 로직 + 게이트 스크립트 재실행 |

의도적으로 게이트에서 **제외**한 것(최소집합 원칙): PSP 심사 실행(U6)·그로스 전략(U15)·8 로케일 오픈(U17)·실기 가독성 검증(U11 실기분)·카피덱 JSON(I2). 이들은 fix-next·defer로 추적하며, 부재가 마스터 머지를 막지 않는다. 단 제품 출시(구현 착수) 게이트에서는 재평가 대상이다.

---

## 5. 잔여 리스크 선언

1. **U1 화면 품질의 상한**: Stitch 재생성은 카피 덱 문장을 프롬프트에 주입해도 렌더 결과의 충실도가 보장되지 않는다. G3 수검은 필수이며, 재생성 1회로 부적합 시 OpenDesign 정제 경로(flows-verification의 원 조치)를 2차로 둔다.
2. **em-dash 기계검증의 사각**: 이미지(PNG) 내 em-dash는 grep 불가이다. 카피 덱 문장을 프롬프트에 복붙하는 방식이므로 텍스트 원천이 0건이면 화면도 0건이라는 간접 보증으로 충분하다고 판단했다.
3. **P2 서비스명 연기 비용**: {{BRAND}} 유지 결정 시 워드마크 디자인(공유카드 시그니처 밴드)이 토큰 채움 상태로 남는다. 출시 전 반드시 확정해야 하는 데드라인을 product-decisions.md에 명시할 것을 권고한다.
4. **i18n 10-로케일 조판 자산의 지위**: 본 계획은 출시 순서(U17)를 2단계로 두지만 multilang.css·스펙은 폐기가 아니라 순차 활용이다. 이 문서가 "10로케일 1차 지원" 축소로 오독되지 않도록 하는 주석을 U17 문서에 포함한다.

## 6. 검증 방법 (본 문서의 자기검증 기록)

- 입력 리포트 4건 전수 열람 및 본 문서 §1 표의 출처(리포트 섹션·Q번호·결함 번호) 대조 완료.
- flows-v2 실재 파일 1장(landing_ko.png)·wt-gate-devil-advocate docs 부재·git 브랜치 3종 산출물 경로를 파일시스템에서 확인.
- em-dash(U+2014·U+2013)를 본 문서에 0건 유지: 하단 게이트 스크립트로 자체 확인.

## 7. 재심 슬롯 (악마 게이트 도착 후 CTO가 채움)

> docs/gate-devil-advocate.md 발행 후 이 절에 지적 목록과 본 문서 ID 체계로의 편입 결과, fix-now 증감, 게이트 조건 개정안을 기록한다. 발행 시점까지 이 절은 의도적으로 공백이다.
