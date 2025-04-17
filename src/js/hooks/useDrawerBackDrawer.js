import {useEffect} from "react";
import {onUsedCarDrawerClose} from "../logic/usedCarDrawerHandler";

/**
 * Custom hook to manage the click back button
 * when the drawer is open
 * @param setIsDrawerOpen
 */
export const useDrawerBackButtonHandler = (setIsDrawerOpen) => {
    useEffect(() => {
        //close the drawer when back button is clicked
        const handleBackButton = (event) => {
            onUsedCarDrawerClose(setIsDrawerOpen)
        };

        //add a listener for popstate
        window.addEventListener('popstate', handleBackButton);

        //clear the listener
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [setIsDrawerOpen]);
};