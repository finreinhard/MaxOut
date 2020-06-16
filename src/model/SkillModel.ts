export interface SkillSummaryModel {
    id: string;
    title: string;
    highscore: number;
    lastScore: number;
    lastRepetition: number;
}

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
