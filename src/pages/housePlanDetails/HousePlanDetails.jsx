import React from 'react'
import "./housePlanDetails.css"
import Ground600 from "../../assets/600-1-ground.jpeg"
import Dropdown from 'react-bootstrap/Dropdown';

const HousePlanDetails = () => {
    const logout = () => {
        console.log("here");
    }
    return (
        <div className='house-plan-details'>
            <div className="user-profile">
                <h1>House Plan Details</h1>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="user-name">
                        HT
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
               {/* change to dynamic size & dimensions */}
            <div className='plan-desc-section'>
                <img src={Ground600} alt="house-plan" />
                <div className='plan-details'>
                    <h3>600 sq.ft. 20x30 house plan</h3> 
                    <p>This plan is designed for 20x30 South facing plot.</p>
                    <ul><h5>Plan Description</h5>
                        <li>Builtup area:--</li>
                        <li>Facing:--</li>
                    </ul>
                    <ul><h5>Material required</h5>
                        <li>Cement:-</li>
                        <li>Steel:-</li>
                        <li>Sand:-</li>
                        <li>Aggregate:-</li>
                        <li>Bricks:-</li>
                    </ul>
                    <ul>
                    <h5>Material cost</h5>
                        <li>Cement:-</li>
                        <li>Steel:-</li>
                        <li>Sand:-</li>
                        <li>Aggregate:-</li>
                        <li>Bricks:-</li>
                    </ul>
                    <h5>Total Material cost:-</h5>
                    <h5>Total Labour cost:-</h5>
                    <h5>Total cost of construction:-</h5>
                    <h5>Time required for construction:-</h5>
                </div>
            </div>
        </div>
    )
}

export default HousePlanDetails
