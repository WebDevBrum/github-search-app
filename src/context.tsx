import {
  useState,
  Dispatch,
  useReducer,
  createContext,
  PropsWithChildren,
} from "react";
import { initialState, StateActions, stateReducer } from "./app-reducer";

type AppState = {
  query: string;
  url: string;
  error: boolean;
  mode: string;
  dispatch: Dispatch<StateActions>;
};

export const ItemsContext = createContext({} as AppState);

const ItemsProvider = ({ children }: PropsWithChildren) => {
  const [{ query, url, error, mode }, dispatch] = useReducer(
    stateReducer,
    initialState
  );

  const value: AppState = {
    query,
    url,
    error,
    mode,
    dispatch,
  };
  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
