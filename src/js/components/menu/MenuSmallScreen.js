import { Button, Drawer, Menu as AntMenu } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import { SECTIONS } from "../../utility/constants";
import { scrollToSection } from "../../utility/scrollToSection";

/**
 * This component represents the menu for small screens of the website
 * @returns {Element}
 * @constructor
 */
function MenuSmallScreen() {

    const [visible, setVisible] = useState(false);
    const [section, setSection] = useState('home');

    /**
     * Method to keep track of the section's changes and
     * determine the current section to underline its name in the menu
     */
    useEffect(() => {
        const handleScroll = () => {
            let currentSection = '';
            let closestDistance = Infinity;

            //determine the current section (check for each section in the website)
            SECTIONS.forEach((sec) => {

                //get each section id
                const element = document.getElementById(sec.id);

                //check if the section is not null
                if (element) {

                    //get the position's information of the section
                    const rect = element.getBoundingClientRect();

                    //determine the absolute distance of the section to the top
                    const distanceToTop = Math.abs(rect.top);

                    //check the visibility of the section
                    // (if at least one of these two conditions is true that's means
                    // that the section is visible)
                    //1. the top of the section must be in the window
                    //2. the section is not outside the viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        //3. find the closest section to the top
                        if (distanceToTop < closestDistance) {
                            closestDistance = distanceToTop;
                            currentSection = sec.id;
                        }
                    }
                }

                //do the same even for children sections
                if (sec.children) {
                    sec.children.forEach((child) => {

                        const childElement = document.getElementById(child.id);

                        if (childElement) {

                            const childRect = childElement.getBoundingClientRect();
                            const distanceToTop = Math.abs(childRect.top);

                            if (childRect.top < window.innerHeight && childRect.bottom > 0) {
                                if (distanceToTop < closestDistance) {
                                    closestDistance = distanceToTop;
                                    currentSection = child.id;
                                }
                            }
                        }
                    });
                }
            });

            //at the end, set the current section found
            setSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
        path: section.id,
        onClick: () => {
            scrollToSection(section.id, setVisible);
            setVisible(false);
        },
        children: section.children
            ? section.children.map((child, childIndex) => ({
                key: `section-${index + 1}-child-${childIndex + 1}`,
                label: child.title,
                path: child.id,
                onClick: () => {
                    scrollToSection(child.id, setVisible);
                    setVisible(false);
                }
            }))
            : undefined,
    }));

    return (

        <>
            {/* Global container */}
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

                {/* Menu appears to the right (Drawer) */}
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
                                    style={{
                                        ...generateAnimationStyles(index),
                                        textDecoration: section === menuItem.path ? "underline" : "none",
                                        fontWeight: section === menuItem.path ? "bold" : "normal",}}
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
                                                textDecoration: section === child.path ? "underline" : "none",
                                                fontWeight: section === child.path ? "bold" : "normal",
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
        </>
    );
}

export default MenuSmallScreen;