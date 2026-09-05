# 사주 웹서비스 디자인 프로젝트 - 로컬 파일 감사 결과

조사일 2026-09-05 · 산출: 로컬 파일 전수 스캔 (reports 3곳 + honbit-archive 전체)
원칙: 파일에 실제로 있는 사실만 기록. 파일이 말하지 않는 것은 "미기재"로 표기. 불확실 항목은 [추정].

---

## 1. 포스텔러 (URL + 디자인/UX 사실만)

출처: `/Users/hot14/.aside/u/0/reports/2026-08-22_사주사업화-벤치마킹/사주사업화_리포트.html` (+ 동폴더 `사주사업화_데이터.json`)

- **URL: 리포트에 웹 주소 미기재.** 운영사명 "(주)운칠기삼", 분석 엔진 "AI(아이샤)"만 표기됨. 리포트 전체에서 포스텔러 관련 하이퍼링크·도메인 없음. URL은 외부 재조사 필요.
- 가격 구조 (리포트 표기 그대로):
  - 기본 무료, **무료 구간은 무광고** (경쟁 앱 대비 차별점으로 명시)
  - 캐시 선충전제: **'포스' 200개 3,300원 ~ 5,000개 67,000원**
  - 심층 콘텐츠 건당 3,000~20,000원 (포스 캐시 소비)
  - 신년운세 200쪽 리포트 약 15,000원
  - 3,000포스 4.1만원~ 구매 사례도 병기
- 공개 지표: 가입자 900만, MAU 142만 (2025.5, 매경), 2030 비중 80%+ (다른 집계 57% - 시점 충돌을 리포트가 의도적으로 병기), 연 매출 100억+, 시리즈B 30억 (2020), App 평점 4.6
- 화면 구조/UX 흐름 관련 사실:
  - **웹+앱 병행 구조** ("점신·포스텔러도 웹+앱 병행 구조" - 신규도 PWA 웹 우선 근거로 인용)
  - **60갑자 캐릭터 IP** (친밀한 캐릭터가 신뢰·재방문을 만든다는 교훈의 대표 사례)
  - 자체 분석시스템 "FAS", 200쪽+ 리포트가 장점으로 기록
  - 포스텔러 만세력: 경도·서머타임·야자시 보정 투명성을 강조하는 포지션 ("계산 근거 표기" 신뢰 문법의 업계 선례)
- 부정 사례 (디자인 개선 시 피할 것): '매크로식 평면 해석'·'무료 월운과 동일한 내용' 후기로 재구매 이탈, 앱 내 리뷰 기능 부재, 결제 오류 시 CS 지연이 평판 이슈가 된 사례

리포트에 색상·폰트·레이아웃 등 시각 디자인 언급은 없음 (정량·가격·지표 중심 문서).

---

## 2. 기타 한국 경쟁사 (URL 목록)

파일에 URL이 실제로 적힌 것만:
- **honbitsaju.com (혼빛)** - K-pop 아이돌 사주 궁합. 무료 아이돌 궁합 하루 10회 + Couple Pro $6.99/월, 9개 언어, 서울 강남 법인. (출처: `2026-08-24_K사주-글로벌진출/06_P705_셀럽궁합엔진.md` SF-1, honbitsaju.com 실측)
- **wrtn.ai/fortune** - 뤼튼 운세 (무료 AI, 리텐션용). (출처: 사주사업화_리포트.html)
- **sajuai.io** - 사주 앱 추천 블로그 (경쟁사가 아니라 출처 사이트). (출처: 사주사업화_리포트.html 각주)

