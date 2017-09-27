import React, { Component } from 'react'

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

const dateRangeChanged = action('date change changed')

class DateRangeState extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 'calendar',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (payload) {
    this.setState({ selected: payload.value })

    dateRangeChanged(payload)
  }

  render () {
    return (
      <div>
        <div>
          <p>Com item pre-selecionado:</p>
          <DateRange
            items={items}
            onChange={this.handleChange}
            selected={this.state.selected}
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
    )
  }
}

storiesOf('Toolbar', module)
  .add('DateRange', () => <DateRangeState />)
