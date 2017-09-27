import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IconArrowUp from 'react-icons/lib/md/keyboard-arrow-up'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import IconFunnel from 'react-icons/lib/fa/filter'
import {
  merge,
  partial,
} from 'ramda'

import style from './style.css'

import {
  Card,
  CardTitle,
  CardContent,
  CardActions,
} from '../../components/Card'

import DateRange from '../../components/Toolbar/DateRange'
import SearchField from '../../components/Toolbar/SearchField'
import Button from '../../components/Button'

import {
  Grid,
  Row,
  Col,
} from '../../components/Grid'

import CheckboxGroup from '../../components/CheckboxGroup'


class Filters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showContent: true,
      selectedDate: '',
      search: '',
      activeFilters: {},
    }

    this.handleVisibility = this.handleVisibility.bind(this)
    this.handleDateRangeChange = this.handleDateRangeChange.bind(this)
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleCleanFilters = this.handleCleanFilters.bind(this)
    this.handleFiltersSubmit = this.handleFiltersSubmit.bind(this)
  }

  componentDidMount () {
    this.setDefaults()
  }

  setDefaults () {
    const {
      dateRanges,
    } = this.props

    this.setState({
      selectedDate: { value: dateRanges[0].value },
    })
  }

  handleVisibility () {
    this.setState({ showContent: !this.state.showContent })
  }

  handleDateRangeChange (selectedDate) {
    this.setState({ selectedDate })
  }

  handleSearchFieldChange (search) {
    this.setState({ search })
  }

  handleFilterChange (filter, values) {
    this.setState({
      activeFilters: merge(
        this.state.activeFilters,
        { [filter]: values }
      ),
    })
  }

  handleCleanFilters () {
    this.setState({
      activeFilters: {},
      selectedDate: 'hoje',
      search: '',
    })

    this.setDefaults()
  }

  handleFiltersSubmit (event) {
    event.preventDefault()

    const {
      activeFilters,
      selectedDate,
      search,
    } = this.state

    const selectedFilters = merge(
      activeFilters,
      {
        selectedDate,
        search,
      }
    )

    this.props.onFilter(selectedFilters)
  }

  render () {
    const {
      showContent,
    } = this.state

    return (
      <Card>
        <form action="/" method="post" onSubmit={this.handleFiltersSubmit}>
          <CardTitle
            title="Filtros"
            icon={<IconFunnel />}
            onClick={this.handleVisibility}
          >
            {
              showContent
                ? <IconArrowUp />
                : <IconArrowDown />
            }
          </CardTitle>

          <CardContent>
            <Grid>
              <Row flex>
                <Col>
                  <DateRange
                    items={this.props.dateRanges}
                    onChange={this.handleDateRangeChange}
                    selected={this.state.selectedDate.value}
                  />
                </Col>
                <Col alignEnd>
                  <SearchField
                    value={this.state.search}
                    onChange={this.handleSearchFieldChange}
                  />
                </Col>
              </Row>

              {showContent &&
                <Row>
                  {this.props.sections.map(({ name, items, key }) => (
                    <Col palm={12} tablet={6} desk={4} tv={4} key={name}>
                      <h4 className={style.heading}>{name}</h4>
                      <Row>
                        <CheckboxGroup
                          columns={2}
                          className={style.checkboxGroup}
                          options={items}
                          name={name}
                          onChange={partial(this.handleFilterChange, [key])}
                          values={this.state.activeFilters[key] || []}
                        />
                      </Row>
                    </Col>
                  ))}
                </Row>
              }
            </Grid>
          </CardContent>
          { showContent &&
            <CardActions>
              <Grid>
                <Row flex>
                  <Col alignEnd className={style.actionsSpacing}>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={this.handleCleanFilters}
                    >
                      Limpar filtros
                    </Button>

                    <Button
                      type="submit"
                      size="small"
                    >
                      Filtrar
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </CardActions>
          }
        </form>
      </Card>
    )
  }
}

Filters.propTypes = {
  dateRanges: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  })).isRequired,
  onFilter: PropTypes.func.isRequired,
}

export default Filters
