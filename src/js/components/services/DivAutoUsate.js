import '../../../styles/components/services/DivAutoUsate.css';
import React from 'react';
import CountUp from 'react-countup';
import { Col, Statistic } from 'antd';
import {useCounterAnimation} from "../../hooks/useCounterAnimation";

/**
 * This component represents the division of the "auto usate" page
 * @param description
 * @returns {React.JSX.Element}
 * @constructor
 */
function DivAutoUsate({ description }) {

    //generate the stastics animation
    const { ref, hasStarted } = useCounterAnimation();

    //formatter for statistics
    const formatter = (value) => (
        hasStarted ?
            <CountUp end={value} /> :
            <span>0</span>
    );

    return (
        <div>

            {/* Statistics */}
            <Col
                className='statistic-division'
                ref={ref}>

                <Statistic
                    title={description}
                    value={hasStarted ? 100 : 0}
                    suffix='%'
                    className='custom-statistic'
                    formatter={formatter}
                />

            </Col>

        </div>
    );

}

export default DivAutoUsate;