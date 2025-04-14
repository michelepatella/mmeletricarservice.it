import {useState} from "react";
import {Flex} from "antd";
import {onUsedCarDrawerOpen} from "../../logic/usedCarDrawerHandler";
import {handleNamePriceStyle} from "../../logic/usedCarsStyleHandler";
import {useOpenDrawerByLink} from "../../hooks/useOpenDrawerByLink";
import UsedCarDrawer from "./drawer/UsedCarDrawer";
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
    const [usedCarInfo, setUsedCarInfo] = useState([]);

    //check if the current used car has been requested by a link
    useOpenDrawerByLink(setIsDrawerOpen, props.usedCarOverview.id.toString());

    return (
        <>
            <div
                className="used-cars-card"
                onClick={() => onUsedCarDrawerOpen(
                    setIsDrawerOpen,
                    props.usedCarOverview.id)}>

                {/* Image presentation (if any) */}
                {
                    props.usedCarOverview.image ?
                        <div className="used-cars-image-container">
                            <img src={props.usedCarOverview.image}/>
                        </div>
                        :
                        <div className="used-cars-image-container">
                            <CustomText
                                type="caption"
                                text="Immagine non disponibile"
                                disableAnimation={true} />
                        </div>
                }

                {/* Flex container to contain information */}
                <Flex
                    className="used-car-overview-flex"
                    gap="small"
                    align="start">

                    {/* Name of the car */}
                    <CustomText
                        type="body"
                        text={props.usedCarOverview.name}
                        disableAnimation={true}
                        style={handleNamePriceStyle()}/>

                    {/* Overview information */}
                    <UsedCarOverview
                        overview={true}
                        usedCarOverview={props.usedCarOverview}/>

                    <div className="used-cars-card-price-container">
                        {/* Price */}
                        <CustomText
                            type="body"
                            text={props.usedCarOverview.price}
                            disableAnimation={true}
                            style={handleNamePriceStyle()}/>
                    </div>

                </Flex>

            </div>

            {/* Used Car Drawer including car's details when the card is clicked */}
            {
                isDrawerOpen &&
                    <UsedCarDrawer
                        usedCarInfo={usedCarInfo}
                        setUsedCarInfo={setUsedCarInfo}
                        usedCarOverview={props.usedCarOverview}
                        setIsDrawerOpen={setIsDrawerOpen} />
            }

        </>

    );
}

export default UsedCarCard;