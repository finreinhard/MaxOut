import {SkillsMap} from "./SkillModel";

export interface GlobalStoreState {
    skills: SkillsMap;
}

export interface GlobalStoreContextProps {
    state: GlobalStoreState;
    dispatch: (action: DispatchAction<any>) => void;
}

export interface DispatchAction<T> {
    type: string;
    payload: T;
}
