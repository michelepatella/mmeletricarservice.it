import {
  onEmailButtonClick,
  onFacebookButtonClick,
  onPhoneButtonClick,
} from "../../logic/contactButtonHandler";
import CustomIconButton from "../custom/CustomIconButton";

/**
 * Header of Home section
 * @returns {Element}
 * @constructor
 */
function HomeHeader() {
  return (
    <>
      {/* Email Button */}
      <CustomIconButton
        src="/icons/email_icon.svg"
        onClick={onEmailButtonClick}
      />

      {/* Facebook Button */}
      <CustomIconButton
        src="/icons/facebook_icon.svg"
        onClick={onFacebookButtonClick}
      />

      {/* Phone Button */}
      <CustomIconButton
        src="/icons/phone_icon.svg"
        onClick={onPhoneButtonClick}
      />
    </>
  );
}

export default HomeHeader;
