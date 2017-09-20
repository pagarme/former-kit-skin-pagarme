import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import IconCalendar from 'react-icons/lib/fa/calendar'
import DateRange from '../../src/components/Toolbar/DateRange'

const onChange = action('Changed DateRange')
const items = [
  {
    label: 'today',
    value: 0,
  },
  {
    label: '7 dias',
    value: 7,
  },
  {
    label: '15 dias',
    value: 15,
  },
  {
    label: '30 dias',
    value: 30,
  },
  {
    label: '60 dias',
    value: 60,
  },
  {
    label: <IconCalendar />,
    value: 'calendar',
  },
]

storiesOf('Toolbar', module)
  .add('DateRange', () => (
    <div>
      <div>
        <p>Com item pre-selecionado:</p>
        <DateRange
          items={items}
          onChange={onChange}
          selected={'calendar'}
        />
      </div>
      <div>
        <p>Desabilitado:</p>

        <DateRange
          items={items}
          onChange={onChange}
          disabled
          selected={7}
        />
      </div>
    </div>
  ))
