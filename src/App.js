import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import { ROUTES, RenderPrivateRoutes } from './private.routes';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <RenderPrivateRoutes routes={ ROUTES } />
      </Switch>
    );
  }
}

export default App;
