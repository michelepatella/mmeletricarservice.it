import { Drawer, Flex } from "antd";
import {
	USED_CAR_DRAWER_CLASS_NAME,
	USED_CAR_DRAWER_HORIZONTAL_FLEX_CLASS_NAME,
	USED_CAR_DRAWER_HORIZONTAL_FLEX_WIDTH,
	USED_CAR_DRAWER_VERTICAL_FLEX_CLASS_NAME,
	USED_CAR_DRAWER_VERTICAL_FLEX_WIDTH,
} from "./const.js";
import { useUsedCarInfo } from "./hooks/use-used-car-info.js";
import { useDrawerBackButtonHandler } from "./hooks/use-drawer-back-button.js";
import { onUsedCarDrawerClose } from "../../handler.js";
import { getUsedCarDrawerCustomLoadingOutlinedStyle } from "./style-handler.js";
import UsedCarDrawerCarousel from "../UsedCarDrawerCarousel/UsedCarDrawerCarousel.js";
import UsedCarDrawerInfoPanel from "../UsedCarDrawerInfoPanel/UsedCarDrawerInfoPanel.js";
import BackButton from "../../../../components/BackButton/BackButton.js";
import LoadingOutlined from "../../../../components/LoadingOutlined/LoadingOutlined.js";

/**
 * This component represents the used car drawer,
 * which aims to show all the details about a used car.
 * The component fetches all the details of the used car, shown via
 * info panel, along with all the car images, shown via carousel.
 * @param usedCarOverview — Overview information of used car
 * of the current drawer.
 * @param setIsDrawerOpen — State setter keeping track of
 * used car drawer visibility.
 * @returns {JSX.Element} — The used car drawer component.
 */
function UsedCarDrawer({
	usedCarOverview,
	setIsDrawerOpen,
}) {
	// Fetch used car details and images
	const { usedCarInfo, isLoading } = useUsedCarInfo({
		usedCarId: usedCarOverview?.id,
	});

	// Back button handler to capture whenever the user
	// clicks the back button
	useDrawerBackButtonHandler(setIsDrawerOpen);

	return (
		<>
			{/* Drawer */}
			<Drawer
				className={USED_CAR_DRAWER_CLASS_NAME}
				closeIcon={<BackButton />}
				onClose={() =>
					onUsedCarDrawerClose(setIsDrawerOpen)
				}
				open
			>
				{isLoading ? (
					// Show the loading outlined until data is being loaded
					<LoadingOutlined
						custStyle={getUsedCarDrawerCustomLoadingOutlinedStyle()}
					/>
				) : (
					// Data loading is finished
					<Flex vertical>
						{/* Flex container (to contain Info panel + Carousel) */}
						<Flex
							className={
								USED_CAR_DRAWER_HORIZONTAL_FLEX_CLASS_NAME
							}
							width={USED_CAR_DRAWER_HORIZONTAL_FLEX_WIDTH}
						>
							{/* Flex vertical container (to contain only Info panel) */}
							<Flex
								vertical
								className={
									USED_CAR_DRAWER_VERTICAL_FLEX_CLASS_NAME
								}
								width={USED_CAR_DRAWER_VERTICAL_FLEX_WIDTH}
							>
								{/* Info Panel (Name, Price, Overview info,
                 CTA button and Collapse with details) */}
								<UsedCarDrawerInfoPanel
									usedCarOverview={usedCarOverview}
									usedCarInfo={usedCarInfo}
								/>
							</Flex>

							{/* Carousel to contain used car images */}
							<UsedCarDrawerCarousel
								usedCarInfo={usedCarInfo}
							/>
						</Flex>
					</Flex>
				)}
			</Drawer>
		</>
	);
}

export default UsedCarDrawer;
