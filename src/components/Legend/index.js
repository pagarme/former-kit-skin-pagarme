import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  pipe,
  split,
  map,
  join,
  toUpper,
  head,
} from 'ramda'

import style from './style.css'

const defineInitials = pipe(
  split(' '),
  map(head),
  join(''),
  toUpper
)

const Legend = ({
  color,
  children,
  outline,
  acronym,
  hideLabel,
}) => {
  const labelClasses = cx(
    style.label,
    {
      [style.outline]: outline,
    },
    style[`label-${color}`]
  )

  return (
    <div className={style.legend}>
      <abbr
        title={children}
        className={labelClasses}
      >
        {acronym || defineInitials(children)}
      </abbr>
      {!hideLabel &&
        <span className={style.text}>
          {children}
        </span>
      }
    </div>
  )
}

Legend.propTypes = {
  color: PropTypes.oneOf([
    'green-100', 'green-200', 'yellow', 'orange-200', 'red-100',
    'red-300', 'purple-100', 'purple-300', 'orange-100', 'blue-100',
    'blue-200', 'blue-300', 'grey',
  ]).isRequired,
  children: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  acronym: PropTypes.string,
  hideLabel: PropTypes.bool,
}

Legend.defaultProps = {
  outline: false,
  acronym: '',
  hideLabel: false,
}

export default Legend
