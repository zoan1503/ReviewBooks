// Header.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
export default function MainHeaderMenu() {
    let id_user = localStorage.getItem('id_user')
    const [user, setUser] = useState({});
    useEffect(() => {
        Axios
            .get("http://localhost:8000/signin/getalluserinfo", {
                params: {
                    'id_user': id_user
                }
            })
            .then(response => setUser(response.data[0]));
    }, []);
    function handleLogout() {
        localStorage.clear();
        window.location.href = 'http://localhost:4000/login';
    }
    return (

        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                    <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Avatar" />
                        <span className="hidden-xs" style={{ color: "white" }}> {user.username}</span>
                    </a>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <a href='/login' style={{ color: 'white', textDecoration: 'underline'}} onClick={handleLogout} >Đăng xuất</a>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {/* <ul className="dropdown-menu">

                        <li className="user-header">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Avatar" />
                            <p cl>
                                {user.fullname}
                                <small>{user.email}</small>
                            </p>
                        </li>
                        <li className="user-footer">
                            <div className="row">

                                <div className="col-sm-4"></div>
                                <div className="col-sm-6">
                                    <button type="button" className="btn btn-default btn-flat" onClick={handleLogout}>Đăng xuất</button>
                                </div>
                            </div>
                        </li>
                    </ul> */}
                </li>

            </ul>
        </div>
    );

}