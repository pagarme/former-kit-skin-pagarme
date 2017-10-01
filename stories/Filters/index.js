import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Filters from '../../src/containers/Filters'

import {
  paymentMethods,
  refuseReason,
  transactionStatus,
  installments,
  cardBrands,
  businessModel,
} from '../../src/shared'

import style from './style.css'

const dateRanges = [
  {
    value: 1,
    label: 'Hoje',
  },
  {
    value: 7,
    label: '7 dias',
  },
  {
    value: 15,
    label: '15 dias',
  },
  {
    value: 30,
    label: '30 dias',
  },
  {
    value: 60,
    label: '60 dias',
  },
]

const filters = [
  paymentMethods,
  refuseReason,
  businessModel,
  transactionStatus,
  installments,
  cardBrands,
]

storiesOf('Filters', module)
  .add('Default', () => (
    <div className={style.root}>
      <Filters
        dateRanges={dateRanges}
        sections={filters}
        onFilter={action('filters submitted')}
      />
    </div>
  ))
