import { useEffect, useState } from 'react';

/**
 * To track if a section/division is visible or not
 * @param ref
 * @returns {boolean}
 */
const useIntersectionObserver = (ref) => {

    //declare state to track visibility of the element
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        //options for the IntersectionObserver
        const options = {
            root: null, //Observe based on the viewport
            rootMargin: "0px", //No margin applied
            threshold: 0.5, //Trigger when at least 50% of the element is visible
        };

        //create an IntersectionObserver instance
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    //if element is in view, update state and add CSS class
                    setIsVisible(true);
                    entry.target.classList.add('in-view');

                    //stop observing once the element is visible
                    observer.unobserve(entry.target);
                } else {
                    //if element is out of view, update state
                    setIsVisible(false);
                }
            });
        }, options);

        //start observing the element if the ref is valid
        if (ref && ref.current)
            observer.observe(ref.current);

        //cleanup function to stop observing when component unmounts
        return () => {
            if (ref && ref.current)
                observer.unobserve(ref.current);
        };
    }, [ref]); //run effect when ref changes

    return isVisible;
};

export default useIntersectionObserver;