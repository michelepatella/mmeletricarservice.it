import React, { useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import CustomText from "../../custom/CustomText/CustomText";

/**
 * This component represents the section block.
 * The section block is used in the section to show
 * a title and a description for the section itself. The section block is
 * characterized by an entry animation, triggered whenever it becomes
 * visible in the browser.
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function SectionBlock(props) {
	// Definition of a reference, useful to generate
	// an entry animation when the section becomes visible
	const ref = useRef(null);
	useIntersectionObserver(ref);

	return (
		<div ref={ref} className="section-block">
			{/* Section title */}
			<CustomText
				type="heading"
				text={props.title}
			/>

			{/* Section description */}
			<CustomText
				type="body"
				text={props.description}
			/>
		</div>
	);
}

export default SectionBlock;
