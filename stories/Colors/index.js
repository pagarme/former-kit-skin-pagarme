import React from 'react'
import propTypes from 'prop-types'

import { storiesOf } from '@storybook/react'

import '../../src/styles/index.css'
import style from './style.css'


const darkBackgroundColors = {
  backgroundColor: '#333333',
  fontColor: '#FFFFFF',
  swatches: [
    {
      title: 'Green',
      colors: [
        [
          'var(--color-dark-green-primary-300)',
          'var(--color-dark-green-primary-200)',
          'var(--color-dark-green-primary-100)',
          'var(--color-dark-green-primary-gradient)',
        ],
        [
          'var(--color-dark-green-secondary-300)',
          'var(--color-dark-green-secondary-200)',
          'var(--color-dark-green-secondary-100)',
          'var(--color-dark-green-secondary-gradient)',
        ],
        [
          'var(--color-dark-green-contrast-300)',
          'var(--color-dark-green-contrast-200)',
          'var(--color-dark-green-contrast-100)',
          'var(--color-dark-green-contrast-gradient)',
        ],
        [
          'var(--color-dark-green-accent-100)',
          'var(--color-dark-green-accent-200)',
          'var(--color-dark-green-accent-gradient)',
        ],
      ],
    },
    {
      title: 'Silver',
      colors: [
        [
          'var(--color-dark-silver-300)',
          'var(--color-dark-silver-200)',
          'var(--color-dark-silver-100)',
          'var(--color-dark-silver-gradient)',
        ],
      ],
    },
    {
      title: 'Plumb',
      colors: [
        [
          'var(--color-dark-plumb-300)',
          'var(--color-dark-plumb-200)',
          'var(--color-dark-plumb-100)',
          'var(--color-dark-plumb-gradient)',
        ],
      ],
    },
    {
      title: 'Yellow',
      colors: [
        [
          'var(--color-dark-yellow-300)',
          'var(--color-dark-yellow-200)',
          'var(--color-dark-yellow-100)',
          'var(--color-dark-yellow-gradient)',
        ],
        [
          'var(--color-dark-yellow-accent-200)',
          'var(--color-dark-yellow-accent-100)',
          'var(--color-dark-yellow-accent-gradient)',
        ],
      ],
    },
    {
      title: 'Red',
      colors: [
        [
          'var(--color-dark-red-300)',
          'var(--color-dark-red-200)',
          'var(--color-dark-red-100)',
          'var(--color-dark-red-gradient)',
        ],
      ],
    },
    {
      title: 'Blue',
      colors: [
        [
          'var(--color-dark-blue-300)',
          'var(--color-dark-blue-200)',
          'var(--color-dark-blue-100)',
          'var(--color-dark-blue-gradient)',
        ],
      ],
    },
    {
      title: 'Purple',
      colors: [
        [
          'var(--color-dark-purple-300)',
          'var(--color-dark-purple-200)',
          'var(--color-dark-purple-100)',
          'var(--color-dark-purple-gradient)',
        ],
        [
          'var(--color-dark-purple-accent-100)',
        ],
      ],
    },
    {
      title: 'Pink',
      colors: [
        [
          'var(--color-dark-pink-300)',
          'var(--color-dark-pink-200)',
          'var(--color-dark-pink-100)',
          'var(--color-dark-pink-gradient)',
        ],
        [
          'var(--color-dark-pink-accent-200)',
          'var(--color-dark-pink-accent-100)',
          'var(--color-dark-pink-accent-gradient)',
        ],
      ],
    },
    {
      title: 'Named Colors',
      colors: [
        [
          'var(--color-dark-warning)',
          'var(--color-dark-error)',
          'var(--color-dark-info)',
          'var(--color-dark-success)',
        ],
      ],
    },
  ],
}

