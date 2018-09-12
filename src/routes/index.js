import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import NoMatch from '../containers/NoMatch'

const Routes = () => (
    <Router>
      <div>
        <Template />
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            path='/profile'
            component={Profile}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
)

export default Routes
