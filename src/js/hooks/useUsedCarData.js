import { useEffect } from "react";

let isFetching = false;

/**
 * Custom hook to fetch used car data
 * @param endpoint
 * @param setData
 * @param setIsLoading
 * @param isRedundantRequest
 */
export const useUsedCarData = (
  endpoint,
  setData,
  setIsLoading,
  isRedundantRequest,
) => {
  useEffect(() => {
    const fetchUsedCars = async () => {
      //to avoid multiple/redundant requests
      if (isFetching) return;
      if (isRedundantRequest) {
        setIsLoading(false);
        return;
      }
      isFetching = true;

      try {
        //make the request to get car's data
        const res = await fetch("/api/" + endpoint);

        //check the response status
        if (!res?.ok) {
          const errorData = await res?.json();
          console.error("Error fetching data:", errorData?.error);
          //loading is finish
          setIsLoading(false);
          return;
        }

        //JSON parsing and data extrapolation
        const data = await res?.json();
        const { used_car_info } = data;

        //set data
        if (endpoint === "usedCarsOverview") {
          setData(data?.used_cars_overview);
        } else {
          setData((prevData) => {
            //add new object data to previous ones
            const currentData = prevData || [];
            return [...currentData, used_car_info];
          });
        }

        //loading is finish
        setIsLoading(false);
      } catch (error) {
        //handle errors while acquiring data
        console.error("Error fetching data:", error);
        //loading is finish
        setIsLoading(false);
      } finally {
        //fetching data is finished
        isFetching = false;
      }
    };

    fetchUsedCars();
  }, [endpoint, setData, setIsLoading]);
};
