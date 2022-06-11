import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ defaultTheme }>
        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/search" component={ Search } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="/profile" component={ Profile } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
