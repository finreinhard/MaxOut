import React from 'react';
import Svg, {Path} from "react-native-svg";
import {IconProps} from "../../model/IconProps";
import useIconProps from "../../hooks/useIconProps";

const PrivacyIcon = (props: IconProps) => {
    const {size, color} = useIconProps(props);

    return (
        <Svg height={size} width={size} viewBox="0 0 50 61">
            <Path
                fill={color}
                d="M38,17V13a13,13,0,0,0-26,0v4A12,12,0,0,0,0,29V49A12,12,0,0,0,12,61H38A12,12,0,0,0,50,49V29A12,12,0,0,0,38,17ZM15,12a9,9,0,0,1,9-9h2a9,9,0,0,1,9,9v5H15ZM25,45a6,6,0,1,1,6-6A6,6,0,0,1,25,45Z"
            />
        </Svg>
    );
};

export default PrivacyIcon;
