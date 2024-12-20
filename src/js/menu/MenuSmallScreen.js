import { Button, Drawer, Menu as AntMenu } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { SECTIONS } from "../utility/constants";

/**
 * This component contains the menu for phone
 * @returns {Element}
 * @constructor
 */
function MenuSmallScreen() {
    const [visible, setVisible] = useState(false);

    /**
     * Method to animate the transition to a section
     * @param sectionId
     */
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setVisible(false);
    };

    const toggleDrawer = () => {
        setVisible(!visible);
    };

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
                onClick: () => scrollToSection(child.id),
            }))
            : undefined,
        onClick: () => scrollToSection(section.id),
    }));

    return (
        <div className="menu-container-phone">
            {/* Hamburger button */}
            <Button
                type="primary"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={toggleDrawer}
                className="hamburger-button"
                style={{ display: visible ? "none" : "flex" }}
            />

            {/* Menu appears to the right */}
            <Drawer
                placement="right"
                closable={true}
                onClose={toggleDrawer}
                visible={visible}
                width="100vw"
                height="100vh"
                closeIcon={<CloseOutlined style={{ fontSize: "30px", color: "black" }} />}
            >
                <AntMenu mode="inline" items={menuItemsGeneration} />
            </Drawer>
        </div>
    );
}

export default MenuSmallScreen;