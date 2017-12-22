import React from 'react'
import Filters from '../index'
import dateSelectorPresets from '../../../models/dateSelectorPresets'
import filterOptions from '../../../models/transactionFilterOptions'

class FilterState extends React.Component {
  constructor (props) {
    super(props)

    const {
      search,
      values,
      dates,
    } = props

    this.state = {
      search,
      values,
      dates,
    }

    this.handleFiltersChange = this.handleFiltersChange.bind(this)
  }

  handleFiltersChange (filters) {
    const {
      search,
      values,
      dates,
    } = filters

    this.setState({
      search,
      values,
      dates,
    })

    this.props.onChange(filters)
  }

  render () {
    const {
      options,
      datePresets,
    } = this.props

    const {
      search,
      values,
      dates,
    } = this.state

    return (
      <Filters
        search={search}
        datePresets={datePresets}
        dates={dates}
        values={values}
        options={options}
        onChange={this.handleFiltersChange}
      />
    )
  }
}

FilterState.propTypes = {
  datePresets: Filters.propTypes.datePresets.isRequired,
  dates: Filters.propTypes.dates,
  options: Filters.propTypes.options.isRequired,
  search: Filters.propTypes.search,
  values: Filters.propTypes.values,
  onChange: Filters.propTypes.onChange.isRequired,
}

FilterState.defaultProps = {
  datePresets: dateSelectorPresets,
  dates: {},
  options: filterOptions,
  search: '',
  values: [],
}

export default FilterState
