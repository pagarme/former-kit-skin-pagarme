import React from 'react'
import propTypes from 'prop-types'

import Dropdown from '../../../src/components/Dropdown'


const options = [
  {
    name: 'Leonardo',
    value: 'leonardo',
  },
  {
    name: 'Felquis',
    value: 'felquis',
  },
  {
    name: 'Derek',
    value: 'derek',
  },
  {
    name: 'Lucas',
    value: 'lucas',
  },
]


class DropdownState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selected: '' }
  }

  render () {
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

DropdownState.propTypes = {
  disabled: propTypes.bool,
  error: propTypes.string,
  success: propTypes.string,
  title: propTypes.string,
}

DropdownState.defaultProps = {
  disabled: false,
  error: '',
  success: '',
  title: '',
}


const DropdownExamples = () => (
  <div>
    <h2>Dropdown</h2>

    <section>
      <h3>Default</h3>
      <DropdownState />
    </section>

    <section>
      <h3>With title</h3>
      <DropdownState title="Selecione alguem" />
    </section>

    <section>
      <h3>Disabled with title</h3>
      <DropdownState disabled title="Selecione alguem" />
    </section>

    <section>
      <h3>Disabled</h3>
      <DropdownState disabled />
    </section>

    <section>
      <h3>Error</h3>
      <DropdownState error="Something went wrong" />
    </section>

    <section>
      <h3>Success</h3>
      <DropdownState success="Something went well" />
    </section>
  </div>
)

export default DropdownExamples
