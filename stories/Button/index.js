import React from 'react'

import ButtonMyAccount from 'react-icons/lib/md/face'
import ButtonLogoff from 'react-icons/lib/fa/power-off'
import ButtonExport from 'react-icons/lib/fa/external-link'
import ButtonCopy from 'react-icons/lib/md/content-copy'
import ButtonDelete from 'react-icons/lib/fa/close'
import ButtonAdd from 'react-icons/lib/fa/plus'
import ButtonDocs from 'react-icons/lib/md/import-contacts'
import ButtonLetter from 'react-icons/lib/md/assignment'
import ButtonUpload from 'react-icons/lib/md/file-upload'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'
import stylesheet from './style.css'

const i18n = {
  Button: 'Botão',
  Light: 'Claro',
  Dark: 'Escuro',
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
  { theme: 'light', name: i18n.Light, style: { padding: '20px', background: '#FFF' } },
  { theme: 'dark', name: i18n.Dark, style: { padding: '20px', background: '#333' } },
]

const colorList = [
  'greenPrimary',
  'greenSecondary',
  'greenContrast',
  'silver',
  'plumb',
  'yellow',
  'red',
  'blue',
  'purple',
  'pink',
]

const iconList = [
  { component: ButtonMyAccount, text: i18n.MyAccount },
  { component: ButtonLogoff, text: i18n.Logoff },
  { component: ButtonExport, text: i18n.Export },
  { component: ButtonCopy, text: i18n.Copy },
  { component: ButtonDelete, text: i18n.Delete },
  { component: ButtonAdd, text: i18n.Add },
  { component: ButtonDocs, text: i18n.Docs },
  { component: ButtonLetter, text: i18n.Letter },
  { component: ButtonUpload, text: i18n.Upload },
]

const sizeList = [
  'micro', 'tiny', 'small', 'medium', 'large',
]

const clicked = action('clicked')


parentList.map((theme) => {
  storiesOf(`${i18n.Button}/${theme.name}`, module)
    .add(i18n.Flat, () => buttonAllColors(theme, `${i18n.Button} ${i18n.Flat}`, 'flat'))
    .add(i18n.Gradient, () => buttonAllColors(theme, `${i18n.Button} ${i18n.Gradient}`, 'gradient'))
    .add(i18n.Outline, () => buttonAllColors(theme, `${i18n.Button} ${i18n.Outline}`, 'outline'))
    .add(i18n.Dashed, () => buttonAllColors(theme, `${i18n.Button} ${i18n.Dashed}`, 'dashed'))
    .add(i18n.Clean, () => buttonAllColors(theme, `${i18n.Button} ${i18n.Clean}`, 'clean'))
} )

storiesOf(`${i18n.Button}/${i18n.SizesAndShapes}`, module)

  .add(i18n.Iconed, () =>
    <div className={stylesheet.buttonCollection}>
      {iconList.map(( icon ) =>
        <Button key={icon.text} onClick={clicked}>
          {icon.component()}
          {icon.text}
        </Button>
      )}
    </div>
  )

  .add(i18n.Block, () =>
    <div className={stylesheet.buttonBlock}>
      {[1, 2, 3].map(( n ) =>
        <Button key={"block-" + n} onClick={clicked} style="block">
          {i18n.Button} {i18n.Block}
        </Button>
      )}
    </div>
  )

  .add(i18n.Sizes, () =>
    <div className={stylesheet.buttonColumn}>
      {sizeList.map(( size ) =>
        <Button key={size} onClick={clicked} size={size}>
          {i18n.Button}
        </Button>
      )}
    </div>
  )

function buttonAllColors (parent, children, style) {
  return (
    <div className={stylesheet.buttonCollection} style={parent.style}>
      {colorList.map(( color ) =>
        <Button key={color} onClick={clicked} theme={parent.theme} style={style} color={color}>
          {children}
        </Button>
      )}
    </div>
  )
}