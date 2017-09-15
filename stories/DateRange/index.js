import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import IconCalendar from 'react-icons/lib/fa/calendar'
import DateRange from '../../src/components/DateRange'

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

storiesOf('DateRange', module)
  .add('todos', () => (
    <div>
      <div>
        Com item pre-selecionado:<br />
        <DateRange
          items={items}
          onChange={onChange}
          selected={'calendar'}
        />
      </div>
      <div>
        <DateRange
          items={items}
          onChange={onChange}
          selected={0}
        />
      </div>
      <div>
        Desabilitado:<br />

        <DateRange
          items={items}
          onChange={onChange}
          disabled
          selected={7}
        />
      </div>
    </div>
  ))
