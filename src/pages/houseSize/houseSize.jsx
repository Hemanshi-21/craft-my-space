import React from 'react'
import { useState } from "react";

const HouseSize = () => {
    const options = ["Select plot size", "Italy", "Spain", "Greece", "India"];
    const [selected, setSelected] = useState(options[0]);
    const submit = () => {
        console.log(selected);
    };
    return (
        <div className="houseSize-container">
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
