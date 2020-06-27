import {SkillModel, SkillsActionType, SkillSetModel} from "./types";
import {DispatchAction} from "../types";
import {uuidv4} from "../../utils/uuid";

interface SkillCreationPayload {
    id: string,
    skill: SkillModel,
}

const skillCreated = (id: string, title: string) => ({
    type: SkillsActionType.CREATE_SKILL,
    payload: {
        id,
        skill: {
            title,
            sets: [],
        },
    },
});

interface SkillDeletionPayload {
    id: string,
}

const skillDeleted = (id: string) => ({
    type: SkillsActionType.DELETE_SKILL,
    payload: {id},
});

interface SetCreationPayload {
    skillId: string,
    set: SkillSetModel,
}

const setCreated = (skillId: string, set: SkillSetModel) => ({
    type: SkillsActionType.CREATE_SET,
    payload: {skillId, set},
});

export const createSkill = (title: string) => async (
    dispatch: React.Dispatch<DispatchAction<SkillCreationPayload>>,
) => dispatch(skillCreated(await uuidv4(), title));

export const deleteSkill = (id: string) => (
    dispatch: React.Dispatch<DispatchAction<SkillDeletionPayload>>,
) => dispatch(skillDeleted(id));

export const createSet = (skillId: string, score: number) => async (
    dispatch: React.Dispatch<DispatchAction<SetCreationPayload>>,
) => dispatch(setCreated(
    skillId,
    {
        id: await uuidv4(),
        timestamp: Date.now(),
        score,
    },
));
