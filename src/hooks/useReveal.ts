import { useEffect } from 'react';

/**
 * Entrance motion for elements marked `data-reveal` (stagger with a `--d` delay).
 * Content is visible by default; the hide-then-reveal only applies once this runs,
 * anything already on screen is shown at once, and reduced-motion users get no travel.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
    if (!els.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-in'));
      return;
    }

    // Anything already in view stays visible — no flash on load
    els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
    });
    document.documentElement.classList.add('motion-ok');

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
      { rootMargin: '0px 0px -10% 0px' },
    );
    els.filter(el => !el.classList.contains('is-in')).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
