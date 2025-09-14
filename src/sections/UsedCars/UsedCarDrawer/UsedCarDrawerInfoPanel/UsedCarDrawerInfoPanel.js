import React from "react";
import { contactClickHandler } from "../../../../logic/contactButtonHandler";
import CustomText from "../../../../components/CustomText/CustomText";
import UsedCarOverview from "../../UsedCarOverview/UsedCarOverview";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import UsedCarDrawerCollapse from "../UsedCarDrawerCollapse/UsedCarDrawerCollapse";
import { CUSTOM_TEXT_TYPES } from "../../../../utils/const/components/customTextConst";
import {
	PRICE_CURRENCY,
	PRICE_LOCALES,
	PRICE_STYLE,
	USED_CARS_DRAWER_CTA_BUTTON_TEXT,
} from "../../../../utils/const/sections/usedCarsConst";
import { ALL_CONTACTS } from "../../../../utils/const/sections/contactsConst";
import { PHONE } from "../../../../utils/const/other/companyConst";

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
				style={{
					marginTop: 0,
				}}
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
				text={USED_CARS_DRAWER_CTA_BUTTON_TEXT}
				icon={
					ALL_CONTACTS.find(
						(contact) => contact?.value === PHONE
					)?.icon
				}
				onClick={
					contactClickHandler[
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
