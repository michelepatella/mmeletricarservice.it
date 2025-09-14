import { Drawer, Flex } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {
	LOADING_OUTLINED_CLASS_NAME,
	USED_CARS_DRAWER_CLASS_NAME,
	USED_CARS_DRAWER_HORIZONTAL_FLEX_CLASS_NAME,
	USED_CARS_DRAWER_HORIZONTAL_FLEX_WIDTH,
	USED_CARS_DRAWER_VERTICAL_FLEX_CLASS_NAME,
	USED_CARS_DRAWER_VERTICAL_FLEX_WIDTH,
} from "../../../utils/const";
import { useUsedCarInfo } from "../../../hooks/useUsedCarInfo";
import { useDrawerBackButtonHandler } from "../../../hooks/useDrawerBackButton";
import { onUsedCarDrawerClose } from "../../../logic/handling/usedCarDrawerHandler";
import UsedCarDrawerCarousel from "./UsedCarDrawerCarousel";
import UsedCarDrawerInfoPanel from "./UsedCarDrawerInfoPanel";
import CustomBackButton from "../../custom/CustomBackButton/CustomBackButton";

/**
 * This component represents the used car drawer,
 * which aims to show all the details about a used car.
 * The component fetches all the details of the used car, shown via
 * info panel, along with all the car images, shown via carousel.
 * @param usedCarOverview
 * @param setIsDrawerOpen
 * @returns {JSX.Element}
 * @constructor
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
				className={USED_CARS_DRAWER_CLASS_NAME}
				closeIcon={<CustomBackButton />}
				onClose={() =>
					onUsedCarDrawerClose(setIsDrawerOpen)
				}
				open
			>
				{isLoading ? (
					// Show the loading outlined until data is being loaded
					<LoadingOutlined
						className={LOADING_OUTLINED_CLASS_NAME}
						spin
					/>
				) : (
					// Data loading is finished
					<Flex vertical>
						{/* Flex container (to contain Info panel + Carousel) */}
						<Flex
							className={
								USED_CARS_DRAWER_HORIZONTAL_FLEX_CLASS_NAME
							}
							width={USED_CARS_DRAWER_HORIZONTAL_FLEX_WIDTH}
						>
							{/* Flex vertical container (to contain only Info panel) */}
							<Flex
								vertical
								className={
									USED_CARS_DRAWER_VERTICAL_FLEX_CLASS_NAME
								}
								width={USED_CARS_DRAWER_VERTICAL_FLEX_WIDTH}
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
