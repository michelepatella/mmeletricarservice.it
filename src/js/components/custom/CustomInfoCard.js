import React, { useRef } from "react";
import { Flex } from "antd";
import {handleCustomInfoCardTitleStyle} from "../../logic/styleHandler";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomText from "./CustomText";

/**
 * Custom Info Card
 * @returns {Element}
 * @constructor
 * @param props
 */
function CustomInfoCard(props){

    //IntersectionObserver to generate the animation when the division is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            {/* Custom Info Card global container */}
            <div className="custom-info-card">

                {/* Flex container*/}
                <Flex
                    className="custom-info-card-flex"
                    gap="small"
                    align="start">

                    {/* Icon */}
                    { props.icon ?
                        <img
                            className="custom-info-card-icon"
                            src={props.icon}
                            alt="custom-info-card-icon" />
                        : null}

                    {/* Title */}
                    <CustomText
                        type="subtitle"
                        text={props.title}
                        style={handleCustomInfoCardTitleStyle()} />

                </Flex>

                {/* Info Card description */}
                <CustomText
                    type="description"
                    text={props.description}
                    style={{marginTop: "0"}} />

            </div>
        </>
    );
}

export default CustomInfoCard;