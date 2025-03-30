import { Button } from "antd";
import { clickHandlers } from "../../logic/contactButtonHandler";
import '../../../styles/components/custom/CustomButton.css';

/**
 * Custom Button
 * @returns {JSX.Element}
 * @constructor
 * @param props
 */
function CustomButton(props){
    return (

        <Button
            type="primary"
            className="custom-button"
            onClick={clickHandlers[props.value]}>

            {/* Button's icon */}
            <img
                src={props.icon}
                alt="contact-icon"/>

            {props.value}

        </Button>

    );
}

export default CustomButton;