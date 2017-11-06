import React from 'react'
import propTypes from 'prop-types'
import { storiesOf } from '@storybook/react'

import ContextSwitch from '../../src/components/ContextSwitch'

import style from './style.css'


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
    this.setState({ selected: value })
  }

  render () {
    return (
      <ContextSwitch
        items={this.props.items}
        onChange={this.handleChange}
        name={this.props.name}
        selected={this.state.selected}
      />
    )
  }
}

ContextSwitchState.propTypes = {
  selected: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.string).isRequired,
  name: propTypes.string.isRequired,
}

storiesOf('ContextSwitch', module)
  .add('All styles', () => (
    <div className={style.container}>
      <section>
        <h2>Two options</h2>
        <ContextSwitchState
          items={['test', 'live']}
          selected="test"
          name="live-test"
        />
      </section>
      <section>
        <h2>Four options</h2>
        <ContextSwitchState
          items={['test', 'live', 'super-test', 'extra-live']}
          selected="super-test"
          name="super-extra"
        />
      </section>
    </div>
  ))

