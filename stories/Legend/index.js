import React from 'react'
import { storiesOf } from '@storybook/react'

import Legend from '../../src/components/Legend'

const hidingLabel = [
  {
    color: 'blue-100',
    text: 'Boleto pago com valor superior',
    acronym: 'BPVS',
    hideLabel: true,
  },
  {
    color: 'purple-300',
    text: 'Chargeback',
    acronym: 'CB',
    hideLabel: true,
  },
  {
    color: 'green-200',
    text: 'Aguardando pagamento',
    hideLabel: true,
  },
]

const automaticAbbr = [
  {
    color: 'green-100',
    text: 'Paga',
  },
  {
    color: 'yellow',
    text: 'Autorizada',
  },
  {
    color: 'orange-100',
    text: 'Estornada',
  },
  {
    color: 'grey',
    text: 'Aguardando registro',
  },
  {
    color: 'red-100',
    text: 'Recusada',
  },
  {
    color: 'orange-200',
    text: 'Estorno pendente',
  },
]

const manualAbbr = [
  {
    color: 'red-300',
    text: 'Processando',
    acronym: 'PR',
  },
  {
    color: 'blue-300',
    text: 'Boleto pago com valor inferior',
    acronym: 'BPVI',
  },
  {
    color: 'purple-100',
    text: 'Chargeback Reapresentado',
    acronym: 'CBR',
  },
]

const createLegends = (title, status) => (
  <div>
    {title}

    {status.map(({ color, text, outline, acronym, hideLabel }) => (
      <div key={text} style={{ margin: '10px' }}>
        <Legend
          color={color}
          outline={outline}
          acronym={acronym}
          hideLabel={hideLabel}
        >
          {text}
        </Legend>
      </div>
    ))}
  </div>
)


storiesOf('Legend', module)
  .add('all', () => (
    <div>
      {createLegends('Without acronym prop', automaticAbbr)}
      {createLegends('With acronym prop', manualAbbr)}
      {createLegends('With hideLabel prop', hidingLabel)}
    </div>
  ))
