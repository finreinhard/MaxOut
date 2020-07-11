import {useGlobalStore} from "../index";
import * as actions from './actions';
import bindActions from "../bindActions";

interface CommonHook {
    resetData: () => void;
}

const useCommon = (): CommonHook => {
    const {dispatch} = useGlobalStore();

    const {resetData} = actions;

    const commonActions = bindActions(
        {
            resetData,
        },
        dispatch,
    );

    return {
        ...commonActions,
    } as any as CommonHook;
};

export default useCommon;
