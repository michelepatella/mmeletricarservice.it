import React from 'react';
import { Button, Drawer, Menu as AntMenu } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useMenu } from "../../hooks/useMenu";
import {handleChildrenStyle, handleHamburgerButtonStyle, handleParentItemStyle} from "../../logic/styleHandler";

/**
 * Menu Small Screen
 * @returns {React.JSX.Element}
 * @constructor
 */
function MenuSmallScreen() {

    const {
        menuItems,
        section,
        visible,
        toggleDrawer
    } = useMenu();

    return (

        <div className='menu-container-small'>

            {/* Hamburger button (to open the phone menu) */}
            <Button
                type='primary'
                className='hamburger-button'
                shape='circle'
                icon={<MenuOutlined/>}
                style={handleHamburgerButtonStyle(visible)}
                onClick={toggleDrawer}/>


            {/* Drawer for containing the menu */}
            <Drawer
                width='100vw'
                height='100vh'
                placement='right'
                closable
                closeIcon={<CloseOutlined className="close-outline"/>}
                onClose={toggleDrawer}
                open={visible}>

                {/* Menu */}
                <AntMenu mode='inline'>

                    {/* Parent items generation*/}
                    {menuItems.map((menuItem) => (
                        <React.Fragment key={menuItem.key}>
                            <AntMenu.Item
                                key={menuItem.key}
                                style={handleParentItemStyle(section, menuItem)}
                                onClick={menuItem.onClick}>
                                {menuItem.title}
                            </AntMenu.Item>

                            {/* Children items generation*/}
                            {menuItem.children &&
                                menuItem.children.map((child) => (
                                    <AntMenu.Item
                                        key={child.key}
                                        className='ant-menu-item-child'
                                        style={handleChildrenStyle(section, child)}
                                        onClick={child.onClick}>
                                        {child.title}
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