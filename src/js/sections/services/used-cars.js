import { useQuery } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchUsedCarData } from "../../utils/fetcher";
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

/**
 * Used cars section
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCars() {
	const { data: usedCarsOverview, isLoading } = useQuery({
		queryKey: ["usedCarsOverview"],
		queryFn: () => fetchUsedCarData("usedCarsOverview"),
		staleTime: 1000 * 60 * 5,
	});

	return (
		<>
			<SectionContainer id="auto-usate">
				{/* Section Header */}
				<SectionHeader
					section="AUTO USATE"
					title={USED_CARS_TITLE}
					subtitle={USED_CARS_SUBTITLE}
				/>

				{/* While the cars are loading show the loading outlined. As soon
                as the loading is finished, if data is not empty, show it. */}
				{isLoading ? (
					<LoadingOutlined className="loading-outlined" spin />
				) : //check if data is not empty
				usedCarsOverview?.length > 0 ? (
					<>
						{/* Show all the available used cars */}
						<div className="used-cars-container">
							{usedCarsOverview.map((car, index) => (
								//add a used car card for each available car
								<UsedCarCard key={index} usedCarOverview={car} />
							))}
						</div>

						{/* Scroll label */}
						<CustomText
							type="body"
							text={USED_CAR_SCROLL_LABEL_TEXT}
							style={handleScrollLabelStyle()}
						/>
					</>
				) : (
					//if data is empty
					<div className="unavailable-used-cars-container">
						{/* Unavailable used cars description */}
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
