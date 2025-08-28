import { LoadingOutlined } from "@ant-design/icons";
import {
	USED_CARS_TITLE,
	USED_CARS_SUBTITLE,
	USED_CAR_SCROLL_LABEL_TEXT,
	USED_CARS_UNAVAILABLE_DESCRIPTION,
} from "../../utils/const";
import {
	handleScrollLabelStyle,
	handleUnavailableUsedCarDescriptionStyle,
} from "../../logic/style-handling/usedCarsStyleHandler";
import SectionContainer from "../../components/sections/SectionContainer";
import SectionHeader from "../../components/sections/SectionHeader";
import UsedCarCard from "../../components/used-cars/UsedCarCard";
import CustomText from "../../components/custom/CustomText";
import { useUsedCarsOverview } from "../../hooks/useUsedCarsOverview";

/**
 * This component represents the Used car section.
 * This section shows all the used cars available via cards.
 * When the section is loaded, all the used car overview information
 * is loaded from the backend, in order to show them in the cards.
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCars() {
	// Load used cars overview information from the backend
	const { usedCarsOverview, isLoading } =
		useUsedCarsOverview();

	return (
		<>
			<SectionContainer id="auto-usate">
				{/* Section Header */}
				<SectionHeader
					section="AUTO USATE"
					title={USED_CARS_TITLE}
					subtitle={USED_CARS_SUBTITLE}
				/>

				{/* Until data is being loaded show a loading outlined */}
				{isLoading ? (
					<LoadingOutlined
						className="loading-outlined"
						spin
					/>
				) : // Used cars overview information loading is finished, first
				// check if there is at least one used car available
				usedCarsOverview?.length > 0 ? (
					<>
						{/* Show all the available used cars via cards */}
						<div className="used-cars-container">
							{usedCarsOverview.map((car) => (
								// Add a used car card for each available car
								<UsedCarCard
									key={car.id}
									usedCarOverview={car}
								/>
							))}
						</div>

						{/* Label to indicate the user can visualize all
             the available used cars by scrolling the section horizontally */}
						<CustomText
							type="body"
							text={USED_CAR_SCROLL_LABEL_TEXT}
							style={handleScrollLabelStyle()}
						/>
					</>
				) : (
					// If no used car is available or an error occurred,
					// show an informative message
					<div className="unavailable-used-cars-container">
						{/* Unavailable used cars message */}
						<CustomText
							type="body"
							text={USED_CARS_UNAVAILABLE_DESCRIPTION}
							style={handleUnavailableUsedCarDescriptionStyle()}
						/>

						{/* Unavailable used cars image */}
						<img
							src="/images/empty-used-cars-image.avif"
							alt="unavailable-used-cars"
							loading="lazy"
						/>
					</div>
				)}
			</SectionContainer>
		</>
	);
}

export default UsedCars;
