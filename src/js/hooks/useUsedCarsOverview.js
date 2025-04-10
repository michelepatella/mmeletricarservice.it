import { useEffect } from "react";

/**
 * Custom hook to fetch used cars overview information
 * @param setUsedCars
 * @param setAreCarsLoading
 */
export const useUsedCarsOverview = (setUsedCars, setAreCarsLoading) => {

    useEffect(() => {
        const fetchUsedCars = async () => {
            try {
                //make the request to get overview information of the used cars
                const res = await fetch('/api/carsOverview')

                //check the response status
                if (!res.ok) {
                    const errorData = await res.json()
                    console.error('Error fetching used cars:', errorData.error)
                    setUsedCars([])
                    return
                }

                //JSON parsing
                const data = await res.json()
                //set the used cars
                setUsedCars(data.used_cars)
                //loading is finish
                setAreCarsLoading(false)

            } catch (error) {
                //handle errors while acquiring used cars overview information
                console.error('Error fetching used cars:', error)
                setUsedCars([])
                //loading is finish
                setAreCarsLoading(false)
            }
        };

        fetchUsedCars();
    }, [setUsedCars, setAreCarsLoading]);
};