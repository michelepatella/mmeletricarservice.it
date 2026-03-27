import React, { useState } from "react";
import { Flex } from "antd";
import { CUSTOM_TEXT_TYPES } from "../../../utils/const.js";
import {
	USED_CAR_CARD_CLASS_NAME,
	USED_CAR_CARD_OVERVIEW_FLEX_CONTAINER_CLASS_NAME,
	USED_CAR_CARD_PRESENTATION_IMAGE_ALT,
	USED_CAR_CARD_PRESENTATION_IMAGE_CONTAINER_CLASS_NAME,
	USED_CAR_CARD_PRICE_CONTAINER_CLASS_NAME,
	USED_CAR_CARD_TYPE,
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION,
} from "./const.js";
import {
	PRICE_CURRENCY,
	PRICE_LOCALES,
	PRICE_STYLE,
} from "../const.js";
import { onUsedCarDrawerOpen } from "../handler/handler.js";
import { useOpenUsedCarDrawerFromUrl } from "./use-open-used-car-drawer-from-url.js";
import UsedCarDrawer from "../UsedCarDrawer/UsedCarDrawer/UsedCarDrawer.js";
import CustomText from "../../../components/CustomText/CustomText.js";
import UsedCarOverview from "../UsedCarOverview/UsedCarOverview.js";

/**
 * This component represents the card used to display used cars
 * in the proper section. Each card is characterized by:
 * - Presentation image (if any)
 * - Name
 * - Overview information
 * - Price
 * @param props — Object containing:
 *   - usedCarOverview: An object representing the used
 *   	 car data to display in the card, including:
 *   		- id: The car's unique identifier.
 *   		- name: The car's name.
 *   		- image: URL of the car's presentation image (if any).
 *   		- price: The car's price.
 * @returns {React.JSX.Element} — The card component.
 */
function UsedCarCard(props) {
	// State to manage the drawer's state (open or closed),
	// used to show details about the current car
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// If the request to the current used car
	// comes from outside, open its drawer automatically
	useOpenUsedCarDrawerFromUrl(
		setIsDrawerOpen,
		props.usedCarOverview?.id?.toString()
	);

	return (
		<>
			<button
				className={USED_CAR_CARD_CLASS_NAME}
				type={USED_CAR_CARD_TYPE}
				onClick={() =>
					onUsedCarDrawerOpen(
						setIsDrawerOpen,
						props.usedCarOverview?.id
					)
				}
			>
				{/* Presentation image (if any, informative text otherwise) */}
				<div
					className={
						USED_CAR_CARD_PRESENTATION_IMAGE_CONTAINER_CLASS_NAME
					}
				>
					{props.usedCarOverview?.image ? (
						<img
							src={props.usedCarOverview?.image}
							alt={USED_CAR_CARD_PRESENTATION_IMAGE_ALT}
							loading="lazy"
						/>
					) : (
						<CustomText
							type={CUSTOM_TEXT_TYPES.CAPTION}
							text={USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION}
							disableAnimation
						/>
					)}
				</div>

				{/* Flex container to show car's information */}
				<Flex
					className={
						USED_CAR_CARD_OVERVIEW_FLEX_CONTAINER_CLASS_NAME
					}
				>
					{/* Car's name */}
					<CustomText
						type={CUSTOM_TEXT_TYPES.SUBHEADING}
						text={props.usedCarOverview?.name}
						disableAnimation
					/>

					{/* Car's overview information */}
					<UsedCarOverview
						usedCarOverview={props.usedCarOverview}
					/>

					{/* Car's price */}
					<div
						className={
							USED_CAR_CARD_PRICE_CONTAINER_CLASS_NAME
						}
					>
						<CustomText
							type={CUSTOM_TEXT_TYPES.BODY}
							text={
								new Intl.NumberFormat(PRICE_LOCALES, {
									style: PRICE_STYLE,
									currency: PRICE_CURRENCY,
								}).format(
									Number.parseFloat(
										props.usedCarOverview?.price
									)
								) || "-"
							}
							disableAnimation
						/>
					</div>
				</Flex>
			</button>

			{/* Drawer showing car's details on card click */}
			{isDrawerOpen && (
				<UsedCarDrawer
					usedCarOverview={props.usedCarOverview}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
			)}
		</>
	);
}

export default UsedCarCard;
