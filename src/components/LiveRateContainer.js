import { connect } from "react-redux";
import LiveRate from "./LiveRate";
import getSymbolFromCurrency from "currency-symbol-map";

const mapStateToProps = ({ currency }) => {
  console.log("currency", currency);
  // const currency = state.currency;
  const out = (
    currency.rates[currency.currency.OUT] / currency.rates[currency.currency.IN]
  ).toFixed(3);

  return {
    in: `${getSymbolFromCurrency(currency.currency.IN)}1.00`,
    out: `${getSymbolFromCurrency(currency.currency.OUT)}${
      out !== "NaN" ? out : "0.00"
    }`
  };
};
const LiveRateContainer = connect(mapStateToProps)(LiveRate);

export default LiveRateContainer;
