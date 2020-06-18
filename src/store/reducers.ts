import {DispatchAction, GlobalStoreState} from "../model/GlobalStoreModel";
import skillsReducer from "./skills/reducers";
import {logger} from "./middleware";

const isLoggerEnabled = true;

const mainReducer = (state: GlobalStoreState, action: DispatchAction<any>) => {
    const {skills} = state;

    const currentState = {
        skills: skillsReducer(skills, action),
    }

    if (isLoggerEnabled) {
        logger(state, currentState, action);
    }

    return currentState;
}

export default mainReducer;
