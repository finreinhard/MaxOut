export interface SkillsMap {
    [id: string]: SkillModel;
}

export interface SkillModel {
    title: string;
    sets: SkillSetModel[];
}

export interface SkillSetModel {
    id: string;
    timestamp: number;
    score: number;
}

export type SkillsState = SkillsMap;

export enum SkillsActionType {
    CREATE_SKILL = 'SKILLS_CREATE',
    DELETE_SKILL = 'SKILLS_DELETE',
}
