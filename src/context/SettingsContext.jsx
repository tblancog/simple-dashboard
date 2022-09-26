import React, { createContext, useReducer } from "react";

const SettingsContext = createContext(undefined);

const reducerFn = (state, action) => {
  switch (action.type) {
    case "changeDisplayName":
      return { ...state, displayName: action.payload };

    default:
      throw new Error("Unknown action");
  }
};

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    displayName: "John",
  });

  const changeDisplayName = (newName) =>
    dispatch({
      type: "changeDisplayName",
      payload: newName,
    });

  return (
    <SettingsContext.Provider
      value={{
        displayName: state.displayName,
        changeDisplayName,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
