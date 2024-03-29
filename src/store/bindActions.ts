import {DispatchAction} from "./types";
import React from "react";

type BoundActions = { [actionName: string]: (...args: any[]) => void };

const bindActions = (
    actions: { [actionName: string]: (...args: any[]) => (dispatch: React.Dispatch<DispatchAction<any>>) => (Promise<void> | void) },
    dispatch: React.Dispatch<DispatchAction<any>>,
): BoundActions => Object
    .keys(actions)
    .reduce(
        (previousValue, actionName) => ({
            ...previousValue,
            [actionName]: function () {
                return actions[actionName].apply(null, arguments as unknown as Array<any>)(dispatch);
            },
        }),
        {} as BoundActions,
    );

export default bindActions;
