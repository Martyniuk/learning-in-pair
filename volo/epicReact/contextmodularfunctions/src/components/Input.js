import {
  InputContextProvider,
  useInputContextConsumer,
  typing,
} from "../context";

// component
function InputComponent() {
  const context = useInputContextConsumer();
  const [state, dispatch] = context;

  const handleOnChange = (e) => {
    console.log("<---- e", e);

    typing(dispatch, e.target.value);
  };

  return (
    <div>
      <input value={state} onChange={handleOnChange} />
    </div>
  );
}

// container
function InputContainer() {
  return (
    // <InputContextProvider>
    <InputComponent />
    // </InputContextProvider>
  );
}

export { InputContainer };
