/**
 * This component represents the section container.
 * As its name suggests, it is used as container for containing
 * all the components which compose a section.
 * @param children
 * @param id
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function SectionContainer({ children, id, custStyle }) {
	// Use only the customized styles
	// to get the final section container style-handling
	const style = {
		...custStyle,
	};

	return (
		// The section division containing all the
		// children representing the section components
		<div
			id={id}
			data-testid="section-container"
			className="section-container"
			style={style}
		>
			{children}
		</div>
	);
}

export default SectionContainer;
