import React from 'react'
import { shallow } from 'enzyme'
import IconCalendar from 'react-icons/lib/fa/calendar'

import DateRange from './index'

jest.mock('shortid')

describe('DateRange', () => {
  it('should call onChange with first value', () => {
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
        selected="calendar"
      />
    )

    component.find('input')
      .first()
      .simulate('change')

    expect(onChange).toHaveBeenCalledWith('hoje')
  })

  it('should call onChange with the value', () => {
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

    expect(onChange).toHaveBeenCalledTimes(3)
    expect(onChange).toHaveBeenCalledWith('hoje')
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
