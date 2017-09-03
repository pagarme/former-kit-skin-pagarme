import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

class TabItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {
      key,
      onClick,
      onTabChange,
      children,
    } = this.props

    if (onTabChange) {
      onTabChange(key, children)
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

TabItem.propTypes = {
  key: PropTypes.number,
  selected: PropTypes.bool,
  onTabChange: PropTypes.func,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  variant: PropTypes.oneOf([
    'just-text', 'text-icon', 'just-icon',
  ]),
}

TabItem.defaultProps = {
  key: null,
  selected: false,
  onClick: null,
  onTabChange: null,
  icon: null,
  text: null,
  variant: 'text-icon',
}

export default TabItem
