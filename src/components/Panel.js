import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Panel.css";

export default class Panel extends Component {
  onChange = event => {
    let ex = /^\d*(\.\d{0,2})?$/;
    if (ex.test(event.target.value) === false) {
      event.target.value = event.target.value.substring(
        0,
        event.target.value.length - 1
      );
    }
    this.props.onChange(event.target.value);
  };

  onFocus = event => {
    this.props.onFocus();
  };

  render() {
    return (
      <div
        className={`panel ${
          this.props.selected ? "active-panel" : "inactive-panel"
        }`}
      >
        <input
          onChange={this.onChange}
          placeholder="0"
          value={this.props.value}
          type="text"
          className="input"
          onFocus={this.onFocus}
        />
      </div>
    );
  }
}

Panel.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired
};
