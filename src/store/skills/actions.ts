import {SkillsActionType, SkillSetModel} from "./types";

export const createSkill = (id: string, title: string) => ({
    type: SkillsActionType.CREATE_SKILL,
    payload: {
        id,
        skill: {
            title,
            sets: [],
        },
    },
});

export const deleteSkill = (id: string) => ({
    type: SkillsActionType.DELETE_SKILL,
    payload: {id},
});

export const createSet = (skillId: string, set: SkillSetModel) => ({
    type: SkillsActionType.CREATE_SET,
    payload: {skillId, set},
});
