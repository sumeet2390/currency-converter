import { connect } from "react-redux";
import { changeOutputCurrency } from "../../actions/actions";
import CurrencySelector from "../currency-selector/CurrencySelector";

const mapStateToProps = state => {
  return {
    value: state.currency.currency.OUT,
    currencies: Object.keys(state.currency.rates)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(changeOutputCurrency(value));
    }
  };
};
const OutputCurrencyDropdown = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySelector);

export default OutputCurrencyDropdown;
