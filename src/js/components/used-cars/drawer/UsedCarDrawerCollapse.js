import {USED_CAR_ALL_INFO} from "../../../utils/const";
import {Collapse} from "antd";
import React from "react";

/**
 * Used Car Drawer Collapse
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarDrawerCollapse(props) {
    return (

        <>
            {/* Collapse with all used car information */}
            <Collapse
                className="used-car-drawer-collapse"
                items={USED_CAR_ALL_INFO.map(({ key, label, children }) => ({
                    key,
                    label,
                    children: (
                        //car information (title + value)
                        <ul className="collapse-outer-list">
                            {children.map((item) => (
                                <ul
                                    key={item.name}
                                    className="collapse-inner-list">
                                    {/* Title */}
                                    <span dangerouslySetInnerHTML={{__html: item.title}}/>: {" "}

                                    {/* Value */}
                                    <span>{props.usedCarInfo[item.name]}</span>
                                </ul>
                            ))}
                        </ul>
                    ),
                }))} />
        </>

    );
}

export default UsedCarDrawerCollapse;