import React from 'react'
import { shallow } from 'enzyme'
import IconCalendar from 'react-icons/lib/fa/calendar'
import moment from 'moment'
import {
  merge,
} from 'ramda'

import DateRange from './index'

jest.mock('shortid')

const getDateRangePayload = days => ({
  start: moment().add(-days, 'day').startOf('day'),
  end: moment().endOf('day'),
})

describe('DateRange', () => {
  it('should call onChange with first value', () => {
    const onChange = jest.fn()
    const items = [{
      label: 'hoje',
      value: 1,
    }, {
      label: 'Item',
      value: 10,
    }, {
      label: IconCalendar,
      value: 'calendar',
    }]

    const component = shallow(
      <DateRange
        items={items}
        onChange={onChange}
        selected="calendar"
      />
    )

    component.find('input')
      .first()
      .simulate('change')

    expect(onChange).toHaveBeenCalledWith(
      merge(
        { value: items[0].value },
        getDateRangePayload(items[0].value)
      )
    )
  })

  it('should call onChange with the value', () => {
    const onChange = jest.fn()
    const items = [{
      label: 'hoje',
      value: 1,
    }, {
      label: 'Item',
      value: 10,
    }, {
      label: IconCalendar,
      value: 'calendar',
    }]

    const component = shallow(
      <DateRange
        items={items}
        onChange={onChange}
        selected="calendar"
      />
    )

    component.find('input')
      .first()
      .simulate('change')

    component.find('input')
      .last()
      .simulate('change')

    component.find('input')
      .first()
      .simulate('change')

    expect(onChange).toHaveBeenCalledWith(
      merge(
        { value: items[0].value },
        getDateRangePayload(items[0].value)
      )
    )
  })

  it('should not call onChange when disabled', () => {
    const onChange = jest.fn()
    const items = [{
      label: 'hoje',
      value: 'hoje',
    }, {
      label: 'Item',
      value: 10,
    }, {
      label: IconCalendar,
      value: 'calendar',
    }]

    const component = shallow(
      <DateRange
        items={items}
        onChange={onChange}
        disabled
        selected="calendar"
      />
    )

    component.find('input')
      .first()
      .simulate('change')

    component.find('input')
      .last()
      .simulate('change')

    expect(onChange).toHaveBeenCalledTimes(0)
  })
})
