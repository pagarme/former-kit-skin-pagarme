import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from '../../src/components/Dropdown'

class DropdownState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selected: '' }
  }

  render () {
    const options = [
      {
        name: "Leonardo",
        value: "leonardo",
      },
      {
        name: "Felquis",
        value: "felquis",
      },
      {
        name: "Derek",
        value: "derek",
      },
      {
        name: "Lucas",
        value: "lucas",
      },
    ]

    return (
      <div>
        <Dropdown
          options={options}
          name="pessoas"
          label="Pessoas da Pagarme"
          onChange={value => this.setState({ selected: value })}
          value={this.state.selected}
          disabled={this.props.disabled}
          title={this.props.title}
          error={this.props.error}
          success={this.props.success}
        />

        <p>Selecionado: {this.state.selected}</p>
      </div>
    )
  }
}

storiesOf('Dropdown', module)
  .add('disabled', () => (
    <DropdownState disabled title="Selecione alguem" />
  ))
  .add('default', () => (
    <DropdownState />
  ))
  .add('default with title', () => (
    <DropdownState title="Selecione alguem maninho doido" />
  ))
  .add('error', () => (
    <DropdownState error="Pessoa feia!" />
  ))
  .add('success', () => (
    <DropdownState success="Pessoa bonita" />
  ))
