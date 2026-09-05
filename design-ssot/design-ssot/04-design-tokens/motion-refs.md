# 모션 레퍼런스

원칙: 모션 예산은 2곳(계산 중 먹 확산, 카드 등장 오브제 스트로크). 아래는 구현 참고용 데모·튜토리얼이다.

## 채택 대상 효과

| 화면 | 효과 | 참고 구현 |
|---|---|---|
| 계산 중 | 먹 번짐 (radial ink diffusion) | SVG feTurbulence 마스크 + GSAP scale/opacity. Codrops 셰이더 리플 기법을 2D 마스크로 단순화 |
| 계산 중 | 8글자 낙하 배치 | GSAP timeline, 글자당 80ms 간격, y-8px 페이드업 |
| 무료→공유 카드 | 오브제 스트로크 드로잉 | SVG stroke-dashoffset 애니메이션 (line drawing) |
| 전환 공통 | 200~300ms ease-out 페이드 | CSS transition 기본값 |

## 참고 링크

- Codrops · How to Animate WebGL Shaders with GSAP: Ripples, Reveals, and Dynamic Blur (2025-10): https://tympanus.net/codrops/2025/10/08/how-to-animate-webgl-shaders-with-gsap-ripples-reveals-and-dynamic-blur-effects · 데모: https://tympanus.net/Tutorials/ShaderAnimationGSAP/ · 코드: https://github.com/biazo/codrops-animate-shaders-with-gsap · 리플·리빌·블러의 GSAP 연동 원리. 우리는 WebGL 없이 SVG/CSS로 축소 적용.
- Codrops · Rain & Water Effect Experiments: https://tympanus.net/codrops/2015/11/04/rain-water-effect-experiments/ · 데모: http://tympanus.net/Development/RainEffect/ · 코드: https://github.com/codrops/RainEffect · 물방울 WebGL 고전. 과하므로 감상용 참고.
- Codrops · Building an Infinite GSAP Scroll Gallery with Parallax and Flip Transitions (2026-07): https://tympanus.net/codrops/2026/07/30/building-an-infinite-gsap-scroll-gallery-with-parallax-and-flip-transitions · 데모: https://tympanus.net/Tutorials/InfiniteScrollGSAPGallery/ · 카드 그리드 → 상세 전환 패턴 (무료 결과 → 카드 확대에 응용 가능).
- GSAP ScrollTrigger / ScrollSmoother: https://gsap.com/scroll/ · 스크롤 리빌 기본. 단, 모바일 스크롤잭킹은 금지.
- GSAP 데모 모음: https://demos.gsap.com/
- GSAP 예제 20선 (2026-07 갱신): https://animation-addons.com/blog/gsap-animation-examples-effects/ · 텍스트 리빌·호버 패턴 스캔용.

## 금지 모션

- 스크롤잭킹·패럴랙스 과다 (모바일 특히)
- 로딩 스피너, 프로그레스 바 (먹 번짐으로 대체)
- 버튼 글로우, 네온 펄스
- "Scroll to explore" 류 바운스 화살표
- 카운트다운·긴급성 애니메이션 (결제 화면 전면 금지)
