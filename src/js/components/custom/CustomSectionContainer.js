/**
 * Custom Section Container
 * @param children
 * @param id
 * @param custStyle
 * @returns {JSX.Element}
 * @constructor
 */
function CustomSectionContainer({children, id, custStyle}) {

    //combine static and dynamic style
    const style = {...custStyle};

    return (

        <div
            id={id}
            className="section-container"
            style={style}>
            {children}
        </div>

    );
}

export default CustomSectionContainer;
