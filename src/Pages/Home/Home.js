import React from 'react'
import ResponsiveAppBar from "../../assets/Nav/Nav"
import  RecipeReviewCard  from '../../assets/Card'
 import datas from "../../assets/product.json"
 import "./Home.scss"
 import Nav from '../../assets/Nav/Nav'

const Home = () => {
 let item =   datas.map((data)=>{
  
 return (
  <div key={data.id} className="prod-item">
      <RecipeReviewCard prod = {data}/>
  </div>
 )
 })
  return (
    <div className='main-home'>
        {/* <ResponsiveAppBar/> */}
        <Nav/>
         <h1>Home</h1>
        <div className="prod-cont">
          {item}
        </div>
        
        </div>
  )
}

export default Home