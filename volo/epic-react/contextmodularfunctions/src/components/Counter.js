import {
  useCounterContextConsumer,
  CounterContextProvider,
  increment,
  decrement,
} from "../context";

// component
function CounterComponent() {
  const [state, counterDispatch] = useCounterContextConsumer();

  return (
    <div>
      <button onClick={() => increment(counterDispatch)}>increment</button>
      <p>{state.counter}</p>
      <button onClick={() => decrement(counterDispatch)}>decrement</button>
    </div>
  );
}

// container
function CounterContainer() {
  return (
    // <CounterContextProvider>
    <CounterComponent />
    // </CounterContextProvider>
  );
}

export { CounterContainer };
