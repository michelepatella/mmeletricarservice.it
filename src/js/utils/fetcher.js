/**
 * Method to fetch data by making a request to a specified
 * endpoint API and extracting the JSON response (containing used car data).
 * @param endpoint
 * @returns {Promise<any>}
 */
export const fetchUsedCarData = async (endpoint) => {
  try {
    // Make the request to get car's data
    const res = await fetch("/api/" + endpoint);

    // Check the response status
    if (!res?.ok) {
      // If any error
      const errorData = await res?.json();
      console.error("Error fetching data:", errorData?.error);
      throw new Error(errorData?.error || "Error while loading data");
    }

    // JSON parsing and data extrapolation
    const data = await res?.json();
    const { used_car_info } = data;

    // Return data
    if (endpoint.includes("usedCarsOverview")) {
      return data?.used_cars_overview;
    } else {
      return used_car_info;
    }
  } catch (error) {
    // Handle errors while acquiring data
    console.error("Error while fetching data:", error);
    throw error;
  }
};
