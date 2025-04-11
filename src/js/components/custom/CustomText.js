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
    const style = {...props.style};

    return(

        <p
            className=
                {props.type === "heading" ? "custom-heading" :
                    props.type === "subheading" ? "custom-subheading" :
                        props.type === "body" ? "custom-body" : "custom-caption"}
            ref={props.disableAnimation ? null : textRef}
            style={style}
            dangerouslySetInnerHTML={{ __html: props.text }} />

    );
}

export default CustomText;