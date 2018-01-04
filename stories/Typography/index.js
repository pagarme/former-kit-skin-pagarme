import React from 'react'

import { storiesOf } from '@storybook/react'

import style from './style.css'
import typography from '../../src/theme-pagarme/typography.css'
import '../../src/theme-pagarme/index.css'

storiesOf('Typography', module)
  .add('Famílias de Fonte', () => (
    <div className={style.fontBook}>
      <div>
        <span>Display 4</span>
        <span className={`${style.display4} ${typography.display}`}>
          Assistant 72
        </span>
      </div>
      <div>
        <span>Display 3</span>
        <span className={`${style.display3} ${typography.display}`}>
          Assistant 60
        </span>
      </div>
      <div>
        <span>Display 2</span>
        <span className={`${style.display2} ${typography.display}`}>
          Assistant 48
        </span>
      </div>
      <div>
        <span>Display 1</span>
        <span className={`${style.display1} ${typography.display}`}>
          Assistant 36
        </span>
      </div>
      <div>
        <span>Headline</span>
        <span className={`${style.headline} ${typography.headline}`}>
          Assistant 30
        </span>
      </div>
      <div>
        <span>Title</span>
        <h1>
          Assistant 24
        </h1>
      </div>
      <div>
        <span>Body</span>
        <div>
          <p>
            Assistant Regular 14
          </p>
          <p>
            <i>
              Assistant Italic 14
            </i>
          </p>
          <p>
            <b>
              Assistant Bold 14
            </b>
          </p>
        </div>
      </div>
    </div>
  ))
  .add('Aplicações', () => (
    <div>
      <h1>Parágrafo</h1>
      <p>
        Curabitur at finibus neque. In efficitur sapien ut lectus suscipit
        consequat. Proin eget aliquam leo. <a href="">Maecenas mattis</a>&nbsp;
        quis nisi vel venenatis. Proin sit amet purus nec magna ornare
        iaculis. Curabitur at finibus neque. In efficitur sapien ut lectus
        suscipit consequat. Proin eget aliquam leo. Maecenas mattis quis nisi
        vel venenatis. Proin sit amet ec <a href="">magna ornare</a> iaculis.
      </p>
      <h1>Listas</h1>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </ul>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
      <h1>Citação</h1>
      <blockquote>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </blockquote>
    </div>
  ))

