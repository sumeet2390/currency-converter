import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import configureMockStore from "redux-mock-store";
import CurrencySelector from "../../components/currency-selector/CurrencySelector";
import OutputCurrencyDropdown from "../../components/output-currency-dropdown/OutputCurrencyDropdown";

jest.mock("../../components/currency-selector/CurrencySelector");

describe("<OutputCurrencyDropdown />", () => {
  const data = {
    currency: {
      currency: {
        OUT: "OUT"
      },
      rates: {
        AED: "4.090",
        USD: "1.11357",
        EUR: "1",
        GBP: "0.859331"
      }
    }
  };
  const store = configureMockStore()(data);
  let container, component;
  beforeEach(() => {
    spyOn(store, "dispatch");
    CurrencySelector.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <OutputCurrencyDropdown />
      </Provider>
    );

    container = wrapper.find(OutputCurrencyDropdown);
    component = wrapper.find(CurrencySelector);
  });
  it("should render OutputCurrencyDropdown component without throwing an error", () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });
  describe("mapStateToProps", () => {
    it("should have the props set", () => {
      const componentProps = component.props();
      expect(componentProps.value).toBe(data.currency.currency.OUT);
      expect(componentProps.currencies).toStrictEqual(
        Object.keys(data.currency.rates)
      );
    });
  });
});
