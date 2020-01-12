import { connect } from "react-redux";
import { changeInputCurrency } from "../../actions/actions";
// import CurrencySelector from "../currency-selector/CurrencySelector";
import CurrencySelector from "../currency-selector/CurrencySelector";

const mapStateToProps = state => {
  return {
    value: state.currency.currency.IN,
    currencies: Object.keys(state.currency.rates)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(changeInputCurrency(value));
    }
  };
};
const InputCurrencyDropdown = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySelector);

export default InputCurrencyDropdown;
