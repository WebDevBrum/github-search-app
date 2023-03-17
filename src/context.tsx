import { Dispatch, PropsWithChildren, useReducer } from "react";
import { initialState, StateActions, stateReducer } from "./app-reducer";
import { createContext } from "./create-context-";

type AppState = {
  query: string;
  url: string;
  error: boolean;
  mode: string;
  dispatch: Dispatch<StateActions>;
};

export const [useMyCustomContext, ContextProvider] = createContext<AppState>();

export const useCustomContext = useMyCustomContext;

// custom abstractions to consider
export const useMode = (): string => {
  const { mode } = useCustomContext();
  return mode;
};

// const useDispatch = () => {
//     const {dispatch} = useCustomContext();
//     return dispatch;
// }

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [{ query, url, error, mode }, dispatch] = useReducer(
    stateReducer,
    initialState
  );
  return (
    <ContextProvider value={{ query, url, error, mode, dispatch }}>
      {children}
    </ContextProvider>
  );
};
