import React from "react";

// context
const CounterContext = React.createContext();
// debugger purpose
CounterContext.displayName = "CounterContext";

// constants
const ActionTypes = Object.freeze({
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
});

const initState = { counter: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT: {
      return { counter: state.counter + 1 };
    }
    case ActionTypes.DECREMENT: {
      return { counter: state.counter - 1 };
    }

    default:
      throw new Error(
        `Error in Counter Reducer, provided incorrect action type - ${action.type}`
      );
  }
}

function CounterContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(counterReducer, initState);

  const value = [state, dispatch];

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

const increment = (dispatch) => dispatch({ type: ActionTypes.INCREMENT });
const decrement = (dispatch) => dispatch({ type: ActionTypes.DECREMENT });

function useCounterContextConsumer() {
  const context = React.useContext(CounterContext);

  if (!context) {
    throw new Error(
      "Error: useCounterContext must be used within a CounterContextProvider"
    );
  }

  return context;
}

export {
  CounterContextProvider,
  useCounterContextConsumer,
  increment,
  decrement,
};
