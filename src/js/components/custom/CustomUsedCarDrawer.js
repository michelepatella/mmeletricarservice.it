import {Drawer} from "antd";
import {onUsedCarDrawerClose, onCustomUsedCarDrawerOpen} from "../../logic/UsedCarDrawerHandler";

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
            onClose={() => onUsedCarDrawerClose(props.setIsDrawerOpen)}
            open={() => onCustomUsedCarDrawerOpen(props.setIsDrawerOpen)}>
        </Drawer>

    );
}

export default CustomUsedCarDrawer;