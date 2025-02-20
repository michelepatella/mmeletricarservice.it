import '../../styles/other/Menu.css';
import MenuSmallScreen from "./MenuSmallScreen";
import MenuBigScreen from "./MenuBigScreen";

/**
 * This component contains the menu of the web page
 * @returns {Element}
 * @constructor
 */
const Menu = () => {
    return (
        <>
            {/* Menu for PC and tablet*/}
            <MenuBigScreen></MenuBigScreen>

            {/* Menu for phone*/}
            <MenuSmallScreen></MenuSmallScreen>
        </>
    );
}

export default Menu;