import React from "react";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	USED_CARS_SECTION_ID,
} from "../../utils/const.js";
import {
	USED_CARS_CONTAINER_CLASS_NAME,
	USED_CARS_TITLE,
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION_ALT,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
	USED_CARS_UNAVAILABLE_CONTAINER_CLASS_NAME,
	NO_USED_CAR_AVAILABLE_IMAGE_LINK,
} from "./const.js";
import { useUsedCarsOverview } from "./use-used-cars-overview/use-used-cars-overview.js";
import {
	getUsedCarsUnavailableDescriptionStyle,
	getUsedCarsCustomLoadingOutlineStyle,
} from "./style-handler.js";
import SectionContainer from "../../components/SectionContainer/SectionContainer.js";
import SectionBackground from "../../components/SectionBackground/SectionBackground.js";
import UsedCarCard from "./UsedCarCard/UsedCarCard.js";
import CustomText from "../../components/CustomText/CustomText.js";
import LoadingOutlined from "../../components/LoadingOutlined/LoadingOutlined.js";

/**
 * This component represents the 'Used Cars' section which
 * displays all the used cars available.
 * @returns {JSX.Element} — The 'Used Cars' section.
 */
function UsedCars() {
	// Load used cars overview info from backend
	const { usedCarsOverview, isLoading } =
		useUsedCarsOverview();

	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer
				id={USED_CARS_SECTION_ID}
			>
				{/* Section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={USED_CARS_TITLE}
					disableAnimation
				/>

				{/* Loading outlined */}
				{isLoading && (
					<>
						<LoadingOutlined
							custStyle={getUsedCarsCustomLoadingOutlineStyle()}
						/>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
					</>
				)}

				{/* Used cars available */}
				{!isLoading && usedCarsOverview?.length > 0 && (
					<>
						{/* Container for all the used car cards */}
							<div
								className={USED_CARS_CONTAINER_CLASS_NAME}
							>
								{usedCarsOverview.map((car) => (
									<UsedCarCard
										key={car.id}
										usedCarOverview={car}
									/>
								))}
							</div>
					</>
				)}

				{/* No used cars available */}
				{!isLoading &&
					(!usedCarsOverview ||
						usedCarsOverview.length === 0) && (
						<div
							className={
								USED_CARS_UNAVAILABLE_CONTAINER_CLASS_NAME
							}
						>
							{/* Label indicating no used cars are available */}
							<CustomText
								type={CUSTOM_TEXT_TYPES.BODY}
								text={USED_CARS_UNAVAILABLE_DESCRIPTION}
								style={getUsedCarsUnavailableDescriptionStyle()}
							/>

							{/* Image to indicate the store is empty */}
							<img
								src={NO_USED_CAR_AVAILABLE_IMAGE_LINK}
								alt={
									USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION_ALT
								}
								loading="lazy"
							/>
						</div>
					)}
			</SectionContainer>
		</SectionBackground>
	);
}

export default UsedCars;
