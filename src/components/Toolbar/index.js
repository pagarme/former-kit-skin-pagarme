import React from 'react'
import { node } from 'prop-types'

// disable eslint for shared styles
// eslint-disable-next-line css-modules/no-unused-class
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
