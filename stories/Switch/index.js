import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Switch from '../../src/components/Switch'

const Row = ({ children })=> (
  <div style={{ padding: '0.5em' }}>{children}</div>
)


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
      <Row>
        <SwitchMeWell checked />
      </Row>

      <Row>
        <SwitchMeWell checked={false} />
      </Row>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Row>
        <SwitchMeWell disabled checked /> 
      </Row>
      <Row>
        <SwitchMeWell disabled checked={false} /> 
      </Row>
    </div>
  ))
