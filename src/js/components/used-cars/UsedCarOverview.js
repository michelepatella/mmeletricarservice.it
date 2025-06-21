import { Flex } from "antd";
import { USED_CAR_OVERVIEW } from "../../utils/const";
import { handleTextOverviewStyle } from "../../logic/style-handling/usedCarsStyleHandler";
import CustomText from "../custom/CustomText";

/**
 * This component includes all used car overview information:
 * year, mileage, fuel, and status. Each information is presented
 * through an icon (for summarizing what does represent each information) and
 * the corresponding textual value. The title of what each information represents
 * can be also shown, is explicitly specified.
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarOverview(props) {
  return (
    <>
      {USED_CAR_OVERVIEW?.map((info, index) => (
        // Add each used car overview information
        <div key={index} className="used-car-overview-container">
          {/* Global Flex container (vertical) */}
          <Flex vertical>
            {/* Flex container (horizontal) */}
            <Flex gap="small">
              {/* Icon */}
              <img src={info?.icon} alt="icon" />

              {/* Info title, if it needs to be shown, otherwise show the text only*/}
              <CustomText
                type="body"
                text={
                  props.showTitle
                    ? info?.title
                    : props.usedCarOverview?.[info?.name] || "-"
                }
                disableAnimation={true}
                style={handleTextOverviewStyle(props.showTitle)}
              />
            </Flex>

            {/* Text (in case the title is visible and the text is now below it) */}
            {props.showTitle && (
              <CustomText
                type="body"
                text={props.usedCarOverview?.[info?.name] || "-"}
                disableAnimation={true}
                style={handleTextOverviewStyle()}
              />
            )}
          </Flex>
        </div>
      ))}
    </>
  );
}

export default UsedCarOverview;
