import React, { Component } from 'react'

import './aleartbost.css'

import { connect } from 'react-redux'

class AlertBost extends Component{
  
  state={
    showAleart:true
  }
    //
    // this.setState({
    //   showAleart: false
    // })

  render(){
    return(
      <div className= { this.state.showAleart ?  "aleart-bost show":" aleart-bost"}>
        <div className="aleart-content-card">
          <div className="aleart-msg">
            报错信息
          </div>
          <div className="aleart-close-button">
            关闭
          </div>
        </div>
        警告框
      </div>
    )
  }
}
const mapStateToProps = (state) =>{

}
export default connect(mapStateToProps)(AlertBost)
