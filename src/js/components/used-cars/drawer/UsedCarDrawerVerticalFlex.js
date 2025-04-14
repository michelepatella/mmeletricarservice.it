import React from "react";
import {CONTACTS, CTA_BUTTON_TEXT, PHONE} from "../../../utils/const";
import {handleNamePriceStyle} from "../../../logic/usedCarsStyleHandler";
import CustomText from "../../custom/CustomText";
import UsedCarOverview from "../UsedCarOverview";
import CustomButton from "../../custom/CustomButton";

/**
 * Used Car Drawer Vertical Flex
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarDrawerVerticalFlex(props) {
    return (

        <>
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
                text={CTA_BUTTON_TEXT}
                icon={CONTACTS.find(contact =>
                    contact.value === PHONE).icon} />
        </>

    );
}

export default UsedCarDrawerVerticalFlex;