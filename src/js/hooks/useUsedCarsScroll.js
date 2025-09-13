import { useScroll } from "react-spring";

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
			if (scrollYProgress > 0.55) {
				container.start({ y: "0" });
			} else {
				container.start({ y: "100%" });
			}
		},
		default: { immediate: false },
	});
};
