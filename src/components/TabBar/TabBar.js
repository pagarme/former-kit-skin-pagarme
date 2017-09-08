import React from 'react'

import style from './style.css'
import {
  TabBarPropTypes,
  TabBarDefaultProps,
} from './shapes'

class TabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { content: null, currentKey: null }
    this.cloneChild = this.cloneChild.bind(this)
  }

  cloneChild (tabItemChild, key) {
    const { currentKey } = this.state
    const { children } = tabItemChild.props
    const onTabChange =
      this.handleTabChange.bind(this, key, children)

    return React.cloneElement(
      tabItemChild,
      {
        variant: this.props.variant,
        onTabChange,
        selected: currentKey === key,
      }
    )
  }

  populateChildren () {
    return React.Children.map(
      this.props.children,
      this.cloneChild
    )
  }

  handleTabChange (key, content) {
    this.setState({ currentKey: key, content })
  }

  render () {
    return (
      <div className={style.tabBar}>
        <div className={style.tabList}>
          {this.populateChildren()}
        </div>
        {this.state.content}
      </div>
    )
  }
}

TabBar.propTypes = TabBarPropTypes
TabBar.defaultProps = TabBarDefaultProps

export default TabBar
