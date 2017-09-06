import React from 'react'
import {
  number,
  bool,
} from 'prop-types'
import {
  Motion,
  spring,
} from 'react-motion'
import classnames from 'classnames'

import style from './style.css'

const Linear = ({
  percent,
  disabled,
}) => {
  const classNameFill = classnames(
    style.fill,
    {
      [style.fillEnabled]: !disabled,
      [style.fillDisabled]: disabled,
    }
  )

  const classNameBack = classnames(
    style.back,
    {
      [style.backEnabled]: !disabled,
      [style.backDisabled]: disabled,
    }
  )

  const classNameNumber = classnames(
    style.number,
    {
      [style.numberEnabled]: !disabled,
      [style.numberDisabled]: disabled,
    }
  )

  return (
    <div className={style.linear}>
      <Motion
        defaultStyle={{
          x: 0,
        }}
        style={{
          x: spring(percent),
        }}
      >
        {({ x }) => {
          const percentage = `${Math.round(x)}%`

          return (
            <div>
              <div className={classNameBack}>
                <div
                  className={classNameFill}
                  style={{
                    width: percentage,
                  }}
                />
              </div>
              <div
                className={classNameNumber}
                style={{
                  width: (x > 94) ? '100%' : `${x}%`,
                }}
              >
                <div
                  style={{
                    marginRight: (x > 94) ? '0' : '-1em',
                  }}
                  className={style.innerNumber}
                >
                  {percentage}
                </div>
              </div>
            </div>
          )
        }}
      </Motion>
    </div>
  )
}

Linear.propTypes = {
  percent: number.isRequired,
  disabled: bool,
}

Linear.defaultProps = {
  disabled: false,
}

export default Linear

