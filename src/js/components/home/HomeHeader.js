import CustomIconButton from "../custom/CustomIconButton";
import { homeHeaderButtons } from "../../logic/contactButtonHandler";

/**
 * This component represents the header
 * of the Home section. It contains the company
 * contact buttons, making them rapidly accessible.
 * @returns {Element}
 * @constructor
 */
function HomeHeader() {
	return (
		<>
			{/* Add a home header button for each button specified */}
			{homeHeaderButtons.map((
				{
					src,
					onClick
				}
			) => (
				<CustomIconButton
					key={src}
					src={src}
					onClick={onClick}
				/>
			))}
		</>
	);
}

export default HomeHeader;
