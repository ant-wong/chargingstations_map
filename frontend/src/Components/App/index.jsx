import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// ROUTES
import About from '../About';
import Home from '../Home';
import Map from '../Map';

// CSS
import '../../css/theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => {
            return <Home />
          }} />
          <Route path="/vancouver" render={(props) => {
            return <About />
          }} />
          <Route path="/map" render={(props) => {
            return <Map />
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
