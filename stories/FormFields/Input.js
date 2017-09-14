import React from 'react'
import PropTypes from 'prop-types'
import FaAndroid from 'react-icons/lib/fa/bank'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from '../../src/components/Input'

storiesOf('Input/Text field boxed', module)
  .add('disabled', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="eaee"
      boxed
      disabled
      onChange={action('text changed')}
    />
  ))
  .add('default', () => (
    <InputState boxed type="text" />
  ))
  .add('error', () => (
    <InputState boxed type="text" error="Tá pegando fogo bixo" />
  ))
  .add('success', () => (
    <InputState boxed type="text" success="Oloco meu" />
  ))
  .add('multiline disabled', () => (
    <Input
      name="teste"
      label="Fale tudo"
      placeholder="eae"
      boxed
      multiline
      disabled
      onChange={action('text changed')}
    />
  ))
  .add('multiline default', () => (
    <InputState boxed multiline />
  ))
  .add('multiline error', () => (
    <InputState boxed multiline error="Erro!" />
  ))
  .add('multiline success', () => (
    <InputState boxed multiline success="Sucesso!" />
  ))

class InputState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: 'Leo' }
  }

  render () {
    return (
      <Input
        name="email"
        label="Digite seu email"
        type={this.props.type}
        placeholder="nome@email.com"
        value={this.state.email}
        boxed={this.props.boxed ? true : false}
        onChange={e => this.setState({ email: e.target.value })}
        hint={this.props.boxed ? '' : 'Texto secundario'}
        error={this.props.error}
        success={this.props.success}
        multiline={this.props.multiline}
        icon={this.props.icon}
      />
    )
  }
}

storiesOf('Input/Text field', module)
  .add('disabled', () => (
    <Input
      name="email"
      label="Digite seu email"
      disabled
      hint="Texto secundário"
      placeholder="eae"
      onChange={action('text changed')}
    />
  ))
  .add('default', () => (
    <InputState type="text" />
  ))
  .add('error', () => (
    <InputState type="text" error="Email no formato errado" />
  ))
  .add('success', () => (
    <InputState type="text" success="Good jobi lirou frendi" />
  ))
  .add('multiline disabled', () => (
    <Input
      name="teste"
      label="Fale tudo"
      multiline
      placeholder="eae"
      disabled
      onChange={action('text changed')}
    />
  ))
  .add('multiline default', () => <InputState multiline placeholder="eae" />)
  .add('multiline error', () => (
    <InputState multiline error="Erro!" />
  ))
  .add('multiline success', () => (
    <InputState multiline success="Sucesso!" />
  ))

storiesOf('Input/Text field with icon', module)
  .add('disabled', () => (
    <Input
      name="name"
      label="Digite seu nome"
      placeholder="eaee"
      disabled
      icon={<FaAndroid size={20} />}
      onChange={action('text changed')}
    />
  ))
  .add('default', () => (
    <InputState type="text" icon={<FaAndroid size={20} />} />
  ))
  .add('error', () => (
    <InputState type="text" error="Erro!" icon={<FaAndroid size={20} />} />
  ))
  .add('success', () => (
    <InputState type="text" success="Sucesso!" icon={<FaAndroid size={20} />} />
  ))
  .add('multiline disabled', () => (
    <Input
      name="teste"
      label="Fale tudo"
      placeholder="eae"
      multiline
      disabled
      icon={<FaAndroid size={20} />}
      onChange={action('text changed')}
    />
  ))
  .add('multiline default', () => (
    <InputState multiline icon={<FaAndroid size={20} />} />
  ))
  .add('multiline error', () => (
    <InputState multiline error="Erro!" icon={<FaAndroid size={20} />} />
  ))
  .add('multiline success', () => (
    <InputState multiline success="Sucesso!" icon={<FaAndroid size={20} />} />
  ))


storiesOf('Input/Password field', module)
  .add('disabled', () => (
    <Input
      type="password"
      name="pass"
      label="Digite sua senha"
      disabled
      placeholder="eae"
      hint="Minimo de 12 pixels"
      onChange={action('text changed')}
    />
  ))
  .add('default', () => (
    <InputState type="password" />
  ))
  .add('error', () => (
    <InputState type="password" error="Digite mais caracteres" />
  ))
  .add('success', () => (
    <InputState type="password" success="Boa rapá" />
  ))
