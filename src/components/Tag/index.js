import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

const Tag = ({ children }) => (
  <div className={style.tag}>
    {children}
  </div>
)

Tag.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Tag
