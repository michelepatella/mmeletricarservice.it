import React from "react";
import {
	ALL_CONTACTS,
	CONTACTS_CLICK_HANDLERS,
	CUSTOM_TEXT_TYPES,
	PHONE,
} from "../../../../utils/const.js";
import {
	PRICE_CURRENCY,
	PRICE_LOCALES,
	PRICE_STYLE,
} from "../../const.js";
import { USED_CAR_DRAWER_CTA_BUTTON_TEXT } from "./const.js";
import { getUsedCarDrawerInfoPanelCarNameStyle } from "./style-handler.js";
import CustomText from "../../../../components/CustomText/CustomText.js";
import CustomButton from "../../../../components/CustomButton/CustomButton.js";
import UsedCarDrawerCollapse from "../UsedCarDrawerCollapse/UsedCarDrawerCollapse.js";
import UsedCarOverview from "../../UsedCarOverview/UsedCarOverview.js";

/**
 * This component represents the info panel which contains all
 * the information of a used car.
 * @param props — Object containing:
 *   - usedCarOverview — Overview information of the used car.
 *   - usedCarInfo — Detailed information of the used car.
 * @returns {React.JSX.Element} — The used car drawer info panel component.
 */
function UsedCarDrawerInfoPanel(props) {
	return (
		<>
			{/* Car's name */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.HEADING}
				text={props.usedCarOverview?.name || "-"}
				disableAnimation
				style={getUsedCarDrawerInfoPanelCarNameStyle()}
			/>

			{/* Car's price */}
			<CustomText
				type={CUSTOM_TEXT_TYPES.SUBHEADING}
				text={
					new Intl.NumberFormat(PRICE_LOCALES, {
						style: PRICE_STYLE,
						currency: PRICE_CURRENCY,
					}).format(
						Number.parseFloat(props.usedCarOverview?.price)
					) || "-"
				}
				disableAnimation
			/>

			{/* Car's overview info */}
			<UsedCarOverview
				showTitle
				usedCarOverview={props.usedCarOverview}
			/>

			{/* Call-to-Action button */}
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
