import React, {Component} from 'react'
class Login extends Component {
  render(){
    return(
      <div className="wrap">
        <a href="#">三</a>
        <span className="login_span">Login</span>
        <p className="title">
          <span className="enter">
            登录
          </span>
          链接一个个小而确定的幸福
        </p>
        <from className="from" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="用户名" className="input input_margin"/>
          <input type="password" placeholder="密码" className="input"/>
          <input type="submit" placeholder="登录" className="button" />
        </from>
        <a href="../Signup/Signup.js">
          没有账号？点此注册
        </a>
      </div>
    )
  }
}
export default Login
