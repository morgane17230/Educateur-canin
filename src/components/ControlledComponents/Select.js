/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'src/styles/select.scss';

const Select = ({
  value,
  name,
  placeholder,
  onChange,
  required,
  datas,
  error,
}) => {
  const [focus, setFocus] = useState(false);

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;
  const options = datas.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <>
      <hr className="rule" />
      <div error={error} className={`${error ? 'error input' : 'select'} ${focus ? 'active' : ''}`}>
        <select
          required={required}
          value={value}
          onChange={handleChange}
          id={inputId}
          type="select"
          placeholder={placeholder}
          name={name}
          onFocus={() => setFocus(true)}
        >
          <option>Sélectionnez votre option</option>
          {options}
        </select>
        <label
          htmlFor={inputId}
          title={placeholder}
          data-title={placeholder}
        />
      </div>
    </>
  );
};

Select.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  datas: PropTypes.array,
  error: PropTypes.number,
};

Select.defaultProps = {
  value: [0, ''],
  required: false,
  placeholder: '',
  error: undefined,
  datas: [],
};

export default Select;
