import ReactDOM from 'react-dom'
import React from 'react'
import { getWindowId } from '../common/windows'

// load the proper window script
document.addEventListener('DOMContentLoaded', () => {
  const App = require(`./windows/${getWindowId()}`).default
  ReactDOM.render(<App />, document.getElementById('app'))
})
