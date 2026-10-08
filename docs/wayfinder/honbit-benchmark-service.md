# 혼빛(Honbit) 서비스 분석 보고서

- 기준: 2026-10-08 아카이브(리뉴얼 후) / 아카이브 본체 `/Users/hot14/honbit-archive/`
- 원본 서비스: honbitsaju.com / 분석 방법: 미러 정적 파일과 `data/*.json` 전수 집계
- 참고: 지시서 `HONBIT_BENCHMARK_PROMPT.md` §0~§7. 추정 수치에는 [추정] 라벨을 붙였다.

---

## 1. 한 줄 정의와 실측 규모

혼빛은 K-pop 아이돌과 팬의 생년월일만으로 사주 궁합을 계산해 주는, 가입 없는 무료 웹 서비스다. 스스로를 "Free K-pop idol compatibility, Korean Saju & MBTI personality cards — made for fans worldwide. No sign-up required."라고 정의한다(실측: `site/llms.txt` 1~2행).

전수 집계로 확인한 실제 규모는 다음과 같다.

| 항목 | 수치 | 근거 |
|---|---|---|
| 미러 페이지 | 12,053페이지, 9개 언어(ko·en·ja·zh·es·pt·id·th·vi) | `site/` 디렉터리, 지시서 §1(HTTP non-200 0건 검증) |
| pages.json 레코드 | 12,054건, 경로 전부 고유 | `data/pages.json` 전수 집계 |
| 아이돌 | 고유 slug 868명 × 9언어 = 7,812행 | `data/idols.json` |
| 블로그 포스트 | 고유 slug 390개 × 9언어 = 3,510행 | `data/blog.json` |
| 사이트맵 | 896 URL(2026-10-05 축소판, hreflang 9개+x-default 포함) | `sitemap_src.xml`의 `<loc>` 896건 |
| 섹션별 페이지 | idol 7,893 / blog 3,663 / mbti 153(17×9) / daily 108(12×9) / topic 72(8×9) | `data/pages.json` section 필드 집계 |

표기 불일치 두 건이 관찰된다. 매칭 페이지는 "830명"(`site/ko/idol-match.html` 타이틀), llms.txt는 "830+ 아이돌"이라 쓰는데 실제 데이터는 868명이다. llms.txt는 8개 언어만 열거하고 실제 서비스는 9개(zh 포함)이다. 카피는 보수적으로, 데이터는 공격적으로 운영하는 패턴으로 읽힌다.

## 2. 타깃

1차 타깃은 K-pop 글로벌 팬이다. 근거는 네 겹이다.

- 언어: 9개 언어 전면 번역이며 x-default는 영어다(실측: `sitemap_src.xml`, `site/ko/idol/jennie-blackpink.html`의 hreflang 목록). 검증 메타에 네이버와 핀터레스트가 함께 있다(실측: 같은 페이지 `<meta name="naver-site-verification">`, `p:domain_verify`).
- 어휘: 모든 문구가 "최애", "덕질"이 아니라 fan 언어로 쓰여 있다. 홈 타이틀 "최애와 너의 오늘 편지", 매칭 타이틀 "830명 중 내 최애랑 얼마나 맞을까?"(실측: `site/ko.html`, `site/ko/idol-match.html` 타이틀).
- 콘텐츠 믹스: 블로그 390포스트 중 그룹 케미 135, 팬 다이어리 18이고 점수 가이드·MBTI 등 나머지 237개가 전부 팬 관점 화제다(실측: `data/blog.json` ko 슬러그 접두사 분류).
- 진입장벽 제거: "무료 · 가입 없음 · 60초" 신뢰 줄과 Pro의 "로그인 없이 31일 이용권" 문구(실측: `site/ko/pro.html` 메타 디스크립션)는 부담을 싫어하는 해외 팬의 결제·사용 습관에 맞춘 설계다.

## 3. 가치 제안

핵심 문장은 리뉴얼(2026-10-05) 때 "당신의 혼빛은?"에서 "최애와 너의 오늘 편지"로 바뀌었다(실측: `site/ko.html` 타이틀). 이 한 줄에 세 가지가 압축되어 있다.

