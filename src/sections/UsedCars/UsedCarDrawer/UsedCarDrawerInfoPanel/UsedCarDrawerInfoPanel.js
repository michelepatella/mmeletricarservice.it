import React from "react";
import { ALL_CONTACTS, CONTACTS_CLICK_HANDLERS, CUSTOM_TEXT_TYPES, PHONE } from "../../../../utils/const";
import { PRICE_CURRENCY, PRICE_LOCALES, PRICE_STYLE } from "../../const";
import { USED_CAR_DRAWER_CTA_BUTTON_TEXT } from "./const";
import { getUsedCarDrawerInfoPanelCarNameStyle } from "./styleHandler";
import CustomText from "../../../../components/CustomText/CustomText";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import UsedCarDrawerCollapse from "../UsedCarDrawerCollapse/UsedCarDrawerCollapse";
import UsedCarOverview from "../../UsedCarOverview/UsedCarOverview";

/**
 * This component represents the info panel shown in the
 * used car drawer, It contains all the information of a used
 * car, including overview information and details.
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarDrawerInfoPanel(props) {
	return (
		<>
			{/* Name of the car */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.HEADING}
				text={props.usedCarOverview?.name || "-"}
				disableAnimation
				style={getUsedCarDrawerInfoPanelCarNameStyle()}
			/>

			{/* Price of the car */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.SUBHEADING}
				text={
					new Intl.NumberFormat(PRICE_LOCALES, {
						style: PRICE_STYLE,
						currency: PRICE_CURRENCY,
					}).format(
						parseFloat(props.usedCarOverview?.price)
					) || "-"
				}
				disableAnimation
			/>

			{/* Car's overview information */}
			<UsedCarOverview
				showTitle
				usedCarOverview={props.usedCarOverview}
			/>

			{/* Call-To-Action Button */}
			<CustomButton
				isContact
				isCta
				text={USED_CAR_DRAWER_CTA_BUTTON_TEXT}
				icon={
					ALL_CONTACTS.find(
						(contact) => contact?.value === PHONE
					)?.icon
				}
				onClick={
					CONTACTS_CLICK_HANDLERS[
						ALL_CONTACTS.find(
							(contact) => contact?.value === PHONE
						)?.value
					]
				}
			/>

			{/* Collapse with all used car details */}
			<UsedCarDrawerCollapse
				usedCarInfo={props.usedCarInfo}
			/>
		</>
	);
}

export default UsedCarDrawerInfoPanel;
