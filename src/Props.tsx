import React, { useEffect, useState, Dispatch } from "react";

export interface UserProps {
  url: string;
  setQuery: Dispatch<React.SetStateAction<string>>;
  setError: Dispatch<React.SetStateAction<boolean>>;
  mode: string;
}

export type SearchProps = {
  setUrl: Dispatch<React.SetStateAction<string>>;
  setQuery: Dispatch<React.SetStateAction<string>>;
  query: string;
  error: boolean;
  mode: string;
};
