import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../Pages/Home'

export default () => (
  <BrowserRouter>
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/home' component={Home} />
    </div>
  </BrowserRouter>
)