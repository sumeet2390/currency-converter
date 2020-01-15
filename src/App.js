import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";
import LiveRateContainer from "./components/LiveRateContainer";

import OutputCurrencyDropdown from "./components/output-currency-dropdown/OutputCurrencyDropdown";
import InputCurrencyDropdown from "./components/input-currency-dropdown/InputCurrencyDropdown";
import Header from "./components/header/Header";

const DropdownWithInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
`;

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <LiveRateContainer />
          <DropdownWithInput>
            <InputCurrencyDropdown />
            <InputPanel />
          </DropdownWithInput>
          <div className="separator"></div>
          <DropdownWithInput>
            <OutputCurrencyDropdown />
            <OutputPanel />
          </DropdownWithInput>
        </div>
      </>
    );
  }
}

export default App;
