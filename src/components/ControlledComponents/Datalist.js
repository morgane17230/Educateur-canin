/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/datalist.scss';

const Datalist = ({
  type,
  name,
  onInput,
  list,
  placeholder,
  datas,
  disabled,
}) => {
  const inputId = `datalist-${name}`;

  let inputValue = '';

  const option = (data, index) => {
    if (data?.nom) {
      inputValue = data.nom;
    }
    else if (data?.lastname) {
      inputValue = `${data.lastname} ${data.firstname}`;
    }
    else if (data?.properties.label) {
      inputValue = data.properties.label;
    }

    return (
      <option
        key={index}
        value={inputValue}
        label={inputValue}
      />
    );
  };

  return (
    <div
      className={`datalist ${
        disabled ? 'disabled datalist' : 'datalist'
      }`}
    >
      <input
        id={inputId}
        name={name}
        type={type}
        list={list}
        onInput={onInput}
        placeholder={placeholder}
        datas={datas}
        disabled={disabled}
      />
      <label htmlFor={inputId} title={placeholder} data-title={placeholder} />
      <datalist id={list}>{datas.map(option)}</datalist>
    </div>
  );
};

Datalist.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  list: PropTypes.string.isRequired,
  datas: PropTypes.array,
  disabled: PropTypes.bool,
};

Datalist.defaultProps = {
  datas: [],
  disabled: false,
};

export default Datalist;
