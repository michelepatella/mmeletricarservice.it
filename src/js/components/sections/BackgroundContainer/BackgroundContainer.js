import { motion } from "framer-motion";
import { handleContainerStyle } from "../../../logic/style-handling/backgroundContainerStyleHandler";

/**
 * This component defines the background container of a section.
 * It is used for containing a background image shown in a section
 * with an entry animation.
 * @param image
 * @param children
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function BackgroundContainer({
	image,
	children,
	custStyle,
}) {
	// Combine predefined and customized styles
	// to get the final background container style-handling
	const style = {
		...handleContainerStyle(image),
		...custStyle,
	};

	return (
		// Motion division for containing the background
		// and to generate an animation
		<motion.div
			data-testid="background-container-motion-div"
			style={style}
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 2.0,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
}

export default BackgroundContainer;
