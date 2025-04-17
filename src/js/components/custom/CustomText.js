import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

/**
 * Custom Text
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CustomText(props) {

    //to generate animation when visible
    const textRef = useRef(null);
    useIntersectionObserver(textRef);

    //combine static and dynamic styles
    const style = {
        ...(props.disableAnimation ? { opacity: "1" } : {}),
        ...props.style
    };

    return(

        <p
            className={"custom-" + props.type}
            ref={props.disableAnimation ? null : textRef}
            style={style}
            dangerouslySetInnerHTML={{ __html: props.text }} />

    );
}

export default CustomText;