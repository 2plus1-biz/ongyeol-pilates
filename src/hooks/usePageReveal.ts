import { useLayoutEffect, type RefObject } from 'react';

/**
 * Subtle one-time entrance reveal for page sections / intro blocks / cards.
 * - Only adds data attributes (no wrappers, no className changes).
 * - Content is visible by default; elements are hidden only after setup.
 * - Reduced motion or no IntersectionObserver => nothing is hidden.
 */
const CARD_RE = /(^|\s)rounded-(2xl|3xl)(\s|$)/;
const CARD_HINT_RE = /(^|\s)(border|border-2|bg-white|shadow-sm|shadow-md|shadow-xl)(\s|$)|(^|\s)bg-\[/;
const GRID_RE = /(^|\s)grid(\s|$)/;
const MAX_STEP = 3;

const isCard = (el: Element) => {
  const c = el.getAttribute('class') || '';
  return CARD_RE.test(c) && CARD_HINT_RE.test(c);
};

const shouldSkip = (el: Element) => {
  if (!(el instanceof HTMLElement)) return true;
  const tag = el.tagName;
  if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEMPLATE' || tag === 'VIDEO') return true;
  if (el.hasAttribute('data-no-reveal') || el.getAttribute('aria-hidden') === 'true') return true;
  const c = el.getAttribute('class') || '';
  // background layers, overlays, modals
  return /(^|\s)(absolute|fixed)(\s|$)/.test(c);
};

const hasDirectHeading = (el: Element) =>
  Array.from(el.children).some((c) => c.tagName === 'H1' || c.tagName === 'H2');

const shouldDescend = (el: Element) => {
  if (el.children.length === 0) return false;
  // never animate an ancestor of a fixed element (transform would break it)
  if (el.querySelector('.fixed')) return true;
  // opacity on an ancestor breaks backdrop-blur children (hero buttons)
  if (el.querySelector('[class*="backdrop-blur"]')) return true;
  if (Array.from(el.querySelectorAll('[class*="rounded-"]')).some(isCard)) return true;
  if (el.querySelector('h1, h2') && !hasDirectHeading(el)) return true;
  const c = el.getAttribute('class') || '';
  return GRID_RE.test(c) && el.children.length > 1;
};

const collect = (container: Element, out: HTMLElement[]) => {
  for (const child of Array.from(container.children)) {
    if (shouldSkip(child)) continue;
    if (isCard(child)) out.push(child as HTMLElement);
    else if (shouldDescend(child)) collect(child, out);
    else out.push(child as HTMLElement);
  }
};

export function usePageReveal(rootRef: RefObject<HTMLElement | null>, pageKey: string) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === 'undefined') return;
    if (!('IntersectionObserver' in window)) return;
    const reduceMq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    if (reduceMq?.matches) return;

    const sections = Array.from(root.querySelectorAll('section')).filter(
      (s) => !s.parentElement || !s.parentElement.closest('section'),
    );
    const units: HTMLElement[] = [];
    if (sections.length) sections.forEach((s) => collect(s, units));
    else if (root.firstElementChild) collect(root.firstElementChild, units);

    const active = document.activeElement;
    const pending = new Set<HTMLElement>();
    const timers = new Map<HTMLElement, number>();

    const finish = (el: HTMLElement) => {
      const t = timers.get(el);
      if (t !== undefined) window.clearTimeout(t);
      timers.delete(el);
      pending.delete(el);
      el.removeAttribute('data-reveal');
      el.removeAttribute('data-reveal-step');
    };

    const showNow = (el: HTMLElement) => {
      io.unobserve(el);
      finish(el);
    };

    const animateIn = (el: HTMLElement, step: number) => {
      io.unobserve(el);
      pending.delete(el);
      if (!el.isConnected) return finish(el);
      el.setAttribute('data-reveal-step', String(Math.min(step, MAX_STEP)));
      el.setAttribute('data-reveal', 'in');
      // safety net in case animationend never fires
      timers.set(el, window.setTimeout(() => finish(el), 700 + MAX_STEP * 70 + 300));
    };

    const io = new IntersectionObserver(
      (entries) => {
        const toAnimate: HTMLElement[] = [];
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!pending.has(el)) continue;
          if (!el.isConnected) {
            showNow(el);
          } else if (entry.isIntersecting) {
            toAnimate.push(el);
          } else if (entry.boundingClientRect.bottom <= 0) {
            showNow(el); // already scrolled past: show without motion
          }
        }
        toAnimate
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
          .forEach((el, i) => animateIn(el, i));
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );

    for (const el of units) {
      if (active && active !== document.body && el.contains(active)) continue;
      el.setAttribute('data-reveal', 'pending');
      pending.add(el);
      io.observe(el);
    }

    // Jumps (End key, fast scroll) can skip elements: show anything above the viewport.
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        pending.forEach((el) => {
          if (!el.isConnected || el.getBoundingClientRect().bottom <= 0) showNow(el);
        });
      });
    };

    // Keyboard focus must never land in a hidden block.
    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as Element | null;
      const el = target && 'closest' in target ? (target.closest('[data-reveal]') as HTMLElement | null) : null;
      if (el && root.contains(el)) showNow(el);
    };

    const onAnimEnd = (e: AnimationEvent) => {
      const el = e.target as HTMLElement;
      if (e.animationName === 'ong-reveal' && el.getAttribute('data-reveal') === 'in') finish(el);
    };

    const revealAll = () => {
      Array.from(pending).forEach(showNow);
      Array.from(timers.keys()).forEach(finish);
    };
    const onReduceChange = (e: MediaQueryListEvent) => {
      if (e.matches) revealAll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('beforeprint', revealAll);
    root.addEventListener('focusin', onFocusIn);
    root.addEventListener('animationend', onAnimEnd);
    reduceMq?.addEventListener?.('change', onReduceChange);

    return () => {
      io.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeprint', revealAll);
      root.removeEventListener('focusin', onFocusIn);
      root.removeEventListener('animationend', onAnimEnd);
      reduceMq?.removeEventListener?.('change', onReduceChange);
      // never leave anything hidden (also safe on detached nodes)
      units.forEach((el) => {
        const t = timers.get(el);
        if (t !== undefined) window.clearTimeout(t);
        el.removeAttribute('data-reveal');
        el.removeAttribute('data-reveal-step');
      });
      timers.clear();
      pending.clear();
    };
  }, [rootRef, pageKey]);
}
