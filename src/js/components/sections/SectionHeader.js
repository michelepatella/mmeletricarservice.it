import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {
  handleSectionNameStyle,
  handleSubtitleStyle,
} from "../../logic/sectionHeaderStyleHandler";
import CustomText from "../custom/CustomText";

/**
 * Section Header
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function SectionHeader(props) {
  //to animate the whole header
  const ref = useRef(null);
  useIntersectionObserver(ref);

  return (
    <div ref={ref} className="section-header">
      {/* Section title */}
      <CustomText
        type="body"
        text={"• " + props.section}
        style={handleSectionNameStyle()}
      />

      {/* Title */}
      <CustomText
        type="heading"
        text={props.title}
        style={{ textAlign: "center" }}
      />

      {/* Subtitle */}
      <CustomText
        type="subheading"
        text={props.subtitle}
        style={handleSubtitleStyle()}
      />

      {/* Other contents (if any) */}
      {props.children}
    </div>
  );
}

export default SectionHeader;
