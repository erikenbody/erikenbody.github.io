import React, { useEffect, useRef, useState } from 'react';

// Keep this in sync with the `duration-700` Tailwind class below.
const TRANSITION_DURATION_MS = 700;

const AnimatedSection = ({ children, className = "", delay = 0, disableTransform = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSettled, setHasSettled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    let revealTimeoutId;
    let settleTimeoutId;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealTimeoutId = window.setTimeout(() => {
            setIsVisible(true);

            // Once the enter transition has finished, drop the transform
            // entirely instead of leaving it resolved at translateY(0).
            // Any non-`none` transform on an ancestor becomes the
            // containing block for `position: sticky`/`fixed` descendants
            // (breaking sticky elements rendered inside an AnimatedSection)
            // and keeps the element on its own compositor layer for as
            // long as the transform stays set. Settling back to no
            // transform avoids both problems once the animation is done.
            settleTimeoutId = window.setTimeout(() => {
              setHasSettled(true);
            }, TRANSITION_DURATION_MS);
          }, delay);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px 80px 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (revealTimeoutId) {
        window.clearTimeout(revealTimeoutId);
      }

      if (settleTimeoutId) {
        window.clearTimeout(settleTimeoutId);
      }
    };
  }, [delay]);

  // disableTransform is for wrappers around (or that are) a `position:
  // sticky` element: they still join the same staggered fade-in as every
  // other AnimatedSection, but only ever animate opacity, so this element's
  // computed transform stays `none` for its entire life and never becomes
  // a sticky-breaking containing block.
  if (disableTransform) {
    return (
      <div
        ref={ref}
        className={`transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      >
        {children}
      </div>
    );
  }

  // Pre-settle: animate both opacity and transform in. Post-settle: only
  // opacity is ever touched again, and the transform utility is dropped so
  // the element's computed transform goes back to `none`.
  const transitionClass = hasSettled ? 'transition-opacity' : 'transition-[opacity,transform]';
  const motionClass = hasSettled
    ? 'opacity-100'
    : isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      className={`${transitionClass} duration-700 ease-out ${motionClass} ${className}`}
      style={hasSettled ? { transform: 'none' } : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
