import React from "react";
import { Collapse } from "antd";
import {
	MinusOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import { CUSTOM_TEXT_TYPES } from "../../../../utils/const.js";
import {
	ALL_USED_CAR_INFO,
	USED_CAR_DRAWER_COLLAPSE_CLASS_NAME,
	USED_CAR_DRAWER_COLLAPSE_INNER_LIST_CLASS_NAME,
	USED_CAR_DRAWER_COLLAPSE_OUTER_LIST_CLASS_NAME,
} from "./const.js";
import {
	getUsedCarDrawerCollapseInformationNameStyle,
	getUsedCarDrawerCollapseInformationTextStyle,
} from "./style-handler.js";
import CustomText from "../../../../components/CustomText/CustomText.js";

/**
 * This component represents a collapse which collects information 
 * belonging to the same group.
 * @param props — Object containing:
 *   - usedCarInfo— The used car data.
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
						// to a specific category
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
