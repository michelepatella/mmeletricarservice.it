import { motion } from "framer-motion";
import { handleCustomBackgroundContainerStyle } from "../../logic/styleHandler";

/**
 * Custom Background Container
 * @param image
 * @param children
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function CustomBackgroundContainer({ image, children, custStyle }) {

    //get the style dynamically
    const style = {
        ...handleCustomBackgroundContainerStyle(image),
        ...custStyle
    };

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