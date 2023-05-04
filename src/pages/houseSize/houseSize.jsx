import React from 'react'
import { useState } from "react";
import "./houseSize.css"

const HouseSize = () => {
    const options = ["Select plot size", "600sq.ft (20*30)", "800sq.ft (25*40)", "1000sq.ft (25*40)", "1200sq.ft (30*40)", "1500sq.ft (25*50)", "1800sq.ft (30*60)", "2000sq.ft (31*65)", "2500sq.ft (34*71)", "2800sq.ft (40*70)", "3500sq.ft (50*90)"];
    const [selected, setSelected] = useState(options[0]);
    const submit = () => {
        console.log(selected);
    };
    return (
        <div className="houseSize-container">
            <div className='user-profile'>
                <p>HT</p>
            </div>
            <div className='houseSize-section'>
                <h1 className="houseSize__title">Welcome to Craft My Space</h1>
                <form>
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}>
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                        id="select"
                    </select>
                    <button type="button" onClick={submit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default HouseSize
