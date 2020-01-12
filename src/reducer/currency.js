import { SELECTIONS } from "../constants/constants";
import {
  CHANGE_SELECTED,
  CHANGE_INPUT,
  CHANGE_INPUT_CURRENCY,
  CHANGE_OUTPUT,
  CHANGE_OUTPUT_CURRENCY,
  UPDATE_RATES,
  RECALCULATE_IO
} from "../action-types/actionTypes";

const initialState = {
  values: {
    IN: 0,
    OUT: 0
  },
  currency: {
    IN: "EUR",
    OUT: "GBP"
  },
  selected: SELECTIONS.IN,
  rates: []
};

const convert = ({ rates, values, currency, selected }) => {
  const writeTo = selected === SELECTIONS.IN ? SELECTIONS.OUT : SELECTIONS.IN,
    resultRate = rates[currency[writeTo]],
    selectedRate =
      rates[currency[selected]] !== undefined ? rates[currency[selected]] : 0,
    selectedValue = values[selected];

  const converted = ((resultRate / selectedRate) * selectedValue).toFixed(2);

  // Convert if input value is set
  let ob = {};
  ob[writeTo] = converted !== "NaN" ? converted : 0.0;
  return ob;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return {
        ...state,
        selected: action.selected
      };

    case CHANGE_INPUT:
      return {
        ...state,
        values: { ...state.values, IN: action.input }
      };

    case CHANGE_OUTPUT:
      return {
        ...state,
        values: { ...state.values, OUT: action.output }
      };

    case CHANGE_INPUT_CURRENCY:
      return {
        ...state,
        currency: { ...state.currency, IN: action.value }
      };

    case CHANGE_OUTPUT_CURRENCY:
      return {
        ...state,
        currency: { ...state.currency, OUT: action.value }
      };

    case RECALCULATE_IO:
      return {
        ...state,
        values: { ...state.values, ...convert(state) }
      };

    case UPDATE_RATES:
      return {
        ...state,
        rates: action.rates
      };

    default:
      return state;
  }
};
