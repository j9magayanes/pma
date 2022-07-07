import React, { useState, createContext } from "react";

export const ModelsContext = createContext();

export const ModelsContextProvider = (props) => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const addModels = (model) => {
    setModels([...models, model]);
  };
  return (
    <ModelsContext.Provider
      value={{
        models,
        setModels,
        selectedModel,
        setSelectedModel,
      }}
    >
      {props.children}
    </ModelsContext.Provider>
  );
};
