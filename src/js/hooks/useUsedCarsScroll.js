import { useScroll } from "react-spring";
import {
	USED_CARS_ANIMATION_SCROLL_THRESHOLD,
	USED_CARS_ANIMATION_Y_FINAL_POSITION,
	USED_CARS_ANIMATION_Y_START_POSITION,
} from "../utils/const";

/**
 * Custom hook to generate used car cards animation
 * when the used cars section is scrolled horizontally.
 * @param sectionContainerRef
 * @param container
 */
export const useUsedCarsScroll = (
	sectionContainerRef,
	container
) => {
	/**
	 * Increase container y-position as long as
	 * the user scrolls it horizontally.
	 */
	useScroll({
		container: sectionContainerRef,
		onChange: ({ value: { scrollYProgress } }) => {
			if (
				scrollYProgress >
				USED_CARS_ANIMATION_SCROLL_THRESHOLD
			) {
				container.start({
					y: USED_CARS_ANIMATION_Y_START_POSITION,
				});
			} else {
				container.start({
					y: USED_CARS_ANIMATION_Y_FINAL_POSITION,
				});
			}
		},
	});
};
