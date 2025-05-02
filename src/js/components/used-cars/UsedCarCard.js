import { useState } from "react";
import { Flex } from "antd";
import { USED_CARS_CARD_IMAGE_UNAVAILABLE_DESCRIPTION } from "../../utils/const";
import { onUsedCarDrawerOpen } from "../../logic/usedCarDrawerHandler";
import { handleNamePriceStyle } from "../../logic/usedCarsStyleHandler";
import { useOpenDrawerByLink } from "../../hooks/useOpenDrawerByLink";
import UsedCarDrawer from "./drawer/UsedCarDrawer";
import CustomText from "../custom/CustomText";
import UsedCarOverview from "./UsedCarOverview";

/**
 * Used Car Card
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarCard(props) {
  //to manage when the drawer is open/closed
  //and set that state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [usedCarInfo, setUsedCarInfo] = useState([]);

  //check if the current used car has been requested by a link
  useOpenDrawerByLink(setIsDrawerOpen, props.usedCarOverview?.id?.toString());

  return (
    <>
      <div
        className="used-cars-card"
        onClick={() =>
          onUsedCarDrawerOpen(setIsDrawerOpen, props.usedCarOverview?.id)
        }
      >
        {/* Image presentation (if any) */}
        <div className="used-cars-card-image-container">
          {props.usedCarOverview?.image ? (
            <img
              src={props.usedCarOverview?.image}
              alt="auto-image"
              loading="lazy"
            />
          ) : (
            <CustomText
              type="caption"
              text={USED_CARS_CARD_IMAGE_UNAVAILABLE_DESCRIPTION}
              disableAnimation={true}
            />
          )}
        </div>

        {/* Flex container to show car's information */}
        <Flex className="used-car-card-overview-flex" gap="small" align="start">
          {/* Name of the car */}
          <CustomText
            type="subheading"
            text={props.usedCarOverview?.name}
            disableAnimation={true}
            style={handleNamePriceStyle()}
          />

          {/* Car's overview */}
          <UsedCarOverview
            showTitle={false}
            usedCarOverview={props.usedCarOverview}
          />

          {/* Price */}
          <div className="used-cars-card-price-container">
            <CustomText
              type="body"
              text={
                new Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "EUR",
                }).format(parseFloat(props.usedCarOverview?.price)) || "-"
              }
              disableAnimation={true}
              style={handleNamePriceStyle()}
            />
          </div>
        </Flex>
      </div>

      {/* Used Car Drawer including car's details when the card is clicked */}
      {isDrawerOpen && (
        <UsedCarDrawer
          usedCarInfo={usedCarInfo}
          setUsedCarInfo={setUsedCarInfo}
          usedCarOverview={props.usedCarOverview}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      )}
    </>
  );
}

export default UsedCarCard;