const lightBackgroundColors = {
  backgroundColor: '#FFFFFF',
  fontColor: '#111111',
  swatches: [
    {
      title: 'Green',
      colors: [
        [
          'var(--color-light-green-primary-300)',
          'var(--color-light-green-primary-200)',
          'var(--color-light-green-primary-100)',
          'var(--color-light-green-primary-gradient)',
        ],
        [
          'var(--color-light-green-secondary-300)',
          'var(--color-light-green-secondary-200)',
          'var(--color-light-green-secondary-100)',
          'var(--color-light-green-secondary-gradient)',
        ],
        [
          'var(--color-light-green-contrast-300)',
          'var(--color-light-green-contrast-200)',
          'var(--color-light-green-contrast-100)',
          'var(--color-light-green-contrast-gradient)',
        ],
        [
          'var(--color-light-green-accent-100)',
          'var(--color-light-green-accent-200)',
          'var(--color-light-green-accent-gradient)',
        ],
      ],
    },
    {
      title: 'Silver',
      colors: [
        [
          'var(--color-light-silver-300)',
          'var(--color-light-silver-200)',
          'var(--color-light-silver-100)',
          'var(--color-light-silver-gradient)',
        ],
      ],
    },
    {
      title: 'Plumb',
      colors: [
        [
          'var(--color-light-plumb-300)',
          'var(--color-light-plumb-200)',
          'var(--color-light-plumb-100)',
          'var(--color-light-plumb-gradient)',
        ],
      ],
    },
    {
      title: 'Yellow',
      colors: [
        [
          'var(--color-light-yellow-300)',
          'var(--color-light-yellow-200)',
          'var(--color-light-yellow-100)',
          'var(--color-light-yellow-gradient)',
        ],
        [
          'var(--color-light-yellow-accent-100)',
        ],
      ],
    },
    {
      title: 'Red',
      colors: [
        [
          'var(--color-light-red-300)',
          'var(--color-light-red-200)',
          'var(--color-light-red-100)',
          'var(--color-light-red-gradient)',
        ],
      ],
    },
    {
      title: 'Blue',
      colors: [
        [
          'var(--color-light-blue-300)',
          'var(--color-light-blue-200)',
          'var(--color-light-blue-100)',
          'var(--color-light-blue-gradient)',
        ],
      ],
    },
    {
      title: 'Purple',
      colors: [
        [
          'var(--color-light-purple-300)',
          'var(--color-light-purple-200)',
          'var(--color-light-purple-100)',
          'var(--color-light-purple-gradient)',
        ],
        [
          'var(--color-light-purple-accent-100)',
        ],
      ],
    },
    {
      title: 'Pink',
      colors: [
        [
          'var(--color-light-pink-300)',
          'var(--color-light-pink-200)',
          'var(--color-light-pink-100)',
          'var(--color-light-pink-gradient)',
        ],
        [
          'var(--color-light-pink-accent-200)',
          'var(--color-light-pink-accent-100)',
          'var(--color-light-pink-accent-gradient)',
        ],
      ],
    },
    {
      title: 'Named Colors',
      colors: [
        [
          'var(--color-light-warning)',
          'var(--color-light-error)',
          'var(--color-light-info)',
          'var(--color-light-success)',
        ],
      ],
    },
  ],
}


const Colors = ({ spec: { swatches, backgroundColor, fontColor: color } }) => (
  <div className={style.container} style={{ backgroundColor, color }}>
    {swatches.map(({ title, colors: colorGroup }) => (
      <div key={title}>
        <h1 style={{ color }}>{title}</h1>
        <div className={style.container}>
          {colorGroup.map(colorList => (
            <div key={colorList.join('')} className={style.column}>
              {colorList.map(background => (
                <div key={background}>
                  <div
                    style={{ background }}
                    className={style.row}
                  >
                    <div className={style.rowText}>
                      {background
                        .replace('var(', '')
                        .replace(')', '')
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

Colors.propTypes = {
  spec: propTypes.shape({
    swatches: propTypes.array,
    backgroundColor: propTypes.string,
    fontColor: propTypes.string,
  }).isRequired,
}

storiesOf('Colors', module)
  .add(
    'Dark background color',
    () => <Colors spec={darkBackgroundColors} />
  )
  .add(
    'Light background color',
    () => <Colors spec={lightBackgroundColors} />
  )

