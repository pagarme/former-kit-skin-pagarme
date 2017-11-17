import React from 'react'
import PropTypes from 'prop-types'
import {
  F,
  T,
  always,
  allPass,
  anyPass,
  and,
  inc,
  dec,
  cond,
  ifElse,
  pipe,
  clamp,
  equals,
  isNil,
  isEmpty,
  lte,
  lt,
  gt,
  gte,
  is,
  prop,
  objOf,
  unless,
  when,
  toString,
  length,
  tail,
  path as rPath,
  head,
  propSatisfies,
  complement,
} from 'ramda'
import classNames from 'classnames'
import shortid from 'shortid'

import ArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'
import ArrowRight from 'react-icons/lib/md/keyboard-arrow-right'

import style from './style.css'

const convertToNumber = unless(anyPass([isNil, isEmpty]), Number)

const createState = pipe(
  convertToNumber,
  objOf('inputPage')
)

const preventInvalidKeys = (event) => {
  const regex = new RegExp(/\d+/)
  if (!regex.test(event.key)) {
    event.preventDefault()
  }
}

class Pagination extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputPage: props.currentPage,
    }

    this.instanceId = `${shortid.generate()}-input`

    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goTo = this.goTo.bind(this)
    this.submitInput = this.submitInput.bind(this)
    this.calculateInputValue = this.calculateInputValue.bind(this)
    this.disableButton = this.disableButton.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      inputPage: nextProps.currentPage,
    })
  }

  onInputChange (event) {
    event.preventDefault()

    const {
      totalPages,
    } = this.props

    const { value: newPage } = event.target
    const getLength = pipe(toString, length)

    const hasValidLength = pipe(
      length,
      gte(getLength(totalPages))
    )

    const startsWithZero = allPass([
      pipe(length, equals(2)),
      pipe(head, equals('0')),
    ])

    const hasError = pipe(
      anyPass([
        gt(0),
        lt(totalPages),
      ]),
      and(newPage)
    )

    const tailIfNeeded = pipe(
      when(startsWithZero, tail),
      createState
    )

    const handleError = pipe(
      Number,
      hasError
    )

    if (hasValidLength(newPage)) {
      this.setState(tailIfNeeded(newPage))
      handleError(newPage)
    }
  }

  handleSubmit () {
    const {
      totalPages,
      onPageChange,
      currentPage,
    } = this.props

    const { inputPage } = this.state

    const isValidCurrentPage = allPass([
      propSatisfies(is(Number), 'currentPage'),
      propSatisfies(complement(is(Number)), 'inputPage'),
    ])

    const isValidInput = pipe(
      prop('inputPage'),
      anyPass([
        lt(totalPages),
        gt(1),
      ])
    )

    const getCorrectPage = cond([
      [isValidCurrentPage, always(currentPage)],
      [isValidInput, always(currentPage)],
      [T, always(inputPage)],
    ])

    const correctPage = getCorrectPage({ currentPage, inputPage })

    onPageChange(correctPage)

    this.setState({
      inputPage: correctPage,
    })
  }

  goTo (path) {
    const {
      currentPage,
      totalPages,
      onPageChange,
    } = this.props

    const normilizeRange = clamp(1, totalPages)

    const calculateNewPage = ifElse(
      equals('next'),
      always(inc(currentPage)),
      always(dec(currentPage))
    )

    const getNewPage = pipe(
      calculateNewPage,
      normilizeRange
    )

    const newPage = getNewPage(path)

    onPageChange(newPage)

    this.setState({
      inputPage: newPage,
    })
  }

  calculateInputValue () {
    const { inputPage } = this.state
    const { currentPage } = this.props
    const calculateValue = ifElse(
      equals(''),
      always(''),
      when(
        anyPass([isNil, isEmpty]),
        always(currentPage)
      )
    )

    return `${calculateValue(inputPage)}`
  }

  disableButton (path) {
    const { currentPage, totalPages } = this.props
    const { inputPage } = this.state

    const isDisabled = anyPass([
      isNil,
      gt(0),
      lt(totalPages),
    ])

    const isInvalidInput = allPass([
      convertToNumber,
      lt(totalPages),
    ])

    if (isDisabled(currentPage) || isInvalidInput(inputPage)) {
      return true
    }

    if (path === 'prev') {
      if (inputPage) {
        return inputPage <= 1
      }

      return currentPage <= 1
    }

    if (inputPage) {
      return inputPage >= totalPages
    }

    return currentPage >= totalPages
  }

  submitInput (event) {
    const { totalPages } = this.props

    const isAllowedKey = pipe(
      prop('key'),
      equals('Enter')
    )

    const isValidInput = pipe(
      rPath(['target', 'value']),
      Number,
      allPass([gte(totalPages), lte(1)])
    )

    const validateSubmit = ifElse(
      allPass([isAllowedKey, isValidInput]),
      this.handleSubmit,
      F
    )

    validateSubmit(event)
  }

  render () {
    const {
      totalPages,
    } = this.props

    const inputPage = +this.state.inputPage

    const error = totalPages < inputPage || inputPage === 0

    const paginationClasses = classNames(style.pagination, {
      [style.paginationError]: error,
    })

    const displayClasses = classNames(style.display, {
      [style.displayError]: error,
    })

    const separator = classNames(style.smallChild, style.noSelect)

    return (
      <div className={paginationClasses}>
        <button
          size="extra-small"
          onClick={() => this.goTo('prev')}
          disabled={this.disableButton('prev')}
          className={classNames(style.button, style.prev)}
        >
          <ArrowLeft size={13} viewBox="10 10 20 20" />
        </button>

        <label
          htmlFor={this.instanceId}
          className={displayClasses}
        >
          <span className={style.bigChild}>
            <input
              id={this.instanceId}
              type="number"
              min={1}
              max={totalPages}
              value={this.calculateInputValue()}
              onChange={this.onInputChange}
              onBlur={this.handleSubmit}
              onKeyDown={this.submitInput}
              onKeyPress={preventInvalidKeys}
              className={style.input}
              maxLength={2}
            />
            <span className={style.hiddenChild}>
              {totalPages}
            </span>
          </span>
          <span className={separator}>de</span>
          <span className={style.noSelect}>
            {totalPages}
          </span>
        </label>

        <button
          size="extra-small"
          onClick={() => this.goTo('next')}
          disabled={this.disableButton('next')}
          className={classNames(style.button, style.next)}
        >
          <ArrowRight size={13} viewBox="10 10 20 20" />
        </button>
      </div>
    )
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}


export default Pagination
