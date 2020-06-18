import {DispatchAction, GlobalStoreState} from "./types";
import AsyncStorage from '@react-native-community/async-storage';

export const logger = (
    prevState: GlobalStoreState,
    currentState: GlobalStoreState,
    action: DispatchAction<any>,
) => {
    console.groupCollapsed('Logger');
    console.log('%c Previous State:', 'color: red', prevState);
    console.log('%c Current State:', 'color: green', currentState);
    console.log('%c Action:', 'color: blue', action);
    console.groupEnd();
}

export const GLOBAL_STORE_STORAGE_KEY = '@global_store';

export const saveInStorage = (state: GlobalStoreState) => AsyncStorage.setItem(
    GLOBAL_STORE_STORAGE_KEY,
    JSON.stringify(state),
);
