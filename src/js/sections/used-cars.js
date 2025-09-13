import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { LoadingOutlined } from "@ant-design/icons";
import {
	USED_CARS_TITLE,
	USED_CAR_SCROLL_LABEL_TEXT,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
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
		y: "100%",
	}));
	useUsedCarsScroll(sectionContainerRef, container);

	return (
		<BackgroundContainer
			image={DOTTED_BACKGROUND_IMAGE_LINK}
		>
			<SectionContainer
				id="auto-usate"
				ref={sectionContainerRef}
			>
				{/* Used Cars section title */}
				<CustomText
					type="super-heading"
					text={USED_CARS_TITLE}
					disableAnimation={true}
				/>

				{/* Used cars loading icon (to show while
				data is loading) */}
				{isLoading && (
					<LoadingOutlined
						className="loading-outlined"
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
							<div className="used-cars-container">
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
								type="body"
								text={USED_CAR_SCROLL_LABEL_TEXT}
								style={handleScrollLabelStyle()}
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
						<div className="unavailable-used-cars-container">
							{/* Label indicating no used car is available */}
							<CustomText
								type="body"
								text={USED_CARS_UNAVAILABLE_DESCRIPTION}
								style={handleUnavailableUsedCarDescriptionStyle()}
							/>

							{/* Empty used cars store image */}
							<img
								src={NO_USED_CAR_AVAILABLE_IMAGE_LINK}
								alt="unavailable-used-cars-image"
								loading="lazy"
							/>
						</div>
					)}
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default UsedCars;
