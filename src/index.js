import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'

const App = () =>
  <h1>Hello world</h1>


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

