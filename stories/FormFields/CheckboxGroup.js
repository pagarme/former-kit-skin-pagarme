import React from 'react'
import { storiesOf } from '@storybook/react'
import CheckboxGroup from '../../src/components/CheckboxGroup'

class CheckboxGroupState extends React.Component {
  constructor (props) {
    super(props)

    this.state = { values: ['nerone'] }
  }

  render () {
    const options = [
      {
        label: 'Leo',
        value: 'leo',
      },
      {
        label: 'Nerone',
        value: 'nerone'
      },
      {
        label: 'hi',
        value: 'hi',
      },
    ]

    return (
      <div>
        <CheckboxGroup
          options={options}
          name="pessoas"
          onChange={values => this.setState({ values })}
          values={this.state.values}
          disabled={this.props.disabled}
          error={this.props.error}
          success={this.props.success}
        />

        <p>Selecionado: {this.state.values.join(', ')}</p>
      </div>
    )
  }
}

storiesOf('CheckboxGroup', module)
  .add('disabled', () => <CheckboxGroupState disabled />)
  .add('default', () => <CheckboxGroupState />)
  .add('success', () => <CheckboxGroupState success="Eae sucesso" />)
  .add('error', () => <CheckboxGroupState error="Errou!" />)
