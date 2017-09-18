import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ContextSwitch from '../../src/components/ContextSwitch'

const Grey = ({ children }) => (
  <div style={{
    backgroundColor: '#eee',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
)

storiesOf('ContextSwitch', module)
  .add('Two Options', () => (
    <Grey>
      <ContextSwitch
        items={['test', 'live']}
        onChange={action('ContextSwitch Changed')}
        name="live-test"
      />
    </Grey>
  ))
  .add('More Options', () => (
    <Grey>
      <ContextSwitch
        items={['test', 'live', 'super-test', 'extra-live']}
        onChange={action('ContextSwitch Changed')}
        selected="super-test"
        name="super-extra"
      />
    </Grey>
  ))

