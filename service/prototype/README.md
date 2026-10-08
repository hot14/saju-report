# SAJU(가칭) 무료 코어 첫 화면 프로토타입 · wayfinder #13

실행:

```bash
node server.cjs
```

1. 이 폴더에서 위 명령을 실행하면 포트 4173에서 서버가 열린다.
2. 브라우저에서 `http://localhost:4173` 접속. 종료는 Ctrl+C.
3. 의존성 설치가 필요 없다. 상위 폴더의 engine.cjs와 content JSON을 그대로 읽는다.

## 빠른 검증 (curl)

```bash
# 케이스 1: 시각 있음
curl -X POST -d "year=1985&month=3&day=21&time=14%3A30" http://localhost:4173/result

# 케이스 2: 시각 미상
curl -X POST -d "year=1985&month=3&day=21&unknown=1" http://localhost:4173/result

# 절기 경계 케이스 (입춘 87분 전, 경고 표시 확인)
curl "http://localhost:4173/result?year=2024&month=2&day=4&time=16%3A00"
```

## 파일 구성

| 파일 | 역할 |
|---|---|
| `server.cjs` | Node 내장 http 서버 + 서버 사이드 렌더링 (GET / 폼, POST·GET /result 카드) |
| `style.css` | Swiss Ledger KO 정적 스타일 (토큰 v1.0 값 그대로) |

## 출처 대응

- 디자인 토큰: `design-ssot/05-handoff/tokens.css` v1.0
- 화면 카피: `docs/copy-deck-v2-kr.md` (SajuRoot, {{PRICE}} 토큰 유지)
- 영어 배지명: `docs/badge-naming-en.md` 신규 영어명 열
- 계산: `service/engine/src/engine.cjs` (반환 키 실측 기준)
- 콘텐츠: `service/content/stems.json` 성향·성장 조건 재서술, `service/content/policy.json` 고지문
