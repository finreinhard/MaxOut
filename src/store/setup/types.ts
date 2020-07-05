export enum SetupActionType {
    COMPLETE_SETUP = 'SETUP_COMPLETE',
    ACCEPT_LEGAL_STUFF = 'SETUP_ACCEPT_LEGAL_STUFF',
}

export interface SetupState {
    completed?: boolean;
    accepted?: boolean;
}
