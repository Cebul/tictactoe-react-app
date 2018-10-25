import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'
import NoMatch from '../containers/NoMatch'

const Routes = () => (
  <Router>
    <Template>
        <Switch>
          <Route
            exact
            path='/'
            component={TicTacToe}
          />
          <Route
            path='/profile'
            component={Profile}
          />
          <Route component={NoMatch} />
        </Switch>
    </Template>
  </Router>
)

export default Routes