1. 관계성 상품화: 사주라는 문화 콘텐츠를 "나와 최애의 관계"에 접목해, 일반 운세보다 감정 몰입이 크다. 아이돌 페이지가 개인 해설을 넘어 대운, 멤버별 궁합 순위, 같은 일간·띠 아이돌, 2026년 12개월 흐름까지 제공하는 것도 관계의 깊이를 파는 구조다(실측: `site/ko/idol/jennie-blackpink.html` H2 10개).
2. 원클릭 진입: 생일 하나만 입력하면 4기둥, 오행, 궁합 점수, 카드까지 나온다. 계산 엔진이 클라이언트 JS에 있어 서버 없이도 동작한다(실측: `site/_next/static/chunks/00c04u_vd4zs8.js` 등에 dayMaster·일간 문자열 존재, 지시서 §3.1 제니×1995-06-15=63점 오프라인 검증).
3. 매일 돌아올 이유: 오늘의 편지(`site/ko/letter.html`), 스트릭·배지(`site/ko/streaks.html`), 연말 리뷰(`site/ko/wrapped.html`, "your saju year in review")로 일회성 궁합을 일상 루틴으로 바꾼다.

## 4. 수익 구조

실측으로 확인된 수익 원천은 세 가지다.

1. AdSense 광고: `AdSenseLoader` 컴포넌트가 전 페이지에 삽입되어 있고(`site/ko/pro.html` RSC flight 내 컴포넌트 목록), 300x250 배너 이미지가 2개 언어분 준비되어 있다(`site/ads/aim-300x250-en.png`, `aim-300x250-ko.png`). 광고 페이지도 별도로 운영한다(`site/ko/advertise.html` 존재 확인).
2. Couple Pro 유료 플랜: 31일 이용권 19,900원, 일회성 결제다. 실측: `site/ko/pro.html` 가격 배지 "가장 인기 커플 PRO ₩19,900 · 31일", 타이틀 "커플 Pro — 31일 이용권 · 내 명식, 끝까지". 무료 대비 잠금 해제 항목은 명식 자리 4개, 비어 있는 오행, 2026년 12개월 흐름, 인생 시간표 16구간, 상위 100명 궁합 순위다(같은 페이지 메타 디스크립션). 결제 관련 문자열은 번들 청크에서 KakaoPay, Toss, Gumroad가 검출됐다(`site/_next/static/chunks/` 내 gumroad 8회, toss 5회, kakaopay 4회). 지시서 §2가 기재한 PortOne 문자열은 미러 청크에서 검출되지 않았다(현지화 결제 애그리게이터 추정 [추정]). 체크아웃 API는 `/api/checkout`, `/api/checkout/kakaopay/ready`, `/api/checkout/kakaopay/cancel`이 있다(지시서 §3.1).
3. SEO 유입 간접 수익: 프로그램매틱 페이지 12,053개가 검색 유입의 몸통이고, 광고와 Pro 전환이 그 위에서 일어난다.

구조 평가: 구독이 아니라 31일 권 일시불이라는 점이 인상적이다. K-pop 팬의 소비는 이벤트성(컴백, 생일)이라 장기 구독보다 단기 고액권이 취소율 리스크 없이 잘 맞는 선택으로 보인다 [추정]. 무료층이 광고 수익을 담당하고 Pro는 심화 열람이라 전형적인 freemium이다.

## 5. 무료에서 유료로 가는 퍼널

실측 페이지 흐름을 따라가면 5단계다.

1. 검색이나 SNS로 아이돌 사주 페이지 진입(예: `/ko/idol/jennie-blackpink`, 868×9 프로그램매틱).
2. 무료 궁합 실행: 페이지 상단 "제니와 나의 궁합, 상위 몇 %일까?" CTA(실측: 같은 페이지 H2). 가입 없이 즉시 점수.
3. 결과 확산: 카드 생성, 자랑하기, 링크 복사 버튼으로 결과가 SNS로 퍼진다(지시서 §3.2 결과 확장 4버튼).
4. 리텐션: 오늘의 카드와 스트릭, 오늘의 편지로 재방문을 만들고, `My Honbit`(`site/ko/me.html`)에 개인 데이터가 쌓이게 한다.
5. 업셀: 무료로 볼 수 없는 깊이(명식 4자리, 12개월, 16구간, 상위 100명)를 Pro에서 연다(실측: `site/ko/pro.html`).

## 6. 성장 장치

