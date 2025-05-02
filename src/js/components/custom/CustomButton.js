import { Button } from "antd";

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
            className={
                props.isContact && !props.isCta ? "contact-button"
                    : props.isContact ? "cta-button" : "custom-button"}
            onClick={props.onClick}
            style={style}>

            {/* Button's icon (if any) */}
            {
                props.icon &&
                    <img
                        src={props.icon}
                        alt="button-icon" />
            }

            {props.text}

        </Button>

    );
}

export default CustomButton;