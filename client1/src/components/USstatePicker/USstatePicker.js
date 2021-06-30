import React from "react";
import states from "./states.json";
import PropTypes from "prop-types";

class SelectUSState extends React.Component {
  

  render() {
    const {className } = this.props;
    return (
      <select 
        className={className}
        onChange={this.handleChange}
        disabled={false}>
        {states.map(item => (
          <option key={item.name} value={item.abbreviation}>
            {item.abbreviation} - {item.name}
          </option>
        ))}
      </select>
    );
  }
}

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

SelectUSState.propTypes = propTypes;

export default SelectUSState;