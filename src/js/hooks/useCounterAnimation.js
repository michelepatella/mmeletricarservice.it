import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * To animate the statistics
 * @param threshold
 * @returns {{ref: (node?: (Element | null)) => void, hasStarted: boolean}}
 */
export const useCounterAnimation = (threshold = 0.5) => {

    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold });

    //when the view is visible, start the counting animation
    useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
        }
    }, [inView, hasStarted]);

    return { ref, hasStarted };

}