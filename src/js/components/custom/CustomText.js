import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import '../../../styles/components/custom/CustomText.css';

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
                {props.type === "title" ? "custom-title" :
                    props.type === "subtitle" ? "custom-subtitle" :
                        props.type === "description" ? "custom-description" :
                        "custom-small"}
            ref={props.disableAnimation ? null : textRef}
            style={style}
            dangerouslySetInnerHTML={{ __html: props.text }}/>

    );
}

export default CustomText;