import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'

import Filters from '../index'
import { CardSection } from '../../../components/Card'
import dateSelectorPresets from '../../../models/dateSelectorPresets'
import CheckboxGroup from '../../../components/CheckboxGroup'
import Checkbox from '../../../components/Checkbox'
import FilterState from './FilterState'

const filterOptions = [
  {
    key: 'card_brand',
    name: 'Bandeiras',
    items: [
      {
        label: 'Visa',
        value: 'visa',
      },
      {
        label: 'Elo',
        value: 'elo',
      },
      {
        label: 'Aura',
        value: 'aura',
      },
    ],
  },
  {
    key: 'installments',
    name: 'Número de parcelas',
    items: [
      {
        label: '1x',
        value: '1',
      },
      {
        label: '2x',
        value: '2',
      },
      {
        label: '3x',
        value: '3',
      },
    ],
  },
]

const selectedFilters = [
  'visa',
  '2',
]

const filterOptionsValues = filterOptions.reduce((prev, next) =>
  prev.concat(next.items.map(i => i.value)), []
)

const datesDefault = {
  start: moment('20120620'),
  end: moment('20120620'),
}

const newDates = {
  start: moment(),
  end: moment(),
}

const searchValue = 'once upon a time'

const createComponents = ({
  options = filterOptions,
  values = selectedFilters,
  search = searchValue,
  datePresets = dateSelectorPresets,
  dates = datesDefault,
} = {}) => {
  const onChange = jest.fn()
  const stateComponent = mount(
    <FilterState
      options={options}
      values={values}
      search={search}
      datePresets={datePresets}
      dates={dates}
      onChange={onChange}
    />
  )
  const component = stateComponent.find(Filters).first()

  return {
    onChange,
    stateComponent,
    component,
  }
}

const finalSelectedFilters = [
  '2',
  'capture_timeout',
  'recurrence',
]

const toggleCheckboxes = values => (node) => {
  let input = node
  if (values.includes(node.props().value)) {
    if (node.is(Checkbox)) {
      input = node.find('input').first()
    }
    input.simulate('change')
  }
}

const newSearchValue = 'This is the end'

const toggleFilterOptions = component => (
  component
    .find(CardSection)
    .find('a')
    .simulate('click')
)

const togglableFilters = [
  'visa',
]

const getCheckboxGroups = component =>
  component.find(CheckboxGroup)

const getCheckboxes = component =>
  getCheckboxGroups(component)
    .find(Checkbox)

const getCheckedCheckboxes = component =>
  getCheckboxGroups(component)
    .findWhere(node =>
      node.is(Checkbox) &&
      node.props().checked
    )

export {
  createComponents,
  datesDefault,
  filterOptions,
  filterOptionsValues,
  finalSelectedFilters,
  getCheckboxGroups,
  getCheckboxes,
  getCheckedCheckboxes,
  newDates,
  newSearchValue,
  searchValue,
  selectedFilters,
  togglableFilters,
  toggleCheckboxes,
  toggleFilterOptions,
}
