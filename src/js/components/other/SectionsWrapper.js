/**
 * This component represents the wrapper for all the
 * sections of the web application. It contains all the
 * sections and ensures a sufficient gap is applied among them.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function SectionsWrapper({ children }) {
	return <div className="sections-wrapper">{children}</div>;
}

export default SectionsWrapper;
