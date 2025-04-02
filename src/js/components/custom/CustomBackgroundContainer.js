import { handleCustomBackgroundContainerStyle } from "../../logic/styleHandler";
import { motion } from "framer-motion";

/**
 * Custom Background Container
 * @param image
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function CustomBackgroundContainer({ image, children }) {

    //get the style dynamically
    const style = { ...handleCustomBackgroundContainerStyle(image) };

    return (
        <motion.div
            className="custom-background-container"
            style={style}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2.0, ease: "easeOut"}}>
            {children}
        </motion.div>
    );
}

export default CustomBackgroundContainer;