import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import stylesheet from './style.css'


function Button ({ onClick, variant, base, color, size, children, type }) {
  const className = classNames(
    stylesheet.button,
    stylesheet[variant],
    stylesheet[`${base}-${variant}`],
    stylesheet[`${base}-${color}`],
    stylesheet[size]
  )

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'flat', 'gradient', 'outline', 'dashed', 'clean', 'block',
  ]),
  base: PropTypes.oneOf([
    'dark', 'light',
  ]),
  color: PropTypes.oneOf([
    'green-primary', 'green-secondary', 'green-contrast', 'green-accent',
    'silver', 'plumb', 'yellow', 'red', 'blue',
    'purple', 'purple-accent', 'pink', 'pink-accent',
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
  variant: 'flat',
  base: 'light',
  color: 'green-primary',
  size: 'medium',
  type: 'button',
}

export default Button
