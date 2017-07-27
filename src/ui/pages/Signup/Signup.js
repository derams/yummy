import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import axios from 'axios'
import Settings from '../../../Settings.js'
import './signup.css'
class Signup extends Component {
  signup = (e) => {
    e.preventDefault()
    let username = this.username.value
    let password = this.password.value

    let data = {username,password}
    axios.post(`${Settings.host}/user/signup`,data)
    .then(res=>{console.log(res.data)
      this.props.history.push('/dashboard')
    })
  }
  render(){
    return(
      <div className="signup">
  <TitleHeader title="signup" />
  <div className="signup-content">
    <div className="signup-hero" >
      <h1 className="title">
        注册
      </h1>
      <p className="slogan">
        连接小而确定的幸福
      </p>
    </div>
    <form onSubmit={this.signup} className="signup-form">
      <div className="signup-text-inputs">
        <div className="signup-text-inputs-inner">
          <input ref={ value=> this.username = value } type="text" placeholder="用户名" />
          <input type="text" placeholder="Email" />
          <input ref={ value=> this.password = value } type="password" placeholder="password" />
          <input type="password" placeholder="再输一遍" />
        </div>
      </div>
      <div className="signup-actions">
        <button type="submit">注册</button>
      </div>
    </form>
    <div className="signup-other-option">
      <Link to="/login">已有账号？直接登录</Link>
    </div>
  </div>
</div>
    )
  }
}
export default Signup
