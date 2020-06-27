import {useGlobalStore} from "../index";
import * as actions from './actions';
import bindActions from "../bindActions";
import {SkillsMap} from "./types";

interface SkillsHook {
    skills: SkillsMap,
    createSkill: (title: string) => void;
    deleteSkill: (id: string) => void;
    createSet: (skillId: string, score: number) => void;
}

const useSkills = (): SkillsHook => {
    const {state, dispatch} = useGlobalStore();
    const {skills} = state;

    const {createSkill, deleteSkill, createSet} = actions;

    const skillsActions = bindActions(
        {
            createSkill,
            deleteSkill,
            createSet,
        },
        dispatch,
    );

    return {skills, ...skillsActions} as SkillsHook;
}

export default useSkills;
