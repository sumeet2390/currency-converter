import { connect } from "react-redux";
import { SELECTIONS } from "../constants/constants";
import { updateInput } from "../actions/actions";
import Panel from "./Panel";

const mapStateToProps = state => {
  return {
    value: state.currency.values.IN,
    selected: state.currency.selected === SELECTIONS.IN
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(updateInput(value));
    }
  };
};
const InputPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default InputPanel;
