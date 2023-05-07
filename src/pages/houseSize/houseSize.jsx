import React from 'react'
import { useState } from "react";
import "./houseSize.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Navbar from '../../common/navbar';

const HouseSize = () => {
    const navigate = useNavigate()
    const location = useLocation();
    let userName = (location.state.userName).split('')[0]

    const options = ["Select plot size", "600 sq.ft (20*30)", "800 sq.ft (25*40)", "1000 sq.ft (25*40)", "1200 sq.ft (30*40)", "1500 sq.ft (25*50)", "1800 sq.ft (30*60)", "2000 sq.ft (31*65)", "2500 sq.ft (34*71)", "2800 sq.ft (40*70)", "3500 sq.ft (50*90)"];
    const [selected, setSelected] = useState(options[0]);


    const submit = (e) => {
        let selectedPlotSize = selected.split(" ")[0]
        axios.post('http://localhost:9092/plot/getPlotsBySize', {
            plotSize: selectedPlotSize,
        })
            .then(function (response) {
                navigate(
                    "/house-plan",
                    {
                        state: {
                            housePlan:response.data.list,
                            userName:userName
                        }
                    }

                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };
   
    return (
        <div className="houseSize-container">
            <div className="user-profile"> <h1 className="houseSize__title">Welcome to Craft My Space Dashboard</h1>
                <Navbar userName={userName}/>
            </div>
            <div className="houseSize-section">
                <h3>Select your plot size with dimension</h3>
                <form>
                    <select
                        className='size-select'
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}>
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={(e) => submit(e)} className="select-button">
                        Select
                    </button>
                </form>
            </div>
        </div>
    )
}

export default HouseSize
