import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
 } from 'react-router-dom';
 import routes from './Config/routes.js';
 import Dashboard from './Pages/Dashboard';
 import PageNotFound from './Pages/NotFound';
 import Login from './Pages/Login';


function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

/*
{routes.map((route) => (
  <Route
    key={route.path}
    path={route.path}
    component={route.component}
  />
))}
*/

/*
    <Route path="/*">
          <PageNotFound />
        </Route>

    <Route path="/">
          <Login/>
        </Route>

    <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/notfound">
          <PageNotFound />
        </Route>
        <Route path="/">
          <Login/>
        </Route> 
        <Route path="/*">
          <PageNotFound />
        </Route>
*/