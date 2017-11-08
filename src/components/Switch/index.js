import React from 'react'
import { bool, func } from 'prop-types'
import classnames from 'classnames'

import style from './style.css'


function Switch ({
  disabled,
  onChange,
  checked,
}) {
  const className = classnames(style.switch, {
    [style.checked]: checked,
    [style.disabled]: disabled,
  })

  return (
    <div
      className={className}
    >
      <input
        className={style.input}
        checked={checked}
        type="checkbox"
        onChange={() => !disabled && onChange(!checked)}
      />
      <span>
        {checked ? 'on' : 'off' }
      </span>
    </div>
  )
}

Switch.propTypes = {
  disabled: bool,
  onChange: func.isRequired,
  checked: bool,
}

Switch.defaultProps = {
  disabled: false,
  checked: false,
}

export default Switch
