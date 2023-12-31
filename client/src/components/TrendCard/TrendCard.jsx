import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
   <div className="TrendCard">
       <h3 className='trendHead'>latest trends</h3>


       {TrendData.map((trend, id)=>{
            return(
                <div className="trend" key={id}>
                    <span className='trendAnime'>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
       })}
   </div>
  )
}

export default TrendCard