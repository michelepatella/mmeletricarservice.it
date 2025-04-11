import {Drawer, Flex} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {onUsedCarDrawerClose, onUsedCarDrawerOpen} from "../../logic/usedCarDrawerHandler";
import {handleNamePriceStyle} from "../../logic/usedCarsStyleHandler";
import UsedCarOverview from "./UsedCarOverview";
import CustomText from "../custom/CustomText";

/**
 * Used Car Drawer
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCarDrawer(props) {
    return (

        <Drawer
            className="used-car-drawer"
            closeIcon={<ArrowLeftOutlined className="arrow-left-outlined"/>}
            onClose={() => onUsedCarDrawerClose(props.setIsDrawerOpen)}
            open={() => onUsedCarDrawerOpen(props.setIsDrawerOpen)}>

            {/* Flex horizontal container (info column + carousel) */}
            <Flex
                horizontal
                width="75%"
                gap="middle">

                {/* Flex vertical container with overview information */}
                <Flex
                    vertical
                    width="25%">

                    {/* Name of the car */}
                    <CustomText
                        type="heading"
                        text={props.car.name}
                        disableAnimation={true}
                        style={handleNamePriceStyle()} />

                    {/* Price */}
                    <CustomText
                        type="subheading"
                        text={props.car.price}
                        disableAnimation={true}
                        style={{
                            marginTop: 0,
                            ...handleNamePriceStyle()}} />

                    {/* Overview information */}
                    <UsedCarOverview
                        car={props.car}
                        isTitleVisible={true} />

                </Flex>

            </Flex>

        </Drawer>

    );
}

export default UsedCarDrawer;