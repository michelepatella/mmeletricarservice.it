import {Col, Statistic} from "antd";
import React, {useEffect, useState} from "react";
import '../../../styles/components/servizi/DivAutoUsate.css';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';

/**
 * This component represents the divisions of the "servizi" page, used to describe services
 * @param description
 * @returns {Element}
 * @constructor
 */
function DivAutoUsate({ description }) {

    /**
     * To keep track when the division is visible to start the animation of counter
     */
    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
        }
    }, [inView, hasStarted]);

    const formatter = (value) => hasStarted ? <CountUp end={value} /> : <span>0</span>;

    return (
        <>
            {/* Global division */}
            <div>
                {/* Statistic division */}
                <Col className="statistic-division" ref={ref}>

                    {/* Statistic (from 0% to 100%) */}
                    <Statistic
                        title={description}
                        value={hasStarted ? 100 : 0}
                        suffix="%"
                        className="custom-statistic"
                        formatter={formatter}
                    />
                </Col>
            </div>
        </>
    );
}

export default DivAutoUsate;