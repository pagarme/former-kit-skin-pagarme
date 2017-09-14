import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { partial } from 'ramda'
import Checkbox from '../Checkbox'

import style from './style.css'

class CheckboxGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = { values: new Set() }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    if (this.props.values.length > 0) {
      this.setState({ values: new Set(this.props.values) })
    }
  }

  handleChange (value) {
    if (this.props.disabled) return

    const newValues = this.state.values

    if (this.state.values.has(value)) {
      newValues.delete(value)
    } else {
      newValues.add(value)
    }

    this.setState({ values: newValues })
    this.props.onChange(Array.from(newValues))
  }

  render () {
    const secondaryTextClass = classnames(style.secondaryText, {
      [style.error]: this.props.error,
      [style.success]: this.props.success,
    })

    const checkboxes = this.props.options.map(({ value, label }) => (
      <Checkbox
        key={value}
        name={this.props.name}
        value={value}
        label={label}
        checked={this.state.values.has(value)}
        onChange={partial(this.handleChange, [value])}
        disabled={this.props.disabled}
      />
    ))

    return (
      <div>
        {(this.props.success || this.props.error) &&
          <p className={secondaryTextClass}>
            {this.props.success || this.props.error}
          </p>
        }

        {checkboxes}
      </div>
    )
  }
}

CheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
}

CheckboxGroup.defaultProps = {
  disabled: false,
  error: '',
  success: '',
}

export default CheckboxGroup
