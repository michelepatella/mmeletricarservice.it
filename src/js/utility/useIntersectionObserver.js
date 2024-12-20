import { useEffect } from 'react';

/**
 * Method to keep track if a section is visible in order to start the animation
 * @param ref
 */
const useIntersectionObserver = (ref) => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref]);
};

export default useIntersectionObserver;