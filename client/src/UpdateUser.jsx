import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './UpdateUser.css';

function UpdateUser () {
    const {id} = useParams()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [status, setStatus] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/getUser/"+id)
        .then(result => {console.log(result)
            setEmail(result.data.email)
            setName(result.data.name)
            setStatus(result.data.status)
            setRole(result.data.role)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {email, name, status, role})
        .then(result => {
            console.log(result)
            navigate('/users')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="create-user-container">
            <form className="user-form" onSubmit={Update}>
                <h2 className="form-title">Update User</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter Email" 
                        value={email}
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
                        value={name}
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
                        value={status}
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
                        value={role}
                        onChange={(e) => setRole(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    );
}

export default UpdateUser;