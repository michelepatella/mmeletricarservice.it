import React, { useEffect, useState } from "react";
import '../css/Menu.css';
import { Anchor, Button, Drawer, Menu as AntMenu } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { motion, useAnimation } from "framer-motion";
import { CloseOutlined } from '@ant-design/icons';

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
 * Definition of the menu items for phone menu
 * @type {[{label: string, key: string},{label: string, key: string},{children: [{label: string, key: string},{label: string, key: string}], label: string, key: string},{label: string, key: string},{label: string, key: string}]}
 */
const menuItemsForPhone = [
    { key: 'home', label: 'Home' },
    { key: 'chi-siamo', label: 'Chi siamo',
        children: [{ key: 'nostri-valori', title: 'I nostri valori' }] },
    {
        key: 'servizi',
        label: 'Servizi', href: '#servizi',
        children: [
            { key: 'altri-servizi', label: 'Altri servizi'},
            { key: 'auto-usate', label: 'Auto usate'},
        ],
    },
    { key: 'dove-siamo', label: 'Dove siamo'},
    { key: 'contatti', label: 'Contatti'},
];

/**
 * Method to animate the transition to a section
 * @param sectionId
 */
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log('Scrolling to section:', sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Generation of menu items for PC and tablet
 * @type {{onClick: function(): void, children: *|undefined, href: string, title: *, key: string}[]}
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
            onClick: () => scrollToSection(child.id),
        }))
        : undefined,
    onClick: () => scrollToSection(section.id)
}));

/**
 * Generation of menu items for phone
 * @param data
 * @returns {*}
 */
const menuItemsGenerationForPhone = (data) => {
    return data.map(item => {

        if (item.children) {
            return (
                <AntMenu.SubMenu
                    key={item.key}
                    title={item.label}
                >
                    {menuItemsGenerationForPhone(item.children)}
                </AntMenu.SubMenu>
            );
        }

        return (
            <AntMenu.Item
                key={item.key}
                onClick={() => scrollToSection(item.key)}
            >
                {item.label}
            </AntMenu.Item>
        );
    });
};


/**
 * This component contains the menu of the web page
 * @returns {Element}
 * @constructor
 */
const Menu = () => {
    /**
     * Animation for the menu of PC and tablet
     * @type {AnimationControls}
     */
    const controls = useAnimation();
    useEffect(() => {
        controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    }, [controls]);

    // Animation for the menu items in mobile
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

    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    };

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
                    {/* Motion Div applied to animate menu items on the mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AntMenu
                            mode="vertical"
                            items={menuItemsForPhone}
                        />
                    </motion.div>
                </Drawer>
            </div>
        </>
    );
}

export default Menu;