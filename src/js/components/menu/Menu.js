import MenuSmallScreen from "./MenuSmallScreen";
import MenuBigScreen from "./MenuBigScreen";
import '../../../styles/components/Menu.css';

/**
 * Menu
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
    return (
        <>
            {/* Menu for PC and tablet (big screens) */}
            <MenuBigScreen/>

            {/* Menu for phone (small screens) */}
            <MenuSmallScreen/>
        </>
    );
}

export default Menu;