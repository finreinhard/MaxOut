import {CommonActionTypes, DispatchAction} from "../types";
import {AsyncStorage} from "react-native";

const dataReset = () => ({
    type: CommonActionTypes.RESET,
});

export const resetData = () => (
    dispatch: React.Dispatch<DispatchAction<{}>>,
) => {
    dispatch(dataReset());
    AsyncStorage.clear();
};
