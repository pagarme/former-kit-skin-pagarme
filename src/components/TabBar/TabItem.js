import React from 'react'
import classNames from 'classnames'

import {
  TabItemPropTypes,
  TabItemDefaultProps,
} from './shapes'
import style from './style.css'

class TabItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {
      index,
      onClick,
      onTabChange,
    } = this.props

    if (onTabChange) {
      onTabChange(index)
    }

    if (onClick) {
      onClick()
    }
  }

  render () {
    const className = classNames(
      style.tabItem,
      style[this.props.variant],
      { [style.selected]: this.props.selected }
    )

    return (
      <button className={className} onClick={this.handleClick}>
        {
          this.props.variant !== 'just-text'
            ? <div className={style.icon}>{this.props.icon}</div>
            : null
        }
        {this.props.variant !== 'just-icon' ? this.props.text : null}
      </button>
    )
  }
}

TabItem.propTypes = TabItemPropTypes
TabItem.defaultProps = TabItemDefaultProps

export default TabItem
