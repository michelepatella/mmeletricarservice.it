import {useEffect} from "react";

/**
 * To delay the video animation
 * @param videoRef
 * @param isVideoVisible
 */
export const useVideoAnimation = (videoRef, isVideoVisible) =>  {

    useEffect(() => {
        //if the section is visible
        if (isVideoVisible) {
            const timer = setTimeout(() => {
                //start the video
                videoRef.current.play();
            }, 200);  //delay about 0.2s since the section is visible

            return () => clearTimeout(timer);
        }
    }, [videoRef, isVideoVisible]);

};