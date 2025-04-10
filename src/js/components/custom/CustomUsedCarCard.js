import {useState} from "react";
import {Flex} from "antd";
import {handleCustomUsedCarsCardNamePrice} from "../../logic/styleHandler";
import {onCustomUsedCarDrawerOpen} from "../../logic/UsedCarDrawerHandler";
import CustomUsedCarDrawer from "./CustomUsedCarDrawer";
import CustomText from "./CustomText";
import CustomTechInfoCard from "./CustomTechInfoCard";

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
                            style={handleCustomUsedCarsCardNamePrice()}/>

                        {/* Tech Info Card */}
                        <CustomTechInfoCard
                            overview={true}
                            car={props.car}/>

                    </div>

                    <div className="custom-used-cars-card-price-container">
                        {/* Price */}
                        <CustomText
                            type="description"
                            text={props.car.price}
                            disableAnimation={true}
                            style={handleCustomUsedCarsCardNamePrice()}/>
                    </div>

                </Flex>

            </div>

            {/* Car Drawer including car's details when the card is clicked */}
            {
                isDrawerOpen && <CustomUsedCarDrawer setIsDrawerOpen={setIsDrawerOpen} />
            }

        </>

    );
}

export default CustomUsedCarCard;