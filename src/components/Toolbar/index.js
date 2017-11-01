import React from 'react'
import { node } from 'prop-types'

import style from './style.css'

const Toolbar = ({
  children,
}) => (
  <div className={style.toolbar}>
    {children}
  </div>
)

Toolbar.propTypes = {
  children: node,
}

Toolbar.defaultProps = {
  children: null,
}

export default Toolbar
