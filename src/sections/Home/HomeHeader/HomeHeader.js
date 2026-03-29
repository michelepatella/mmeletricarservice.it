import React from "react";
import { HOME_HEADER_CONTACT_BUTTONS } from "./const.js";
import IconButton from "../../../components/IconButton/IconButton.js";

/**
 * This component represents the header of the 'Home' section which
 * contains the company contact buttons.
 * @returns {Element} — The header of the 'Home' section.
 */
function HomeHeader() {
	return (
		<>
			{/* A button for each company contact */}
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
