import React from 'react';
import Svg, {Path} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const CheckIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    return (
        <Svg height={size} width={size} viewBox="0 0 75 56">
            <Path
                fill={color}
                d="M74.34,3.87,71.14.66a2.27,2.27,0,0,0-3.2,0L24.69,43.91,7.07,26.29a2.27,2.27,0,0,0-3.2,0l-3.2,3.2a2.27,2.27,0,0,0,0,3.2L19.88,51.92l3.2,3.2a2.27,2.27,0,0,0,3.2,0l3.2-3.2L74.34,7.07A2.27,2.27,0,0,0,74.34,3.87Z"
            />
        </Svg>
    );
};

export default CheckIcon;
