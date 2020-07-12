import {SkillSetModel} from "../store/skills/types";

export interface SkillSummaryModel {
    id: string;
    title: string;
    highscore: number;
    lastSets: SkillSetModel[];
}
