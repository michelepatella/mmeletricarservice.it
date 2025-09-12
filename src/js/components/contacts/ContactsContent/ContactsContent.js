import { CONTACTS } from "../../../utils/const";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import CustomButton from "../../custom/CustomButton/CustomButton";
import SectionContainer from "../../sections/SectionContainer/SectionContainer";
import BackgroundContainer from "../../sections/BackgroundContainer/BackgroundContainer";

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
			custStyle={{
				height: "100%",
				backgroundSize: "auto !important",
				backgroundRepeat: "repeat !important",
				backgroundOrigin: "right !important",
			}}
			image="/images/dotted-background-image.avif"
		>
			<SectionContainer id="contatti">
				{/* Contact section title */}
				<h1
					style={{
						fontSize: "clamp(43px, 6vw, 120px)",
						color: "white",
						lineHeight: 1.2,
						marginBottom: "20px",
					}}
					dangerouslySetInnerHTML={{
						__html: "Siamo qui per te.",
					}}
				/>

				<blockquote
					style={{
						display: "inline-block",
						borderLeft: "3px solid",
						color: "var(--yellow_color)",
						paddingLeft: "1rem",
						marginLeft: "5px",
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
								onClick={
									contactClickHandler[contact?.value]
								}
							/>
						))}
					</div>
				</blockquote>
			</SectionContainer>
		</BackgroundContainer>
	);
}

export default ContactsContent;
