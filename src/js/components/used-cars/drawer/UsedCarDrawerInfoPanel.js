import React from "react";
import { CONTACTS, CTA_BUTTON_TEXT, PHONE } from "../../../utils/const";
import { contactClickHandler } from "../../../logic/handling/contactButtonHandler";
import { handleNamePriceStyle } from "../../../logic/style-handling/usedCarsStyleHandler";
import CustomText from "../../custom/CustomText";
import UsedCarOverview from "../UsedCarOverview";
import CustomButton from "../../custom/CustomButton";
import UsedCarDrawerCollapse from "./UsedCarDrawerCollapse";

/**
 * This component represents the info panel shown in the
 * used car drawer, It contains all the information of an used
 * car, including overview information and details.
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarDrawerInfoPanel(props) {
  return (
    <>
      {/* Name of the car */}
      <CustomText
        type="heading"
        text={props.usedCarOverview?.name || "-"}
        disableAnimation={true}
        style={{
          marginTop: 0,
          ...handleNamePriceStyle(),
        }}
      />

      {/* Price of the car */}
      <CustomText
        type="subheading"
        text={
          new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
          }).format(parseFloat(props.usedCarOverview?.price)) || "-"
        }
        disableAnimation={true}
        style={{
          marginTop: 0,
          ...handleNamePriceStyle(),
        }}
      />

      {/* Car's overview information */}
      <UsedCarOverview
        showTitle={true}
        usedCarOverview={props.usedCarOverview}
      />

      {/* Call-To-Action Button */}
      <CustomButton
        isContact={true}
        isCta={true}
        text={CTA_BUTTON_TEXT}
        icon={CONTACTS.find((contact) => contact?.value === PHONE)?.icon}
        onClick={
          contactClickHandler[
            CONTACTS.find((contact) => contact?.value === PHONE)?.value
          ]
        }
      />

      {/* Collapse with all used car details */}
      <UsedCarDrawerCollapse usedCarInfo={props.usedCarInfo} />
    </>
  );
}

export default UsedCarDrawerInfoPanel;
