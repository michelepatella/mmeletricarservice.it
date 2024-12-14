import {Col, Statistic} from "antd";
import React from "react";
import '../../../css/servizi/auto usate/CardAutoUsate.css';
import CountUp from 'react-countup';

/**
 * This component represents the informative card of auto usate section
 * @param description
 * @returns {Element}
 * @constructor
 */
function CardAutoUsate({ description }) {

    const formatter = (value) => <CountUp end={value}/>;

    return (
        <div>
            <Col className="statistic-division">
                <Statistic title={description} value={100} suffix="%" className="custom-statistic" formatter={formatter}/>
            </Col>
        </div>
    );
}

export default CardAutoUsate;