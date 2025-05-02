import { motion } from "framer-motion";
import { handleContainerStyle } from "../../logic/backgroundContainerStyleHandler";

/**
 * Background Container
 * @param image
 * @param children
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function BackgroundContainer({ image, children, custStyle }) {
  //get the style dynamically
  const style = {
    ...handleContainerStyle(image),
    ...custStyle,
  };

  return (
    //motion division for containing the background
    //to generate animation
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default BackgroundContainer;
