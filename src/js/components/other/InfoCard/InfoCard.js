import { Flex } from "antd";
import { handleDescriptionStyle } from "../../../logic/style-handling/infoCardStyleHandler";
import CustomText from "../../custom/CustomText/CustomText";

/**
 * This component represents an info card. It is composed by
 * an icon characterizing the information graphically (if any),
 * an informative title, and a description.
 * @returns {Element}
 * @constructor
 * @param props
 */
function InfoCard(props) {
	return (
		<>
			{/* Info Card global container */}
			<div className="info-card">
				{/* Flex container */}
				<Flex className="info-card-flex">
					{/* Informative icon */}
					{props.icon && (
						<img
							className="info-card-icon"
							src={props.icon}
							alt="info-card-icon"
						/>
					)}

					{/* Informative title */}
					<CustomText
						type="subheading"
						text={props.title}
						disableAnimation={true}
					/>
				</Flex>

				{/* Informative description */}
				<CustomText
					type="body"
					text={props.description}
					style={handleDescriptionStyle()}
					disableAnimation={true}
				/>
			</div>
		</>
	);
}

export default InfoCard;
