import {SkillsActionType, SkillsState} from "./types";
import {DispatchAction} from "../types";

const skillsReducer = (state: SkillsState, action: DispatchAction<any>) => {
    switch (action.type) {
        case SkillsActionType.CREATE_SKILL:
            return {
                ...state,
                [action.payload.id]: action.payload.skill,
            };
        case SkillsActionType.DELETE_SKILL:
            const newState = {...state};
            delete newState[action.payload.id]
            return newState;
        case SkillsActionType.CREATE_SET:
            return {
                ...state,
                [action.payload.skillId]: {
                    ...state[action.payload.skillId],
                    sets: [
                        ...state[action.payload.skillId].sets,
                        action.payload.set,
                    ],
                },
            };
        default:
            return state;
    }
}

export default skillsReducer;
