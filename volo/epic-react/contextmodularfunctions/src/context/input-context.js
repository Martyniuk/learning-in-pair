import React from "react";

const InputContext = React.createContext();
InputContext.displayName = "InputContext";

const initState = "";

function inputReducer(state, inputData) {
  return inputData;
}

function InputContextProvider(props) {
  const [state, dispatch] = React.useReducer(inputReducer, initState);

  const value = [state, dispatch];

  return <InputContext.Provider value={value} {...props} />;
}

function useInputContextConsumer() {
  const context = React.useContext(InputContext);

  if (context === undefined) {
    throw new Error(`InputContext should be used inside InputContextProvider`);
  }

  return context;
}

const typing = (dispatch, inputData) => dispatch(inputData);

export { InputContextProvider, useInputContextConsumer, typing };
