import React, { Component } from "react";
import "./App.css";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";
import LiveRateContainer from "./components/LiveRateContainer";

import OutputCurrencyDropdown from "./components/output-currency-dropdown/OutputCurrencyDropdown";
import InputCurrencyDropdown from "./components/input-currency-dropdown/InputCurrencyDropdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LiveRateContainer />

        <InputCurrencyDropdown />
        <InputPanel />

        <OutputCurrencyDropdown />
        <OutputPanel />
      </div>
    );
  }
}

export default App;
