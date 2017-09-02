import React from 'react'

import { storiesOf } from '@storybook/react'

import Alert from '../../src/components/Alert'


storiesOf('Alerts/light', module)
  .add('warning', () => (
    <Alert type="warning" base="light">
      <p><strong>Warning</strong> something is going on!</p>
    </Alert>
  ))
  .add('info', () => (
    <Alert type="info" base="light">
      <p><strong>Info</strong> you can do it better!</p>
    </Alert>
  ))
  .add('error', () => (
    <Alert type="error" base="light">
      <p><strong>Error</strong> something went wrong!</p>
    </Alert>
  ))
  .add('success', () => (
    <Alert type="success" base="light">
      <p><strong>Success</strong> awesome, it worked!</p>
    </Alert>
  ))

storiesOf('Alerts/dark', module)
  .add('warning', () => (
    <Alert type="warning" base="dark">
      <p><strong>Warning</strong> something is going on!</p>
    </Alert>
  ))
  .add('info', () => (
    <Alert type="info" base="dark">
      <p><strong>Info</strong> you can do it better!</p>
    </Alert>
  ))
  .add('error', () => (
    <Alert type="error" base="dark">
      <p><strong>Error</strong> something went wrong!</p>
    </Alert>
  ))
  .add('success', () => (
    <Alert type="success" base="dark">
      <p><strong>Success</strong> awesome, it worked!</p>
    </Alert>
  ))

