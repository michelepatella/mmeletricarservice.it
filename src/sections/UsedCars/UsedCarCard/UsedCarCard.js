import { useState } from "react";
import { Flex } from "antd";
import { onUsedCarDrawerOpen } from "../../../logic/usedCarDrawerHandler";
import { useOpenDrawerByLink } from "../../../hooks/useOpenDrawerByLink";
import UsedCarDrawer from "../UsedCarDrawer/UsedCarDrawer/UsedCarDrawer";
import CustomText from "../../../components/CustomText/CustomText";
import UsedCarOverview from "../UsedCarOverview/UsedCarOverview";
import { CUSTOM_TEXT_TYPES } from "../../../utils/const/components/customTextConst";
import {
	PRICE_CURRENCY,
	PRICE_LOCALES,
	PRICE_STYLE,
	USED_CARS_CARD_CLASS_NAME,
	USED_CARS_CARD_OVERVIEW_FLEX_CONTAINER_CLASS_NAME,
	USED_CARS_CARD_PRESENTATION_IMAGE_ALT,
	USED_CARS_CARD_PRESENTATION_IMAGE_CONTAINER_CLASS_NAME,
	USED_CARS_CARD_PRICE_CONTAINER_CLASS_NAME,
	USED_CARS_CARD_TYPE,
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION,
} from "../../../utils/const/sections/usedCarsConst";

/**
 * This component represents the card used to show
 * each used car in the Used cars section.
 * Each card is characterized, from top to bottom, by:
 * - A presentation image (if any)
 * - The name of the car
 * - Car's overview information
 * - The price (in Euro)
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarCard(props) {
	// State to manage when the drawer, showing used car
	// details, is open or not
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// To check if the current used cars has been requested
	// externally, so that the drawer will be automatically open
	useOpenDrawerByLink(
		setIsDrawerOpen,
		props.usedCarOverview?.id?.toString()
	);

	return (
		<>
			<button
				className={USED_CARS_CARD_CLASS_NAME}
				type={USED_CARS_CARD_TYPE}
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
						USED_CARS_CARD_PRESENTATION_IMAGE_CONTAINER_CLASS_NAME
					}
				>
					{props.usedCarOverview?.image ? (
						<img
							src={props.usedCarOverview?.image}
							alt={USED_CARS_CARD_PRESENTATION_IMAGE_ALT}
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
						USED_CARS_CARD_OVERVIEW_FLEX_CONTAINER_CLASS_NAME
					}
				>
					{/* Name of the car */}
					<CustomText
						type={CUSTOM_TEXT_TYPES.SUBHEADING}
						text={props.usedCarOverview?.name}
						disableAnimation
					/>

					{/* Car's overview information */}
					<UsedCarOverview
						usedCarOverview={props.usedCarOverview}
					/>

					{/* Car price (in Euro) */}
					<div
						className={
							USED_CARS_CARD_PRICE_CONTAINER_CLASS_NAME
						}
					>
						<CustomText
							type={CUSTOM_TEXT_TYPES.BODY}
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
					</div>
				</Flex>
			</button>

			{/* Used Car Drawer including car's details when the card is clicked */}
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
