import React, { Component } from 'react'

import {
  instanceOf,
  arrayOf,
  func,
  shape,
  string,
} from 'prop-types'

import moment from 'moment'

import IconFunnel from 'react-icons/lib/fa/filter'

import {
  equals,
  partial,
  pick,
} from 'ramda'

import style from './style.css'

import {
  Card,
  CardTitle,
  CardContent,
  CardActions,
  CardSection,
} from '../../components/Card'

import DateInput from '../../components/Toolbar/DateInput'
import SearchField from '../../components/Toolbar/SearchField'
import Toolbar from '../../components/Toolbar'
import Button from '../../components/Button'
import Tag from '../../components/Tag'

import {
  Row,
  Col,
} from '../../components/Grid'

import CheckboxGroup from '../../components/CheckboxGroup'

import compileTags from './compileTags'

class Filters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      collapsed: true,
      search: props.search,
      values: props.values,
      dates: props.dates,
    }

    this.handleVisibility = this.handleVisibility.bind(this)
    this.handleDateInputChange = this.handleDateInputChange.bind(this)
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleCleanFilters = this.handleCleanFilters.bind(this)
    this.handleFiltersSubmit = this.handleFiltersSubmit.bind(this)

    this.cardTitle = this.cardTitle.bind(this)
  }

  componentWillReceiveProps (props) {
    const allowed = ['search', 'values', 'dates']
    const { search, values, dates } = this.state

    const next = pick(allowed, props)
    const current = { search, values, dates }

    if (!equals(next, current)) {
      this.setState(next)
    }
  }

  handleVisibility () {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  handleDateInputChange (selectedDate) {
    this.setState({
      dates: selectedDate,
    })
  }

  handleSearchFieldChange (search) {
    this.setState({
      search,
    })
  }

  handleFilterChange (filter, values) {
    this.setState({
      values,
    })
  }

  handleCleanFilters () {
    const filters = {
      values: [],
      search: '',
      dates: this.props.dates,
    }

    this.props.onChange(filters)
  }

  handleFiltersSubmit (event) {
    event.preventDefault()

    const {
      values,
      search,
      dates,
    } = this.state

    const currentFilters = {
      values,
      search,
      dates,
    }

    this.setState({
      collapsed: true,
    })

    this.props.onChange(currentFilters)
  }

  cardTitle () {
    const optionsKeys = Object.keys(this.state.values)

    const { collapsed } = this.state

    if (!collapsed) {
      return 'Menos filtros'
    }

    if (collapsed && optionsKeys.length === 0) {
      return 'Mais filtros'
    }

    return 'Editar filtros'
  }

  renderToolbar () {
    const {
      datePresets,
    } = this.props

    const {
      dates,
    } = this.state

    const isDateActive = dates.start !== null && dates.end !== null

    return (
      <Toolbar>
        <DateInput
          dates={dates}
          active={isDateActive}
          onChange={this.handleDateInputChange}
          presets={datePresets}
        />

        <SearchField
          value={this.state.search}
          placeholder="Filtre por ID, CPF, nome e e-mail."
          onChange={this.handleSearchFieldChange}
          active={!!this.state.search}
        />
      </Toolbar>
    )
  }

  renderOptions () {
    const {
      collapsed,
    } = this.state

    return (
      <CardSection
        title={this.cardTitle()}
        collapsedTitle={this.cardTitle()}
        collapsed={collapsed}
        onTitleClick={() => this.setState({ collapsed: !collapsed })}
      >
        <Row>
          {this.props.options.map(({ name, items, key }) => (
            <Col palm={12} tablet={6} desk={4} tv={4} key={name}>
              <h4 className={style.heading}>{name}</h4>
              <Row>
                <CheckboxGroup
                  columns={2}
                  className={style.checkboxGroup}
                  options={items}
                  name={name}
                  onChange={partial(this.handleFilterChange, [key])}
                  values={this.state.values || []}
                />
              </Row>
            </Col>
          ))}
        </Row>
      </CardSection>
    )
  }

  renderTags () {
    const {
      collapsed,
      values,
    } = this.state

    const {
      options,
    } = this.props

    if (collapsed && values.length > 0) {
      const tags = compileTags(options, values)

      return (
        <div>
          <div className={style.selectedOptionsTitle}>
            Opções selecionadas
          </div>
          <div className={style.selectedOptionsTags}>
            {tags.map(({ value, label }) => (
              <Tag key={value}>
                {label}
              </Tag>
            ))}
          </div>
        </div>
      )
    }

    return null
  }

  renderActions () {
    const originalFilters = {
      search: this.props.search,
      dates: this.props.dates,
      values: this.props.values,
    }

    const currentFilters = {
      search: this.state.search,
      dates: this.state.dates,
      values: this.state.values,
    }

    const filtersChanged = !equals(originalFilters, currentFilters)

    return (
      <CardActions>
        <Button
          color={filtersChanged ? 'green' : 'silver'}
          onClick={this.handleCleanFilters}
          variant="outline"
        >
          Limpar filtros
        </Button>

        <Button
          color={filtersChanged ? 'green' : 'silver'}
          disabled={!filtersChanged}
          type="submit"
          variant="gradient"
        >
          Filtrar
        </Button>
      </CardActions>
    )
  }

  render () {
    return (
      <Card className={style.allowContentOverflow}>
        <form action="/" method="post" onSubmit={this.handleFiltersSubmit}>
          <CardTitle
            title="Filtros"
            icon={<IconFunnel />}
          />

          <CardContent className={style.cardContent}>
            {this.renderToolbar()}
            {this.renderOptions()}
            {this.renderTags()}
          </CardContent>

          {this.renderActions()}
        </form>
      </Card>
    )
  }
}

Filters.propTypes = {
  options: arrayOf(shape({
    key: string,
    name: string,
    items: arrayOf(shape({
      label: string,
      value: string,
    })),
  })),
  values: arrayOf(string),
  search: string,
  dates: shape({
    start: instanceOf(moment),
    end: instanceOf(moment),
  }),
  datePresets: arrayOf(shape({
    key: string,
    title: string,
    date: string,
    items: arrayOf(shape({
      title: string,
      date: func,
    })),
  })),
  onChange: func,
}

Filters.defaultProps = {
  options: [],
  values: [],
  search: '',
  dates: {
    start: moment(),
    end: moment(),
  },
  datePresets: [],
  onChange: () => undefined,
}

export default Filters
