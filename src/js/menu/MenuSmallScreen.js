import { Button, Drawer, Menu as AntMenu } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { SECTIONS } from "../utility/constants";
import { scrollToSection } from "../utility/scrollToSection";

/**
 * This component contains the menu for phone
 * @returns {Element}
 * @constructor
 */
function MenuSmallScreen() {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    /**
     * Generate styles for animation delay
     * @param {number} index
     * @returns {React.CSSProperties}
     */
    const generateAnimationStyles = (index) => ({
        animation: "fadeInUp 0.5s forwards",
        animationDelay: `${0.2 + index * 0.1}s`,
        opacity: 0,
        transform: "translateY(-20px)",
    });

    /**
     * Generation of menu items
     */
    const menuItemsGeneration = SECTIONS.map((section, index) => ({
        key: `section-${index + 1}`,
        label: section.title,
        onClick: () => {
            scrollToSection(section.id, setVisible);
            setVisible(false);
        },
        children: section.children
            ? section.children.map((child, childIndex) => ({
                key: `section-${index + 1}-child-${childIndex + 1}`,
                label: child.title,
                onClick: () => {
                    scrollToSection(child.id, setVisible);
                    setVisible(false);
                },
            }))
            : undefined,
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
                open={visible}
                width="100vw"
                height="100vh"
                closeIcon={<CloseOutlined style={{ fontSize: "30px", color: "black", paddingTop: 20 }} />}
            >
                {/* Menu structure */}
                <AntMenu mode="inline" style={{ borderRight: 0 }}>
                    {menuItemsGeneration.map((menuItem, index) => (
                        <React.Fragment key={menuItem.key}>
                            {/* Parent Item */}
                            <AntMenu.Item
                                key={menuItem.key}
                                onClick={menuItem.onClick}
                                style={generateAnimationStyles(index)}
                            >
                                {menuItem.label}
                            </AntMenu.Item>

                            {/* Children Items (if any) */}
                            {menuItem.children &&
                                menuItem.children.map((child, childIndex) => (
                                    <AntMenu.Item
                                        key={child.key}
                                        onClick={child.onClick}
                                        className="ant-menu-item-child"
                                        style={{
                                            ...generateAnimationStyles(index + childIndex + 1),
                                            paddingLeft: "60px"
                                        }}
                                    >
                                        {child.label}
                                    </AntMenu.Item>
                                ))}
                        </React.Fragment>
                    ))}
                </AntMenu>
            </Drawer>
        </div>
    );
}

export default MenuSmallScreen;