import {
  CHANGE_SELECTED,
  CHANGE_INPUT,
  CHANGE_INPUT_CURRENCY,
  CHANGE_OUTPUT,
  CHANGE_OUTPUT_CURRENCY,
  UPDATE_RATES,
  RECALCULATE_IO
} from "../action-types/actionTypes";

import { fetchCurrencies } from "../helpers/currency-api";

export const updateRates = () => {
  return dispatch => {
    fetchCurrencies().then(rates =>
      dispatch({
        type: UPDATE_RATES,
        rates: rates
      })
    );

    dispatch({
      type: RECALCULATE_IO
    });
  };
};

export const updateFocus = focusArea => {
  return dispatch => {
    dispatch({
      type: CHANGE_SELECTED,
      selected: focusArea
    });
  };
};

export const updateInput = input => {
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT,
      input
    });

    dispatch({
      type: RECALCULATE_IO
    });
  };
};

export const updateOutput = output => {
  return dispatch => {
    dispatch({
      type: CHANGE_OUTPUT,
      output
    });

    dispatch({
      type: RECALCULATE_IO
    });
  };
};

export const changeInputCurrency = newCurrency => {
  return dispatch => {
    dispatch({
      type: CHANGE_INPUT_CURRENCY,
      value: newCurrency
    });

    dispatch({
      type: RECALCULATE_IO
    });
  };
};
export const changeOutputCurrency = newCurrency => {
  return dispatch => {
    dispatch({
      type: CHANGE_OUTPUT_CURRENCY,
      value: newCurrency
    });

    dispatch({
      type: RECALCULATE_IO
    });
  };
};
