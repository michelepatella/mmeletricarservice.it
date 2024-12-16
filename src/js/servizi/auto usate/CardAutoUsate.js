import {Col, Statistic} from "antd";
import React, {useState} from "react";
import '../../../css/servizi/auto usate/CardAutoUsate.css';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';

/**
 * This component represents the informative card of auto usate section
 * @param description
 * @returns {Element}
 * @constructor
 */
function CardAutoUsate({ description }) {
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
                    style={{fontWeight: "bold"}}
                    value={hasStarted ? 100 : 0}
                    suffix="%"
                    className="custom-statistic"
                    formatter={formatter}
                />
            </Col>
        </div>
    );
}

export default CardAutoUsate;