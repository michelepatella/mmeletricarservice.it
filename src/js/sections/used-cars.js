import { LoadingOutlined } from "@ant-design/icons";
import {
	ABOUT_US_TITLE,
	USED_CAR_SCROLL_LABEL_TEXT,
	USED_CARS_TITLE,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
} from "../utils/const";
import {
	handleScrollLabelStyle,
	handleUnavailableUsedCarDescriptionStyle,
} from "../logic/style-handling/usedCarsStyleHandler";
import SectionContainer from "../components/sections/SectionContainer/SectionContainer";
import UsedCarCard from "../components/used-cars/UsedCarCard";
import CustomText from "../components/custom/CustomText/CustomText";
import { useUsedCarsOverview } from "../hooks/useUsedCarsOverview";
import { useSpring, animated } from "@react-spring/web";
import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "react-spring";
import BackgroundContainer from "../components/sections/BackgroundContainer/BackgroundContainer";

/**
 * This component represents the Used car section.
 * This section shows all the used cars available via cards.
 * When the section is loaded, all the used car overview information
 * is loaded from the backend, in order to show them in the cards.
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCars() {
	const { usedCarsOverview, isLoading } =
		useUsedCarsOverview();

	const containerRef = useRef(null);
	const [containerStyles, container] = useSpring(() => ({
		y: "100%",
	}));

	useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress } }) => {
			if (scrollYProgress > 0.55) {
				container.start({ y: "0" });
			} else {
				container.start({ y: "100%" });
			}
		},
		default: { immediate: false },
	});

	return (
		<BackgroundContainer image="/images/dotted-background.avif">
			<SectionContainer
				id="auto-usate"
				ref={containerRef}
				style={{
					height: "100vh",
					overflowY: "scroll",
					position: "relative",
					backgroundColor: "#111",
					color: "#fff",
				}}
			>
				<CustomText
					type="super-heading"
					text={USED_CARS_TITLE}
					disableAnimation={true}
				/>

				{/* Loading */}
				{isLoading && (
					<LoadingOutlined
						className="loading-outlined"
						spin
					/>
				)}

				{/* Cars available */}
				{!isLoading && usedCarsOverview?.length > 0 && (
					<>
						<animated.div
							style={{
								display: "block",
								opacity: containerStyles.y.to(
									(y) => 1 - parseInt(y) / 100
								),
								transform: containerStyles.y.to(
									(y) => `translateY(${y})`
								),
								fontSize: "24px",
								fontWeight: "bold",
							}}
						>
							<div className="used-cars-container">
								{usedCarsOverview.map((car) => (
									<UsedCarCard
										key={car.id}
										usedCarOverview={car}
									/>
								))}
							</div>
							<CustomText
								type="body"
								text={USED_CAR_SCROLL_LABEL_TEXT}
								style={handleScrollLabelStyle()}
							/>
						</animated.div>
					</>
				)}

				{/* No cars available */}
				{!isLoading &&
					(!usedCarsOverview ||
						usedCarsOverview.length === 0) && (
						<div className="unavailable-used-cars-container">
							<CustomText
								type="body"
								text={USED_CARS_UNAVAILABLE_DESCRIPTION}
								style={handleUnavailableUsedCarDescriptionStyle()}
							/>
							<img
								src="/images/no-used-car-available.avif"
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
