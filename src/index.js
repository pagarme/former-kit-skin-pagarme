import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'react-css-themr'

import registerServiceWorker from './registerServiceWorker'

import pagarmeTheme from './theme-pagarme'

const App = () => (
  <ThemeProvider theme={pagarmeTheme}>
    <h1>Hello world</h1>
  </ThemeProvider>
)


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

