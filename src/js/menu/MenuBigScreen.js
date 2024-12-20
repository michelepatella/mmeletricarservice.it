import {motion, useAnimation} from "framer-motion";
import {Anchor} from "antd";
import React, {useEffect} from "react";
import {SECTIONS} from "../utility/constants";

/**
 * This component contains the menu for pc and tablet
 * @returns {Element}
 * @constructor
 */
function MenuBigScreen(){

    /**
     * Method to animate the transition to a section
     * @param sectionId
     */
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    /**
     * Animation of the menu
     * @type {AnimationControls}
     */
    const menuItemControls = useAnimation();
    useEffect(() => {
        menuItemControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    }, [menuItemControls]);

    /**
     * Generation of menu items
     */
    const menuItemsGeneration = SECTIONS.map((section, index) => ({
        key: `section-${index + 1}`,
        href: `#${section.id}`,
        title: section.title,
        children: section.children
            ? section.children.map((child, childIndex) => ({
                key: `section-${index + 1}-child-${childIndex + 1}`,
                href: `#${child.id}`,
                title: child.title,
                onClick: () => scrollToSection(child.id, false),
            }))
            : undefined,
        onClick: () => scrollToSection(section.id, false)
    }));

    return (
        <div className="menu-container">
            <motion.div
                className="menu-content"
                animate={menuItemControls}
                initial={{opacity: 0, x: -100}}
            >
                <Anchor
                    affix={false}
                    items={menuItemsGeneration}
                />
            </motion.div>
        </div>
    );
}

export default MenuBigScreen;