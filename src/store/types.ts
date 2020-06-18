import {SkillsMap} from './skills/types';

export interface GlobalStoreState {
    skills: SkillsMap;
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
}
