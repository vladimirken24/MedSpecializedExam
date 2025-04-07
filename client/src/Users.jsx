import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Users.css';

function Users () {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();    

    useEffect(() => {
        axios.get('http://localhost:3001/users')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (!localStorage.getItem("isLoggedIn")) {
            navigate('/');
        } else {
            axios.get('http://localhost:3001/')
                .then(result => setUsers(result.data))
                .catch(err => console.log(err));
        }
    }, [navigate]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then((res) => {console.log(res)
            window.location.reload()})
        .catch((errr) => console.log(errr));
    }

    return (
        <div className="users-container">
            <div className="header">
                <Link to="/create" className="invite-button">+ Invite User</Link>
            </div>

            <table className="users-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.status}</td>
                            <td>{user.role}</td>
                            <td>{user.view}</td>
                            <td>
                                <Link to={`/update/${user._id}`} className="update-link">Update</Link>
                            </td>
                            <td>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;