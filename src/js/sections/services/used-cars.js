import React, {useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";
import {
    USED_CARS_TITLE,
    USED_CARS_SUBTITLE,
} from "../../utils/const";
import {handleScrollLabelStyle} from "../../logic/usedCarsStyleHandler";
import SectionContainer from "../../components/sections/SectionContainer";
import UsedCarCard from "../../components/used-cars/UsedCarCard";
import SectionHeader from "../../components/sections/SectionHeader";
import CustomText from "../../components/custom/CustomText";
import {useUsedCarData} from "../../hooks/useUsedCarData";

/**
 * Used cars section
 * @returns {Element}
 * @constructor
 */
function UsedCars() {

    //get used cars overview information
    const [usedCarsOverview, setUsedCarsOverview] = useState([]);
    const [areCarsLoading, setAreCarsLoading] = useState(true);
    useUsedCarData('usedCarsOverview', setUsedCarsOverview, setAreCarsLoading)

    return (

        <>
            <SectionContainer id="used-cars">

                {/* Section Header */}
                <SectionHeader
                    section="AUTO USATE"
                    title={USED_CARS_TITLE}
                    subtitle={USED_CARS_SUBTITLE} />


                {/* While the cars are loading show the loading outlined. As soon
                as the loading is finished, if data is not empty, show it. */}
                {
                    areCarsLoading ?
                        //loading outlined since the
                        //system is loading the used cars
                        <LoadingOutlined
                            className="loading-outlined"
                            spin={areCarsLoading} />
                        :
                        <>
                            <div className="used-cars-container">
                                {/* Used Car Card for all the available cars */}
                                {
                                    usedCarsOverview.length > 0 ?
                                        usedCarsOverview.map((car, index) => (
                                            <UsedCarCard
                                                key={index}
                                                usedCarOverview={car} />
                                        ))

                                        : null
                                }
                            </div>

                            {/* Scroll label, if any car */}
                            {
                                usedCarsOverview.length > 0 ?
                                    <CustomText
                                        type="body"
                                        text="< Scorri per visualizzare >"
                                        style={handleScrollLabelStyle()}/>
                                    : null
                            }

                        </>
                }

            </SectionContainer>
        </>

    );
}

export default UsedCars;