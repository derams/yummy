import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'
class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://192.168.0.122:')
  }
  render(){
    return(
      <div>
        <div className="wrap">
        
          <span className="login_span">Signup</span>
          <p className="title">
            <span className="enter">
              注册
            </span>
            链接一个个小而确定的幸福
          </p>
          <from className="from" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="用户名" className="input input_margin"/>
            <input type="text" placeholder="Email" className="input "/>
            <input type="text" placeholder="密码" className="input "/>
            <input type="password" placeholder="再输入一遍" className="input"/>
            <input type="submit" placeholder="注册" className="button" />
          </from>
          <a href="../Login/Login.js">
            已有账号？点此登录
          </a>
        </div>
      </div>
    )
  }
}
export default Signup
