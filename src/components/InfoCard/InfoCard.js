import { Flex } from "antd";
import {
	INFO_CARD_CLASS_NAME,
	INFO_CARD_FLEX_CLASS_NAME,
	INFO_CARD_ICON_ALT,
	INFO_CARD_ICON_CLASS_NAME,
} from "./const";
import { CUSTOM_TEXT_TYPES } from "../../utils/const";
import {
	getInfoCardDescriptionStyle,
	getInfoCardTitleStyle,
} from "./styleHandler";
import CustomText from "../CustomText/CustomText";

/**
 * This component represents an info card. It is composed by
 * an icon characterizing the information graphically (if any),
 * an informative title, and a description.
 * @param props Object containing:
 *   - icon: string — Optional URL of the icon image to display.
 *   - title: string — The title text of the info card.
 *   - description: string — The descriptive text of the info card.
 * @returns {Element} — The info card component.
 */
function InfoCard(props) {
	return (
		<>
			{/* Info Card global container */}
			<div className={INFO_CARD_CLASS_NAME}>
				{/* Flex container */}
				<Flex className={INFO_CARD_FLEX_CLASS_NAME}>
					{/* Informative icon */}
					{props.icon && (
						<img
							className={INFO_CARD_ICON_CLASS_NAME}
							src={props.icon}
							alt={INFO_CARD_ICON_ALT}
						/>
					)}

					{/* Informative title */}
					<CustomText
						type={CUSTOM_TEXT_TYPES.SUBHEADING}
						text={props.title}
						style={getInfoCardTitleStyle()}
						disableAnimation
					/>
				</Flex>

				{/* Informative description */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.BODY}
					text={props.description}
					style={getInfoCardDescriptionStyle()}
					disableAnimation
				/>
			</div>
		</>
	);
}

export default InfoCard;
