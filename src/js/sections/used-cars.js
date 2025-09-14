import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { LoadingOutlined } from "@ant-design/icons";
import {
	USED_CARS_TITLE,
	HORIZONTAL_SCROLL_LABEL,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
	USED_CARS_ANIMATION_Y_FINAL_POSITION,
	USED_CARS_SECTION_ID,
	CUSTOM_TEXT_TYPES,
	LOADING_OUTLINED_CLASS_NAME,
	USED_CARS_CONTAINER_CLASS_NAME,
	CUSTOM_TEXT_TYPES as CUSTOMTEXT_TYPES,
	USED_CARS_UNAVAILALE_CONTAINER_CLASS_NAME,
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION_ALT,
} from "../utils/const";
import {
	DOTTED_BACKGROUND_IMAGE_LINK,
	NO_USED_CAR_AVAILABLE_IMAGE_LINK,
} from "../utils/internal_links";
import { useUsedCarsOverview } from "../hooks/useUsedCarsOverview";
import { useUsedCarsScroll } from "../hooks/useUsedCarsScroll";
import {
	handleAnimatedDivStyle,
	handleScrollLabelStyle,
	handleUnavailableUsedCarDescriptionStyle,
} from "../logic/style-handling/usedCarsStyleHandler";
import SectionContainer from "../components/other/SectionContainer/SectionContainer";
import BackgroundContainer from "../components/other/BackgroundContainer/BackgroundContainer";
import UsedCarCard from "../components/used-cars/UsedCarCard";
import CustomText from "../components/custom/CustomText/CustomText";

/**
 * This component represents the Used car section.
 * This section shows all the used cars available via cards.
 * All the used car overview information is loaded from the backend.
 * @returns {JSX.Element}
 * @constructor
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
		<BackgroundContainer
			image={DOTTED_BACKGROUND_IMAGE_LINK}
		>
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
					<LoadingOutlined
						className={LOADING_OUTLINED_CLASS_NAME}
						spin
					/>
				)}

				{/* Used cars available */}
				{!isLoading && usedCarsOverview?.length > 0 && (
					<>
						{/* Animated division containing all the used
						 cars card, used to animate them when
						 scrolling the section */}
						<animated.div
							style={handleAnimatedDivStyle(
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

							{/* Label indicating the user to scroll
							 the section horizontally, in order to
							 explore all the used cars */}
							<CustomText
								type={CUSTOMTEXT_TYPES.BODY}
								text={HORIZONTAL_SCROLL_LABEL}
								style={handleScrollLabelStyle(true)}
							/>
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
								USED_CARS_UNAVAILALE_CONTAINER_CLASS_NAME
							}
						>
							{/* Label indicating no used car is available */}
							<CustomText
								type={CUSTOM_TEXT_TYPES.BODY}
								text={USED_CARS_UNAVAILABLE_DESCRIPTION}
								style={handleUnavailableUsedCarDescriptionStyle()}
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
		</BackgroundContainer>
	);
}

export default UsedCars;
