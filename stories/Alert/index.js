import React from 'react'

import { storiesOf } from '@storybook/react'

import Alert from '../../src/components/Alert'


storiesOf('Alerts/light', module)
  .add('warning', () => (
    <Alert type="warning" theme="light">
      <p><strong>Warning</strong> something is going on!</p>
    </Alert>
  ))
  .add('info', () => (
    <Alert type="info" theme="light">
      <p><strong>Info</strong> you can do it better!</p>
    </Alert>
  ))
  .add('error', () => (
    <Alert type="error" theme="light">
      <p><strong>Error</strong> something went wrong!</p>
    </Alert>
  ))
  .add('success', () => (
    <Alert type="success" theme="light">
      <p><strong>Success</strong> awesome, it worked!</p>
    </Alert>
  ))

storiesOf('Alerts/dark', module)
  .add('warning', () => (
    <Alert type="warning" theme="dark">
      <p><strong>Warning</strong> something is going on!</p>
    </Alert>
  ))
  .add('info', () => (
    <Alert type="info" theme="dark">
      <p><strong>Info</strong> you can do it better!</p>
    </Alert>
  ))
  .add('error', () => (
    <Alert type="error" theme="dark">
      <p><strong>Error</strong> something went wrong!</p>
    </Alert>
  ))
  .add('success', () => (
    <Alert type="success" theme="dark">
      <p><strong>Success</strong> awesome, it worked!</p>
    </Alert>
  ))

