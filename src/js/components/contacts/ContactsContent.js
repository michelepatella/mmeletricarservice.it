import {
	CONTACTS_TITLE,
	CONTACTS,
	CONTACTS_SUBTITLE
} from "../../utils/const";
import { contactClickHandler } from "../../logic/contactButtonHandler";
import CustomButton from "../custom/CustomButton";
import SectionContainer from "../sections/SectionContainer";
import SectionHeader from "../sections/SectionHeader";

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
					section="CONTATTI"
					title={CONTACTS_TITLE}
					subtitle={CONTACTS_SUBTITLE}
				/>

				{/* Contact buttons container (contains all the contact buttons) */}
				<div className="contact-buttons-container">
					{/* Add a button for each contact available */}
					{CONTACTS?.map((
						contact,
						index
					) => (
						<CustomButton
							key={index}
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
