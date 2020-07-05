import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const TextIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    return (
        <Svg height={size} width={size} viewBox="0 0 119 93">
            <Rect
                fill={color}
                width={119}
                height={15}
                rx={4}
                ry={4}
            />
            <Rect
                fill={color}
                y={26}
                width={119}
                height={15}
                rx={4}
                ry={4}
            />
            <Rect
                fill={color}
                y={52}
                width={119}
                height={15}
                rx={4}
                ry={4}
            />
            <Rect
                fill={color}
                y={78}
                width={78}
                height={15}
                rx={4}
                ry={4}
            />
        </Svg>
    );
};

export default TextIcon;
