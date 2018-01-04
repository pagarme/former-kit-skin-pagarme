import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'
import Filters from '../index'
import dateSelectorPresets from '../../../models/dateSelectorPresets'
import filterOptions from '../../../models/transactionFilterOptions'

const dates = {
  start: moment(),
  end: moment(),
}

const selectedFilters = [
  'mastercard',
  '2',
  'boleto',
  'capture_timeout',
  'payed',
  'recurrence',
]

const searchValue = 'mock'

const noFilterComponent = mount(
  <Filters />
)

const onlyDateComponent = mount(
  <Filters
    datePresets={dateSelectorPresets}
    dates={dates}
  />
)

const onlySearchComponent = mount(
  <Filters search={searchValue} />
)

const onlyOptionsComponent = mount(
  <Filters
    options={filterOptions}
    values={selectedFilters}
  />
)

const allPropsComponent = mount(
  <Filters
    options={filterOptions}
    values={selectedFilters}
    search={searchValue}
    datePresets={dateSelectorPresets}
    dates={dates}
  />
)

const dateInputDatesCase = [
  {
    name: 'no filters',
    component: noFilterComponent,
  },
  {
    name: 'only date',
    component: onlyDateComponent,
    dates,
  },
  {
    name: 'only search text',
    component: onlySearchComponent,
  },
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
  },
  {
    name: 'all props',
    component: allPropsComponent,
    dates,
  },
]

const searchFieldCase = [
  {
    name: 'no filters',
    component: noFilterComponent,
  },
  {
    name: 'only date',
    component: onlyDateComponent,
  },
  {
    name: 'only search text',
    component: onlySearchComponent,
    searchValue,
  },
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
  },
  {
    name: 'all props',
    component: allPropsComponent,
    searchValue,
  },
]

const checkboxGroupCase = [
  {
    name: 'no filters',
    component: noFilterComponent,
    checkboxGroupLength: 0,
  },
  {
    name: 'only date',
    component: onlyDateComponent,
    checkboxGroupLength: 0,
  },
  {
    name: 'only search text',
    component: onlySearchComponent,
    checkboxGroupLength: 0,
  },
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
    checkboxGroupLength: filterOptions.length,
  },
  {
    name: 'all props',
    component: allPropsComponent,
    checkboxGroupLength: filterOptions.length,
  },
]

const submitButtonDisabledCase = [
  {
    name: 'no filters',
    component: noFilterComponent,
    disabled: true,
  },
  {
    name: 'only date',
    component: onlyDateComponent,
    disabled: true,
  },
  {
    name: 'only search text',
    component: onlySearchComponent,
    disabled: true,
  },
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
    disabled: true,
  },
  {
    name: 'all props',
    component: allPropsComponent,
    disabled: true,
  },
]

const submitButtonColorCase = [
  {
    name: 'no filters',
    component: noFilterComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'only date',
    component: onlyDateComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'only search text',
    component: onlySearchComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'all props',
    component: allPropsComponent,
    buttonRelevance: 'low',
  },
]

const resetButtonColorCase = [
  {
    name: 'no filters',
    component: noFilterComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'only date',
    component: onlyDateComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'only search text',
    component: onlySearchComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
    buttonRelevance: 'low',
  },
  {
    name: 'all props',
    component: allPropsComponent,
    buttonRelevance: 'low',
  },
]

const selectedFilterGroupCase = [
  {
    name: 'only filter options and values',
    component: onlyOptionsComponent,
    selectedFilters,
  },
  {
    name: 'all props',
    component: allPropsComponent,
    selectedFilters,
  },
]

export {
  dateInputDatesCase,
  searchFieldCase,
  checkboxGroupCase,
  submitButtonDisabledCase,
  submitButtonColorCase,
  resetButtonColorCase,
  selectedFilterGroupCase,
}
