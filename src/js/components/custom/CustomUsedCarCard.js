import CustomText from "./CustomText";
import {Flex} from "antd";
import React from "react";
import CustomTechInfoCard from "./CustomTechInfoCard";
import {handleCustomUsedCarsCardNamePrice} from "../../logic/styleHandler";

/**
 * Custom Used Car Card
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomUsedCarCard(props) {
    return(

        <div className="custom-used-cars-card">

            {/*<img src={props.img} />*/}

            <Flex
                className="custom-used-cars-card-flex"
                gap="small"
                align="start">

                <div>

                    {/* Name */}
                    <CustomText
                        type="description"
                        text={props.car.name}
                        disableAnimation={true}
                        style={handleCustomUsedCarsCardNamePrice()} />

                    {/* Tech Info Card */}
                    <CustomTechInfoCard
                        overview={true}
                        car={props.car} />

                </div>

                {/* Price */}
                <CustomText
                    type="description"
                    text={props.car.price}
                    disableAnimation={true}
                    style={handleCustomUsedCarsCardNamePrice()} />

            </Flex>

        </div>

    );
}

export default CustomUsedCarCard;