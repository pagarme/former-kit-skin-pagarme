import React from 'react'
import { bool, func, shape, string } from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

const defaultStrings = {
  on: 'on',
  off: 'off',
}

function getStrings (strings) {
  return {
    ...defaultStrings,
    ...strings,
  }
}

function Switch ({
  disabled,
  onChange,
  checked,
  strings,
}) {
  const className = classnames(style.switch, {
    [style.checked]: checked,
    [style.disabled]: disabled,
  })

  const { on, off } = getStrings(strings)

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
        {checked ? on : off }
      </span>
    </div>
  )
}

Switch.propTypes = {
  disabled: bool,
  onChange: func.isRequired,
  checked: bool,
  strings: shape({
    on: string,
    off: string,
  }),
}

Switch.defaultProps = {
  disabled: false,
  checked: false,
  strings: defaultStrings,
}

export default Switch
