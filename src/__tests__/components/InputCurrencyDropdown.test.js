import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import configureMockStore from "redux-mock-store";
import InputCurrencyDropdown from "../../components/input-currency-dropdown/InputCurrencyDropdown";
import CurrencySelector from "../../components/currency-selector/CurrencySelector";

jest.mock("../../components/currency-selector/CurrencySelector");

describe("<InputCurrencyDropdown />", () => {
  const data = {
    currency: {
      currency: {
        IN: "IN"
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
        <InputCurrencyDropdown />
      </Provider>
    );

    container = wrapper.find(InputCurrencyDropdown);
    component = wrapper.find(CurrencySelector);
  });
  it("should render InputCurrencyDropdown component without throwing an error", () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });
  describe("mapStateToProps", () => {
    it("should have the props set", () => {
      const componentProps = component.props();
      expect(componentProps.value).toBe(data.currency.currency.IN);
      expect(componentProps.currencies).toStrictEqual(
        Object.keys(data.currency.rates)
      );
    });
  });
});
