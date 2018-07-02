// Node modules
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Assets
import './App.css';

// Components
import HomePage from './pages/home/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import SideNav from './parts/side-nav/SideNav';
import AboutPage from './pages/about/AboutPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={['/about', '/portfolio']} component={SideNav} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
