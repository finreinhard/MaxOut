import {IconDefaultProps, IconProps} from "../model/IconProps";

const useIconProps = (iconProps: IconProps) => ({
    size: iconProps.size || IconDefaultProps.SIZE,
    color: iconProps.color || IconDefaultProps.COLOR,
});

export default useIconProps;
