import React from 'react'
import "./housePlan.css"
import "../houseSize/houseSize.css"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from '../../common/navbar';


const HousePlan = () => {
    const navigate = useNavigate()
    const location = useLocation();
    let userName = (location.state.userName).split('')[0]
    let housePlanImage = location.state.housePlan

    const viewDetailsPage = (plan) => {
        navigate(
            "/house-plan-details",
            {
                state: {
                    housePlanDetails: housePlanImage[plan],
                    userName: userName
                }
            }

        );
    }
    return (
        <div>
            <div className="user-profile">
                <h1 className='house-plan-title'>House Plans</h1>
                <Navbar userName={userName}/>
            </div>

            <div className='house-plan-container'>
                {
                    housePlanImage.length > 1 ?
                        <>
                            <div className='house-plan-1'>
                                <h3>House Plan for {housePlanImage[0].size}</h3>
                                {
                                    housePlanImage[0].images.map((image) => {
                                        return (
                                            <img src={`https://drive.google.com/uc?export=view&id=${image}`} alt="houseplan-1"></img>
                                        )
                                    })
                                }

                                <button className='view-details-btn' onClick={(plan)=>viewDetailsPage(0)}>View Details</button>
                            </div>
                            <div className='house-plan-2'>
                                <h3>House Plan for {housePlanImage[1].size}</h3>
                              
                                    {
                                        housePlanImage[1].images.map((image) => {
                                            return (
                                                <img src={`https://drive.google.com/uc?export=view&id=${image}`} alt="houseplan-2"></img>
                                            )
                                        })
                                    }
                               
                                <button className='view-details-btn' onClick={(plan)=>viewDetailsPage(1)}>View Details</button>
                            </div>
                        </>
                        :
                        <div className='house-plan-1' style={{width:"100%"}}>
                            <h3>House Plan for {housePlanImage[0].size}</h3>
                            <div style={{display:"flex"}}>
                            {
                                    housePlanImage[0].images.map((image) => {
                                        return (
                                            <img src={`https://drive.google.com/uc?export=view&id=${image}`} alt="houseplan-1"></img>
                                        )
                                    })
                                }
                                </div>
                            <button className='view-details-btn' onClick={(plan)=>viewDetailsPage(0)}>View Details</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default HousePlan
