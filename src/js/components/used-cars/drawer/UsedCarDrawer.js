import { useQuery } from "@tanstack/react-query";
import { fetchUsedCarData } from "../../../utils/fetcher";
import { Drawer, Flex } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { onUsedCarDrawerClose } from "../../../logic/usedCarDrawerHandler";
import { useDrawerBackButtonHandler } from "../../../hooks/useDrawerBackDrawer";
import UsedCarDrawerCarousel from "./UsedCarDrawerCarousel";
import UsedCarDrawerInfoPanel from "./UsedCarDrawerInfoPanel";
import CustomBackButton from "../../custom/CustomBackButton";
import { Helmet } from "react-helmet";

/**
 * Used Car Drawer
 * @param usedCarOverview
 * @param setIsDrawerOpen
 * @returns {JSX.Element}
 * @constructor
 */
function UsedCarDrawer({ usedCarOverview, setIsDrawerOpen }) {
  const { data: usedCarInfo, isLoading } = useQuery({
    queryKey: ["usedCarInfo", usedCarOverview?.id],
    queryFn: () => fetchUsedCarData("usedCarInfo?id=" + usedCarOverview?.id),
    enabled: !!usedCarOverview?.id,
    staleTime: 1000 * 60 * 5,
  });

  useDrawerBackButtonHandler(setIsDrawerOpen);

  return (
    <>
      {/* React Helmet */}
      <Helmet>
        <title>{usedCarOverview?.name} a Gravina in Puglia (BA)</title>
        <meta
          name="description"
          content={"Scopri i dettagli su " + usedCarOverview?.name + " a Gravina in Puglia (BA)."}
        />
      </Helmet>

      {/* Drawer */}
      <Drawer
        className="used-car-drawer"
        closeIcon={<CustomBackButton />}
        onClose={() => onUsedCarDrawerClose(setIsDrawerOpen)}
        open
      >
        {isLoading ? (
          //loading outlined until the
          //system is loading the used cars
          <LoadingOutlined className="loading-outlined" spin />
        ) : (
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
                  usedCarOverview={usedCarOverview}
                  usedCarInfo={usedCarInfo}
                />
              </Flex>

              {/* Carousel */}
              <UsedCarDrawerCarousel usedCarInfo={usedCarInfo} />
            </Flex>
          </Flex>
        )}
      </Drawer>
    </>
  );
}

export default UsedCarDrawer;
