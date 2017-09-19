import React from 'react'

import {
  bool,
  node,
  number,
} from 'prop-types'

import classNames from 'classnames'

import style from './style.css'

const columnClassNames = ({ desk, tv, tablet, palm }) =>
  classNames(
    style.col,
    style[`col-desk-${desk}`],
    style[`col-tv-${tv}`],
    style[`col-tablet-${tablet}`],
    style[`col-palm-${palm}`]
  )

const rowClassNames = ({ flex }) =>
  classNames(
    style.row,
    { [style.flex]: flex }
  )

export const Grid = ({ children }) => (
  <div className={style.grid}>
    {children}
  </div>
)

export const Row = ({ children, flex }) => (
  <div className={rowClassNames({ flex })}>
    {children}
  </div>
)

export const Col = ({ children, desk, tv, tablet, palm }) => (
  <div className={columnClassNames({ desk, tv, tablet, palm })}>
    {children}
  </div>
)

Grid.propTypes = {
  children: node,
}

Grid.defaultProps = {
  children: null,
}

Row.propTypes = {
  children: node,
  flex: bool,
}

Row.defaultProps = {
  children: null,
  flex: false,
}

Col.propTypes = {
  children: node,
  desk: number,
  tv: number,
  tablet: number,
  palm: number,
}

Col.defaultProps = {
  children: null,
  desk: null,
  tv: null,
  tablet: null,
  palm: null,
}
