import React from "react";
import {CONTACTS, CTA_BUTTON_TEXT, PHONE} from "../../../utils/const";
import {contactClickHandler} from "../../../logic/contactButtonHandler";
import {handleNamePriceStyle} from "../../../logic/usedCarsStyleHandler";
import CustomText from "../../custom/CustomText";
import UsedCarOverview from "../UsedCarOverview";
import CustomButton from "../../custom/CustomButton";
import UsedCarDrawerCollapse from "./UsedCarDrawerCollapse";

/**
 * Used Car Drawer Info Panel
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarDrawerInfoPanel(props) {
    return (

        <>
            {/* Name of the car */}
            <CustomText
                type="heading"
                text={props.usedCarOverview?.name || '-'}
                disableAnimation={true}
                style={{
                    marginTop: 0,
                    ...handleNamePriceStyle()}} />

            {/* Price */}
            <CustomText
                type="subheading"
                text={'€ ' + props.usedCarOverview?.price || '-'}
                disableAnimation={true}
                style={{
                    marginTop: 0,
                    ...handleNamePriceStyle()}} />

            {/* Car's overview */}
            <UsedCarOverview
                showTitle={true}
                usedCarOverview={props.usedCarOverview} />

            {/* Call-To-Action Button */}
            <CustomButton
                isContact={true}
                isCta={true}
                text={CTA_BUTTON_TEXT}
                icon={CONTACTS.find(contact =>
                    contact?.value === PHONE)?.icon}
                onClick={contactClickHandler[CONTACTS.find(contact =>
                    contact?.value === PHONE)?.value]} />

            {/* Collapse with all used car information */}
            <UsedCarDrawerCollapse usedCarInfo={props.usedCarInfo} />

        </>

    );
}

export default UsedCarDrawerInfoPanel;