서비스명만 있고 URL 미기재 (특성만 기록):
- 국내: 점신(테크랩스, 행운패스 구독·PRO 55,000원), 찐사주(990원 단일가·카카오 로그인 3초·결과 카카오톡 공유), 타이트사주(웹툰형·'MZ무당' 캐릭터, 2030 여성 61.8%), 헬로우봇, 천명, 사주나루("UX 구식"이라는 평가만 있음 - 유일한 UX 비평), 더사주, 사주핑, 마이파이, 리얼미·인연궁합(1회 결제로 상대 무제한 교체), FORCETELLER
- K-pop 궁합 필드 (출처: 06_P705): Seoul Saju(9그룹 69멤버 궁합), Creatrip 셀럽 궁합(5,000원, 12K+ 구매), IdolSaju, Saju from Seoul(60+ 아이돌 일간표) - "5+ 플레이어" 존재 확인
- 글로벌 (출처: K사주_최종리포트.html): Co-Star(Pro $8.99/월, 2026-07 Midjourney 인수), CHANI($11.99/월, 반-AI 포지셔닝, "no AI slop" 카피), Nebula($7.99/주, 하드페이월 논란), The Pattern($4.99~14.99/월), Sanctuary, Astrotalk(인도), Labyrinthos, Keen, Kasamba 등 13곳 + 실패 사례 4곳(Co-Star 저가 매각, Rimfactory 점술 포기, Kasamba 매각, Sanctuary 축소)
- 글로벌 온보딩 레퍼런스 (출처: 글로벌_원리설명_프레임워크.md): Co-Star·The Pattern·Chani·Sanctuary·astrobazi·Joey Yap 실사 카피 20건+ 검토 - **온보딩에서 체계 설명 0건**이 4대 앱 공통 패턴

---

## 3. K사주 글로벌진출 - 디자인 관련 결정/자산

출처: `/Users/hot14/.aside/u/0/reports/2026-08-24_K사주-글로벌진출/` 내 4개 파일

### 브랜드/네이밍 결정
- **서비스명 기본값: SajuRoot(사주루트)**. 상표 사전 확인 통과(한·미·일+마드리드 충돌 0건), 도메인 4종(.com/.io/.app/.co.kr) 미등록 → 조기 등록 권장, 약 9만원/년 [추정]. 유사명 주의 2건: 일본 등록상표 "サグルート(saguroot)", 국내 "사주온루트" 카카오채널. 최종 확정은 사용자 승인+변리사 검토 후. (출처: 상표_예비확인.md, 최종리포트 탭10)
- 상시 병기 규칙: **"SajuRoot | Korean Four Pillars" / "SajuRoot | 韓国式四柱推命"** (단독 노출 금지)

### 확정 카피 (영어·일본어)
- 히어로(교체 확정, C26): 구 "Korean Saju, Calculated Precisely" → 신 **"Your Korean birth chart, explained clearly. Calculations shown."** / JA 「韓国式四柱推命を、わかりやすく。計算過程もすべて公開。」
- K-정통성 프레임(교체 확정, C27): "Korean authenticity" → **"Shared East Asian roots, interpreted through Korean Saju practice."**
- 근거 태그명(교체 확정, C28): "evidence tags" → **"Chart basis" / 「この読みの根拠」**
- 3단 스토리: **Origin you can place / Method you can inspect / Reading you can use**
- 신뢰 문장 3종: "Calculated from astronomy. Same math for everyone on Earth." / "This is about you — not your fate. It's a mirror, not a prophecy." / "For self-reflection and fun. Not medical, financial, or legal advice."
- 기타 카피 후보 (글로벌_원리설명_프레임워크.md): "What kind of energy are you?"(온보딩 첫 카피는 질문), "MBTI asks you 93 questions. Saju reads your birth moment.", "Wood expands. Fire radiates. Earth anchors. Metal structures. Water flows.", "A weak Day Master is not a weak person.", "Your chart is your seed, not your tree.", "Same tree, different branches", "More input columns, not better answers", "Try one free chart", "Meet the pattern you were born with.", "Find which member matches your force.", "You are the River (壬)."
- 금지 문장: "predict your future", luck 프레이밍, 학파 혼용 언급, "Korean fortune telling"(→ "Korea's oldest personality system" 방향)

