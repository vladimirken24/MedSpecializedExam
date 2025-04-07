import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './CreateUser.css';

function CreateUser () {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [status, setStatus] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', {email, name, status, role})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="create-user-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Add Admin</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter Name" 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input 
                        type="text" 
                        id="status" 
                        placeholder="Enter Status" 
                        onChange={(e) => setStatus(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <input 
                        type="text" 
                        id="role" 
                        placeholder="Enter Role" 
                        onChange={(e) => setRole(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}


export default CreateUser;