import React from 'react'

import { storiesOf } from '@storybook/react'

import Alert from '../../src/components/Alert'


storiesOf('Alerts', module)
  .add('All types', () => (
    <div>
      <p>Warning</p>
      <Alert type="warning" base="light">
        <p><strong>Warning</strong> something is going on!</p>
      </Alert>
      <p>Info</p>
      <Alert type="info" base="light">
        <p><strong>Info</strong> you can do it better!</p>
      </Alert>
      <p>Error</p>
      <Alert type="error" base="light">
        <p><strong>Error</strong> something went wrong!</p>
      </Alert>
      <p>Success</p>
      <Alert type="success" base="light">
        <p><strong>Success</strong> awesome, it worked!</p>
      </Alert>
    </div>
  ))

