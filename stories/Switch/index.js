import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Switch from '../../src/components/Switch'


class SwitchMeWell extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.checked,
    }
  }

  render () {
    return (
      <div>
        <Switch
          disabled={this.props.disabled}
          checked={this.state.value}
          onChange={value => this.setState({ value })}
        />  
      </div>
    )
  }
}

storiesOf('Switch', module)
  .add('checked', () => (
    <div>
      <p>
        <SwitchMeWell checked />
      </p>

      <p>
        <SwitchMeWell checked={false} />
      </p>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <p>
        <SwitchMeWell disabled checked /> 
      </p>
      <p>
        <SwitchMeWell disabled checked={false} /> 
      </p>
    </div>
  ))
