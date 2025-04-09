import {
    CONTACTS_TITLE,
    CONTACTS,
    CONTACTS_SUBTITLE
} from "../../utils/const";
import CustomButton from "../custom/CustomButton";
import CustomSectionContainer from "../custom/CustomSectionContainer";
import CustomSectionHeader from "../custom/CustomSectionHeader";

/**
 * Contacts Content
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {

    return (
        <>
            <CustomSectionContainer id="contacts">

                {/* Section header */}
                <CustomSectionHeader
                    section="CONTATTI"
                    title={CONTACTS_TITLE}
                    subtitle={CONTACTS_SUBTITLE} />

                {/* Contact buttons container */}
                <div className="contact-buttons-container">
                    {/* Add a button for each contact */}
                    {CONTACTS.map((contact, index) => (
                        <CustomButton
                            key={index}
                            contactType={contact.value}
                            value={contact.value}
                            icon={contact.icon} />
                    ))}
                </div>

            </CustomSectionContainer>
        </>
    );
}

export default ContactsContent;