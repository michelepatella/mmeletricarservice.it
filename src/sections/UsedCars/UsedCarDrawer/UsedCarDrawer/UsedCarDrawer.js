import React from "react";
import { Drawer, Flex } from "antd";
import {
	USED_CAR_DRAWER_CLASS_NAME,
	USED_CAR_DRAWER_HORIZONTAL_FLEX_CLASS_NAME,
	USED_CAR_DRAWER_HORIZONTAL_FLEX_WIDTH,
	USED_CAR_DRAWER_VERTICAL_FLEX_CLASS_NAME,
	USED_CAR_DRAWER_VERTICAL_FLEX_WIDTH,
} from "./const.js";
import { useUsedCarInfo } from "./hooks/use-used-car-info/use-used-car-info.js";
import { useDrawerBackButtonHandler } from "./hooks/use-drawer-back-button.js";
import { onUsedCarDrawerClose } from "../../handler/handler.js";
import { getUsedCarDrawerCustomLoadingOutlinedStyle } from "./style-handler.js";
import UsedCarDrawerCarousel from "../UsedCarDrawerCarousel/UsedCarDrawerCarousel.js";
import UsedCarDrawerInfoPanel from "../UsedCarDrawerInfoPanel/UsedCarDrawerInfoPanel.js";
import BackButton from "../../../../components/BackButton/BackButton.js";
import LoadingOutlined from "../../../../components/LoadingOutlined/LoadingOutlined.js";

/**
 * This component represents the used car drawer which shows 
 * all the details about a used car.
 * @param usedCarOverview — Overview information of the used car.
 * @param setIsDrawerOpen — State setter keeping track of
 * the used car drawer visibility.
 * @returns {JSX.Element} — The used car drawer component.
 */
function UsedCarDrawer({
	usedCarOverview,
	setIsDrawerOpen,
}) {
	// Fetch all the used car details and images
	const { usedCarInfo, isLoading } = useUsedCarInfo({
		usedCarId: usedCarOverview?.id,
	});

	// Handler to capture back button clicks
	useDrawerBackButtonHandler(setIsDrawerOpen);

	return (
		<>
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
						{/* Flex container for info panel and carousel */}
						<Flex
							className={
								USED_CAR_DRAWER_HORIZONTAL_FLEX_CLASS_NAME
							}
							width={USED_CAR_DRAWER_HORIZONTAL_FLEX_WIDTH}
						>
							{/* Flex vertical container for info panel only */}
							<Flex
								vertical
								className={
									USED_CAR_DRAWER_VERTICAL_FLEX_CLASS_NAME
								}
								width={USED_CAR_DRAWER_VERTICAL_FLEX_WIDTH}
							>
								{/* Info Panel */}
								<UsedCarDrawerInfoPanel
									usedCarOverview={usedCarOverview}
									usedCarInfo={usedCarInfo}
								/>
							</Flex>

							{/* Carousel for the images */}
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
