// Node modules
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Assets
import './App.css';

// Components
import HomePage from './pages/home/HomePage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import TopNav from './parts/navigation/top-nav/TopNav';
import MobileNav from './parts/navigation/mobile-nav/MobileNav';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="*" component={TopNav} />
        <Route path="*" component={MobileNav} />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