### 화면/카드 설계 (셀럽 궁합 엔진, 06_P705)
- **공유 카드 3종 명세**: ① 전체 순위 카드(내 일간 오브제만 색, 상대는 회색 선+이름) ② 1:1 관계 카드(두 오브제만 켜짐) ③ 오브제 단독 카드(MBTI 타입 카드 문법)
- **카드 공통 토큰**: 먹선 비주얼, **한지 배경 #FAF7F2**, **회색 선 #D8D2C7**, 일간 오브제만 오방색, 근거 8글자 소형 표기(계산 투명성의 첫 실천), 서비스 워터마크, "No ads. No subscription." 미니 문구(선택)
- **사진 0 원칙**: 이름 텍스트 + 자체 오브제 일러스트만. 사진 생성·표시 금지(초상권·딥페이크법 방어). 경쟁사 AI 이미지와 대비되는 "표기 체계 vs 예술" 차별 축
- 순위 공개 규칙: 1위~말위 전부 공개(1위만 공개 금지) - "꼴등에도 이름"이 공유 트리거
- 면책 표준 문구(결과 하단 상시): "Birth dates are public information. Readings are our own interpretation for self-reflection." + 근거 보기 링크. Honbit 업계 표준: "Birth dates are public information and the readings are our own work."
- 진입 UX 흐름: 생년월일 입력 → 3초 계산 → "You are the River" 오브제 카드 즉시 노출 → 멤버 순위("In front of Suga (the Mountain), you slow down and deepen." 식 '나' 시점) → 공유 카드 → "Want the full reading of YOU?" 유료 전환
- 온보딩 원칙: **원리를 온보딩에서 설명하지 않는다.** 첫 결과 후 "왜 이런 결과가 나왔지?" 시점에 1분 콘텐츠. 전문 용어는 "자세히 보기" 안으로
- 무료 결과 화면 구성(리드마그넷, C29): 3문장 텍스트 폐기 → **8글자 배치 + Day Master + 오행 분포 도넛 + Chart basis 카드 + 해석 문장 1개**. 견본은 "템플릿 1종으로 통일(개별 디자인 금지)"
- 신뢰 UI: ±40분 출생 경계자 안내 카드("진태양시 적용 시 시주가 X→Y로 바뀝니다"), "다른 계산기와 왜 다른가" 원인 4종 공개, 사실과 해석의 시각적 분리
- 오브제 재명명 과제: astrobazi.com가 이미 10 오브제 명명 사용 중(The Towering Tree 甲 / The Climbing Vine 乙 / The Radiant Sun 丙 / The Steadfast Candle 丁 / The Enduring Mountain 戊 / The Fertile Garden 己 / The Tempered Blade 庚 / The Polished Jewel 辛 / The Flowing River 壬 / The Morning Dew 癸) → 그대로 사용 불가, 먹선 비주얼+한국 기원 서사로 재명명 필요. 단 "자연물 라벨 + 한 줄 정의" 문법은 시장 표준이라 따름
- UI 표준 용어표: 일간=Day Master, 오행=Five Forces(Five Elements는 상황에 따라 금지), 천간합=Stem pairing, 물상=Your image, 절기=Solar term, 궁합=Compatibility(marriage matching 금지)
- 포지셔닝 맵: SajuRoot가 "로컬라이즈 4.0 × 원법 충실도 4.5" 우상단 단독 점유
- 가격: 기본형 $9.90(¥1,390) / 프리미엄 $24.90(¥3,480). 링크 구조 예: `sajuroot.com/ja/chart?utm_source=...&creator_id=abc` - 생년월일·시간·장소는 URL 파라미터 금지

---

## 4. SajuRoot 브랜딩 - 톤/네이밍 결정

출처: `/Users/hot14/.aside/u/0/reports/2026-08-24_SajuRoot-브랜딩마케팅-레드팀/리포트.html` + `검토근거.md`

- 레드팀 판정: **4.2/10 CONDITIONAL NO-GO** (2026-08-24). "정확한 계산은 차별점이 아니라 위생요건. 소비자가 사는 것은 자기 상황을 이해하는 데 도움이 되는 구체적이고 안전한 설명이다."
- 네이밍: **SajuRoot KEEP**. Root = 전통·기원·개인 뿌리의 이중 의미. 약점: Saju·Root 모두 비인지 고객에게 효익을 말하지 못함, 일본어 サジュルート는 지명·루트 안내처럼 들릴 수 있음 → 12개월간 "설명형 잠금"(디스크립터 병기)으로 운영
- 타깃: 일본 28~44세 여성, 최근 12개월 유료 점술 경험, K-콘텐츠 접점(J1∩J2) 한 명으로 축소
- 톤 & 보이스 규칙:
  - 서술 주체는 항상 "나": ✗"둘은 잘 맞아요" → ✓"당신은 이 사람 앞에서 자기 능력을 내려놓게 되는 유형"
  - 운명론 완화: 마지막 문장은 "당신은 ~입니다"가 아니라 "이 소재로 뭘 만들지는 당신"
  - 회의론 대응은 "싸우기"가 아니라 "경계 긋기": "Saju is a traditional interpretive practice, not a scientific test."
  - 절대 금지: 실존 인물 감정·미래 예측·연애사 추측·사망·질병·성적 뉘앙스, 미성년 셀럽 연애 해석
