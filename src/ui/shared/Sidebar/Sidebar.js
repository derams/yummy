import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import './Sidebar.css'
class Sidebar extends Component {
  state={
    isOpen:false
  }
  render(){
    return(
      <div className="sidbar">

        <Menu isOpen={this.state.isOpen}>
          <div className="bm-user-inif">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div className="bm-user-auth">
              <Link to="" className="bm-user-left">
                happypeter
              </Link>
              <Link to="" className="bm-user-right">
                退出
              </Link>
            </div>
          </div>
          <div className="bm-item-list">
            UserInif
          </div>
          <Link onClick={this.cloneBmMenu} to="/">Home</Link>
          <Link onClick={this.cloneBmMenu} to="/signup">注册</Link>
          <Link onClick={this.cloneBmMenu} to="/cart">购物车</Link>
          <Link onClick={this.cloneBmMenu} to="/dishes">猜你喜欢</Link>
          <button className="bm-close-button" onClick={this.closeBmMenu}>
            关闭
          </button>
        </Menu>
      </div>
    )
  }
}
export default Sidebar
