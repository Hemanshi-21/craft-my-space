import React from 'react'
import "./housePlanDetails.css"
import { useLocation } from 'react-router-dom';
import Navbar from '../../common/navbar';


const HousePlanDetails = () => {
    const location = useLocation();
    let userName = (location.state.userName).split('')[0]

    let housePlanDetails = location.state.housePlanDetails

    return (
        <div className='house-plan-details'>
            <div className="user-profile">
                <h1>House Plan Details</h1>
                <Navbar userName={userName}/>
            </div>
            {/* change to dynamic size & dimensions */}
            <div className='plan-desc-section'>
                <div className='plan-desc-images'>
                    {
                        housePlanDetails.images.map((image) => {
                            return (
                                <img src={`https://drive.google.com/uc?export=view&id=${image}`} alt="house-plan-image"></img>
                            )
                        })
                    }
                </div>

                <div className='plan-details'>
                    <h3>{housePlanDetails.size} sq.ft. {housePlanDetails?.dimension} house plan</h3>
                    <p>This plan is designed for {housePlanDetails?.dimension} {housePlanDetails.facing} facing plot.</p>
                    <ul><h5>Plan Description</h5>
                        <li>Builtup area:-- {housePlanDetails.builtUpArea} sq.ft.</li>
                        <li>Facing:-- {housePlanDetails.facing}</li>
                    </ul>
                    <ul><h5>Material required</h5>
                        <li>Cement:- {housePlanDetails.cement} Bags</li>
                        <li>Steel:- {housePlanDetails.steel} kg</li>
                        <li>Sand:- {housePlanDetails.sand} tons</li>
                        <li>Aggregate:- {housePlanDetails.aggregate} tons</li>
                        <li>Bricks:- {housePlanDetails.bricks} nos.</li>
                    </ul>
                    <ul>
                        <h5>Material cost</h5>
                        <li>Cement:- Rs. {housePlanDetails.cementCost}</li>
                        <li>Steel:- Rs. {housePlanDetails.steelCost}</li>
                        <li>Sand:- Rs. {housePlanDetails.sandCost}</li>
                        <li>Aggregate:- Rs. {housePlanDetails.aggregateCost}</li>
                        <li>Bricks:- Rs. {housePlanDetails.bricksCost}</li>
                    </ul>
                    <h5>Total Material cost:- Rs. {housePlanDetails.materialCost}</h5>
                    <h5>Total Labour cost:- Rs. {housePlanDetails.labourCost}</h5>
                    <h5>Total cost of construction:- Rs. {housePlanDetails.totalCost}</h5>
                    <h5>Time required for construction:- {housePlanDetails.completionTime} Months</h5>
                </div>
            </div>
        </div>
    )
}

export default HousePlanDetails
