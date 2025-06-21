import { useQuery } from "@tanstack/react-query";
import { fetchUsedCarData } from "../../../utils/fetcher";
import { Drawer, Flex } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { STALE_TIME } from "../../../utils/const";
import { onUsedCarDrawerClose } from "../../../logic/usedCarDrawerHandler";
import { useDrawerBackButtonHandler } from "../../../hooks/useDrawerBackDrawer";
import UsedCarDrawerCarousel from "./UsedCarDrawerCarousel";
import UsedCarDrawerInfoPanel from "./UsedCarDrawerInfoPanel";
import CustomBackButton from "../../custom/CustomBackButton";

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
function UsedCarDrawer(
	{
		usedCarOverview,
		setIsDrawerOpen
	}
) {
	// Fetch used car details and images
	const {
		data: usedCarInfo,
		isLoading
	} = useQuery({
		queryKey: [
			"usedCarInfo",
			usedCarOverview?.id
		],
		queryFn: () => fetchUsedCarData(
			"usedCarInfo?id=" + usedCarOverview?.id
		),
		enabled: !!usedCarOverview?.id,
		staleTime: STALE_TIME,
	});

	// Back button handler to capture whenever the user
	// clicks the back button
	useDrawerBackButtonHandler(setIsDrawerOpen);

	return (
		<>
			{/* Drawer */}
			<Drawer
				className="used-car-drawer"
				closeIcon={<CustomBackButton />}
				onClose={
					() => onUsedCarDrawerClose(setIsDrawerOpen)
				}
				open
			>
				{isLoading ? (

					// Show the loading outlined until data is being loaded
					<LoadingOutlined
						className="loading-outlined"
						spin
					/>
				) : (

					// Data loading is finished
					<Flex vertical>

						{/* Flex container (to contain Info panel + Carousel) */}
						<Flex
							className="used-car-drawer-flex-horizontal"
							width="60%"
						>

							{/* Flex vertical container (to contain only Info panel) */}
							<Flex
								vertical
								className="used-car-drawer-flex-vertical"
								width="40%"
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
