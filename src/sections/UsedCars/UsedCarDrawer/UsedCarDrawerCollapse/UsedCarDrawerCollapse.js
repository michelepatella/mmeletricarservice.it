import React from "react";
import { Collapse } from "antd";
import {
	MinusOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import { CUSTOM_TEXT_TYPES } from "../../../../utils/const";
import {
	ALL_USED_CAR_INFO,
	USED_CAR_DRAWER_COLLAPSE_CLASS_NAME,
	USED_CAR_DRAWER_COLLAPSE_INNER_LIST_CLASS_NAME,
	USED_CAR_DRAWER_COLLAPSE_OUTER_LIST_CLASS_NAME,
} from "./const";
import {
	getUsedCarDrawerCollapseInformationNameStyle,
	getUsedCarDrawerCollapseInformationTextStyle,
} from "./styleHandler";
import CustomText from "../../../../components/CustomText/CustomText";

/**
 * This component represents a collapse used into the
 * used car drawer to contain all the information of a specific
 * category. The user can expand the collapse corresponding to a
 * category (e.g., 'Engine and Performance') to show all the information contained.
 * @param props — Object containing:
 *   - usedCarInfo: Record<string, string | number | null> — The used car data
 *   with keys matching information items to display inside the collapse.
 * @returns {React.JSX.Element} — The used car drawer collapse component.
 */
function UsedCarDrawerCollapse(props) {
	return (
		<Collapse
			className={USED_CAR_DRAWER_COLLAPSE_CLASS_NAME}
			accordion
			expandIcon={({ isActive }) =>
				isActive ? <MinusOutlined /> : <PlusOutlined />
			}
			// Add all the items to the collapse
			items={ALL_USED_CAR_INFO?.map(
				({ key, label, children }) => ({
					key,
					label,
					children: (
						// Show all the information belonging
						// to a specific category via list
						<li
							className={
								USED_CAR_DRAWER_COLLAPSE_OUTER_LIST_CLASS_NAME
							}
						>
							{children?.map((item) => (
								<ul
									key={item?.name}
									className={
										USED_CAR_DRAWER_COLLAPSE_INNER_LIST_CLASS_NAME
									}
								>
									{/* Information name */}
									<CustomText
										type={CUSTOM_TEXT_TYPES.BODY}
										text={item?.title}
										style={getUsedCarDrawerCollapseInformationNameStyle()}
										disableAnimation
									/>

									{/* Information textual value */}
									<CustomText
										type={CUSTOM_TEXT_TYPES.CAPTION}
										text={
											props.usedCarInfo?.[item?.name] || "-"
										}
										style={getUsedCarDrawerCollapseInformationTextStyle()}
									/>
								</ul>
							))}
						</li>
					),
				})
			)}
		/>
	);
}

export default UsedCarDrawerCollapse;
