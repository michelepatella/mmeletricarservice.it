import {useEffect, useState} from 'react';

/**
 * Method to keep track if a section/division is visible or not
 * @param ref
 * @returns {boolean}
 */
const useIntersectionObserver = (ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }else{
                    setIsVisible(false);
                }
            });
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref]);

    return isVisible;
};

export default useIntersectionObserver;