import {
	ALL_CONTACTS,
	CONTACTS_CLICK_HANDLERS,
	CONTACTS_SECTION_ID,
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
} from "../../../utils/const";
import {
	CONTACTS_BUTTONS_CONTAINER_CLASS_NAME,
	CONTACTS_TITLE,
} from "./const";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomText from "../../../components/CustomText/CustomText";
import BlockQuote from "../../../components/BlockQuote/BlockQuote";
import SectionContainer from "../../../components/SectionContainer/SectionContainer";
import SectionBackground from "../../../components/SectionBackground/SectionBackground";

/**
 * This component represent the content
 * of the Contact section. It contains all the contact
 * buttons for each company contact available.
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {
	return (
		<SectionBackground image={DOTTED_BACKGROUND_IMAGE_LINK}>
			<SectionContainer id={CONTACTS_SECTION_ID}>
				{/* Contacts section title */}
				<CustomText
					type={CUSTOM_TEXT_TYPES.SUPER_HEADING}
					text={CONTACTS_TITLE}
					disableAnimation
				/>

				{/* Block quote to highlight all contact buttons */}
				<BlockQuote>
					{/* Contact buttons container (contains all the contact buttons) */}
					<div
						className={
							CONTACTS_BUTTONS_CONTAINER_CLASS_NAME
						}
					>
						{/* Add a button for each contact available */}
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
