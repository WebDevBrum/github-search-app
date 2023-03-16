import React, { useEffect, useState, Dispatch } from "react";
import { StateActions } from "./app-reducer";

export interface UserProps {
  url: string;
  dispatch: Dispatch<StateActions>;
  mode: string;
}

export type SearchProps = {
  dispatch: Dispatch<StateActions>;
  query: string;
  error: boolean;
  mode: string;
};
