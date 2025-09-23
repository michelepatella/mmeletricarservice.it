import { useState } from "react";
import { Flex } from "antd";
import { CUSTOM_TEXT_TYPES } from "../../../utils/const";
import {
	USED_CAR_CARD_CLASS_NAME,
	USED_CAR_CARD_OVERVIEW_FLEX_CONTAINER_CLASS_NAME,
	USED_CAR_CARD_PRESENTATION_IMAGE_ALT,
	USED_CAR_CARD_PRESENTATION_IMAGE_CONTAINER_CLASS_NAME,
	USED_CAR_CARD_PRICE_CONTAINER_CLASS_NAME,
	USED_CAR_CARD_TYPE,
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION,
} from "./const";
import {
	PRICE_CURRENCY,
	PRICE_LOCALES,
	PRICE_STYLE,
} from "../const";
import { onUsedCarDrawerOpen } from "../handler";
import { useOpenUsedCarDrawerFromUrl } from "./useOpenUsedCarDrawerFromUrl";
import UsedCarDrawer from "../UsedCarDrawer/UsedCarDrawer/UsedCarDrawer";
import CustomText from "../../../components/CustomText/CustomText";
import UsedCarOverview from "../UsedCarOverview/UsedCarOverview";

/**
 * This component represents the card used to show
 * each used car in the Used cars section.
 * Each card is characterized, from top to bottom, by:
 * - A presentation image (if any)
 * - The name of the car
 * - Car's overview information
 * - The price (in Euro)
 * @param props — Object containing:
 *   - usedCarOverview: An object representing the used
 *   	 car data to display in the card, including:
 *   		- id: The unique identifier of the car.
 *   		- name: The name of the car.
 *   		- image: URL of the presentation image (if available).
 *   		- price: The car's price.
 * @returns {React.JSX.Element} — The used car card component.
 */
function UsedCarCard(props) {
	// State to manage when the drawer, showing used car
	// details, is open or not
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// To check if the current used cars has been requested
	// externally, so that the drawer will be automatically open
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
