export type StateString = {
  type: "update-query" | "update-url" | "update-mode";
  payload: string;
};

export type StateBoolean = {
  type: "update-error";
  payload: boolean;
};

export type StateActions = StateString | StateBoolean;

type AppState = {
  query: string;
  url: string;
  error: boolean;
  mode: string;
};

export const initialState: AppState = {
  query: "",
  url: "https://api.github.com/users/octocat",
  error: false,
  mode: "light",
};

export const stateReducer = (
  state: AppState = initialState,
  action: StateActions
) => {
  if (action.type === "update-query") {
    const query = action.payload;
    return { ...state, query };
  }

  if (action.type === "update-url") {
    const url = action.payload;
    return { ...state, url };
  }

  if (action.type === "update-error") {
    const error = action.payload;
    return { ...state, error };
  }

  if (action.type === "update-mode") {
    const mode = action.payload;
    return { ...state, mode };
  }

  return state;
};
