import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
class Sidebar extends Component {
  render(){
    return(
      <div className="sidbar">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
export default Sidebar
