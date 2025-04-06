import React, { useRef } from "react";
import {CONTACTS_TITLE, CONTACTS, CONTACTS_SUBTITLE} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {handleContactsTitleStyle} from "../../logic/styleHandler";
import CustomButton from "../custom/CustomButton";
import CustomSectionContainer from "../custom/CustomSectionContainer";
import CustomText from "../custom/CustomText";
import "../../../styles/components/contacts/ContactsContent.css";

/**
 * Contacts Content
 * @returns {Element}
 * @constructor
 */
function ContactsContent() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            <CustomSectionContainer id="contacts">

                {/* Title */}
                <CustomText
                    type="title"
                    text={CONTACTS_TITLE} />

                {/* Subitle */}
                <CustomText
                    type="subtitle"
                    text={CONTACTS_SUBTITLE} />

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