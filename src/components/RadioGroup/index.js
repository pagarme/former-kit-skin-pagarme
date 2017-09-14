import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

const RadioGroup = ({
  name,
  disabled,
  error,
  success,
  options,
  value,
  onChange,
}) => {
  const containerClass = classnames(style.container, {
    [style.containerDisabled]: disabled,
    [style.containerError]: error,
    [style.containerSuccess]: success,
  })

  const radioButtons = options.map((option, index) => (
    <label
      key={option.value}
      className={style.radio}
      htmlFor={option.value}
    >
      <input
        type="radio"
        name={name}
        value={option.value}
        id={option.value}
        checked={
          (disabled && index === 0) ||
          (value === option.value)
        }
        onChange={e =>
          (disabled ? null : onChange(e.target.value))
        }
        className={style.input}
        disabled={disabled}
      />

      <span
        className={style.label}
      />

      <span className={style.name}>
        {option.name}
      </span>
    </label>
  ))

  return (
    <div className={containerClass}>
      {radioButtons}
      {(success || error) &&
        <p
          className={style.secondaryText}
        >
          {success || error}
        </p>
      }
    </div>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.value,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
}

RadioGroup.defaultProps = {
  value: '',
  disabled: false,
  error: '',
  success: '',
}

export default RadioGroup
