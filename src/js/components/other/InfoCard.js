import { Flex } from "antd";
import { handleTitleStyle } from "../../logic/infoCardStyleHandler";
import CustomText from "../custom/CustomText";

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
				<Flex
					className="info-card-flex"
					gap="small"
					align="start">

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
						style={handleTitleStyle()}
					/>

				</Flex>

				{/* Informative description */}
				<CustomText
					type="body"
					text={props.description}
					style={{ marginTop: "0" }}
				/>

			</div>
		</>
	);
}

export default InfoCard;