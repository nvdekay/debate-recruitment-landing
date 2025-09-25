import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = '0px',
        triggerOnce = true,
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;

                if (isIntersecting) {
                    setIsVisible(true);
                    setHasTriggered(true);

                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce && !hasTriggered) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                root,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, triggerOnce, hasTriggered]);

    return [elementRef, isVisible];
};
