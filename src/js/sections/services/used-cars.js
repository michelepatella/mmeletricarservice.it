import React, {useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";
import {
    USED_CARS_TITLE,
    USED_CARS_SUBTITLE,
} from "../../utils/const";
import {useUsedCarsOverview} from "../../hooks/useUsedCarsOverview";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomUsedCarCard from "../../components/custom/CustomUsedCarCard";
import CustomSectionHeader from "../../components/custom/CustomSectionHeader";
import CustomText from "../../components/custom/CustomText";
import {handleScrollLabelStyle} from "../../logic/usedCarsStyleHandler";

/**
 * Used cars section
 * @returns {Element}
 * @constructor
 */
function UsedCars() {

    //get used cars overview information
    const [usedCars, setUsedCars] = useState([]);
    const [areCarsLoading, setAreCarsLoading] = useState(true);
    useUsedCarsOverview(setUsedCars, setAreCarsLoading)

    return (

        <>
            <CustomSectionContainer id="used-cars">

                <CustomSectionHeader
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
                                    usedCars.length > 0 ?
                                        usedCars.map((car) => (
                                            <CustomUsedCarCard car={car}/>
                                        ))

                                        : null
                                }
                            </div>

                            {/* Scroll label, if any car */}
                            {
                                usedCars.length > 0 ?
                                    <CustomText
                                        type="description"
                                        text="< Scorri per visualizzare >"
                                        style={handleScrollLabelStyle()}/>
                                    : null
                            }

                        </>
                }

            </CustomSectionContainer>
        </>

    );
}

export default UsedCars;