- 랜딩 문구 아키텍처 (확정안): EN "Meet the pattern you were born with." + "Your Korean Saju birth chart, explained in plain English. See the timezone, solar-term boundary, and chart method behind every result." + CTA "[See my free chart]" + 각주 "Traditional interpretation, not scientific or professional advice. No hidden subscription." / JA 「自分の生まれ持ったパターンを、わかりやすく。」+ CTA「[無料で命式を見る]」
- 퍼널 설계 (디자인 연관): 무료 차트(시각 차트+계산 카드) → 이메일은 "결과 열람 전 벽"이 아니라 "저장+5분 설명+비교표 해금" 장치 → T1 $9.90(샘플·환불·1회 결제 명시) → T2 $24.90(관계/커리어 선택형) → 리텐션은 "오늘의 기운 × 나의 Day Master" 개인화 주간 리플렉션(범용 데일리 카드는 폐기)
- 북극성 지표: 조회수가 아니라 **Qualified Chart Completion**(정확한 생년월일·장소 입력 후 결과+계산 카드를 실제로 본 사람)
- 채널 3층: 랜딩+계산기+이메일 / 일본어 YouTube+Shorts / X·note. Shorts=발견, 롱폼=신뢰, 랜딩=활성화 역할 분리
- 마케팅·디자인 연관 결론: 공유 카드·썸네일 관련하여 "결과 이미지에 브랜딩을 심으면 공유 자체가 마케팅이 된다"(사주사업화 리포트 교훈) + 무료 결과의 시각 차트 질이 곧 전환율이라는 판정

---

## 5. 혼빛 시각 언어 분석 (hex 컬러, 폰트, 카드 구조)

출처: `/Users/hot14/Desktop/260822_리포트에이전트/honbit-archive/` (honbitsaju.com 전체 미러, Next.js+Vercel, 아카이빙 2026-08-30, 11,655페이지·9개 언어)
주 CSS: `site/_next/static/chunks/07dfs65uklvuy.css` (Tailwind v4 빌드, 72.9KB) + `site/icon.svg` + `site/ko.html`

