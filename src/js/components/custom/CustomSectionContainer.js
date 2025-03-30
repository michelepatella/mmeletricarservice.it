import '../../../styles/components/custom/CustomSectionContainer.css';

/**
 * Custom Section Container
 * @param children
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
function CustomSectionContainer({children, id}) {
    return (

        <div
            id={id}
            className="section-container">
            {children}
        </div>

    );
}

export default CustomSectionContainer;
