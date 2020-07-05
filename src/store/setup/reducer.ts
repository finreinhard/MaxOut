import {SetupActionType, SetupState} from "./types";
import {DispatchAction} from "../types";

const setupReducer = (state: SetupState, action: DispatchAction<any>) => {
    switch (action.type) {
        case SetupActionType.ACCEPT_LEGAL_STUFF:
            return {
                ...state,
                accepted: action.payload.accepted,
            };
        case SetupActionType.COMPLETE_SETUP:
            return {
                ...state,
                completed: action.payload.completed,
            };
        default:
            return state;
    }
};

export default setupReducer;
