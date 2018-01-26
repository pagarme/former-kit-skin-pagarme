import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import MdVisibilityOff from 'react-icons/lib/md/visibility-off'
import MdVisibility from 'react-icons/lib/md/visibility'
import shortid from 'shortid'
import { pick } from 'ramda'

class Input extends React.PureComponent {
  constructor (props) {
    super(props)

    this.instanceId = `${props.name}-${shortid.generate()}`
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)

    this.state = {
      showPassword: false,
      isFocused: false,
    }
  }

  handleBlur () {
    this.setState({
      isFocused: false,
    })
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  handleFocus () {
    this.setState({
      isFocused: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  renderPasswordVisibilityIcon () {
    const { value, type, theme } = this.props

    if (value === '' || type !== 'password') {
      return null
    }

    if (this.state.showPassword) {
      return (
        <MdVisibilityOff
          className={theme.displayPasswordIcon}
          onClick={() => this.setState({ showPassword: false })}
        />
      )
    }

    return (
      <MdVisibility
        className={theme.displayPasswordIcon}
        onClick={() => this.setState({ showPassword: true })}
      />
    )
  }

  render () {
    const {
      disabled,
      error,
      hint,
      icon,
      label,
      multiline,
      success,
      type,
      value,
      className,
      onChange,
      theme,
    } = this.props

    const container = classnames(theme.container, {
      [theme.multiline]: multiline,
    })

    const root = classnames(
      className,
      theme.input,
      {
        [theme.active]: !disabled && value !== '',
        [theme.focused]: this.state.isFocused,
        [theme.disabled]: disabled,
        [theme.error]: error,
        [theme.success]: success,
      }
    )

    const contentPresent = classnames({
      [theme.contentPresent]: value !== '',
    })

    const inputProps = pick(
      ['disabled', 'placeholder', 'value'],
      this.props
    )

    const inputType = (type === 'text' || this.state.showPassword)
      ? 'text'
      : 'password'

    const hasSecondaryText = theme.secondaryText && (hint || error || success)

    const hasLabel = theme.contentPresent && label

    return (
      <div className={root}>
        {icon &&
          <div className={theme.icon}>{icon}</div>
        }
        <div className={theme.boxContainer}>
          <div className={container}>
            {multiline
              ? (
                <textarea
                  rows="1"
                  onChange={disabled ? null : onChange}
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                  {...inputProps}
                />
              ) : (
                <input
                  id={this.instanceId}
                  type={inputType}
                  onChange={disabled ? null : onChange}
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                  {...inputProps}
                />
              )
            }

            {this.renderPasswordVisibilityIcon()}
            {hasLabel &&
              <label
                htmlFor={this.instanceId}
                className={contentPresent}
              >
                {label}
              </label>
            }
            {multiline &&
              <div className={theme.expander}>
                {value}
                <br />
              </div>
            }
          </div>
          {hasSecondaryText &&
            <p className={theme.secondaryText}>
              {success || error || hint}
            </p>
          }
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  theme: PropTypes.shape({
    input: PropTypes.string,
    icon: PropTypes.string,
    boxContainer: PropTypes.string,
    container: PropTypes.string,
    secondaryText: PropTypes.string,
    active: PropTypes.string,
    focused: PropTypes.string,
    error: PropTypes.string,
    multiline: PropTypes.string,
    expander: PropTypes.string,
    contentPresent: PropTypes.string,
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  hint: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  success: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  disabled: false,
  error: '',
  hint: '',
  icon: null,
  label: '',
  multiline: false,
  name: '',
  placeholder: '',
  success: '',
  theme: {},
  type: 'text',
  value: '',
  onBlur: null,
  onFocus: null,
}

export default Input
