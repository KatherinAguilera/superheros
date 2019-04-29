import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LayoutHeros from '../../heros/components/layoutheros';
import Hero from '../../heros/container/hero';
import HomeLayout from '../../pages/components/home-layout'
import HomePage from './homePage';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/hero" component={ Hero } />
      </Switch>
    )
  }
}
export default App;
