/* eslint css-modules/no-unused-class: [2, {
     markAsUsed: [
       'flat', 'gradient', 'light-flat', 'light-gradient', 'dark-flat',
       'dark-gradient', 'outline', 'clean', 'block', 'extra-small',
       'small', 'default', 'large'
     ]
   }]
*/

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import stylesheet from './style.css'


function Button ({
  disabled, onClick, variant, base, color, size, children, type,
}) {
  const buttonClasses = classNames(
    stylesheet.button,
    stylesheet[variant],
    stylesheet[`${base}-${variant}`],
    stylesheet[`${base}-${color}`],
    stylesheet[size]
  )

  return (
    <button
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'flat', 'gradient', 'outline', 'clean',
  ]),
  base: PropTypes.oneOf([
    'dark', 'light',
  ]),
  color: PropTypes.oneOf([
    'green', 'silver', 'red',
  ]),
  size: PropTypes.oneOf([
    'extra-small', 'small', 'default', 'large',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  onClick: null,
  variant: 'flat',
  base: 'light',
  color: 'green',
  size: 'default',
  type: 'button',
  disabled: false,
}

export default Button
