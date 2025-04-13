import {Switch} from "antd";
import {handleSwitchStyle} from "../../logic/cookieConsentBannerStyleHandler";
import CustomText from "../custom/CustomText";

/**
 * Cookie Switch Container
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CookieSwitchContainer(props) {
    return (

        <div className="cookie-switch-container">

            {/* Switch */}
            <Switch
                disabled={props.disabled}
                checked={props.checked}
                onChange={() => props.setTempPreferences(!props.tempPreferences)}
                style={handleSwitchStyle(props.tempPreferences, props.type)}/>

            {/* Switch label */}
            <CustomText
                type="caption"
                text={props.text}/>

        </div>

    );
}

export default CookieSwitchContainer;