import {useGlobalStore} from "../index";
import * as actions from './actions';
import bindActions from "../bindActions";

interface SetupHook {
    accepted: boolean;
    completed: boolean;
    completeSetup: () => void;
    acceptLegalStuff: (accepted: boolean) => void;
}

const useSetup = (): SetupHook => {
    const {state, dispatch} = useGlobalStore();
    const {setup} = state;

    const {completeSetup, acceptLegalStuff} = actions;

    const setupActions = bindActions(
        {
            completeSetup,
            acceptLegalStuff,
        },
        dispatch,
    );

    return {
        ...setup,
        ...setupActions
    } as SetupHook;
};

export default useSetup;
