import { HOME_HEADER_CONTACT_BUTTONS } from "./const.js";
import IconButton from "../../../components/IconButton/IconButton.js";

/**
 * This component represents the header
 * of the Home section. It contains the company
 * contact buttons, making them rapidly accessible.
 * @returns {Element} — The home header section.
 */
function HomeHeader() {
	return (
		<>
			{/* Add a home header button for each button specified */}
			{HOME_HEADER_CONTACT_BUTTONS.map(
				({ src, onClick }) => (
					<IconButton
						key={src}
						src={src}
						onClick={onClick}
					/>
				)
			)}
		</>
	);
}

export default HomeHeader;
