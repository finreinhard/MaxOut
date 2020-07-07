import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const BellIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    // .b{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:8px;
    const strokeStyle = {
        fill: 'none',
        stroke: color,
        strokeMiterlimit: 10,
        strokeWidth: 8,
    };

    return (
        <Svg height={size} width={size} viewBox="0 0 92.97 92.86">
            <Path
                fill={color}
                d="M46.49,11.86h0A30.5,30.5,0,0,1,77,42.36v38.5a0,0,0,0,1,0,0H16a0,0,0,0,1,0,0V42.36A30.5,30.5,0,0,1,46.49,11.86Z"
            />
            <Path
                fill={color}
                d="M46,92.86a9,9,0,0,0,9-9H37A9,9,0,0,0,46,92.86Z"
            />
            <Rect
                fill={color}
                x={38.99}
                y={4.86}
                width={14}
                height={14}
                rx={5.98}
                ry={5.98}
            />
            <Path
                {...strokeStyle}
                d="M4,32.86a32.68,32.68,0,0,1,24-29"
            />
            <Path
                {...strokeStyle}
                d="M89,32.86a32.68,32.68,0,0,0-24-29"
            />
        </Svg>
    );
};

export default BellIcon;
