import React from 'react'
import shortid from 'shortid'
import {
  is,
} from 'ramda'

import {
  arrayOf,
  oneOfType,
  shape,
  string,
  element,
  number,
  func,
  bool,
} from 'prop-types'

import moment from 'moment'

import style from './style.css'
import toolItemStyle from '../style.css'

class DateRange extends React.Component {
  constructor (props) {
    super(props)

    this.name = shortid.generate()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    const response = {
      value,
    }

    if (is(Number, value)) {
      response.start = moment().add(-value, 'day').startOf('day')
      response.end = moment().endOf('day')
    }

    this.props.onChange(response)
  }

  render () {
    const {
      items,
      selected,
      disabled,
    } = this.props

    return (
      <div className={toolItemStyle.root}>
        {items.map(({ label, value }) => (
          <label
            className={style.item}
            key={`${this.name}-${value}`}
            htmlFor={`${this.name}-${value}`}
          >
            <input
              name={this.name}
              type="radio"
              id={`${this.name}-${value}`}
              value={value}
              disabled={disabled}
              onChange={() => !disabled && this.handleChange(value)}
              checked={selected === value}
              className={style.input}
            />

            <span className={style.label}>{label}</span>
          </label>
        ))}
      </div>
    )
  }
}

DateRange.propTypes = {
  items: arrayOf(shape({
    label: oneOfType([string, element, func]),
    value: oneOfType([string, number]),
  })).isRequired,
  onChange: func.isRequired,
  selected: oneOfType([number, string]),
  disabled: bool,
}

DateRange.defaultProps = {
  selected: null,
  disabled: false,
}

export default DateRange
