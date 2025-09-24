import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	USED_CARS_SECTION_ID,
} from "../../../utils/const.js";
import {
	USED_CARS_ANIMATION_Y_FINAL_POSITION,
	USED_CARS_CONTAINER_CLASS_NAME,
	USED_CARS_TITLE,
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION_ALT,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
	USED_CARS_UNAVAILABLE_CONTAINER_CLASS_NAME,
	NO_USED_CAR_AVAILABLE_IMAGE_LINK,
} from "./const.js";
import { useUsedCarsOverview } from "./hooks/useUsedCarsOverview.js";
import { useUsedCarsScroll } from "./hooks/useUsedCarsScroll.js";
import {
	getUsedCarsUnavailableDescriptionStyle,
	getUsedCarsAnimatedDivStyle,
	getUsedCarsCustomLoadingOutlineStyle,
} from "./styleHandler.js";
import SectionContainer from "../../../components/SectionContainer/SectionContainer.js";
import SectionBackground from "../../../components/SectionBackground/SectionBackground.js";
import UsedCarCard from "../UsedCarCard/UsedCarCard.js";
import CustomText from "../../../components/CustomText/CustomText.js";
import LoadingOutlined from "../../../components/LoadingOutlined/LoadingOutlined.js";

/**
 * This component represents the Used car section.
 * This section shows all the used cars available via cards.
 * All the used car overview information is loaded from the backend.
 * @returns {JSX.Element} — The used cars section.
 */
function UsedCars() {
	// Load used cars overview from backend
	const { usedCarsOverview, isLoading } =
		useUsedCarsOverview();

	// To generate used car cards animation as long as
	// the user scrolls their container
	const sectionContainerRef = useRef(null);
	const [containerStyles, container] = useSpring(() => ({
		y: USED_CARS_ANIMATION_Y_FINAL_POSITION,
	}));
	useUsedCarsScroll(sectionContainerRef, container);

	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer
				id={USED_CARS_SECTION_ID}
				ref={sectionContainerRef}
			>
				{/* Used Cars section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={USED_CARS_TITLE}
					disableAnimation
				/>

				{/* Used cars loading icon (to show while
				data is loading) */}
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
						{/* Animated division containing all the used
						 cars card, used to animate them when
						 scrolling the section */}
						<animated.div
							style={getUsedCarsAnimatedDivStyle(
								containerStyles
							)}
						>
							{/* Container of all used car cards */}
							<div
								className={USED_CARS_CONTAINER_CLASS_NAME}
							>
								{/* Show each used car via card */}
								{usedCarsOverview.map((car) => (
									<UsedCarCard
										key={car.id}
										usedCarOverview={car}
									/>
								))}
							</div>
						</animated.div>
					</>
				)}

				{/* No used cars available */}
				{!isLoading &&
					(!usedCarsOverview ||
						usedCarsOverview.length === 0) && (
						// Container to show image indicating no
						// used car is available
						<div
							className={
								USED_CARS_UNAVAILABLE_CONTAINER_CLASS_NAME
							}
						>
							{/* Label indicating no used car is available */}
							<CustomText
								type={CUSTOM_TEXT_TYPES.BODY}
								text={USED_CARS_UNAVAILABLE_DESCRIPTION}
								style={getUsedCarsUnavailableDescriptionStyle()}
							/>

							{/* Empty used cars store image */}
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
