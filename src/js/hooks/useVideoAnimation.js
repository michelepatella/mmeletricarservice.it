import { useEffect } from "react";

/**
 * Custom hook to delay a video animation.
 * @param videoRef
 * @param isVideoVisible
 */
export const useVideoAnimation = (
	videoRef,
	isVideoVisible
) => {
	useEffect(() => {
		// If the section is visible
		if (isVideoVisible) {
			const timer = setTimeout(() => {
				try {
					// Start the video
					videoRef?.current?.play();
				} catch (error) {
					console.warn("Video failed to play:", error);
				}
			}, 200); // Delay about 0.2s

			return () => clearTimeout(timer);
		}
	}, [videoRef, isVideoVisible]);
};
