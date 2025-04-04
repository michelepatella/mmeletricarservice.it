import { Button } from "antd";
import { contactClickHandler } from "../../logic/contactButtonHandler";
import '../../../styles/components/custom/CustomButton.css';

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
            className="custom-button"
            style={style}
            onClick={props.type ? contactClickHandler[props.type] : props.onClick}>

            {/* Button's icon (if any) */}
            {
                props.icon ?
                    <img
                        src={props.icon}
                        alt="contact-icon"/>
                    : null
            }

            {props.value}

        </Button>

    );
}

export default CustomButton;