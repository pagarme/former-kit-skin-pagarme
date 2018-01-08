import React from 'react'
import { storiesOf } from '@storybook/react'

import TableState from './TableState'

storiesOf('Table', module)
  .add('Simple', () => (
    <TableState
      clickableRow
    />
  ))
  .add('Selectable and expandable', () => (
    <TableState
      selectable
      expandable
    />
  ))
  .add('Action column', () => (
    <TableState
      primaryAction
    />
  ))
