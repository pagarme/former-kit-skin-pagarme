import React from 'react'
import IconSearch from 'react-icons/lib/md/search'
import {
  func,
  string,
  bool,
} from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

// disable eslint for shared styles
// eslint-disable-next-line css-modules/no-unused-class
import toolItemStyle from '../style.css'

const getSearchFieldClasses = ({ active, focused }) =>
  classNames(toolItemStyle.root, {
    [toolItemStyle.active]: active,
    [toolItemStyle.focused]: focused,
  })

class SearchField extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: false,
    }
  }

  render () {
    const {
      disabled,
      onChange,
      value,
      placeholder,
      active,
    } = this.props

    const {
      focused,
    } = this.state

    return (
      <div className={getSearchFieldClasses({ active, focused })}>
        <span className={style.icon}>
          <IconSearch />
        </span>

        <div className={style.inputWrap}>
          <input
            onBlur={() => this.setState({ focused: false })}
            onFocus={() => this.setState({ focused: true })}
            disabled={disabled}
            onChange={e => !disabled && onChange(e.target.value)}
            value={value}
            className={style.input}
            type="search"
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }
}

SearchField.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  disabled: bool,
  placeholder: string,
  active: bool,
}

SearchField.defaultProps = {
  disabled: false,
  placeholder: null,
  active: null,
}

export default SearchField
