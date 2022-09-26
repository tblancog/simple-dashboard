import React, { createContext, useState } from "react";

const SettingsContext = createContext(undefined);

export const SettingsProvider = ({ children }) => {
  const [displayName, setDisplayName] = useState("John");

  const changeDisplayName = (newName) => {
    setDisplayName(newName);
  };
  return (
    <SettingsContext.Provider value={{ displayName, changeDisplayName }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
