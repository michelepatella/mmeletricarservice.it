import React from "react";
import {Collapse} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {USED_CAR_ALL_INFO} from "../../../utils/const";

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
                accordion
                expandIcon={({ isActive }) =>
                    isActive ? <MinusOutlined/> : <PlusOutlined/>
                }
                items={USED_CAR_ALL_INFO.map(({ key, label, children }) => ({
                    key,
                    label,
                    children: (
                        //car information (title + value)
                        <li className="used-car-drawer-collapse-outer-list">
                            {children.map((item) => (
                                <ul
                                    key={item.name}
                                    className="used-car-drawer-collapse-inner-list">

                                    {/* Title */}
                                    <span dangerouslySetInnerHTML={{__html: item.title}} />

                                    {/* Value */}
                                    <div>
                                        <span>{props.usedCarInfo[item.name] || '-'}</span>
                                    </div>

                                </ul>
                            ))}
                        </li>
                    )
                }))} />
        </>

    );
}

export default UsedCarDrawerCollapse;