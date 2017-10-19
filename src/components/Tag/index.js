import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

const Tag = ({ children }) => (
  <span className={style.tag}>
    {children}
  </span>
)

Tag.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Tag
