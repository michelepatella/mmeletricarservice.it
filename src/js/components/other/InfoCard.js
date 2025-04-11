import { Flex } from "antd";
import {handleTitleStyle} from "../../logic/infoCardStyleHandler";
import CustomText from "../custom/CustomText";

/**
 * Info Card
 * @returns {Element}
 * @constructor
 * @param props
 */
function InfoCard(props){

    return (
        <>
            {/* Info Card global container */}
            <div className="info-card">

                {/* Flex container*/}
                <Flex
                    className="info-card-flex"
                    gap="small"
                    align="start">

                    {/* Icon */}
                    { props.icon ?
                        <img
                            className="info-card-icon"
                            src={props.icon}
                            alt="info-card-icon" />
                        : null}

                    {/* Title */}
                    <CustomText
                        type="subheading"
                        text={props.title}
                        style={handleTitleStyle()} />

                </Flex>

                {/* Info Card description */}
                <CustomText
                    type="body"
                    text={props.description}
                    style={{marginTop: "0"}} />

            </div>
        </>
    );
}

export default InfoCard;