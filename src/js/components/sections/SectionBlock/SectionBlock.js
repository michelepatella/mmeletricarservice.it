import React, { useRef } from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import {
	handleSectionNameStyle,
	handleSubtitleStyle,
} from "../../../logic/style-handling/sectionHeaderStyleHandler";
import CustomText from "../../custom/CustomText/CustomText";
import { OUR_VALUES_DESCRIPTION } from "../../../utils/const";

/**
 * This component represents the section header.
 * The section header is used in the section to show its name,
 * a title, and a description of the section. The section header is
 * characterized by an entry animation, triggered whenever it becomes
 * visible in the browser. The section header can be used to show
 * other elements (such as images or videos).
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function SectionBlock(props) {
	// Definition of a header reference, useful to generate
	// an entry animation when the section becomes visible
	const ref = useRef(null);
	useIntersectionObserver(ref);

	return (
		<div ref={ref} className="section-header">
			{/* Section title */}
			<CustomText
				type="heading"
				text={props.title}
				style={{
					color: "white",
					textAlign: "initial"
				}}
			/>

			{/* Section description */}
			<CustomText
				type="body"
				style={{ opacity: 0.85 }}
				text={props.description}
			/>

			{/* Other contents (if any) */}
			{props.children}
		</div>
	);
}

export default SectionBlock;
