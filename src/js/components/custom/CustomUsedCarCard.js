import {useState} from "react";
import {Flex} from "antd";
import {onCustomUsedCarDrawerOpen} from "../../logic/usedCarDrawerHandler";
import CustomUsedCarDrawer from "./CustomUsedCarDrawer";
import CustomText from "./CustomText";
import CustomCarOverview from "./CustomCarOverview";
import {handleNamePriceStyle} from "../../logic/usedCarsStyleHandler";

/**
 * Custom Used Car Card
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomUsedCarCard(props) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return(
        <>
            <div
                className="custom-used-cars-card"
                onClick={() => onCustomUsedCarDrawerOpen(setIsDrawerOpen)}>

                {/* Image presentation */}
                <div className="custom-used-cars-image-container">
                    <img src={props.car.image}/>
                </div>

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
                            style={handleNamePriceStyle()}/>

                        {/* Tech Info Card */}
                        <CustomCarOverview
                            overview={true}
                            car={props.car}/>

                    </div>

                    <div className="custom-used-cars-card-price-container">
                        {/* Price */}
                        <CustomText
                            type="description"
                            text={props.car.price}
                            disableAnimation={true}
                            style={handleNamePriceStyle()}/>
                    </div>

                </Flex>

            </div>

            {/* Car Drawer including car's details when the card is clicked */}
            {
                isDrawerOpen &&
                <CustomUsedCarDrawer
                    car={props.car}
                    setIsDrawerOpen={setIsDrawerOpen} />
            }

        </>

    );
}

export default CustomUsedCarCard;