import React from 'react'

import {
  number,
  func,
  oneOf,
  arrayOf,
} from 'prop-types'

import {
  variantList,
  variantDefault,
} from './shapes'

import TabItem from './TabItem'

import style from './style.css'

class TabBar extends React.Component {
  constructor (props) {
    super(props)
    this.cloneChild = this.cloneChild.bind(this)
  }

  getContent () {
    const chosen = this.props.children[this.props.index]
    return chosen.props.children
  }

  cloneChild (tabItemChild, key) {
    return React.cloneElement(
      tabItemChild,
      {
        index: key,
        variant: this.props.variant,
        onTabChange: this.props.onTabChange,
        selected: this.props.index === key,
      }
    )
  }

  populateChildren () {
    return React.Children.map(
      this.props.children,
      this.cloneChild
    )
  }

  render () {
    return (
      <div className={style.tabBar}>
        <div className={style.tabList}>
          {this.populateChildren()}
        </div>
        {this.getContent()}
      </div>
    )
  }
}

TabBar.propTypes = {
  variant: oneOf(variantList),
  children: arrayOf(TabItem).isRequired,
  index: number,
  onTabChange: func,
}

TabBar.defaultProps = {
  variant: variantDefault,
  index: 0,
  onTabChange: null,
}

export default TabBar
