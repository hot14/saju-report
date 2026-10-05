# SajuRoot 첫 유입 실험 세트 (wayfinder #14)

정적 랜딩 + 무료 차트 + 이메일 수집. GitHub Pages 배포 대상. 실험 설계는 [experiment-plan.md](experiment-plan.md)를 본다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 랜딩 1장. 이메일 수집 폼 + 무료 차트 CTA |
| `chart.html` | 무료 차트. 생년월일 입력 → computeChart 결과 카드 |
| `js/bundle.js` | esbuild 번들(computeChart + stems.json 필수 필드) |
| `js/app.js` | chart.html UI 로직(폼 처리, 렌더, src 추적) |
| `css/style.css` | Swiss Ledger 토큰 v1.0 스타일 |
| `entry.cjs` | 번들 진입점 |
| `smoke.cjs` | 번들 스모크 테스트 |
| `experiment-plan.md` | 채널 · 기준 · 측정 · 배포 설계 |

## 로컬 실행

```bash
cd service/experiment
npm install
npm run build   # esbuild entry.cjs --bundle --format=iife --outfile=js/bundle.js
npm run smoke   # node smoke.cjs (번들을 require로 로드, computeChart 1회)
```

정적 서버 1라이너 (이 폴더에서):

```bash
node -e "require('http').createServer((q,s)=>{const u=q.url==='/'?'/index.html':q.url.split('?')[0];try{s.setHeader('content-type',u.endsWith('.js')?'text/javascript':u.endsWith('.css')?'text/css':'text/html; charset=utf-8');s.end(require('fs').readFileSync('.'+u))}catch(e){s.statusCode=404;s.end('404')}}).listen(8080,()=>console.log('http://localhost:8080'))"
```

- 브라우저에서 `http://localhost:8080` (랜딩), `http://localhost:8080/chart.html?src=community` (차트, src 추적 확인).
- 이 머신(aside sandbox)에서 `npm install`이 esbuild postinstall에서 실패하면: `npm install --ignore-scripts` 후 다운로드된 바이너리의 quarantine 속성을 제거한다. `xattr -d com.apple.quarantine node_modules/@esbuild/darwin-arm64/bin/esbuild`. 일반 터미널에서는 이 문제가 없다.

## 이메일 폼 연동 (완료 · Google Form formResponse)

1. 이메일 폼은 Google Form formResponse로 숨은 iframe POST 한다. 엔드포인트와 엔트리 매핑은 `js/app.js` 상단의 `FORM_ACTION`·`ENTRY` 상수에 있고(랜딩은 `index.html` 인라인 스크립트의 동일 상수), 필드는 `entry.1579324013`(이메일) · `entry.1312707957`(src) · `entry.221952772`(page)로 매핑돼 있다.
2. HTML의 `action="{{FORM_ENDPOINT}}"` 토큰은 검증 모드(smoke.cjs) 유지용이고, 실제 제출은 JS가 formResponse 주소로 보낸다. 제출이 끝나면 iframe load 시점에 기존 완료 문구로 전환된다.
3. 엔드포인트가 비어 있으면 기존 mailto 폴백이 동작한다(폴백 수신 주소: `index.html`·`chart.html` 상단 `window.SAJU_CONFIG.mailto`와 `js/app.js`의 `MAILTO` 기본값).

## 배포

1. 오너 승인 후 `service/experiment/`를 `design-ssot` 브랜치에 커밋 · 푸시하면 GitHub Pages가 배포한다.
2. `js/bundle.js`는 커밋에 포함해야 한다(Pages는 빌드를 돌지 않는다). `node_modules/`는 `.gitignore`로 제외.
3. 채널 링크: `https://(배포 주소)/?src=seo` · `?src=community` · `?src=social`. 측정 방법은 [experiment-plan.md](experiment-plan.md) §4.

## 출처

- 디자인: `design-ssot/05-handoff/tokens.css` v1.0 + `HANDOFF.md` (Swiss Ledger KO)
- 카피: `docs/copy-deck-v2-kr.md` (배지명 · 한 줄 · CTA · 에러 문구, `{{PRICE}}` 토큰 유지)
- 채널 근거: `docs/wayfinder/honbit-channel-reverse.md`
- 엔진: `service/engine/src/engine.cjs` (`computeChart`, README의 API 참조)
- 콘텐츠: `service/content/stems.json` · `policy.json` (재구성 물상 · 고지문, 남촌 원문 인용 없음)
- 카드 구조 참고: `service/prototype/server.cjs` (wayfinder #13)
