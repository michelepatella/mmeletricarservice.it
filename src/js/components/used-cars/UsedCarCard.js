import { useState } from "react";
import { Flex } from "antd";
import { USED_CARS_CARD_IMAGE_UNAVAILABLE_DESCRIPTION } from "../../utils/const";
import { onUsedCarDrawerOpen } from "../../logic/handling/usedCarDrawerHandler";
import { handleNamePriceStyle } from "../../logic/style-handling/usedCarsStyleHandler";
import { useOpenDrawerByLink } from "../../hooks/useOpenDrawerByLink";
import UsedCarDrawer from "./drawer/UsedCarDrawer";
import CustomText from "../custom/CustomText/CustomText";
import UsedCarOverview from "./UsedCarOverview";

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
				className="used-cars-card"
				type="button"
				onClick={() =>
					onUsedCarDrawerOpen(
						setIsDrawerOpen,
						props.usedCarOverview?.id
					)
				}
			>
				{/* Presentation image (if any, informative text otherwise) */}
				<div className="used-cars-card-image-container">
					{props.usedCarOverview?.image ? (
						<img
							src={props.usedCarOverview?.image}
							alt="auto-image"
							loading="lazy"
						/>
					) : (
						<CustomText
							type="caption"
							text={
								USED_CARS_CARD_IMAGE_UNAVAILABLE_DESCRIPTION
							}
							disableAnimation={true}
						/>
					)}
				</div>

				{/* Flex container to show car's information */}
				<Flex
					className="used-car-card-overview-flex"
					gap="small"
					align="start"
				>
					{/* Name of the car */}
					<CustomText
						type="subheading"
						text={props.usedCarOverview?.name}
						disableAnimation={true}
						style={handleNamePriceStyle()}
					/>

					{/* Car's overview information */}
					<UsedCarOverview
						showTitle={false}
						usedCarOverview={props.usedCarOverview}
					/>

					{/* Car price (in Euro) */}
					<div className="used-cars-card-price-container">
						<CustomText
							type="body"
							text={
								new Intl.NumberFormat("it-IT", {
									style: "currency",
									currency: "EUR",
								}).format(
									parseFloat(props.usedCarOverview?.price)
								) || "-"
							}
							disableAnimation={true}
							style={handleNamePriceStyle()}
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
