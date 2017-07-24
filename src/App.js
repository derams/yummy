import React, { Component } from 'react';
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Sidebar from './ui/shared/Sidebar/Sidebar.js'

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Sidebar>
              <switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup"  component={Signup} />
              </switch>
            </Sidebar>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
