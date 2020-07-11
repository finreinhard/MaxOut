import {CommonActionTypes, DispatchAction, GlobalStoreState} from "./types";
import skillsReducer from "./skills/reducer";
import setupReducer from "./setup/reducer";
import {logger} from "./middleware";

export const initialState = {
    skills: {},
    setup: {},
};

const isLoggerEnabled = false;

const mainReducer = (state: GlobalStoreState, action: DispatchAction<any>) => {
    const {skills, setup} = state;

    switch(action.type) {
        case CommonActionTypes.INITIAL_STATE:
            return action.payload;
        case CommonActionTypes.RESET:
            return initialState;
        default:
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
