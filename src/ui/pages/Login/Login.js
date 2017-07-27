// import React, {Component} from 'react'
// import TitleHeader from '../../shared/TitleHeader/TitleHeader'
//
// class Login extends Component {
//   render(){
//     return(
//       // <div className="">
//       //   <TitleHeader title="login"/>
//       //   <div className="">
//       //     <TitleHeader title="login" />
//       //   </div>
//
//        <div className="wrap login">
//
//         <span className="login_span">Login</span>
//         <p className="title">
//           <span className="enter">
//             登录
//           </span>
//           链接一个个小而确定的幸福
//         </p>
//         <from className="from" onSubmit={this.handleSubmit}>
//           <input type="text" placeholder="用户名" className="input input_margin"/>
//           <input type="password" placeholder="密码" className="input"/>
//           <input type="submit" placeholder="登录" className="button" />
//         </from>
//         <a href="../Signup/Signup.js">
//           没有账号？点此注册
//         </a>
//       </div>
//
//     )
//   }
// }
// export default Login





import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import axios from 'axios'
import './login.css'
import Settings from '../../../Settings.js'
class Signup extends Component {
  login = (e) => {
    e.preventDefault()
    let username = this.username.value
    let password = this.password.value
    let data = {username,password}
    axios.post(`${Settings.host}/user/login`,data)
    .then(res=>{console.log(res.data)})
    .catch(err=> {
      console.log(err.response.data.msg)
    })
  }
  render(){
    return(
      <div className="login">
        <TitleHeader title="login" />
        <div className="login-content">
          <div className="login-hero" >
            <h1 className="title">
              登录
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form onSubmit={this.login} className="login-form">
            <div className="login-text-inputs">
              <div className="login-text-inputs-inner">
                <input ref={ value => this.username = value } type="text" placeholder="用户名" />
                <input ref={ value => this.password = value } type="password" placeholder="password" />
              </div>
            </div>
            <div className="login-actions">
              <button type="submit">登录</button>
            </div>
          </form>
          <div className="login-other-option">
            <Link to="/signup">没有账号？请先注册</Link>
          </div>
        </div>
  </div>
    )
  }
}
export default Signup
