import React from 'react'
import "./housePlan.css"
import Ground600 from "../../assets/600-1-ground.jpeg"
import Ground6001 from "../../assets/600-2-first.jpeg"
import Ground6002 from "../../assets/600-2-ground.jpeg"

const HousePlan = () => {
    return (
        <>
        <h1 className='house-plan-title'>House Plans</h1>
        <div className='house-plan-container'>
            <div className='house-plan-1'>
                <h3>House Plan with ground floor</h3>
                <img src={Ground600} alt="Ground600"></img>
                <button className='view-details-btn'>View Details</button>
            </div>
            <div className='house-plan-2'>
                <h3>House Plan with ground & first floor</h3>
                <div className='house-plan-2-image'>
                <img src={Ground6002} alt="Ground600"></img>
                <img src={Ground6001} alt="Ground600"></img>
                </div>
                <button className='view-details-btn'>View Details</button>
            </div>
        </div>
        </>
    )
}

export default HousePlan
