import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {
  InputContainer,
  CounterContainer,
  CombinedContainer,
} from "./components";

import { InputContextProvider, CounterContextProvider } from "./context";

function App() {
  return (
    <InputContextProvider>
      <CounterContextProvider>
        <div className="App">
          <BrowserRouter>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/counter">Counter</Link>
                  </li>
                  <li>
                    <Link to="/input">Input</Link>
                  </li>
                  <li>
                    <Link to="/combined">Combined</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Switch>
              <Route path="/counter">
                <CounterContainer />
              </Route>
              <Route path="/input">
                <InputContainer />
              </Route>
              <Route path="/combined">
                <CombinedContainer />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </CounterContextProvider>
    </InputContextProvider>
  );
}

export default App;
