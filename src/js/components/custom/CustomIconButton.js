/**
 * Custom Icon Button
 * @param props
 * @returns {Element}
 * @constructor
 */
function CustomIconButton(props) {
    return (

        <button
            className="custom-icon-button"
            onClick={props.onClick}>

            {/* Icon */}
            <img
                src={props.src}
                alt="button-icon" />

        </button>

    );
}

export default CustomIconButton;