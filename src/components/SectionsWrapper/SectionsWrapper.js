import { SECTIONS_WRAPPER_CLASS_NAME } from "./const";

/**
 * This component represents the wrapper for all the
 * sections of the web application. It contains all the
 * sections and ensures a sufficient gap is applied among them.
 * @param children — The sections to be displayed into the wrapper.
 * @returns {JSX.Element} — The section wrapper component.
 */
function SectionsWrapper({ children }) {
	return (
		<div className={SECTIONS_WRAPPER_CLASS_NAME}>
			{children}
		</div>
	);
}

export default SectionsWrapper;
