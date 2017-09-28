import React from 'react'
import { storiesOf } from '@storybook/react'

import CircularProgress from '../../src/components/CircularProgress'
import LinearProgress from '../../src/components/LinearProgress'

import style from './style.css'

const percentages = [0, 25, 50, 75, 100]


storiesOf('Progress', module)
  .add('Linear', () => (
    <div className={style.showcase}>
      <section>
        <h2>Normal state</h2>
        {percentages.map((percent, index) => (
          <div key={`mock${index}`}>
            <LinearProgress
              label={'Lorem Label'}
              percent={percent}
            />
          </div>
        ))}
      </section>
      <section>
        <h2>Disabled state</h2>
        {percentages.map((percent, index) => (
          <div key={`mock${index}`}>
            <LinearProgress
              disabled
              label={'Lorem Label'}
              percent={percent}
            />
          </div>
        ))}
      </section>
    </div>
  ))

storiesOf('Progress', module)
  .add('Circular', () => (
    <div className={style.container}>
      <section>
        <h2>Normal state</h2>
        {percentages.map((percent, index) => (
          <CircularProgress
            key={`mock${index}`}
            label={'Lorem Label'}
            percent={percent}
          />
        ))}
      </section>
      <section>
        <h2>Disabled state</h2>
        {percentages.map((percent, index) => (
          <CircularProgress
            key={`mock${index}`}
            label={'Lorem Label'}
            percent={percent}
            disabled
          />
        ))}
      </section>
    </div>
  ))

