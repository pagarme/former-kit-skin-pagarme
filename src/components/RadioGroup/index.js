import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import shortid from 'shortid'

import style from './style.css'

class RadioGroup extends React.Component {
  constructor (props) {
    super(props)

    this.base = shortid.generate()
  }

  render () {
    const {
      name,
      disabled,
      error,
      success,
      options,
      value,
      onChange,
    } = this.props

    const containerClass = classnames(style.container, {
      [style.containerDisabled]: disabled,
      [style.containerError]: error,
      [style.containerSuccess]: success,
    })

    const radioButtons = options.map((option, index) => (
      <label
        key={option.value}
        className={style.radio}
        htmlFor={`${this.base}-${option.value}-${index}`}
      >
        <input
          type="radio"
          name={name}
          value={option.value}
          id={`${this.base}-${option.value}-${index}`}
          checked={
            (disabled && index === 0) ||
              (value === option.value)
          }
          onChange={e => !disabled && onChange(e.target.value)}
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
