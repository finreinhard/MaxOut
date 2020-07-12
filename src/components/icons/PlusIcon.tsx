import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const PlusIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    return (
        <Svg height={size} width={size} viewBox="0 0 112 112">
            <Rect
                fill={color}
                y={50}
                width={112}
                height={12}
                rx={4}
                ry={4}
            />
            <Rect
                fill={color}
                x={49}
                width={12}
                height={112}
                rx={4}
                ry={4}
            />
        </Svg>
    );
};

export default PlusIcon;
