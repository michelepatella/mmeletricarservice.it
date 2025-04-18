import React, {useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";
import {
    USED_CARS_TITLE,
    USED_CARS_SUBTITLE,
    USED_CAR_SCROLL_LABEL_TEXT,
    USED_CARS_UNAVAILABLE_DESCRIPTION
} from "../../utils/const";
import {handleScrollLabelStyle, handleUnavailableUsedCarDescriptionStyle} from "../../logic/usedCarsStyleHandler";
import {useUsedCarData} from "../../hooks/useUsedCarData";
import SectionContainer from "../../components/sections/SectionContainer";
import UsedCarCard from "../../components/used-cars/UsedCarCard";
import SectionHeader from "../../components/sections/SectionHeader";
import CustomText from "../../components/custom/CustomText";

/**
 * Used cars section
 * @returns {Element}
 * @constructor
 */
function UsedCars() {

    //get used cars overview information
    const [usedCarsOverview, setUsedCarsOverview] = useState([]);
    const [areCarsLoading, setAreCarsLoading] = useState(true);
    useUsedCarData(
        'usedCarsOverview',
        setUsedCarsOverview,
        setAreCarsLoading,
        false
    )

    return (

        <SectionContainer id="auto-usate">

            {/* Section Header */}
            <SectionHeader
                section="AUTO USATE"
                title={USED_CARS_TITLE}
                subtitle={USED_CARS_SUBTITLE} />

            {/* While the cars are loading show the loading outlined. As soon
                as the loading is finished, if data is not empty, show it. */}
            {
                areCarsLoading ? (

                    <LoadingOutlined
                        className="loading-outlined"
                        spin={areCarsLoading} />

                ) : usedCarsOverview?.length > 0 ? (

                    <>
                        {/* Show all the available used cars */}
                        <div className="used-cars-container">
                            {usedCarsOverview?.map((car, index) => (
                                <UsedCarCard
                                    key={index}
                                    usedCarOverview={car} />
                            ))}
                        </div>

                        {/* Scroll label */}
                        <CustomText
                            type="body"
                            text={USED_CAR_SCROLL_LABEL_TEXT}
                            style={handleScrollLabelStyle()} />
                    </>

                ) : (

                    //unavailable used cars label + image
                    <div className="unavailable-used-cars-container">
                        <CustomText
                            type="body"
                            text={USED_CARS_UNAVAILABLE_DESCRIPTION}
                            style={handleUnavailableUsedCarDescriptionStyle()} />
                        <img
                            src="/images/empty-used-cars-image.jpeg"
                            alt="unavailable-used-cars"/>
                    </div>

                )
            }

        </SectionContainer>

    );
}

export default UsedCars;