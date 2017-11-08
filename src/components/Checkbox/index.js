import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

const Checkbox = (props) => {
  const containerClass = classnames(style.container, {
    [style.disabled]: props.disabled,
  })

  const secondaryTextClass = classnames(style.secondaryText, {
    [style.error]: props.error,
    [style.success]: props.success,
  })

  return (
    <div className={containerClass}>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        id={`${props.name}-${props.value}`}
        checked={props.checked}
        disabled={props.disabled}
        onChange={e => !props.disabled && props.onChange(e.target.value)}
      />
      <label
        htmlFor={`${props.name}-${props.value}`}
      >
        <i className={style.iconCheck} />
        {props.label}
      </label>

      {(props.success || props.error) &&
        <p className={secondaryTextClass}>
          {props.success || props.error}
        </p>
      }
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
}

Checkbox.defaultProps = {
  disabled: false,
  error: '',
  success: '',
}

export default Checkbox
