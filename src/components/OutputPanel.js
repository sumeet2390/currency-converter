import { connect } from "react-redux";
import { SELECTIONS } from "../constants/constants";
import { updateOutput } from "../actions/actions";
import Panel from "./Panel";

const mapStateToProps = state => {
  return {
    value: state.currency.values.OUT,
    selected: state.currency.selected === SELECTIONS.OUT
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(updateOutput(value));
    }
  };
};

const OutputPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default OutputPanel;
