import CustomText from "./CustomText";
import {Flex} from "antd";
import React from "react";
import CustomTechInfoCard from "./CustomTechInfoCard";

function CustomUsedCarCard(props) {
    return(

        <div className="custom-used-cars-card">

            <img src={props.img} />

            <Flex
                className="custom-used-cars-card-flex"
                gap="small"
                align="start">

                <div>
                    <CustomText
                        type="description"
                        text="Fiat 500"
                        disableAnimation={true}
                        style={{fontWeight: "bold", opacity: 1}} />

                    <CustomTechInfoCard overview={true} />
                </div>

                <CustomText
                    type="description"
                    text="€5,000.00"
                    disableAnimation={true}
                    style={{fontWeight: "bold", opacity: 1}} />


            </Flex>

        </div>

    );
}

export default CustomUsedCarCard;