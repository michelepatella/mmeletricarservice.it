import {Col, Statistic} from "antd";
import React, {useState} from "react";
import '../../../styles/servizi/auto usate/DivAutoUsate.css';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';

/**
 * This component represents the divisions of auto usate
 * @param description
 * @returns {Element}
 * @constructor
 */
function DivAutoUsate({ description }) {
    const [hasStarted, setHasStarted] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    React.useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
        }
    }, [inView, hasStarted]);

    const formatter = (value) => hasStarted ? <CountUp end={value} /> : <span>0</span>;

    return (
        <div>
            <Col className="statistic-division" ref={ref}>
                <Statistic
                    title={description}
                    value={hasStarted ? 100 : 0}
                    suffix="%"
                    className="custom-statistic"
                    formatter={formatter}
                />
            </Col>
        </div>
    );
}

export default DivAutoUsate;