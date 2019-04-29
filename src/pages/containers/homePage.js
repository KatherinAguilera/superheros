import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import LayoutHeros from '../../heros/components/layoutheros';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Hero from '../../heros/container/hero'
// redenderizar en el navegador
import ReactDOM from 'react-dom';


class HomePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
            render={(props) => 
              <LayoutHeros {...props} heros={this.props.data.heros}/>
              }
          />
          <Route exact path="/heros/:heroId" component={ Hero }/>
        </Switch>
      </BrowserRouter>

    )
  }
}
export default HomePage;
