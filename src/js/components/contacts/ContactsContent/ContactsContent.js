import { CONTACTS } from "../../../utils/const";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import CustomButton from "../../custom/CustomButton/CustomButton";
import SectionContainer from "../../sections/SectionContainer/SectionContainer";

/**
 * This component represent the content
 * of the Contact section. It contains all the contact
 * buttons for each company contact available.
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {
	return (
		<SectionContainer id="contatti">
			{/* Contact section title */}
			<h1
				style={{
					fontSize: "clamp(43px, 6vw, 120px)",
					color: "white",
					lineHeight: 1.2,
				}}
				dangerouslySetInnerHTML={{
					__html: "💬 Siamo qui per te.",
				}}
			/>

			<blockquote
				style={{
					display: "inline-block",
					borderLeft: "5px solid",
					color: "rgba(255, 255, 255, 0.7)",
					paddingLeft: "1rem",
					margin: 0,
				}}
			>
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
			</blockquote>
		</SectionContainer>
	);
}

export default ContactsContent;
