import React from 'react'
import shortid from 'shortid'
import {
  lensPath,
  map,
  set,
} from 'ramda'

import {
  func,
  shape,
  arrayOf,
  string,
  bool,
  instanceOf,
} from 'prop-types'

import moment from 'moment'

import IconCalendar from 'react-icons/lib/fa/calendar'

import MaskedInput from 'react-maskedinput'
import clickOutside from 'react-click-outside'
import classNames from 'classnames'

import DateSelector from '../../DateSelector'

import style from './style.css'
import toolItemStyle from '../style.css'

import {
  textToMoment,
  momentToText,
  hasDifferentEnd,
  clampRange,
  validateRange,
  inputDateMask,
} from './dateHelpers'

import {
  getInputClasses,
  inputWrapStartClasses,
  initialPlaceholderClasses,
  inputWrapEndClasses,
} from './classNames'

class DateInput extends React.Component {
  constructor (props) {
    super(props)

    const {
      dates,
    } = props

    this.state = {
      dates: {
        start: null,
        end: null,
      },
      focusedInput: 'startDate',
      showDateSelector: false,
    }

    const { start, end } = momentToText(dates)

    if (dates.start) {
      this.state.dates.start = start
    }

    if (dates.end) {
      this.state.dates.end = end
    }

    this.name = shortid.generate()

    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDatesChange = this.handleDatesChange.bind(this)
    this.handleSelectorFocus = this.handleSelectorFocus.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)

    this.changeSelectorDisplay = this.changeSelectorDisplay.bind(this)
  }

  componentWillReceiveProps (props) {
    if (props && props.dates) {
      const { dates } = props

      this.setState({
        dates: momentToText(dates),
      })
    }
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown, true)
  }

  handleClickOutside () {
    if (this.state.showDateSelector) {
      this.handleCancel()
    }
  }

  handleKeyDown (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.handleConfirm(this.state.dates)
      return
    }

    if (event.key === 'Escape') {
      this.handleCancel()
    }
  }

  changeSelectorDisplay (showDateSelector, focusedInput) {
    if (!showDateSelector) {
      document.removeEventListener('keydown', this.handleKeyDown, true)
    }
    this.setState({ showDateSelector, focusedInput })
  }

  handleInputChange (input, event) {
    const { value } = event.target
    const { start, end } = this.state.dates

    if (start === end) {
      const dates = {
        start: value,
        end: value,
      }

      this.setState({ dates })
      return
    }

    const inputLens = lensPath(['dates', input])
    const state = set(inputLens, value, this.state)

    this.setState(state)
  }

  handleDatesChange (dates) {
    const { limits } = this.props
    const clampedDates = map(clampRange(limits), dates)

    this.setState({
      dates: clampedDates,
    })
  }

  handleConfirm (dates) {
    const { limits } = this.props
    const momentDates = textToMoment(dates)

    const {
      isValidStart,
      isValidEnd,
    } = validateRange(limits, momentDates)

    if (!isValidStart || !isValidEnd) {
      return
    }

    this.changeSelectorDisplay(false)
    this.props.onChange(momentDates)
  }

  handleCancel () {
    const { dates } = this.props
    const textDates = momentToText(dates)

    this.setState({
      dates: textDates,
    }, () => {
      // called in the callback as it will setState again
      this.changeSelectorDisplay(false)
      this.props.onChange(dates)
    })
  }

  handleInputFocus (focusedInput) {
    document.addEventListener('keydown', this.handleKeyDown, true)
    this.changeSelectorDisplay(true, focusedInput)
  }

  handleInputBlur () {
    if (!this.state.showDateSelector) {
      document.removeEventListener('keydown', this.handleKeyDown, true)
    }
  }

  handleSelectorFocus (focusedInput) {
    this.setState({ focusedInput })
  }

  render () {
    const {
      dates,
      showDateSelector,
      focusedInput,
    } = this.state

    const {
      active,
      limits,
    } = this.props

    const { isValidStart, isValidEnd } = validateRange(limits, dates)
    const isValidDates = isValidStart && isValidEnd
    const momentDates = textToMoment(dates)

    return (
      <div className={getInputClasses(showDateSelector, active, !isValidDates)}>
        <div
          className={classNames(style.flex, style.label)}
        >
          <div className={toolItemStyle.icon}>
            <IconCalendar />
          </div>

          <div
            className={inputWrapStartClasses({
              start: dates.start,
              showDateSelector,
              focusedInput,
              isValid: isValidStart,
            })}
          >
            <MaskedInput
              mask={inputDateMask}
              size="8"
              onFocus={() => this.handleInputFocus('startDate')}
              onBlur={this.handleInputBlur}
              className={style.input}
              placeholderChar=" "
              name="startDate"
              onChange={value => this.handleInputChange('start', value)}
              placeholder="Inicio"
              value={dates.start}
              id={`${this.name}-startDate`}
            />
            <span className={style.expanderSpan}>{dates.start || 'Inicio'}</span>
          </div>

          {!dates.start && !dates.end &&
            <label
              htmlFor={`${this.name}-startDate`}
              className={initialPlaceholderClasses({ showDateSelector, start: dates.start })}
            >
              Selecione um dia ou período
            </label>
          }

          <div className={classNames(style.separator, toolItemStyle.separator)} />

          {hasDifferentEnd(dates)
            ? (
              <div
                className={inputWrapEndClasses({
                  showDateSelector,
                  focusedInput,
                  isValid: isValidEnd,
                })}
              >
                <MaskedInput
                  mask={inputDateMask}
                  size="8"
                  onFocus={() => this.handleInputFocus('endDate')}
                  onBlur={this.handleInputBlur}
                  className={style.input}
                  placeholderChar=" "
                  name="endDate"
                  onChange={value => this.handleInputChange('end', value)}
                  placeholder="Fim"
                  value={dates.end}
                />
                <span className={style.expanderSpan}>{dates.end || 'Fim'}</span>
              </div>
            ) : (
              null
            )
          }
        </div>

        {showDateSelector ?
          <div className={style.absolutePosition}>
            <DateSelector
              dates={isValidDates ? momentDates : {}}
              onChange={this.handleDatesChange}
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
              onFocusChange={this.handleSelectorFocus}
              focusedInput={this.state.focusedInput}
              presets={this.props.presets}
            />
          </div>
          : null
        }
      </div>
    )
  }
}

DateInput.propTypes = {
  active: bool,
  onChange: func.isRequired,
  dates: shape({
    start: instanceOf(moment),
    end: instanceOf(moment),
  }),
  presets: arrayOf(shape({
    key: string,
    title: string,
    date: func,
    items: arrayOf(shape({
      title: string,
      date: func,
      key: string,
    })),
  })),
  limits: shape({
    upper: instanceOf(moment),
    lower: instanceOf(moment),
  }),
}

DateInput.defaultProps = {
  active: false,
  dates: {
    start: null,
    end: null,
  },
  limits: {
    upper: moment('2100-01-01', 'YYYY-MM-DD'),
    lower: moment('1900-01-01', 'YYYY-MM-DD'),
  },
  presets: [],
}

export default clickOutside(DateInput)
