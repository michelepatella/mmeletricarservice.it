import React, {useState} from "react";
import {Carousel, Drawer, Flex, Image} from "antd";
import {CONTACTS, PHONE} from "../../utils/const";
import {ArrowLeftOutlined, LoadingOutlined} from "@ant-design/icons";
import {onUsedCarDrawerClose, onUsedCarDrawerOpen} from "../../logic/usedCarDrawerHandler";
import {handleNamePriceStyle} from "../../logic/usedCarsStyleHandler";
import {useUsedCarData} from "../../hooks/useUsedCarData";
import UsedCarOverview from "./UsedCarOverview";
import CustomText from "../custom/CustomText";
import CustomButton from "../custom/CustomButton";

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

    return (

        <Drawer
            className="used-car-drawer"
            closeIcon={
                <span className="close-label">
                    <ArrowLeftOutlined/>
                    <CustomText
                        type="caption"
                        text="Indietro" />
                </span>
            }
            onClose={() => onUsedCarDrawerClose(props.setIsDrawerOpen)}
            open={() => onUsedCarDrawerOpen(props.setIsDrawerOpen)}>

            {
                isCarLoading ?
                    //loading outlined since the
                    //system is loading the used cars
                    <LoadingOutlined
                        className="loading-outlined"
                        spin={isCarLoading} />
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

                            {/* Name of the car */}
                            <CustomText
                                type="heading"
                                text={props.usedCarOverview.name}
                                disableAnimation={true}
                                style={{
                                    marginTop: 0,
                                    ...handleNamePriceStyle()}} />

                            {/* Price */}
                            <CustomText
                                type="subheading"
                                text={props.usedCarOverview.price}
                                disableAnimation={true}
                                style={{
                                    marginTop: 0,
                                    ...handleNamePriceStyle()}} />

                            {/* Overview information */}
                            <UsedCarOverview
                                usedCarOverview={props.usedCarOverview}
                                isTitleVisible={true} />

                            {/* Call-To-Action Button */}
                            <CustomButton
                                isContact={true}
                                isCta={true}
                                value={PHONE}
                                text="Verifica disponibilità"
                                icon={CONTACTS.find(contact =>
                                    contact.value === PHONE).icon} />

                        </Flex>

                        <div className="carousel-container">
                            {/* Carousel to show car images */}
                            <Carousel
                                arrows
                                swipeToSlide={true}
                                infinite={false}>

                                {/* Add images */}
                                {
                                    usedCarInfo?.images?.map((item, index) => (
                                        <Image.PreviewGroup
                                            key={index}
                                            preview={{
                                                toolbarRender: () => null,
                                                maskClosable: true}}>
                                                <Image
                                                    key={index}
                                                    src={item}
                                                    preview={true} />
                                        </Image.PreviewGroup>
                                    ))
                                }

                            </Carousel>
                        </div>

                    </Flex>
                </>

            }

        </Drawer>

    );
}

export default UsedCarDrawer;