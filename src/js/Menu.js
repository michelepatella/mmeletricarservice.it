import React from "react";
import '../css/Menu.css';
import {Anchor, Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";

/**
 * Definition of the sections of the web page
 * @type {[{id: string, title: string},{id: string, title: string},{id: string, title: string},{id: string, title: string},{id: string, title: string}]}
 */
const sections = [
    { id: 'home', title: 'Home'},
    { id: 'chi-siamo', title: 'Chi siamo', children: [{id: 'i-nostri-valori', title: 'I nostri valori'}] },
    { id: 'servizi', title: 'Servizi', children: [{id: 'altri-servizi', title: 'Altri servizi'}, {id: 'auto-usate', title: 'Auto usate'}] },
    { id: 'dove-siamo', title: 'Dove siamo'},
    { id: 'contatti', title: 'Contatti'}
];

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
 * Method to generate the menu items
 * @type {{onClick: function(): void, href: string, title: *, key: string}[]}
 */
const menuItems = sections.map((section, index) => ({
    key: `${index + 1}`,
    href: `#${section.id}`,
    title: section.title,
    children: section.children,
    onClick: () => scrollToSection(section.id)
}));

/**
 * Method to generate menu items for phone
 * @type {{onClick: function(): void, style: {fontFamily: string, paddingRight: string, fontSize: string, paddingTop: string, paddingLeft: string}, href: string, label: *, key: string}[]}
 */
const menuItemsForPhone = sections.map((section, index) => ({
    key: `${index + 1}`,
    href: `#${section.id}`,
    label: section.title,
    children: section.children,
    onClick: () => scrollToSection(section.id),
    style: { fontFamily: 'Poppins', fontSize: '16px', paddingTop: '15px', paddingLeft: '10px', paddingRight: '20px' }
}));

/**
 * This component represents the menu of the web page
 * @returns {Element}
 * @constructor
 */
function Menu() {
    return (
        <>
            {/* Menu for PC and tablet*/}
            <div className="menu-container">
                <Anchor
                    affix={false}
                    items={menuItems}
                />
            </div>

            {/* Menu for phone*/}
            <div className="menu-container-phone">
                <Dropdown
                    menu={{
                        items: menuItemsForPhone
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Menù
                            <DownOutlined/>
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </>
    )
}

export default Menu;