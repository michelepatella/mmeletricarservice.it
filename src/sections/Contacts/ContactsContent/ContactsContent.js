import React from "react";
import {
	ALL_CONTACTS,
	CONTACTS_CLICK_HANDLERS,
	CONTACTS_SECTION_ID,
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
} from "../../../utils/const.js";
import {
	CONTACTS_BUTTONS_CONTAINER_CLASS_NAME,
	CONTACTS_TITLE,
} from "./const.js";
import CustomButton from "../../../components/CustomButton/CustomButton.js";
import CustomText from "../../../components/CustomText/CustomText.js";
import BlockQuote from "../../../components/BlockQuote/BlockQuote.js";
import SectionContainer from "../../../components/SectionContainer/SectionContainer.js";
import SectionBackground from "../../../components/SectionBackground/SectionBackground.js";

/**
 * This component represent the content of the 'Contact' section
 * which contains a contact button for each company contact.
 * @returns {Element} — The content of the 'Contacts' section.
 */
function ContactsContent() {
	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer id={CONTACTS_SECTION_ID}>
				{/* Section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={CONTACTS_TITLE}
					disableAnimation
				/>

				{/* Block quote to highlight all contact buttons */}
				<BlockQuote>
					{/* Contact buttons container */}
					<div
						className={
							CONTACTS_BUTTONS_CONTAINER_CLASS_NAME
						}
					>
						{/* A button for each contact */}
						{ALL_CONTACTS?.map((contact) => (
							<CustomButton
								key={contact.value}
								isContact
								text={contact?.value}
								icon={contact?.icon}
								onClick={
									CONTACTS_CLICK_HANDLERS[contact?.value]
								}
							/>
						))}
					</div>
				</BlockQuote>
			</SectionContainer>
		</SectionBackground>
	);
}

export default ContactsContent;
