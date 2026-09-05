# 1. Record architecture decisions

Date: 2026-09-05

## Status

Accepted

## Context

설계·판정·카피 결정이 문서에 기록되지 않으면 나중에 왜 그렇게 했는지 잃어버린다(설계 문서 §7: "문서에 없는 것은 존재하지 않는 것").

## Decision

아키텍처 결정을 MADR 형식의 ADR로 `docs/adr/`에 기록한다.

## Consequences

- 결정 변경 시 새 ADR 작성(구 ADR은 superseded 표기).
- grill-with-docs가 ADR 생성을 지원한다.
