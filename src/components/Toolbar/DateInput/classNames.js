import classNames from 'classnames'
import style from './style.css'
import toolItemStyle from '../style.css'


export const getInputClasses = (focused, active, error) => classNames(
  toolItemStyle.root,
  {
    [toolItemStyle.focused]: !error && focused,
    [toolItemStyle.active]: !error && active,
    [toolItemStyle.error]: error,
  }
)

export const inputWrapStartClasses = ({
  showDateSelector,
  focusedInput,
  isValid,
  start,
}) =>
  classNames(
    style.expander,
    {
      [style.show]: showDateSelector || start,
      [style.hide]: !showDateSelector && !start,
      [style.inputActive]: isValid && focusedInput === 'startDate' && showDateSelector,
      [style.inputError]: !isValid,
    }
  )

export const initialPlaceholderClasses = ({ showDateSelector, start }) =>
  classNames(
    style.initialPlaceholder,
    {
      [style.show]: !showDateSelector && !start,
      [style.hide]: showDateSelector || start,
    }
  )

export const inputWrapEndClasses = ({
  showDateSelector,
  focusedInput,
  isValid,
}) =>
  classNames(
    style.expander,
    {
      [style.inputActive]: isValid && focusedInput === 'endDate' && showDateSelector,
      [style.inputError]: !isValid,
    }
  )
