import {
    CONTACTS_TITLE,
    CONTACTS,
    CONTACTS_SUBTITLE
} from "../../utils/const";
import CustomButton from "../custom/CustomButton";
import SectionContainer from "../sections/SectionContainer";
import SectionHeader from "../sections/SectionHeader";

/**
 * Content of Contacts section
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {

    return (
        <>
            <SectionContainer id="contacts">

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
                            contactValue={contact.value}
                            text={contact.value}
                            icon={contact.icon} />
                    ))}
                </div>

            </SectionContainer>
        </>
    );
}

export default ContactsContent;