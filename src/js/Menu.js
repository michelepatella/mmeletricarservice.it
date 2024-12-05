import React, { useEffect, useState } from "react";
import '../css/Menu.css';
import { Anchor, Button, Drawer, Menu as AntMenu } from "antd";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, useAnimation } from "framer-motion";

/**
 * Definition of the sections of the web page
 * @type {[{id: string, title: string},{id: string, title: string},{id: string, title: string},{id: string, title: string},{id: string, title: string}]}
 */
const sections = [
    { id: 'home', title: 'Home' },
    { id: 'chi-siamo', title: 'Chi siamo', children: [{ id: 'nostri-valori', title: 'I nostri valori' }] },
    { id: 'servizi', title: 'Servizi', children: [{ id: 'altri-servizi', title: 'Altri servizi' }, { id: 'auto-usate', title: 'Auto usate' }] },
    { id: 'dove-siamo', title: 'Dove siamo' },
    { id: 'contatti', title: 'Contatti' }
];

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

/**
 * Generation of menu items for PC and tablet
 */
const menuItemsGenerationForPCAndTablet = sections.map((section, index) => ({
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

/**
 * This component contains the menu of the web page
 * @returns {Element}
 * @constructor
 */
const Menu = () => {
    const [visible, setVisible] = useState(false);

    /**
     * Animation for the menu of PC and tablet
     * @type {AnimationControls}
     */
    const controls = useAnimation();
    useEffect(() => {
        controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    }, [controls]);

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

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    /**
     * Generate menu items for phone and pass setVisible
     */
    const menuItemsGenerationForPhone = sections.map((section, index) => ({
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
        <>
            {/* Menu for PC and tablet*/}
            <div className="menu-container">
                <motion.div
                    className="menu-content"
                    animate={controls}
                    initial={{ opacity: 0, x: -100 }}
                >
                    <Anchor
                        affix={false}
                        items={menuItemsGenerationForPCAndTablet}
                    />
                </motion.div>
            </div>

            {/* Menu for phone*/}
            <div className="menu-container-phone">
                {/* Hamburger button */}
                <Button
                    type="primary"
                    shape="circle"
                    icon={<MenuOutlined />}
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
                    width={250}
                    closeIcon={<CloseOutlined style={{ fontSize: '24px', color: 'black' }} />}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AntMenu
                            mode="inline"
                            items={menuItemsGenerationForPhone}
                        />
                    </motion.div>
                </Drawer>
            </div>
        </>
    );
}

export default Menu;