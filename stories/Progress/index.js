import React from 'react'
import { storiesOf } from '@storybook/react'

import CircularProgress from '../../src/components/CircularProgress'
import LinearProgress from '../../src/components/LinearProgress'

const Light = ({children}) => (
  <div
    style={{
      width:'100%',
      height: '100%',
      backgroundColor: '#ffffff',
      paddingTop: '1em',
      paddingBottom: '1em',
    }}
  >
    {children}
  </div>
)

const percentages = [0, 25, 50, 75, 100]

storiesOf('Progress/Linear', module)
  .add('disabled', () => (
    <Light>
      {percentages.map((percent, index) => (
        <div key={`mock${index}`}>
          <LinearProgress
            disabled
            label={'Lorem Label'}
            percent={percent}
          />
        </div>
      ))}
    </Light>
  ))
  .add('normal', () => (
    <Light>
      {percentages.map((percent, index) => (
        <div key={`mock${index}`}>
          <LinearProgress
            label={'Lorem Label'}
            percent={percent}
          />
        </div>
      ))}
    </Light>
  ))

storiesOf('Progress/Circular', module)
  .add('disabled', () => (
    <Light>
      {percentages.map((percent, index) => (
        <CircularProgress
          key={`mock${index}`}
          label={'Lorem Label'}
          disabled
          percent={percent}
        />
      ))}
    </Light>
  ))
  .add('normal', () => (
    <Light>
      {percentages.map((percent, index) => (
        <CircularProgress
          key={`mock${index}`}
          label={'Lorem Label'}
          percent={percent}
        />
      ))}
    </Light>
  ))
