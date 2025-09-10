import {
	CONTACTS_TITLE,
	CONTACTS,
} from "../../../utils/const";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import CustomButton from "../../custom/CustomButton/CustomButton";
import SectionContainer from "../../sections/SectionContainer/SectionContainer";
import CustomText from "../../custom/CustomText/CustomText";

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
		<SectionContainer id="contatti">
			{/* Contact section header (with title and subtitle) */}
			<CustomText
				type="heading"
				text={"● " + CONTACTS_TITLE}
				style={{ color: "white", marginBottom: "3rem" }}
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
	);
}

export default ContactsContent;
