import React, { Component } from 'react'
import { connect } from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dish.css'
import ShopingCard from './ShopingCard'

class Dish extends Component {
  render(){
    if(Object.keys(this.props.dishes).length !== 0) {
      const { dishes } = this.props
      console.log('===+++===', dishes)
      const { dishId } = this.props.match.params
      let dish = dishes[dishId]
      return(
         <div className="dish">
           <TitleHeader title={dish.name} />
             <div className="dish-info">
               <div className="dish-img-wrap">
                 <div style={{ 'backgroundImage' : `url(${dish.poster})`}}
                   className="img">
                   <ShopingCard color="cyan"/>
                 </div>
               </div>
             </div>
         </div>
      )
    }else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dish)
