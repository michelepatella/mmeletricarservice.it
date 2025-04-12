import { useEffect } from "react";

let isFetching = false;

/**
 * Custom hook to fetch used car data
 * @param endpoint
 * @param setData
 * @param setIsLoading
 */
export const useUsedCarData = (endpoint, setData, setIsLoading) => {

    useEffect(() => {
        const fetchUsedCars = async () => {

            //to avoid multiple requests
            if (isFetching)
                return;
            isFetching = true;

            try {

                //make the request to get car's data
                const res = await fetch('/api/' + endpoint);

                //check the response status
                if (!res.ok) {
                    const errorData = await res.json()
                    console.error('Error fetching data:', errorData.error)
                    setData([])
                    //loading is finish
                    setIsLoading(false)
                    return
                }

                //JSON parsing
                const data = await res.json()

                //set data
                if (endpoint === 'usedCarsOverview') {
                    setData(data.used_cars_overview)
                }else{
                    setData(data.used_car_info)
                }

                //loading is finish
                setIsLoading(false)

            } catch (error) {
                //handle errors while acquiring data
                console.error('Error fetching data:', error)
                setData([])
                //loading is finish
                setIsLoading(false)

            } finally {
                //fetching data is finished
                isFetching = false;
            }
        };

        fetchUsedCars();
    }, [endpoint, setData, setIsLoading]);
};