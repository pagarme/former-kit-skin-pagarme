import React from 'react'

import classNames from 'classnames'

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

const strings = {
  AllStyles: 'All styles',
  Button: 'Button',
  Label: 'Button Label',
  Light: 'Light base',
  Dark: 'Dark base',
  MyAccount: 'My Account',
  Logoff: 'Disconnect',
  Export: 'Export',
  Copy: 'Copy',
  Delete: 'Delete',
  Add: 'Add',
  Docs: 'Documentation',
  Letter: 'Get Letter',
  Upload: 'Upload',
  Flat: 'Flat',
  Gradient: 'Gradient',
  Outline: 'Outlined',
  Clean: 'Clean',
  Iconed: 'With icons',
  Block: 'Block',
  Sizes: 'Sizes',
}

const baseList = [
  {
    base: 'light',
    name: strings.Light,
    style: {
      padding: '20px',
      background: '#FFF',
      color: '#000',
    },
  },
  {
    base: 'dark',
    name: strings.Dark,
    style: {
      padding: '20px',
      background: '#333',
      color: '#FFF',
    },
  },
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
  { component: IconMyAccount, text: strings.MyAccount },
  { component: IconLogoff, text: strings.Logoff },
  { component: IconExport, text: strings.Export },
  { component: IconCopy, text: strings.Copy },
  { component: IconDelete, text: strings.Delete },
  { component: IconAdd, text: strings.Add },
  { component: IconDocs, text: strings.Docs },
  { component: IconLetter, text: strings.Letter },
  { component: IconUpload, text: strings.Upload },
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


storiesOf(strings.Button, module)
  .add(strings.AllStyles, () => (
    <div>
      {baseList.map(({ base, name, style }) => (
        <section
          key={`${base}-${name}`}
          className={classNames({
            [stylesheet[`section-${base}`]]: true,
          })}
          style={style}
        >
          <h2>Styles in {name}</h2>
          <p>{strings.Flat}</p>
          {buttonAllColors(base, `${strings.Label}`, 'flat')}

          <p>{strings.Gradient}</p>
          {buttonAllColors(base, `${strings.Label}`, 'gradient')}

          <p>{strings.Outline}</p>
          {buttonAllColors(base, `${strings.Label}`, 'outline')}

          <p>{strings.Clean}</p>
          {buttonAllColors(base, `${strings.Label}`, 'clean')}
        </section>
      ))}

      <section>
        <h2>Variations</h2>

        <p>{strings.Iconed}</p>
        <div className={stylesheet.buttonCollection}>
          {iconList.map(icon => (
            <Button key={icon.text} onClick={clicked}>
              {icon.component()}
              {icon.text}
            </Button>
          ))}
        </div>

        <p>{strings.Block}</p>
        <div className={stylesheet.buttonBlock}>
          {[1, 2, 3].map(n => (
            <Button
              key={`block-${n}`}
              onClick={clicked}
              variant="block"
            >
              {strings.Button} {strings.Block}
            </Button>)
          )}
        </div>

        <p>{strings.Sizes}</p>
        <div className={stylesheet.buttonColumn}>
          {sizeList.map(size => (
            <Button key={size} onClick={clicked} size={size}>
              {strings.Button}
            </Button>
          ))}
        </div>
      </section>
    </div>
  ))
