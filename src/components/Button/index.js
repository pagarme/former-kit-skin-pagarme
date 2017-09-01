import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import stylesheet from './style.css'

function Button ({ onClick, style, theme, color, size, children }) {
  const className = classNames(
    stylesheet.button,
    stylesheet[style],
    stylesheet[`${theme}-${style}`],
    stylesheet[`${theme}-${color}`],
    stylesheet[size]
  )

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.oneOf([
    'flat', 'gradient', 'outline', 'dashed', 'clean', 'block',
  ]),
  theme: PropTypes.oneOf([
    'dark', 'light',
  ]),
  color: PropTypes.oneOf([
    'greenPrimary', 'greenSecondary', 'greenContrast', 'greenAccent',
    'silver', 'plumb', 'yellow', 'red', 'blue',
    'purple', 'purpleAccent', 'pink', 'pinkAccent',
  ]),
  size: PropTypes.oneOf([
    'micro', 'tiny', 'small', 'medium', 'large',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
}

Button.defaultProps = {
  onClick: null,
  style: 'flat',
  theme: 'light',
  color: 'greenPrimary',
  size: 'medium',
}

export default Button
