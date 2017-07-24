import React, { Component } from 'react';
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Sidebar from './ui/pages/Sidebar/Sidebar.js'

import './App.css';
import {
    BrowerRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Sidebar>
          <switch>
            <Route path="/" exact Component={Home} />
            <Route path="/signup" exact Component={Signup} />
          </switch>
        </Sidebar>
      </div>
    </Router>
    )
  }
}

export default App;
