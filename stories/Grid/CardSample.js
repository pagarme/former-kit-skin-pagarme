import React from 'react'
import { node, number, string } from 'prop-types'

import {
  Card,
  CardGraphic,
} from '../../src/components/Card'

import style from './CardSample.style.css'


const CardSample = ({ size, color, children }) => (
  <Card>
    <CardGraphic>
      <div
        className={style.cardSample}
        style={{ backgroundColor: color }}
      >
        {size > 0
          ? `${size} column${size > 1 ? 's' : ''}`
          : null
        }
        {children}
      </div>
    </CardGraphic>
  </Card>
)

CardSample.propTypes = {
  size: number,
  color: string,
  children: node,
}

CardSample.defaultProps = {
  size: 0,
  color: '#ffffff',
  children: null,
}

export default CardSample
