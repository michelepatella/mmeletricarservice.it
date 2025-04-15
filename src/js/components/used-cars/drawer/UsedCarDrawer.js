import React, {useState} from "react";
import {Collapse, Drawer, Flex} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {onUsedCarDrawerClose} from "../../../logic/usedCarDrawerHandler";
import {useUsedCarData} from "../../../hooks/useUsedCarData";
import {useDrawerBackButtonHandler} from "../../../hooks/useDrawerBackDrawer";
import UsedCarDrawerCarousel from "./UsedCarDrawerCarousel";
import UsedCarDrawerVerticalFlex from "./UsedCarDrawerVerticalFlex";
import CustomBackButton from "../../custom/CustomBackButton";
import CustomCarHelmet from "../../custom/CustomCarHelmet";
import {USED_CAR_ALL_INFO} from "../../../utils/const";
import UsedCarDrawerCollapse from "./UsedCarDrawerCollapse";

/**
 * Used Car Drawer
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCarDrawer(props) {

    //get the info of the used car of interest
    const usedCarInfo = props.usedCarInfo.find((car) =>
        car.id === props.usedCarOverview.id
    );

    //get used car info (if needed)
    const [isCarLoading, setIsCarLoading] = useState(true);
    useUsedCarData(
        'usedCarInfo?id=' + props.usedCarOverview.id,
        props.setUsedCarInfo,
        setIsCarLoading,
        usedCarInfo !== undefined
    )

    //to capture back button click
    useDrawerBackButtonHandler(props.setIsDrawerOpen)

    return (
        <>
            {/* Customized helmet for the link sharing */}
            <CustomCarHelmet usedCarOverview={props.usedCarOverview}/>

            {/* Drawer */}
            <Drawer
                className="used-car-drawer"
                closeIcon={<CustomBackButton />}
                onClose={() => onUsedCarDrawerClose(props.setIsDrawerOpen)}
                open={true}>

                {
                    isCarLoading ?
                        //loading outlined since the
                        //system is loading the used cars
                        <LoadingOutlined
                            className="loading-outlined"
                            spin={isCarLoading}
                            style={{ width: "100%" }} />
                        :
                        <>
                            {/* Flex horizontal container (info column + carousel) */}
                            <Flex
                                className="used-car-drawer-flex-horizontal"
                                width="70%">

                                {/* Flex vertical container with overview information */}
                                <Flex
                                    vertical
                                    width="30%">

                                    {/* Vertical flex (Name, Price, Overview info and CTA button) */}
                                    <UsedCarDrawerVerticalFlex usedCarOverview={props.usedCarOverview}/>

                                </Flex>

                                {/* Carousel */}
                                <UsedCarDrawerCarousel usedCarInfo={usedCarInfo}/>

                            </Flex>

                            {/* Collapse with all information */}
                            <UsedCarDrawerCollapse usedCarInfo={usedCarInfo}/>

                        </>

                }

            </Drawer>

        </>

    );
}

export default UsedCarDrawer;