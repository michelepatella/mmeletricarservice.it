import React, { useState } from "react";
import { Drawer, Flex } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { onUsedCarDrawerClose } from "../../../logic/usedCarDrawerHandler";
import { useUsedCarData } from "../../../hooks/useUsedCarData";
import { useDrawerBackButtonHandler } from "../../../hooks/useDrawerBackDrawer";
import UsedCarDrawerCarousel from "./UsedCarDrawerCarousel";
import UsedCarDrawerInfoPanel from "./UsedCarDrawerInfoPanel";
import CustomBackButton from "../../custom/CustomBackButton";
import { Helmet } from "react-helmet";

/**
 * Used Car Drawer
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCarDrawer(props) {
  //get the info of the used car of interest
  const usedCarInfo = props.usedCarInfo?.find(
    (car) => car?.id === props.usedCarOverview?.id,
  );

  //get used car info (if needed)
  const [isCarLoading, setIsCarLoading] = useState(true);
  useUsedCarData(
    "usedCarInfo?id=" + props.usedCarOverview?.id,
    props.setUsedCarInfo,
    setIsCarLoading,
    usedCarInfo !== undefined,
  );

  //to capture back button click
  useDrawerBackButtonHandler(props.setIsDrawerOpen);

  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>{props.usedCarOverview?.name} a Gravina in Puglia (BA)</title>
        <meta
          name="description"
          content={
            "Scopri i dettagli su" +
            props.usedCarOverview?.name +
            "a Gravina in Puglia (BA)."
          }
        />
      </Helmet>

      {/* Drawer */}
      <Drawer
        className="used-car-drawer"
        closeIcon={<CustomBackButton />}
        onClose={() => onUsedCarDrawerClose(props.setIsDrawerOpen)}
        open={true}
      >
        {isCarLoading ? (
          //loading outlined until the
          //system is loading the used cars
          <LoadingOutlined
            className="loading-outlined"
            spin={isCarLoading}
            style={{ width: "100%" }}
          />
        ) : (
          <>
            <Flex vertical>
              {/* Flex container (info panel + carousel) */}
              <Flex className="used-car-drawer-flex-horizontal" width="60%">
                {/* Flex vertical container with info panel */}
                <Flex
                  vertical
                  className="used-car-drawer-flex-vertical"
                  width="40%"
                >
                  {/* Info Panel (Name, Price, Overview info,
                                        CTA button and Collapse with details) */}
                  <UsedCarDrawerInfoPanel
                    usedCarOverview={props.usedCarOverview}
                    usedCarInfo={usedCarInfo}
                  />
                </Flex>

                {/* Carousel */}
                <UsedCarDrawerCarousel usedCarInfo={usedCarInfo} />
              </Flex>
            </Flex>
          </>
        )}
      </Drawer>
    </>
  );
}

export default UsedCarDrawer;
