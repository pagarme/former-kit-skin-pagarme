import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ContextSwitch from '../../src/components/ContextSwitch'

const Grey = ({ children }) => (
  <div style={{
    backgroundColor: '#eee',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
)

class ContextSwitchState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    this.setState({
      selected: this.props.selected,
    })
  }

  handleChange (value) {
    action()('Selected', value)
    this.setState({ selected: value })
  }

  render () {
    return (
      <Grey>
        <ContextSwitch
          items={this.props.items}
          onChange={this.handleChange}
          name={this.props.name}
          selected={this.state.selected}
        />
      </Grey>
    )
  }
}

storiesOf('ContextSwitch', module)
  .add('Two Options', () => (
    <ContextSwitchState
      items={['test', 'live']}
      selected="test"
      name="live-test"
    />
  ))
  .add('More Options', () => (
    <ContextSwitchState
      items={['test', 'live', 'super-test', 'extra-live']}
      selected="super-test"
      name="super-extra"
    />
  ))

