import {
  changeDateInput,
  changeSearchInput,
  checkAllCheckboxes,
  uncheckAllCheckboxes,
  changeAllFilters,
} from './behaviourBeforeComponents'

import {
  datesDefault,
  searchValue,
  newDates,
  newSearchValue,
} from './common'

const beforeSubmit = {
  submitButtonDisabledCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
      expectedButtonDisabledState: false,
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
      expectedButtonDisabledState: false,
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
      expectedButtonDisabledState: false,
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
      expectedButtonDisabledState: false,
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
      expectedButtonDisabledState: false,
    },
  ],

  submitButtonRelevanceCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
      buttonRelevance: 'normal',
    },
  ],

  resetButtonRelevanceCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
      buttonRelevance: 'normal',
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
      buttonRelevance: 'normal',
    },
  ],

  correctTagCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
    },
  ],

  dateInputDatesCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
      dates: newDates,
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
      dates: datesDefault,
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
      dates: datesDefault,
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
      dates: datesDefault,
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
      dates: newDates,
    },
  ],

  searchInputSearchCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
      searchValue,
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
      searchValue: newSearchValue,
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
      searchValue,
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
      searchValue,
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
      searchValue: newSearchValue,
    },
  ],

  onChangeCase: [
    {
      name: 'when DateInput changes',
      ...changeDateInput(),
      shouldCallOnChange: false,
    },
    {
      name: 'when search input changes',
      ...changeSearchInput(),
      shouldCallOnChange: false,
    },
    {
      name: 'when checkboxes are checked',
      ...checkAllCheckboxes(),
      shouldCallOnChange: false,
    },
    {
      name: 'when checkboxes are unchecked',
      ...uncheckAllCheckboxes(),
      shouldCallOnChange: false,
    },
    {
      name: 'when all values are changed',
      ...changeAllFilters(),
      shouldCallOnChange: true,
    },
  ],
}

export default beforeSubmit
