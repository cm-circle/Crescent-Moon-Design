// GSAP + SplitType animations for the Crescent Moon Design landing page.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Phase 1: Moon entrance
  tl.fromTo('.hero__moon-svg', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' });
  tl.to('.hero__moon-glow', { opacity: 1, duration: 0.8, ease: 'sine.inOut' }, '-=0.4');
  tl.to({}, { duration: 0.5 });

  // Phase 2: Eclipse + text sweep
  const sweepDur = 2.4;
  const sweepEase = 'power2.inOut';
  tl.to('.eclipse-shadow', { attr: { cx: 288 }, duration: sweepDur, ease: sweepEase });
  tl.fromTo('.hero__text', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: sweepDur * 0.8, ease: sweepEase }, '-=0.6');
  tl.to('.hero__moon-glow', { opacity: 0.3, duration: sweepDur, ease: 'sine.in' }, '<');

  // Phase 3: Character settle
  const nameSplit = new SplitType('.agency-name', { types: 'chars' });
  const taglineSplit = new SplitType('.tagline', { types: 'words' });
  const introSplit = new SplitType('.services-intro', { types: 'chars' });
  tl.to('.hero__moon-glow', { opacity: 0.7, scale: 1.06, duration: 0.5, ease: 'power2.out' });
  tl.to('.hero__moon-glow', { opacity: 0.4, scale: 1, duration: 0.9, ease: 'sine.inOut' });
  tl.to(nameSplit.chars, { opacity: 1, x: 0, duration: 0.55, stagger: 0.028, ease: 'power3.out' }, '-=1.1');
  tl.to(taglineSplit.words, { opacity: 1, x: 0, duration: 0.45, stagger: 0.05, ease: 'power3.out' }, '-=0.7');
  tl.to(introSplit.chars, { opacity: 1, x: 0, duration: 0.35, stagger: 0.012, ease: 'power2.out' }, '-=0.4');

  // Phase 4: Moon docks on scroll
  gsap.to('.hero__moon-container', {
    scrollTrigger: { trigger: '.hero', start: '60% top', end: 'bottom top', scrub: 1 },
    scale: 0.08,
    x: () => -window.innerWidth * 0.42,
    y: () => -window.innerHeight * 0.38,
    opacity: 0,
    ease: 'none',
  });
  gsap.to('.moon-dock', {
    scrollTrigger: { trigger: '.hero', start: '75% top', end: 'bottom top', scrub: 1 },
    opacity: 1,
    scale: 1,
    ease: 'none',
  });

  // Scroll-reveal for sections below hero
  gsap.utils.toArray('.service-col, .process-step, .automation, .spotlight, .cta').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}