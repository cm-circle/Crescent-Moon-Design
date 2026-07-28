// GSAP animations for Crescent Moon Design landing page
// Only runs if full GSAP + ScrollTrigger load within 3s

(function() {
  // Bail if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  // Timeout — if GSAP hasn't loaded in 3s, show static content
  const timeout = setTimeout(() => {
    console.warn('[CMDesign] GSAP timed out — showing static content');
  }, 3000);

  function tryInit() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    clearTimeout(timeout);
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Phase 1: Moon entrance (fade in + slight scale)
    tl.fromTo('.hero__moon-svg',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
    tl.to('.hero__moon-glow', { opacity: 1, duration: 0.8, ease: 'sine.inOut' }, '-=0.4');
    tl.to({}, { duration: 0.5 }); // pause

    // Phase 2: Eclipse reverse — shadow moves from left (crescent) to center (full moon)
    const sweepDur = 2.4;
    const sweepEase = 'power2.inOut';

    tl.to('.eclipse-shadow', {
      attr: { cx: 200 },  // move from -130 to 200 (center)
      duration: sweepDur,
      ease: sweepEase
    });

    // Text wipes in from left AFTER eclipse completes
    tl.fromTo('.hero__text',
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: sweepDur * 0.8, ease: sweepEase },
      '-=0.6'  // start text slightly before eclipse finishes
    );

    tl.to('.hero__moon-glow', { opacity: 0.3, duration: sweepDur, ease: 'sine.in' }, '<');

    // Phase 3: Scroll — moon scales down and exits top-left
    gsap.to('.hero__moon-container', {
      scrollTrigger: {
        trigger: '.hero',
        start: '60% top',
        end: 'bottom top',
        scrub: 1
      },
      scale: 0.08,
      x: () => -window.innerWidth * 0.42,
      y: () => -window.innerHeight * 0.38,
      opacity: 0,
      ease: 'none'
    });

    // Phase 4: Section reveals on scroll
    gsap.utils.toArray('.section-panel').forEach(panel => {
      gsap.fromTo(panel,
        { opacity: 0.2, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 75%',
            end: 'top 30%',
            scrub: 1
          }
        }
      );
    });
  }

  // Wait for GSAP to be ready
  if (typeof gsap !== 'undefined') {
    tryInit();
  } else {
    const checkInterval = setInterval(() => {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        clearInterval(checkInterval);
        tryInit();
      }
    }, 100);
  }
})();