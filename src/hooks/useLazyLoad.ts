import { useEffect, useRef, useState, useCallback } from 'react';

interface UseLazyLoadOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export const useLazyLoad = (
  options: UseLazyLoadOptions = {}
): [React.RefObject<HTMLElement>, boolean] => {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        
        if (triggerOnce && observerRef.current && elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
          observerRef.current = null;
        }
      } else if (!triggerOnce) {
        setIsIntersecting(false);
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) {
      return;
    }

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold,
    });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleIntersection, rootMargin, threshold]);

  return [elementRef, isIntersecting];
};

// Hook for throttled scroll events
export const useThrottledScroll = (
  callback: (scrollY: number) => void,
  delay: number = 16
) => {
  const throttledCallback = useRef<(scrollY: number) => void>();
  const lastRun = useRef<number>();

  useEffect(() => {
    throttledCallback.current = (scrollY: number) => {
      if (lastRun.current && Date.now() - lastRun.current < delay) {
        return;
      }
      
      lastRun.current = Date.now();
      callback(scrollY);
    };
  }, [callback, delay]);

  useEffect(() => {
    const handleScroll = () => {
      if (throttledCallback.current) {
        throttledCallback.current(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

// Hook for debounced resize events
export const useDebouncedResize = (
  callback: (size: { width: number; height: number }) => void,
  delay: number = 250
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial call
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
}; 