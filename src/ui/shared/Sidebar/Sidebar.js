import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
class Sidebar extends Component {
  render(){
    teturn(
      <div className="sidbar">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
      </div>
    )
  }
}
export default Sidebar
