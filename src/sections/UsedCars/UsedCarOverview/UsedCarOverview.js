import { Flex } from "antd";
import { CUSTOM_TEXT_TYPES } from "../../../utils/const";
import {
	ALL_USED_CAR_OVERVIEW_INFO,
	USED_CAR_OVERVIEW_CONTAINER_CLASS_NAME,
	USED_CAR_OVERVIEW_CONTAINER_GAP,
	USED_CAR_OVERVIEW_ICON_ALT,
} from "./const";
import { getUsedCarOverviewTextStyle } from "./styleHandler";
import CustomText from "../../../components/CustomText/CustomText";

/**
 * This component includes all used car overview information:
 * year, mileage, fuel, and status. Each information is presented
 * through an icon (for summarizing what does represent each information) and
 * the corresponding textual value. The title of what each information represents
 * can be also shown, is explicitly specified.
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarOverview(props) {
	return (
		<>
			{ALL_USED_CAR_OVERVIEW_INFO?.map((info, index) => (
				// Add each used car overview information
				<div
					key={info.name + "-" + index}
					className={
						USED_CAR_OVERVIEW_CONTAINER_CLASS_NAME
					}
				>
					{/* Global Flex container (vertical) */}
					<Flex vertical>
						{/* Flex container (horizontal) */}
						<Flex gap={USED_CAR_OVERVIEW_CONTAINER_GAP}>
							{/* Icon */}
							<img
								src={info?.icon}
								alt={USED_CAR_OVERVIEW_ICON_ALT}
							/>

							{/* Info title, if it needs to be shown, otherwise show the text only*/}
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

						{/* Text (in case the title is visible and the text is now below it) */}
						{props.showTitle && (
							<CustomText
								type={CUSTOM_TEXT_TYPES.BODY}
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
