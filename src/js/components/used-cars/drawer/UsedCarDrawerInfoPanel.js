import React from "react";
import {
	CONTACTS,
	CTA_BUTTON_TEXT,
	CUSTOM_TEXT_TYPES,
	PHONE,
	PRICE_CURRENCY,
	PRICE_LOCALES,
	PRICE_STYLE,
} from "../../../utils/const";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import CustomText from "../../custom/CustomText/CustomText";
import UsedCarOverview from "../UsedCarOverview";
import CustomButton from "../../custom/CustomButton/CustomButton";
import UsedCarDrawerCollapse from "./UsedCarDrawerCollapse";

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
				text={CTA_BUTTON_TEXT}
				icon={
					CONTACTS.find(
						(contact) => contact?.value === PHONE
					)?.icon
				}
				onClick={
					contactClickHandler[
						CONTACTS.find(
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
