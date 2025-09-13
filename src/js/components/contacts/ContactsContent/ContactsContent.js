import {
	CONTACTS,
	CONTACTS_TITLE,
} from "../../../utils/const";
import { DOTTED_BACKGROUND_IMAGE_LINK } from "../../../utils/internal_links";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import CustomButton from "../../custom/CustomButton/CustomButton";
import CustomText from "../../custom/CustomText/CustomText";
import CustomBlockQuote from "../../custom/CustomBlockQuote";
import SectionContainer from "../../other/SectionContainer/SectionContainer";
import BackgroundContainer from "../../other/BackgroundContainer/BackgroundContainer";

/**
 * This component represent the content
 * of the Contact section. It contains all the contact
 * buttons for each company contact available.
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {
	return (
		<BackgroundContainer
			image={DOTTED_BACKGROUND_IMAGE_LINK}
		>
			<SectionContainer id="contatti">
				{/* Contact section title */}
				<CustomText
					type="super-heading"
					text={CONTACTS_TITLE}
					disableAnimation={true}
				/>

				{/* Custom block quote to highlight all contact buttons */}
				<CustomBlockQuote>
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
								onClick={
									contactClickHandler[contact?.value]
								}
							/>
						))}
					</div>
				</CustomBlockQuote>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default ContactsContent;
