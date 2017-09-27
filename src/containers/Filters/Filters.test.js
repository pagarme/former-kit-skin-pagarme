import React from 'react'

import { mount } from 'enzyme'
import { merge } from 'ramda'
import moment from 'moment'

import Filters from './index'
import DateRange from './../../components/Toolbar/DateRange'
import SearchField from './../../components/Toolbar/SearchField'
import CheckboxGroup from './../../components/CheckboxGroup'
import { CardActions } from './../../components/Card'

const getDateRangePayload = days => ({
  start: moment().add(-days, 'day').startOf('day'),
  end: moment().endOf('day'),
})

const dateRanges = [
  {
    value: 1,
    label: 'Hoje',
  },
  {
    value: 7,
    label: '7 dias',
  },
  {
    value: 15,
    label: '15 dias',
  },
]

const filters = [
  {
    key: 'key1',
    name: 'Title 1',
    items: [
      {
        label: 'Option 1',
        value: '111',
      },
      {
        label: 'Option 2',
        value: '222',
      },
    ],
  },
  {
    key: 'key2',
    name: 'Title 2',
    items: [
      {
        label: 'Label 1',
        value: '111',
      },
      {
        label: 'Label 2',
        value: '222',
      },
    ],
  },
]

describe('Filters', () => {
  const preventDefault = jest.fn()

  it('should call onFilter', () => {
    const onFilter = jest.fn()

    const component = mount(
      <Filters
        dateRanges={dateRanges}
        sections={filters}
        onFilter={onFilter}
      />
    )

    component.find('form').simulate('submit', {
      preventDefault,
    })

    expect(onFilter).toHaveBeenCalledTimes(1)
    expect(preventDefault).toHaveBeenCalledTimes(1)
    expect(onFilter).toHaveBeenLastCalledWith({
      selectedDate: { value: dateRanges[0].value },
      search: '',
    })
  })

  it('should call onFilter with selected filters', () => {
    const onFilter = jest.fn()

    const component = mount(
      <Filters
        dateRanges={dateRanges}
        sections={filters}
        onFilter={onFilter}
      />
    )

    const query = 'transação 5000'
    const dateIndex = 2

    // select filters
    component.find(DateRange).find('input').at(dateIndex).simulate('change')
    component.find(SearchField).find('input').simulate('change', {
      target: { value: query },
    })

    // submit form
    component.find('form').simulate('submit', {
      preventDefault,
    })

    // assert call back
    expect(onFilter).toHaveBeenLastCalledWith({
      selectedDate: merge(
        { value: dateRanges[dateIndex].value },
        getDateRangePayload(dateRanges[dateIndex].value)
      ),
      search: query,
    })
  })

  it('should call onFilter with selected items', () => {
    const onFilter = jest.fn()

    const component = mount(
      <Filters
        dateRanges={dateRanges}
        sections={filters}
        onFilter={onFilter}
      />
    )

    component
      .find(CheckboxGroup)
      .first()
      .find('input')
      .at(1)
      .simulate('change')

    component
      .find(CheckboxGroup)
      .at(1)
      .find('input')
      .first()
      .simulate('change')

    component
      .find('form')
      .simulate('submit', {
        preventDefault,
      })

    expect(onFilter).toHaveBeenLastCalledWith({
      key1: [filters[0].items[1].value],
      key2: [filters[1].items[0].value],
      search: '',
      selectedDate: { value: dateRanges[0].value },
    })
  })

  it('should clean all selected filters', () => {
    const onFilter = jest.fn()

    const component = mount(
      <Filters
        dateRanges={dateRanges}
        sections={filters}
        onFilter={onFilter}
      />
    )

    component
      .find(CheckboxGroup)
      .first()
      .find('input')
      .at(1)
      .simulate('change')

    component
      .find(CheckboxGroup)
      .at(1)
      .find('input')
      .at(1)
      .simulate('change')

    component
      .find(CardActions)
      .find('button')
      .first()
      .simulate('click')

    component.find('form').simulate('submit', {
      preventDefault,
    })

    expect(onFilter).toHaveBeenLastCalledWith({
      search: '',
      selectedDate: { value: dateRanges[0].value },
    })
  })
})
