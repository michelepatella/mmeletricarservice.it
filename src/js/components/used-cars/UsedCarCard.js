import {useState} from "react";
import {Flex} from "antd";
import {onUsedCarDrawerOpen} from "../../logic/usedCarDrawerHandler";
import {handleNamePriceStyle} from "../../logic/usedCarsStyleHandler";
import UsedCarDrawer from "./UsedCarDrawer";
import CustomText from "../custom/CustomText";
import UsedCarOverview from "./UsedCarOverview";

/**
 * Used Car Card
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarCard(props) {

    //to manage when the drawer is open/closed
    //and set that state
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return(
        <>
            <div
                className="used-cars-card"
                onClick={() => onUsedCarDrawerOpen(setIsDrawerOpen)}>

                {/* Image presentation */}
                <div className="used-cars-image-container">
                    <img src={props.car.image}/>
                </div>

                {/* Flex container to contain information */}
                <Flex
                    className="used-car-overview-flex"
                    gap="small"
                    align="start">

                    {/* Name of the car */}
                    <CustomText
                        type="body"
                        text={props.car.name}
                        disableAnimation={true}
                        style={handleNamePriceStyle()}/>

                    {/* Overview information */}
                    <UsedCarOverview
                        overview={true}
                        car={props.car}/>

                    <div className="used-cars-card-price-container">
                        {/* Price */}
                        <CustomText
                            type="body"
                            text={props.car.price}
                            disableAnimation={true}
                            style={handleNamePriceStyle()}/>
                    </div>

                </Flex>

            </div>

            {/* Used Car Drawer including car's details when the card is clicked */}
            {
                isDrawerOpen &&
                    <UsedCarDrawer
                        car={props.car}
                        setIsDrawerOpen={setIsDrawerOpen} />
            }

        </>

    );
}

export default UsedCarCard;