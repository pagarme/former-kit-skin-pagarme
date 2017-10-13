import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'

import style from './CardSection.style.css'

class CardSection extends Component {
  constructor (props) {
    super(props)

    this.cardTitle = this.cardTitle.bind(this)
    this.arrowUpDown = this.arrowUpDown.bind(this)
    this.renderTitle = this.renderTitle.bind(this)
  }

  cardTitle () {
    const { collapsedTitle, title, collapsed } = this.props
    return collapsed ? collapsedTitle : title
  }

  arrowUpDown () {
    const { collapsed, onTitleClick } = this.props

    if (!onTitleClick) {
      return null
    }

    const arrowClasses = classNames(style.arrow, {
      [style.rotateArrowUp]: !collapsed,
    })

    return <IconArrowDown className={arrowClasses} />
  }

  renderTitle () {
    return (
      <h2 className={style.cardTitle}>
        {this.cardTitle()}
        {this.arrowUpDown()}
      </h2>
    )
  }

  render () {
    const {
      onTitleClick,
      collapsed,
      children,
    } = this.props

    return (
      <div className={style.container}>
        {onTitleClick
          ? (
            <a
              onClick={() => onTitleClick(collapsed)}
              role="button"
              tabIndex="0"
              className={style.collapseButton}
            >
              {this.renderTitle()}
            </a>
          ) : (
            this.renderTitle()
          )
        }
        {!collapsed &&
          <div className={style.sectionContent}>
            {children}
          </div>
        }
      </div>
    )
  }
}

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  collapsedTitle: PropTypes.string,
  collapsed: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onTitleClick: PropTypes.func,
}

CardSection.defaultProps = {
  collapsedTitle: '',
  collapsed: false,
  onTitleClick: null,
}

export default CardSection
