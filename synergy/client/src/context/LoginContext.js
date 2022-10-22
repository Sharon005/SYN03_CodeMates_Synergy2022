import React, { createContext, useContext, useReducer } from "react";

export const LoginContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <LoginContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </LoginContext.Provider>
);

export const useStateValue = () => useContext(LoginContext);