import {Button, Drawer, Menu as AntMenu} from "antd";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
import {motion, useAnimation} from "framer-motion";
import React, {useEffect, useState} from "react";
import {SECTIONS} from "../constants";

/**
 * This component contains the menu for phone
 * @returns {Element}
 * @constructor
 */
function MenuForPhone(){

    const [visible, setVisible] = useState(false);

    /**
     * Method to animate the transition to a section
     * @param sectionId
     */
    const scrollToSection = (sectionId, isPhoneMenu, setVisible) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        if (isPhoneMenu) {
            setVisible(false);
        }
    };

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    /**
     * Animation for the menu item for phone
     * @type {AnimationControls}
     */
    const menuItemControls = useAnimation();
    useEffect(() => {
        menuItemControls.start({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.2,
            },
        });
    }, [menuItemControls]);

    /**
     * Generation of menu items
     */
    const menuItemsGeneration = SECTIONS.map((section, index) => ({
        key: `section-${index + 1}`,
        href: `#${section.id}`,
        label: section.title,
        children: section.children
            ? section.children.map((child, childIndex) => ({
                key: `section-${index + 1}-child-${childIndex + 1}`,
                href: `#${child.id}`,
                label: child.title,
                onClick: () => scrollToSection(child.id, true, setVisible),
            }))
            : undefined,
        onClick: () => scrollToSection(section.id, true, setVisible)
    }));

    return (
        <div className="menu-container-phone">
            {/* Hamburger button */}
            <Button
                type="primary"
                shape="circle"
                icon={<MenuOutlined/>}
                onClick={toggleDrawer}
                className="hamburger-button"
                style={{display: visible ? 'none' : 'flex'}}
            />

            {/* Menu appears to the right */}
            <Drawer
                placement="right"
                closable={true}
                onClose={toggleDrawer}
                visible={visible}
                width="100vw"
                height="100vh"
                closeIcon={<CloseOutlined style={{fontSize: '30px', color: 'black'}}/>}
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <AntMenu
                        mode="inline"
                        items={menuItemsGeneration}
                    />
                </motion.div>
            </Drawer>
        </div>
    );
}

export default MenuForPhone;