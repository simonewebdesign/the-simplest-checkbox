import React from 'react';
import PropTypes from 'prop-types';

const Check = ({ id, onChange, children }) =>
  <label>
    <input
      type="checkbox"
      id={ id }
      onChange={ onChange }
    />
    { children }
  </label>;

Check.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.element,
};

export default Check;
