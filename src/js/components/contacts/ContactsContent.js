import {
    CONTACTS_TITLE,
    CONTACTS,
    CONTACTS_SUBTITLE
} from "../../utils/const";
import {contactClickHandler} from "../../logic/contactButtonHandler";
import CustomButton from "../custom/CustomButton";
import SectionContainer from "../sections/SectionContainer";
import SectionHeader from "../sections/SectionHeader";

/**
 * Contact Content
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {

    return (
        <>
            <SectionContainer id="contatti">

                {/* Section header */}
                <SectionHeader
                    section="CONTATTI"
                    title={CONTACTS_TITLE}
                    subtitle={CONTACTS_SUBTITLE} />

                {/* Contact buttons container */}
                <div className="contact-buttons-container">
                    {/* Add a button for each contact */}
                    {CONTACTS.map((contact, index) => (
                        <CustomButton
                            key={index}
                            isContact={true}
                            isCta={false}
                            text={contact.value}
                            icon={contact.icon}
                            onClick={contactClickHandler[contact.value]} />
                    ))}
                </div>

            </SectionContainer>
        </>
    );
}

export default ContactsContent;