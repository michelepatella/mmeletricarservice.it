import '../../css/contatti/ContactButton.css';
import {Button} from "antd";

/**
 * This component represents the contact button appears in the section contatti
 * @param title
 * @param value
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
function ContactButton({value, icon}){
    return (
        <Button type="primary" className="contact-button-contact-section">
            <img src={icon}/>
            {value}</Button>
    )
}

export default ContactButton;