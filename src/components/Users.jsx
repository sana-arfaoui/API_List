import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="users-container">
            {users.map((user) => {
                return (
                    <div key={user.id} className="user-item">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                            width={50}
                        />
                        <h2>{user.name}</h2>
                        <h4>{user.email}</h4>
                        <h5>{user.phone}</h5>
                        <Link to={`/profile/${user.id}`} className="btn-post">
                            See Posts
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
