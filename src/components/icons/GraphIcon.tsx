import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const GraphIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    return (
        <Svg height={size} width={size} viewBox="0 0 110 87">
            <Rect
                fill={color}
                y={48}
                width={30}
                height={39}
                rx={4}
                ry={4}
            />
            <Rect
                fill={color}
                x={40}
                y={23}
                width={30}
                height={64}
                rx={4}
                ry={4}
            />
            <Rect
                fill={color}
                x={80}
                width={30}
                height={87}
                rx={4}
                ry={4}
            />
        </Svg>
    );
};

export default GraphIcon;
