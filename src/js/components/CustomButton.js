import '../../styles/components/buttons/CustomButton.css';
import {Button} from "antd";
import {clickHandlers} from "../logic/customButtonHandler";

/**
 * This component represents the contact button appears in the "contatti" page
 * @param title
 * @param value
 * @param icon
 * @returns {JSX.Element}
 * @constructor
 */
function CustomButton({value, icon}){
    return (
        <Button
            type="primary"
            className="contact-button-contact-section"
            onClick={clickHandlers[value]}>

            <img
                src={icon}
                alt="contact-icon"/>

            {value}

        </Button>
    )
}

export default CustomButton;