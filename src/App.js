// App.js
import React, { Component } from 'react';
import { Router } from "react-router-dom";
import Layout from './layout/Layout';
import Routes from './react-routes/Routes'
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
class App extends Component {

  render() {
    return (
      <React.Fragment>
              <Router history={history} >
                  <Routes/>
              </Router>
          </React.Fragment>
    );
  }
}

export default App;