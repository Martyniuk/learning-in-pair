import {
  InputContextProvider,
  CounterContextProvider,
  useCounterContextConsumer,
  useInputContextConsumer,
} from "../context";

function CombinedComponent() {
  const [counterContext, counterDispatch] = useCounterContextConsumer();
  const inputContext = useInputContextConsumer();

  console.log("counterContext", counterContext);
  console.log("inputContext", inputContext);

  return (
    <div>
      <div>{counterContext.counter}</div>
      <div>{inputContext}</div>
    </div>
  );
}

// container
function CombinedContainer() {
  return <CombinedComponent />;
}

export { CombinedContainer };
