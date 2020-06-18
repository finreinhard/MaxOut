import {SkillsActionType} from "./types";
import 'react-native-get-random-values';

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
