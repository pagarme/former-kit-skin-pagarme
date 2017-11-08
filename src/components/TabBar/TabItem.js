import React from 'react'
import classNames from 'classnames'

import {
  number,
  bool,
  func,
  element,
  string,
  oneOf,
} from 'prop-types'

import {
  variantList,
  variantDefault,
} from './shapes'

import style from './TabItem.style.css'

function TabItem (props) {
  const className = classNames(
    style.tabItem,
    style[props.variant],
    { [style.selected]: props.selected }
  )

  function handleClick () {
    const {
      index,
      onClick,
      onTabChange,
    } = props

    if (onTabChange) {
      onTabChange(index)
    }

    if (onClick) {
      onClick()
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {
        props.variant !== 'just-text'
          ? <div className={style.icon}>{props.icon}</div>
          : null
      }
      {props.variant !== 'just-icon' ? props.text : null}
    </button>
  )
}

TabItem.propTypes = {
  index: number,
  selected: bool,
  onTabChange: func,
  onClick: func,
  icon: element,
  text: string,
  variant: oneOf(variantList),
}

TabItem.defaultProps = {
  index: null,
  selected: false,
  onTabChange: null,
  onClick: null,
  icon: null,
  text: null,
  variant: variantDefault,
}

export default TabItem
