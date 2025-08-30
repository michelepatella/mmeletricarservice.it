import {
	CONTACTS_TITLE,
	CONTACTS,
	CONTACTS_SUBTITLE,
	CONTACTS_SECTION_NAME,
} from "../../../utils/const";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import CustomButton from "../../custom/CustomButton/CustomButton";
import SectionContainer from "../../sections/SectionContainer";
import SectionHeader from "../../sections/SectionHeader";

/**
 * This component represent the content
 * of the Contact section. It contains a section header (with title
 * and subtitle), along with all the contact buttons for each
 * company contact available.
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {
	return (
		<>
			<SectionContainer id="contatti">
				{/* Contact section header (with title and subtitle) */}
				<SectionHeader
					section={CONTACTS_SECTION_NAME}
					title={CONTACTS_TITLE}
					subtitle={CONTACTS_SUBTITLE}
				/>

				{/* Contact buttons container (contains all the contact buttons) */}
				<div className="contact-buttons-container">
					{/* Add a button for each contact available */}
					{CONTACTS?.map((contact) => (
						<CustomButton
							key={contact.value}
							isContact={true}
							isCta={false}
							text={contact?.value}
							icon={contact?.icon}
							onClick={contactClickHandler[contact?.value]}
						/>
					))}
				</div>
			</SectionContainer>
		</>
	);
}

export default ContactsContent;
