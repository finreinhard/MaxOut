import {DispatchAction, GlobalStoreState} from "../model/GlobalStoreModel";

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
