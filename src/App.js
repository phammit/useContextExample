import React from 'react';
import {
  BrowserRouter as Router,
  Switch
 } from 'react-router-dom';
 import routes from './Config/routes.js';
 import { AuthProvider } from './Context';
 import AppRoute from './Components/AppRoutes';


export default function MyApp() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
              exact
              />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

//export default App

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