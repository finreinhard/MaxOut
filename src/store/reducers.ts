import {CommonActionTypes, DispatchAction, GlobalStoreState} from "./types";
import skillsReducer from "./skills/reducer";
import setupReducer from "./setup/reducer";
import {logger} from "./middleware";

const isLoggerEnabled = false;

const mainReducer = (state: GlobalStoreState, action: DispatchAction<any>) => {
    const {skills, setup} = state;

    if (action.type === CommonActionTypes.INITIAL_STATE) {
        return action.payload;
    }

    const currentState = {
        skills: skillsReducer(skills, action),
        setup: setupReducer(setup, action),
    }

    if (isLoggerEnabled) {
        logger(state, currentState, action);
    }

    return currentState;
}

export default mainReducer;
