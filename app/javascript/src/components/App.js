import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Airlines from './Airlines/Arlines'
import Airline from './Airline/Arline'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Airlines}></Route>
      <Route exact path="/airlines/:slug" component={Airline}></Route>
    </Switch>
  )
}

export default App