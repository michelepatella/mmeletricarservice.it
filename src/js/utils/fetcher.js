/**
 * Method to fetch data
 * @param endpoint
 * @returns {Promise<any>}
 */
export const fetchUsedCarData = async (endpoint) => {
  try {
    //make the request to get car's data
    const res = await fetch("/api/" + endpoint);

    //check the response status
    if (!res?.ok) {
      const errorData = await res?.json();
      console.error("Error fetching data:", errorData?.error);
      throw new Error(errorData?.error || "Error while loading data");
    }

    //JSON parsing and data extrapolation
    const data = await res?.json();
    const { used_car_info } = data;

    //set data
    if (endpoint === "usedCarsOverview") {
      return data?.used_cars_overview;
    } else {
      return used_car_info;
    }
  } catch (error) {
    //handle errors while acquiring data
    console.error("Error fetching data:", error);
    throw error;
  }
};
