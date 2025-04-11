import {Drawer, Flex} from "antd";
import {onUsedCarDrawerClose, onCustomUsedCarDrawerOpen} from "../../logic/usedCarDrawerHandler";
import {handleNamePriceStyle} from "../../logic/usedCarsStyleHandler";
import CustomCarOverview from "./CustomCarOverview";
import CustomText from "./CustomText";

/**
 * Custom Used Car Drawer
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CustomUsedCarDrawer(props) {
    return (

        <Drawer
            className="custom-used-car-drawer"
            onClose={() => onUsedCarDrawerClose(props.setIsDrawerOpen)}
            open={() => onCustomUsedCarDrawerOpen(props.setIsDrawerOpen)}>

            {/* Flex horizontal container (info column + carousel) */}
            <Flex
                horizontal
                width="75%"
                gap="middle">

                {/* Flex vertical container with overview information */}
                <Flex
                    vertical
                    width="25%">

                    <div>
                        {/* Name */}
                        <CustomText
                            type="title"
                            text={props.car.name}
                            disableAnimation={true}
                            style={handleNamePriceStyle()} />

                        {/* Price */}
                        <CustomText
                            type="subtitle"
                            text={props.car.price}
                            disableAnimation={true}
                            style={{
                                marginTop: 0,
                                ...handleNamePriceStyle()}} />
                    </div>

                    {/* Overview information */}
                    <CustomCarOverview
                        car={props.car}
                        isTitleVisible={true} />

                </Flex>

            </Flex>

        </Drawer>

    );
}

export default CustomUsedCarDrawer;