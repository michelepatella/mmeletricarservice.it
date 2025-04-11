import { Button } from "antd";
import { contactClickHandler } from "../../logic/contactButtonHandler";

/**
 * Custom Button
 * @returns {JSX.Element}
 * @constructor
 * @param props
 */
function CustomButton(props){

    //combine static and dynamic style
    const style = {...props.style};

    return (

        <Button
            type="primary"
            className={props.isContact ? "contact-button" : "custom-button"}
            onClick={props.isContact ? contactClickHandler[props.value] : props.onClick}
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