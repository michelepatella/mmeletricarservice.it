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
                alt="button-icon"
                loading="lazy" />

        </button>

    );
}

export default CustomIconButton;