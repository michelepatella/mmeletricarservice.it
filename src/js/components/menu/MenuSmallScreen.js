import React from "react";
import { Button, Drawer, Menu as AntMenu } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useMenu } from "../../hooks/useMenu";
import {
  handleParentStyle,
  handleChildrenStyle,
  handleHamburgerButtonStyle,
} from "../../logic/menuStyleHandler";

/**
 * Menu Small Screen (Hamburger Menu)
 * @returns {React.JSX.Element}
 * @constructor
 */
function MenuSmallScreen() {
  const { menuItems, section, visible, toggleDrawer } = useMenu();

  return (
    <div className="menu-container-small">
      {/* Hamburger button (to open the hamburger menu) */}
      <Button
        type="primary"
        className="hamburger-button"
        shape="circle"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
        style={handleHamburgerButtonStyle(visible)}
      />

      {/* Drawer for containing the menu */}
      <Drawer
        width="100vw"
        height="100vh"
        placement="right"
        closable
        closeIcon={<CloseOutlined className="close-outline" />}
        onClose={toggleDrawer}
        open={visible}
      >
        {/* Menu */}
        <AntMenu mode="inline">
          {/* Parent items generation*/}
          {menuItems?.map((menuItem) => (
            <React.Fragment key={menuItem?.key}>
              <AntMenu.Item
                key={menuItem?.key}
                onClick={menuItem?.onClick}
                style={handleParentStyle(section, menuItem)}
              >
                {menuItem?.title}
              </AntMenu.Item>

              {/* Children items generation*/}
              {menuItem?.children &&
                menuItem?.children?.map((child) => (
                  <AntMenu.Item
                    key={child?.key}
                    className="ant-menu-item-child"
                    onClick={child?.onClick}
                    style={handleChildrenStyle(section, child)}
                  >
                    {child?.title}
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
