import React from 'react'

import IconMyAccount from 'react-icons/lib/md/face'
import IconLogoff from 'react-icons/lib/fa/power-off'
import IconExport from 'react-icons/lib/fa/external-link'
import IconCopy from 'react-icons/lib/md/content-copy'
import IconDelete from 'react-icons/lib/fa/close'
import IconAdd from 'react-icons/lib/fa/plus'
import IconDocs from 'react-icons/lib/md/import-contacts'
import IconLetter from 'react-icons/lib/md/assignment'
import IconUpload from 'react-icons/lib/md/file-upload'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'
import stylesheet from './style.css'

const i18n = {
  Button: 'Botão',
  Light: 'Base Clara',
  Dark: 'Base Escura',
  MyAccount: 'Minha Conta',
  Logoff: 'Desconectar',
  Export: 'Exportar',
  Copy: 'Copiar',
  Delete: 'Excluir',
  Add: 'Adicionar',
  Docs: 'Documentação',
  Letter: 'Carta de Circulação',
  Upload: 'Fazer Upload',
  Flat: 'Plano (padrão)',
  Gradient: 'Gradiente',
  Outline: 'Contorno',
  Dashed: 'Tracejado',
  Clean: 'Sem fundo',
  SizesAndShapes: 'Tamanhos e Formas',
  Iconed: 'Com ícones',
  Block: 'Bloco',
  Sizes: 'Tamanhos',
}

const parentList = [
  { base: 'light', name: i18n.Light, style: { padding: '20px', background: '#FFF' } },
  { base: 'dark', name: i18n.Dark, style: { padding: '20px', background: '#333' } },
]

const colorList = [
  'green-primary',
  'green-secondary',
  'green-contrast',
  'silver',
  'plumb',
  'yellow',
  'red',
  'blue',
  'purple',
  'pink',
]

const iconList = [
  { component: IconMyAccount, text: i18n.MyAccount },
  { component: IconLogoff, text: i18n.Logoff },
  { component: IconExport, text: i18n.Export },
  { component: IconCopy, text: i18n.Copy },
  { component: IconDelete, text: i18n.Delete },
  { component: IconAdd, text: i18n.Add },
  { component: IconDocs, text: i18n.Docs },
  { component: IconLetter, text: i18n.Letter },
  { component: IconUpload, text: i18n.Upload },
]

const sizeList = [
  'micro', 'tiny', 'small', 'medium', 'large',
]

const clicked = action('clicked')

function buttonAllColors (parent, children, variant) {
  return (
    <div className={stylesheet.buttonCollection} style={parent.style}>
      {colorList.map(color => (
        <Button
          key={color}
          onClick={clicked}
          base={parent.base}
          variant={variant}
          color={color}
        >
          {children}
        </Button>
      ))}
    </div>
  )
}

parentList.forEach((base) => {
  storiesOf(`${i18n.Button}/Aplicações ${base.name}`, module)
    .add(i18n.Flat, () =>
      buttonAllColors(base, `${i18n.Button} ${i18n.Flat}`, 'flat'))
    .add(i18n.Gradient, () =>
      buttonAllColors(base, `${i18n.Button} ${i18n.Gradient}`, 'gradient'))
    .add(i18n.Outline, () =>
      buttonAllColors(base, `${i18n.Button} ${i18n.Outline}`, 'outline'))
    .add(i18n.Dashed, () =>
      buttonAllColors(base, `${i18n.Button} ${i18n.Dashed}`, 'dashed'))
    .add(i18n.Clean, () =>
      buttonAllColors(base, `${i18n.Button} ${i18n.Clean}`, 'clean'))
})

storiesOf(`${i18n.Button}/${i18n.SizesAndShapes}`, module)

  .add(i18n.Iconed, () => (
    <div className={stylesheet.buttonCollection}>
      {iconList.map(icon => (
        <Button key={icon.text} onClick={clicked}>
          {icon.component()}
          {icon.text}
        </Button>
      ))}
    </div>
  ))

  .add(i18n.Block, () => (
    <div className={stylesheet.buttonBlock}>
      {[1, 2, 3].map(n => (
        <Button
          key={`block-${n}`}
          onClick={clicked}
          variant="block"
        >
          {i18n.Button} {i18n.Block}
        </Button>)
      )}
    </div>
  ))

  .add(i18n.Sizes, () =>
    (<div className={stylesheet.buttonColumn}>
      {sizeList.map(size => (
        <Button key={size} onClick={clicked} size={size}>
          {i18n.Button}
        </Button>
      ))}
    </div>)
  )

