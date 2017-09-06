import React from 'react'
import {
  number,
  string,
  bool,
} from 'prop-types'
import classnames from 'classnames'
import {
  Motion,
  spring,
} from 'react-motion'

import style from './style.css'

const base = {
  stroke: '#cccccc',
  fillStart: 'rgba(67, 197, 216, 1)',
  fillEnd: 'rgba(166, 122, 255, 1)',

  disabled: {
    fillStart: 'rgb(100, 100, 100)',
    fillEnd: 'red',
  },
}

const arcStart = '40'
const arcEnd = '160'
const arcAngle = '90'
const min = 730
const max = 298
const arc = [
  `M ${arcStart},${arcEnd}`,
  `A ${arcAngle} ${arcAngle} 0 1 1 ${arcEnd} ${arcEnd}`,
].join('')

const { round } = Math
const rgba = ({ r, g, b, a = 1 }) =>
  `rgba(${round(r)}, ${round(g)}, ${round(b)}, ${a})`

const Circular = ({
  percent,
  label,
  disabled,
}) => {
  const range = min - max
  const percentage = spring(min - (range * (percent / 100)))

  const classNameLabel = classnames(
    style.label,
    { [style.labelDisabled]: disabled }
  )

  return (
    <div className={style.circular}>
      <svg
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient
            id="linear-light"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor={disabled ? base.disabled.fillStart : base.fillStart}
            />
            <stop
              offset="100%"
              stopColor={disabled ? base.disabled.fillEnd : base.fillEnd}
            />
          </linearGradient>
        </defs>

        <path
          className={style.back}
          d={arc}
          fill="transparent"
          stroke={base.stroke}
        />

        <Motion
          defaultStyle={{
            offset: min,
          }}
          style={{
            offset: percentage,
          }}
        >
          {motion => (
            <path
              d={arc}
              fill="transparent"
              stroke={'url(#linear-light)'}
              className={style.fill}
              style={{
                strokeDashoffset: `${round(motion.offset)}px`,
              }}
            />
          )}
        </Motion>
      </svg>

      <div className={style.percent}>
        <Motion
          defaultStyle={{ x: 0, r: 67, g: 197, b: 216 }}
          style={{ x: spring(percent), r: spring(166), g: spring(122), b: spring(255) }}
        >
          {({ x, r, g, b }) => (
            <span
              style={{
                color: rgba({ r, g, b }),
              }}
            >
              {`${round(x)}%`}
            </span>
          )}
        </Motion>
      </div>

      <div className={classNameLabel}>
        {label}
      </div>
    </div>
  )
}

Circular.propTypes = {
  percent: number.isRequired,
  label: string.isRequired,
  disabled: bool,
}

Circular.defaultProps = {
  disabled: false,
}

export default Circular
