import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {CommonActionTypes, GlobalStoreContextProps} from './types';
import mainReducer from "./reducers";
import {GLOBAL_STORE_STORAGE_KEY, saveInStorage} from "./middleware";
import AsyncStorage from "@react-native-community/async-storage";
import {AppState} from "react-native";

const initialState = {
    skills: {},
    setup: {},
};

const GlobalStore = createContext<GlobalStoreContextProps>({} as GlobalStoreContextProps)

type OwnProps = {
    children: React.ReactNode
};

export const GlobalStoreProvider = ({children}: OwnProps) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    useEffect(() => {
        const handleAppStateChange = (newState: string) => {
            if (newState === 'active') {
                return;
            }

            if (!state.setup || state.setup.accepted !== true) {
                return;
            }

            saveInStorage(state)
                .catch(console.error);

            AppState.removeEventListener('change', handleAppStateChange);
        };

        AppState.addEventListener('change', handleAppStateChange);

        return () => AppState.removeEventListener('change', handleAppStateChange);
    }, [state]);

    useEffect(() => {
        AsyncStorage.getItem(GLOBAL_STORE_STORAGE_KEY)
            .then(storeJson => {
                if (storeJson === null) {
                    return;
                }

                dispatch({type: CommonActionTypes.INITIAL_STATE, payload: JSON.parse(storeJson)});
            })
            .catch(() => {
            });
    }, []);

    return (
        <GlobalStore.Provider value={{state, dispatch}}>
            {children}
        </GlobalStore.Provider>
    )
}

export const useGlobalStore = () => useContext(GlobalStore);
