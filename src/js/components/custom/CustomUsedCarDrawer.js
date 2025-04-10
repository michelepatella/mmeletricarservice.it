import {Drawer} from "antd";

/**
 * Custom Used Car Drawer
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CustomUsedCarDrawer(props) {
    return (

        <Drawer
            className="custom-used-car-drawer"
            onClose={() => props.setIsDrawerOpen(false)}
            open={() => props.setIsDrawerOpen(true)}>
        </Drawer>

    );
}

export default CustomUsedCarDrawer;