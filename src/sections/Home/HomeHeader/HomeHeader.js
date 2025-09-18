import { HOME_HEADER_CONTACT_BUTTONS } from "./const";
import { IMAGE_FETCH_PRIORITY_HIGH } from "../../../utils/const";
import CustomIconButton from "../../../components/CustomIconButton/CustomIconButton";

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
			{HOME_HEADER_CONTACT_BUTTONS.map(
				({ src, onClick }) => (
					<CustomIconButton
						key={src}
						src={src}
						onClick={onClick}
						fetchPriority={IMAGE_FETCH_PRIORITY_HIGH}
					/>
				)
			)}
		</>
	);
}

export default HomeHeader;
