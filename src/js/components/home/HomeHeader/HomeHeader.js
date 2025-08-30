import CustomIconButton from "../../custom/CustomIconButton/CustomIconButton";
import { homeHeaderContactButtons } from "../../../logic/handling/contactButtonHandler";

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
			{homeHeaderContactButtons.map(({ src, onClick }) => (
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
