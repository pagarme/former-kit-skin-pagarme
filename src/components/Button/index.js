import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

const Button = ({ children }) => (
  <button className={style.button}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button

