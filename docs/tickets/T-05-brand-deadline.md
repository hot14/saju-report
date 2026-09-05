# T-05 · {{BRAND}} 확정 절차 진행 (P2 잔여 · 데드라인 도래)

> 상태: open · 우선순위: **P0** · 담당 후보: COORD(프로덕트 결정) · 예상: 0.5h~2h · 소스: product-decisions.md P2 + gate-cto-solutions.md §5-3(리스크 #3) · GitHub: hot14/saju-report#1 잔여 항목 5
> Design Read: 연기됐던 서비스명 결정의 자동 승격 조건이 도래했는지 확인하고 절차를 실행·기록하는 결정 티켓, with 토큰 채움 상태가 남기는 구체적 연기 비용(공유 카드 시그니처)의 해소가 목적.

## 배경

- `design-ssot/docs/product-decisions.md` P2: "{{BRAND}} 토큰 유지, 확정 데드라인 = 프로덕션 화면 재생성 착수 전(Stitch U1 라운드 이후 즉시). 미확정 시 SajuRoot를 기본 채택하는 절차로 자동 승격한다."
- U1 EN 7화면 780px 재생성이 완료됐다(커밋 eaaaf4a). **데드라인 조건이 도래했고 절차 개시가 지연 중이다.**
- 연기 비용: 공유 카드 시그니처 밴드·{{DOMAIN}} 루프백이 토큰 채움 상태(share-card-v2-spec.md §4). T-11(그로스)과 U1 추가 라운드가 대기 중.

## 범위

- 할 것: 서비스명 확정 절차 진행 + product-decisions.md 갱신(코디네이터 커밋).
- 하지 않을 것: 워커에 의한 기존 문서 수정. 도메인 등록 실행 자체는 코디네이터·사용자 몫(티켓은 확인·기록).

## 수용조건

- [ ] product-decisions.md에 최종 결정 기록: SajuRoot 자동 승격 집행 또는 대안 확정(절차 규칙 준수)
- [ ] 도메인 4종(.com/.io/.app/.co.kr) 등록 여부·예정 기록(아카이브 O3)
- [ ] 상표 최종 확인(변리사 검토) 결과 또는 예정일 기록
- [ ] 확정 시 {{BRAND}}·{{DOMAIN}} 치환 계획 수립: 대상 파일 목록(화면·카피덱·카드 스펙·재접근 설계)과 일괄 치환 커밋 순서. G1 토큰 규칙(하드코딩 금지 범위)과 정합
- [ ] 미확정 유지 시 다음 데드라인 재선언(무기한 연기 금지)

## 체크리스트

- [ ] SajuRoot 유사명 2건(일본 サグルート·국내 사주온루트) 재확인
- [ ] 병기 규칙 "SajuRoot | Korean Four Pillars" 승계 여부 판정
- [ ] 치환 대상 grep 목록화(`{{BRAND}}`·`{{DOMAIN}}` 전수)

## 의존성

- 선행: 없음. **후속(T-11 그로스·차기 U1 라운드)의 전제이므로 최우선 진행 권장.**

## 관련 문서

`design-ssot/docs/product-decisions.md` · `docs/gate-cto-solutions.md` §1.1 P2·§5-3 · `docs/share-card-v2-spec.md` §4 · `design-ssot/02-direction/github-pages-archive-digest.md` O3
