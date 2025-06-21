import React from "react";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { USED_CAR_ALL_INFO } from "../../../utils/const";

/**
 * This component represents a collapse used into the
 * used car drawer to contain all the information of a specific
 * category. The user can expand the collapse corresponding to a
 * category (e.g., 'Motore e Prestazioni') to show all the information contained.
 * @returns {React.JSX.Element}
 * @constructor
 */
function UsedCarDrawerCollapse(props) {
  return (
    <Collapse
      className="used-car-drawer-collapse"
      accordion
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
      // Add all the items to the collapse
      items={USED_CAR_ALL_INFO?.map(({ key, label, children }) => ({
        key,
        label,
        children: (
          // Show all the information belonging
          // to a specific category via list
          <li className="used-car-drawer-collapse-outer-list">
            {children?.map((item) => (
              <ul
                key={item?.name}
                className="used-car-drawer-collapse-inner-list"
              >
                {/* Information name */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: item?.title,
                  }}
                />

                {/* Information textual value */}
                <div>
                  <span>{props.usedCarInfo?.[item?.name] || "-"}</span>
                </div>
              </ul>
            ))}
          </li>
        ),
      }))}
    />
  );
}

export default UsedCarDrawerCollapse;
