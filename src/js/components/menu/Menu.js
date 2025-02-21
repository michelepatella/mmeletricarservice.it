import '../../../styles/components/utility/Menu.css';
import MenuSmallScreen from "./MenuSmallScreen";
import MenuBigScreen from "./MenuBigScreen";

/**
 * This component represents the menu of the whole website
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
    return (
        <>
            {/* Menu for PC and tablet (big screens) */}
            <MenuBigScreen></MenuBigScreen>

            {/* Menu for phone (small screens) */}
            <MenuSmallScreen></MenuSmallScreen>
        </>
    );
}

export default Menu;