import React, { Component } from 'react';
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Login from './ui/pages/Login/Login.js'
import Dashboard from './ui/pages/Dashboard/Dashboard.js'
import Sidebar from './ui/shared/Sidebar/Sidebar.js'
import AlertBost from './ui/shared/AlertBost/AlertBost.js'
import './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Provider>
        <Router>
          <div>
            {/* 根据链接判断组件是否显示 */}
            <Route render={({ location }) =>{
              return location.pathname !== '/' ? (<Sidebar />) : null
            }} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup"  component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
          </div>
        </Router>
      </Provider>
      </div>
    )
  }
}
export default App;
