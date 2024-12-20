import '../../css/other/Menu.css';
import MenuForPhone from "./MenuForPhone";
import MenuForPcAndTablet from "./MenuForPcAndTablet";

/**
 * This component contains the menu of the web page
 * @returns {Element}
 * @constructor
 */
const Menu = () => {
    return (
        <>
            {/* Menu for PC and tablet*/}
            <MenuForPcAndTablet></MenuForPcAndTablet>

            {/* Menu for phone*/}
            <MenuForPhone></MenuForPhone>
        </>
    );
}

export default Menu;