import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Navbar( props) {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("userid");
        setTimeout(() => {
            navigate(
                "/login",
            );
        }, 1000);
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="user-name">
               {props.userName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}