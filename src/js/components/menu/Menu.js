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
            {/* Menu for big screens (Anchor menu) */}
            <MenuBigScreen/>

            {/* Menu for small screens (Hamburger menu) */}
            <MenuSmallScreen/>
        </>
    );
}

export default Menu;