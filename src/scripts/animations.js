// GSAP animations for Crescent Moon Design landing page
// Loaded conditionally — only runs if GSAP is available and user hasn't opted out of motion

export function initAnimations() {
  // Bail if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Show all elements immediately for reduced motion users
    document.querySelectorAll('.hero__text').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Wait for GSAP to load
  if (typeof gsap === 'undefined') {
    // Fallback: show elements without animation
    document.querySelectorAll('.hero__text').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Phase 1: Moon entrance
  tl.fromTo('.hero__moon-svg',
    { scale: 0.9, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
  );
  tl.to('.hero__moon-glow', { opacity: 1, duration: 0.8, ease: 'sine.inOut' }, '-=0.4');
  tl.to({}, { duration: 0.5 });

  // Phase 2: Eclipse + text reveal
  const sweepDur = 2.4;
  const sweepEase = 'power2.inOut';

  tl.to('.eclipse-shadow', {
    attr: { cx: 288 }, duration: sweepDur, ease: sweepEase
  });
  tl.to('.hero__text', {
    opacity: 1, duration: sweepDur, ease: sweepEase
  }, '<');
  tl.to('.hero__moon-glow', {
    opacity: 0.3, duration: sweepDur, ease: 'sine.in'
  }, '<');

  // Phase 3: Scroll — moon scales down
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

  // Phase 5: Section reveals
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

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
