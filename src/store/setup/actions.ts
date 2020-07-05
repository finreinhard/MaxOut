import {SetupActionType} from "./types";
import {DispatchAction} from "../types";
import React from "react";

const setupCompleted = () => ({
    type: SetupActionType.COMPLETE_SETUP,
});

interface SetupAcceptLegalStuff {
    accepted: boolean;
}

const legalStuffAccepted = (accepted: boolean) => ({
    type: SetupActionType.ACCEPT_LEGAL_STUFF,
    payload: {accepted},
});

export const completeSetup = () => (
    dispatch: React.Dispatch<DispatchAction<{}>>,
) => dispatch(setupCompleted());

export const acceptLegalStuff = (accepted: boolean) => (
    dispatch: React.Dispatch<DispatchAction<SetupAcceptLegalStuff>>,
) => dispatch(legalStuffAccepted(accepted));