- **다크 우주 배경 + 크림 잉크**: 배경 3단 `--bg-0:#070612`(거의 검정 남색) / `--bg-1:#0d0b1f` / `--bg-2:#15122b`. 본문 텍스트는 흰색이 아니라 크림 `--ink:#fff8ee`. 밤하늘 그라디언트(#130a28→#1b0f30 35%→#160b2b 68%→#100822)로 절편 없는 하늘 표현
- **소울 퍼플 트라이어드가 브랜드 핵심**: `--soul-1:#b794f6`(퍼플) / `--soul-2:#f0abfc`(푸시아) / `--soul-3:#67e8f9`(시안). 액센트로 핫핑크 `#ff5ec0`, 피치 `--peach:#ff8e9e`, 골드 `#fbbf24`, 틸 `#5eead4`. CTA·로고 그라디언트는 **135deg #ff5ec0 → #a78bfa**(핑크→바이올렛)
- **오라 글로우 그림자**: `--glow-soul: 0 6px 22px #b794f642`, 카드 `--shadow-card: 0 14px 38px #0000005c`, 별 반짝임 `0 0 6px 1px #ffffffb3`, 대형 오라 `0 0 65px #b794f68c`, 입체 오브제용 이중 인셋(`inset -14px -18px 46px #0000008c, inset 14px 16px 44px #b794f666`)
- **타이포 3종 세트 (영문 세리프 + 산세리프 + 한글 폴백)**: 디스플레이용 **Instrument Serif**(이탤릭 포함, 세리프), 본문 **Plus Jakarta Sans**, UI **Inter**. 한글은 `--f-display-ko: "Noto Serif KR"` / 본문 "Noto Sans KR" 폴백. "세리프 디스플레이 + 다크 배경" 조합이 타로·신비 장르의 전형적 프리미엄 문법
- **라운드 시스템 + 말풍선형 비대칭**: 스케일 --r-sm 10px / --r-md 16px / --r-lg 24px / --r-xl 34px / --r-pill 999px. 특징적으로 **비대칭 라운드 카드**(16px 5px 16px 16px, 5px 16px 16px, 5px 18px 18px) 사용 - 채팅·말풍선·카드 귀엣음 문법
- **모션**: 별 반짝임·플로트 계열 키프레임 11종(twinkle, float, bloom-twinkle, bloom-float, bloomPulse, hbScoreIn[궁합 점수 등장], ad-kenburns 등) - 상시 생동감 있는 우주 배경
- **이미지 자산 극소주의**: 미러 전체에서 이미지 5개뿐 - `site/icon.svg`(초승달+별 3개, 그라디언트 #ffe3a0→#ff5ec0→#a78bfa→#5eead4 on #1c0f33→#0a0418, rx 26), `site/dal-v2.png`(672×900, 달 캐릭터 일러스트 [추정: 파일명·용도상 메인 마스코트]), `site/apple-icon.png`, 광고 배너 2개(`site/ads/aim-300x250-ko.png`). **아이돌 프로필 사진 없음** - 842명 아이돌 페이지가 전부 텍스트+CSS/SVG 렌더. 초상권 회피이자 시각 일관성 전략
- **페이지 인벤토리** (`data/pages.json`, 섹션별): idol 842종(그룹별 아이돌 상세), blog 382종, mbti 17, daily 12(띠별 오늘 운세), topic 8(애정·직업·재물·건강·학업·인간관계·여행·총운) + 특수 페이지: circle(2~8명 그룹 궁합 매트릭스), idol-match(830+ 아이돌 궁합), play("사주 도감" 80카드 수집+주간 퀘스트 - 포켓몬 도감 문법), streaks(데일리 카드 뽑기·스트릭·오행 배지), wrapped(연간 리뷰 - Spotify Wrapped 문법), share(9:16 인스타/틱톡 스토리 공유 카드 키트), pro(Couple Pro 유료), me(내 사주·스트릭·카드), discover
- **카피 톤**: 히어로 "당신의 혼빛은?", 타이틀 "혼빛 — 내 최애랑 궁합? K-pop 궁합·사주·MBTI 무료", OG alt "What's your honbit?", "가입 없이 무료". K-pop 팬 언어(최애·덕질 문법)를 사주에 이식

### 혼빛 요약 (5줄)
1. 다크 남보라 우주(#070612~#15122b) + 크림 잉크(#fff8ee) + 소울 퍼플 트라이어드(#b794f6/#f0abfc/#67e8f9)
2. 영문 Instrument Serif 디스플레이 + Plus Jakarta Sans 본문 + Noto KR 폴백
3. 10~34px 라운드 + 999px 필 + 말풍선형 비대칭 카드, 퍼플 오라 글로우
4. 이미지 0 원칙: 사진 대신 CSS/SVG 오브제·달 마스코트, 초승달 로고
5. 게이미피케이션 구조: 데일리 카드 뽑기·도감 수집·스트릭·배지·Wrapped·9:16 공유 카드가 리텐션 골격

---

## 감사에서 확보한 설계 방향 메모 (파일 근거 요약)

- 두 진영의 비주얼 축이 정반대임이 확인됨: 혼빛=다크 우주+네온 글로우+게이미피케이션 vs SajuRoot 설계=한지 크림(#FAF7F2)+먹선+오방색+계산 투명성. 신규 디자인은 이 두 극 중 포지션을 정해야 함.
- 공통 요구사항(양쪽 문서 일치): 사진 배제, 근거 8글자 표기, 공유 카드가 곧 마케팅, "나" 시점 서술, 무료 결과의 시각 차트 질이 전환율 결정.
- 미해결: 포스텔러 URL, 국내 경쟁사 스크린샷 수준의 시각 자료는 파일에 없음. 혼빛은 미러로 완전 검증 가능.
