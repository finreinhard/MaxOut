import {CommonActionTypes, DispatchAction, GlobalStoreState} from "./types";
import skillsReducer from "./skills/reducers";
import {logger} from "./middleware";

const isLoggerEnabled = false;

const mainReducer = (state: GlobalStoreState, action: DispatchAction<any>) => {
    const {skills} = state;

    if (action.type === CommonActionTypes.INITIAL_STATE) {
        return action.payload;
    }

    const currentState = {
        skills: skillsReducer(skills, action),
    }

    if (isLoggerEnabled) {
        logger(state, currentState, action);
    }

    return currentState;
}

export default mainReducer;
