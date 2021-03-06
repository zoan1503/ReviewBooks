// SideBar.js
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Axios from 'axios'
export default function SideBar() {

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

    return (
        <React.Fragment>
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ position: 'fixed' }}>
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">

                            <Link to='/usermanager'>{user.fullname} </Link>
                        </div>

                    </div>
                    {/* search form */}
                    {/* <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-primary"><i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form> */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="text-white text-center">MENU LIST</li>
                            <br />
                            <div>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-home" />
                                        {/* <span>Review S??ch</span> */}
                                        <Link to='/home'>
                                            <span>&nbsp;Trang ch???</span>
                                        </Link>
                                        {/* <i className="right fa fa-angle-left"></i> */}
                                    </a>
                                </li>

                                {/* <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-book" />

                                        <Link to='/reviewbooks'>
                                            <span>&nbsp;Review S??ch</span>
                                        </Link>

                                    </a>
                                </li> */}

                                <li class="nav-item has-treeview">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fa fa-search"></i>
                                        <Link to='/booksearching'>
                                            <span>&nbsp;T??m ki???m s??ch</span>
                                        </Link>
                                    </a>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#abc" className="nav-link">
                                        <i className="nav-icon fa fa-user" />
                                        <Link to='/usermanager'>
                                            <span>&nbsp;Qu???n l?? h??? s??</span>
                                        </Link>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"><a href="/sessionmanager" className="nav-link">Qu???n l?? phi??n ????ng k??</a></li>
                                        <li className="nav-item"><a href="/assignment" className="nav-link">Ph??n c??ng gi???ng d???y</a></li>
                                        {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                    </ul>
                                </li>
                            </div>
                            {/* Test */}

                            <div>
                                <li className="nav-item has-treeview">
                                    <a href="#abc" className="nav-link">
                                        <i className="nav-icon fa fa-book" />
                                        <Link to='/reviewedbook'>
                                            <span>&nbsp;S??ch ???? Review</span>
                                        </Link>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"><a href="/profile" className="nav-link">H??? s?? c?? nh??n</a></li>
                                        {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="#abc" className="nav-link">
                                        <i className="nav-icon fa fa-calendar" />
                                        <Link to='/reactionhistory'>
                                            <span>&nbsp;L???ch s??? t????ng t??c</span>
                                        </Link>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"><a href="/lecturermanager" className="nav-link">Danh s??ch l???p h???c</a></li>
                                        <li className="nav-item"><a href="/setpoint" className="nav-link">Nh???p ??i???m</a></li>
                                        {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                    </ul>
                                </li>
                            </div>

                            {
                                (1 === '2') &&
                                <div>
                                    <li className="nav-item has-treeview">
                                        <a href="#abc" className="nav-link">
                                            <i className="nav-icon fa fa-user" /> <p>
                                                H??? S??
                                    <i className="right fa fa-angle-left"></i>
                                            </p>

                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item"><a href="/profile" className="nav-link">H??? s?? c?? nh??n</a></li>
                                            {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#abc" className="nav-link">
                                            <i className="nav-icon fa fa-copy" /> <p>
                                                Qu???n l?? h???c t???p
                            <i className="right fa fa-angle-left"></i>
                                            </p>

                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item"><a href="/registerclass" className="nav-link">????ng k?? l???p</a></li>
                                            <li className="nav-item"><a href="/listpoint" className="nav-link">K???t qu??? h???c t???p</a></li>
                                            <li className="nav-item"><a href="/classoftern" className="nav-link">Danh s??ch l???p</a></li>
                                            {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                        </ul>
                                    </li>
                                </div>
                            }
                            {/* End Test */}

                        </ul>
                    </nav>
                </section>
            </aside>
        </React.Fragment>
    )
}