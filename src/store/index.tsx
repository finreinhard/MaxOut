import React, {createContext, useContext, useReducer} from 'react';
import {GlobalStoreContextProps, GlobalStoreState} from "../model/GlobalStoreModel";
import {DispatchAction} from "../model/GlobalStoreModel";
import mainReducer from "./reducers";

const initialState = {
    skills: {
        '4d5a0d5e-fd57-4f17-99bd-c167a155e0a0': {
            title: 'Sit Ups',
            sets: [
                {
                    id: '71081c47-d0d9-4cb4-a677-60d1b713b72a',
                    timestamp: 1591713671810,
                    score: 64,
                },
                {
                    id: '6b5271c4-926b-4cbb-8338-392648d17d03',
                    timestamp: 1591715220508,
                    score: 48,
                },
            ],
        },
        '2c337e74-ca12-4244-9bd4-de54f2225a17': {
            title: 'Test ABC',
            sets: [
                {
                    id: '405145a6-f5c4-4944-a4a6-ed82dffdd560',
                    timestamp: 1591731200273,
                    score: 154,
                },
                {
                    id: 'e72c526e-b4d8-43c0-bb14-9fd92b47178b',
                    timestamp: 1591731225395,
                    score: 99,
                },
            ],
        },
    },
};

const GlobalStore = createContext<GlobalStoreContextProps>({} as GlobalStoreContextProps)

type OwnProps = {
    children: React.ReactNode
};

export const GlobalStoreProvider = ({children}: OwnProps) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <GlobalStore.Provider value={{state, dispatch}}>
            {children}
        </GlobalStore.Provider>
    )
}

export const useGlobalStore = () => useContext(GlobalStore);
