import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const DeleteIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    return (
        <Svg height={size} width={size} viewBox="0 0 74 104">
            <Path
                fill={color}
                d="M74,19H56a19,19,0,0,0-38,0H0v6H5V92a12,12,0,0,0,12,12H57A12,12,0,0,0,69,92V25h5ZM24,89a3,3,0,0,1-6,0V39a3,3,0,0,1,6,0Zm16,0a3,3,0,0,1-6,0V39a3,3,0,0,1,6,0Zm16,0a3,3,0,0,1-6,0V39a3,3,0,0,1,6,0ZM37,6A13,13,0,0,1,50,19H24A13,13,0,0,1,37,6Z"
            />
        </Svg>
    );
};

export default DeleteIcon;
