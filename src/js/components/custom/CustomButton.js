import { Button } from "antd";
import { contactClickHandler } from "../../logic/contactButtonHandler";

/**
 * Custom Button
 * @returns {JSX.Element}
 * @constructor
 * @param props
 */
function CustomButton(props){

    const style = {...props.style};

    return (

        <Button
            type="primary"
            className={props.contactType ? "contact-button" : "custom-button"}
            onClick={props.contactType ? contactClickHandler[props.contactType] : props.onClick}
            style={style}>

            {/* Button's icon (if any) */}
            {
                props.icon ?
                    <img
                        src={props.icon}
                        alt="contact-icon" />
                    : null
            }

            {props.value}

        </Button>

    );
}

export default CustomButton;