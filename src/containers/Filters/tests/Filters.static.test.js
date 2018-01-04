import cases from 'jest-in-case'
import moment from 'moment'

import DateInput from '../../../components/Toolbar/DateInput'
import SearchField from '../../../components/Toolbar/SearchField'
import Button from '../../../components/Button'
import CheckboxGroup from '../../../components/CheckboxGroup'
import { CardActions } from '../../../components/Card'
import {
  dateInputDatesCase,
  searchFieldCase,
  checkboxGroupCase,
  submitButtonDisabledCase,
  submitButtonColorCase,
  resetButtonColorCase,
  selectedFilterGroupCase,
} from './staticCases'
import { toggleFilterOptions } from './common'

describe('Filters', () => {
  describe('Static tests', () => {
    cases('should have DateInput with correct dates props', (opts) => {
      const dateInputProps = opts.component.find(DateInput).props()
      const { dates: datesProp } = dateInputProps

      expect(datesProp).toHaveProperty('start')
      expect(datesProp).toHaveProperty('end')

      const { start, end } = datesProp

      expect(datesProp).toBeDefined()
      expect(start).toBeInstanceOf(moment)
      expect(end).toBeInstanceOf(moment)

      if (opts.dates) {
        expect(start).toBe(opts.dates.start)
        expect(end).toBe(opts.dates.end)
      }
    }, dateInputDatesCase)

    cases('should have SearchField with correct value prop', (opts) => {
      const { value } = opts.component.find(SearchField).props()

      if (opts.searchValue) {
        expect(value).toBe(opts.searchValue)
      } else {
        expect(value).toBe('')
      }
    }, searchFieldCase)

    cases('should have CheckboxGroup with correct values props', ({ component, checkboxGroupLength }) => {
      toggleFilterOptions(component)
      expect(component.find(CheckboxGroup)).toHaveLength(checkboxGroupLength)
      toggleFilterOptions(component)
    }, checkboxGroupCase)

    cases('should have submit button with correct disabled prop', (opts) => {
      const submitButton = opts.component
        .find(CardActions)
        .findWhere(node => node.is(Button) && node.prop('type') === 'submit')

      expect(submitButton.props().disabled).toBe(opts.disabled)
    }, submitButtonDisabledCase)

    cases('should have submit button with correct relevance', (opts) => {
      const submitButton = opts.component
        .find(CardActions)
        .find(Button)
        .last()

      expect(submitButton.props().relevance).toBe(opts.buttonRelevance)
    }, submitButtonColorCase)

    cases('should have reset button with correct relevance', (opts) => {
      const resetButton = opts.component
        .find(CardActions)
        .findWhere(node => node.is(Button) && node.prop('type') !== 'submit')

      expect(resetButton.props().relevance).toBe(opts.buttonRelevance)
    }, resetButtonColorCase)

    cases('should have one item selected in each filterGroup', ({ component, selectedFilters }) => {
      // expand filters section
      toggleFilterOptions(component)

      const filterGroups = component.find(CheckboxGroup)
      const selectedCheckboxFilters = filterGroups
        .findWhere(node => node.is('input') && node.props().checked === true)

      expect(selectedCheckboxFilters.length).toBe(selectedFilters.length)

      // collapse filters section
      toggleFilterOptions(component)
    }, selectedFilterGroupCase)
  })
})
