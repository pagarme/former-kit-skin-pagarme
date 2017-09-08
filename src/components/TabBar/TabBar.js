import React from 'react'

import style from './style.css'
import {
  TabBarPropTypes,
  TabBarDefaultProps,
} from './shapes'

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

TabBar.propTypes = TabBarPropTypes
TabBar.defaultProps = TabBarDefaultProps

export default TabBar
