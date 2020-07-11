import {CommonActionTypes, DispatchAction} from "../types";

const dataReset = () => ({
    type: CommonActionTypes.RESET,
});

export const resetData = () => (
    dispatch: React.Dispatch<DispatchAction<{}>>,
) => dispatch(dataReset());
