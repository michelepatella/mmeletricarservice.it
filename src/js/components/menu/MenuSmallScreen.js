import React from 'react';
import { Button, Drawer, Menu as AntMenu } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import {useMenu} from "../../hooks/useMenu";

/**
 * This component represents the menu for small screens
 * @returns {React.JSX.Element}
 * @constructor
 */
function MenuSmallScreen() {

    const {
        menuItems,
        menuItemControls,
        section,
        visible,
        toggleDrawer
    } = useMenu();

    return (
        <div className='menu-container-phone'>

            {/* Hamburger button (to open the phone menu) */}
            <Button
                type='primary'
                shape='circle'
                icon={<MenuOutlined />}
                onClick={toggleDrawer}
                className='hamburger-button'
                style={{
                    display: visible ? 'none' : 'flex'
                }}
            />

            {/* Drawer for containing the menu */}
            <Drawer
                placement='right'
                closable
                onClose={toggleDrawer}
                open={visible}
                width='100vw'
                height='100vh'
                closeIcon={
                    <CloseOutlined
                        style={{
                            fontSize: '30px',
                            color: 'black',
                            paddingTop: 20
                        }}
                    />
                }
            >
                {/* Menu */}
                <AntMenu mode='inline'>

                    {/* Parent items generation*/}
                    {menuItems.map((menuItem) => (
                        <React.Fragment key={menuItem.key}>
                            <AntMenu.Item
                                key={menuItem.key}
                                onClick={menuItem.onClick}
                                style={{
                                    textDecoration:
                                        section === menuItem.href.replace('#', '') ?
                                            'underline' : 'none',
                                    fontWeight:
                                        section === menuItem.href.replace('#', '') ?
                                            'bold' : 'normal',
                                }}
                            >
                                {menuItem.title}
                            </AntMenu.Item>

                            {/* Children items generation*/}
                            {menuItem.children &&
                                menuItem.children.map((child) => (
                                    <AntMenu.Item
                                        key={child.key}
                                        onClick={child.onClick}
                                        className='ant-menu-item-child'
                                        style={{
                                            textDecoration:
                                                section === child.href.replace('#', '') ?
                                                    'underline' : 'none',
                                            fontWeight:
                                                section === child.href.replace('#', '') ?
                                                    'bold' : 'normal',
                                            paddingLeft: '60px',
                                        }}
                                    >
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