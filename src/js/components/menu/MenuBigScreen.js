import React from 'react';
import { Anchor } from 'antd';
import { motion } from 'framer-motion';
import {useMenu} from "../../hooks/useMenu";

/**
 * Menu Big Screen
 * @returns {React.JSX.Element}
 * @constructor
 */
function MenuBigScreen() {

    //generate the animation of the big menu and generate its items
    const { menuItems, menuItemControls, section } = useMenu();

    return (
        <div className='menu-container-big'>

            {/* Motion division for the menu animation */}
            <motion.div
                className='menu-content'
                animate={menuItemControls}
                initial={{
                    opacity: 0,
                    x: -100
                }}>

                {/* Menu */}
                <Anchor
                    affix={false}
                    items={menuItems}
                    offsetTop={50}
                    getCurrentAnchor={() => '#' + section} />

            </motion.div>

        </div>
    );
}

export default MenuBigScreen;