- 프로그램매틱 SEO: 아이돌 868명의 생일만으로 사주팔자, 궁합, OG 이미지가 결정론적으로 생성되고 9개 언어로 사전 렌더된다(실측: `data/idols.json` 스키마, 지시서 §3.3). 아이돌 페이지에는 MusicGroup, FAQPage, BreadcrumbList JSON-LD가 붙어 있다(실측: 제니 ko·en 페이지의 `@type` 나열). FAQ 질문은 "제니의 일간(日干)은 무엇인가요?"처럼 쿼리형이라 리치 결과를 노린다.
- AI-SEO: `site/llms.txt`(서비스 요약)와 `site/llms-full.txt`(100,163바이트, 아이돌 전수 목록 포함)로 AI 크롤러에 서비스를 통째로 설명한다. 헤더에 `<link rel="llms.txt">`까지 박아 있다(실측: `site/ko/pro.html` head).
- UGC 루프: 팬 스토리 제출(`site/ko/blog/submit.html`, "Share your fan story") 후 승인 워크플로(지시서 §2 pending/approved)로 통과된 글이 390포스트의 콘텐츠 자산이 된다. 팬 다이어리 18편이 이미 채널 자산. 댓글 섹션(💬)이 가이드·다이어리마다 붙어 사회적 증거를 쌓는다.
- 게이미피케이션: 스트릭·배지, Wrapped 연말 결산, 오늘의 편지(실측: `site/ko/streaks.html`, `site/ko/wrapped.html`, `site/ko/letter.html`). 다만 gifts·inventory·favstars는 미러에 HTML이 없어 로그인 후 클라이언트 라우트로 판단된다 [추정].
- 소셜: Organization JSON-LD의 sameAs로 X(@HonbitSaju)와 인스타그램 계정을 공식 연결한다(실측: `site/ko/pro.html` 내 JSON-LD).

## 7. 리스크와 약점

1. 저작권·초상권: 아이돌 실명·생일 868명을 상업 서비스에 사용 중이다. 생일은 공공정보라도 실명 프로필 페이지의 광고 수익화는 국가별 리스크가 있다. 지시서 §7도 출처 표기를 권고한다.
2. 면책 의존: 전 페이지에 엔터테인먼트 면책문을 둔다(지시서 §5.1). 사주 콘텐츠의 규제 회피 장치이지만 신뢰와 양립하려면 문구가 신중해야 한다.
3. 데이터 정합: 830명 카피 vs 868명 데이터, llms.txt 8개 언어 표기 vs 실제 9개. 성장 중인 서비스의 흔한 부채이고, 벤치마킹 시 카피와 실데이터를 분리 집계해야 한다는 교훈을 준다.
4. 사이트맵 축소: 7,384에서 896 URL로 줄인 10/5 리뉴얼은 프로그램매틱 페이지의 검색 품질 절충으로 읽힌다(지시서 머리말). 축소 후에도 미러 페이지 수는 그대로라, 크롤링 통제와 실제 페이지 수가 별개 관리임을 보여준다.
5. 미러 한계: `site/robots.txt`, `site/ads.txt`, `site/sitemap.xml`은 아카이브에 없다(존재 확인). robots·ads.txt 운영 여부는 실서비스에서만 확인 가능하다.

## 8. K-saju 관점 시사점

- 아이돌 궁합은 유입 장치, 사주 본인 리딩은 잔존 장치, Pro는 수익 장치라는 3층 구조는 그대로 옮길 만하다. 혼빛의 차별점은 사주 지식이 아니라 "관계" 프레이밍과 결정론적 콘텐츠 자동화다.
- 31일권 일시불, 로그인 없는 결제, 결과 카드의 공유 설계는 한국 이용자에게도 유효한 패턴이다.
- 우리가 벤치마킹할 때는 실명 아이돌 데이터를 쓰지 않는 방향(가상 캐릭터, 이용자 본인 중심)으로 차별화하면 §7 리스크를 회피하면서 동일한 퍼널을 가져올 수 있다.

---

## 부록: 실측 명령 재현

```bash
cd /Users/hot14/honbit-archive
node -e "console.log(require('./data/pages.json').length)"        # 12054
node -e "console.log(new Set(require('./data/idols.json').map(x=>x.slug)).size)"  # 868
node -e "console.log(new Set(require('./data/blog.json').map(x=>x.slug)).size)"   # 390
grep -c '<loc>' sitemap_src.xml                                   # 896
node server.cjs                                                   # http://localhost:8787/ko
```
