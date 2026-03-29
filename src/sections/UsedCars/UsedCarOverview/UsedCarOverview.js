import React from "react";
import { Flex } from "antd";
import { CUSTOM_TEXT_TYPES } from "../../../utils/const.js";
import {
	ALL_USED_CAR_OVERVIEW_INFO,
	USED_CAR_OVERVIEW_CONTAINER_CLASS_NAME,
	USED_CAR_OVERVIEW_CONTAINER_GAP,
	USED_CAR_OVERVIEW_ICON_ALT,
} from "./const.js";
import { getUsedCarOverviewTextStyle } from "./style-handler.js";
import CustomText from "../../../components/CustomText/CustomText.js";

/**
 * This component is responsible for displaying the overview info of a used car:
 * year, mileage, fuel, and status.
 * @param props — Object containing:
 *   - usedCarOverview — Overview info of the used car.
 *   - showTitle — Whether to show the title of each overview info above the text.
 * @returns {React.JSX.Element} — The used car overview component.
 */
function UsedCarOverview(props) {
	return (
		<>
			{ALL_USED_CAR_OVERVIEW_INFO?.map((info, index) => (
				<div
					key={info.name + "-" + index}
					className={USED_CAR_OVERVIEW_CONTAINER_CLASS_NAME}
				>
					{/* Vertical flex container */}
					<Flex vertical>
						{/* Horizontal flex container */}
						<Flex gap={USED_CAR_OVERVIEW_CONTAINER_GAP}>
							{/* Icon */}
							<img
								src={info?.icon}
								alt={USED_CAR_OVERVIEW_ICON_ALT}
							/>

							{/* Title (if it is to be shown) */}
							<CustomText
								type={CUSTOM_TEXT_TYPES.BODY}
								text={
									props.showTitle
										? info?.title
										: props.usedCarOverview?.[info?.name] ||
											"-"
								}
								disableAnimation
								style={getUsedCarOverviewTextStyle(
									props.showTitle
								)}
							/>
						</Flex>

						{/* Text (if the title is visible) */}
						{props.showTitle && (
							<CustomText
								type={CUSTOM_TEXT_TYPES.CAPTION}
								text={
									props.usedCarOverview?.[info?.name] || "-"
								}
								disableAnimation
								style={getUsedCarOverviewTextStyle(false)}
							/>
						)}
					</Flex>
				</div>
			))}
		</>
	);
}

export default UsedCarOverview;
