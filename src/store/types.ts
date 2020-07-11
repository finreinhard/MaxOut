import {SkillsMap} from './skills/types';
import {SetupState} from "./setup/types";

export interface GlobalStoreState {
    skills: SkillsMap;
    setup: SetupState;
}

export interface GlobalStoreContextProps {
    state: GlobalStoreState;
    dispatch: (action: DispatchAction<any>) => void;
}

export interface DispatchAction<T> {
    type: string;
    payload?: T;
}

export enum CommonActionTypes {
    INITIAL_STATE = 'COMMON_INITIAL_STATE',
    RESET = 'COMMON_RESET',
}
