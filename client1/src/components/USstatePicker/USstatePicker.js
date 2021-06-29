import React from "react";
import states from "./states.json";
import PropTypes from "prop-types";

class SelectUSState extends React.Component {
  

  render() {
    const { id, className } = this.props;
    return (
      <select id={id} className={className} onChange={this.handleChange} disabled={false}>
        {states.map(item => (
          <option key={item.abbreviation} value={item.abbreviation}>
            {item.abbreviation}
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