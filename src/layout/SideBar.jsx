// SideBar.js
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
export default class SideBar extends Component {
    render() {
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
                                <a href="#" className="d-block">Thành</a>
                                <a href="#abc"><i className="fa fa-circle text-success" /> Online</a>
                            </div>

                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-primary"><i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="text-white text-center">MENU</li>
                                <div>
                                    <li className="nav-item has-treeview">
                                        <a href="#abc" className="nav-link"> 
                                            <i className="nav-icon fa fa-users" />
                                            <Link to='/reviewbook'>
                                                <span>&nbsp;Review Sách</span>
                                            </Link>
                                            <i className="right fa fa-angle-left"></i>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item"><a href="/usermanager" className="nav-link">Quản lí sách của bạn</a></li>
                                            <li className="nav-item"><a href="/studentsmanager" className="nav-link">Quản lí tài khoản</a></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item has-treeview">
                                        <a href="#" class="nav-link">
                                            <i class="nav-icon fa fa-copy"></i> <p>
                                                Quản lí đầu sách
                                    <i class="fa fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul class="nav nav-treeview">

                                            <li class="nav-item">
                                                <a href="/subjectsmanager" class="nav-link">
                                                    <i class="far fa-circle nav-icon"></i>
                                                    <p>Quản lí sách văn học</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/subjectmanager" class="nav-link">
                                                    <i class="far fa-circle nav-icon"></i>
                                                    <p>Quản lí sách khoa học</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/classmanager" class="nav-link">
                                                    <i class="far fa-circle nav-icon"></i>
                                                    <p>Danh sách lớp học</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/ternmanager" class="nav-link">
                                                    <i class="far fa-circle nav-icon"></i>
                                                    <p>Danh sách kỳ học</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item has-treeview">
                                        <a href="#abc" className="nav-link">
                                            <i className="nav-icon fa fa-calendar" /> <p>
                                                Quản lý đăng ký
                                    <i className="right fa fa-angle-left"></i>
                                            </p>

                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item"><a href="/sessionmanager" className="nav-link">Quản lý phiên đăng ký</a></li>
                                            <li className="nav-item"><a href="/assignment" className="nav-link">Phân công giảng dạy</a></li>
                                            {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                        </ul>
                                    </li>
                                </div>
                                {/* Test */}

                                <div>
                                    <li className="nav-item has-treeview">
                                        <a href="#abc" className="nav-link">
                                            <i className="nav-icon fa fa-user" /> <p>
                                                Hồ Sơ
                                    <i className="right fa fa-angle-left"></i>
                                            </p>

                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item"><a href="/profile" className="nav-link">Hồ sơ cá nhân</a></li>
                                            {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                        </ul>
                                    </li>
                                    <li className="nav-item has-treeview">
                                        <a href="#abc" className="nav-link">
                                            <i className="nav-icon fa fa-copy" /> <p>
                                                Quản lý học tập
                            <i className="right fa fa-angle-left"></i>
                                            </p>

                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item"><a href="/lecturermanager" className="nav-link">Danh sách lớp học</a></li>
                                            <li className="nav-item"><a href="/setpoint" className="nav-link">Nhập điểm</a></li>
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
                                                    Hồ Sơ
                                    <i className="right fa fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/profile" className="nav-link">Hồ sơ cá nhân</a></li>
                                                {/* <li className="nav-item"><a href="/task-management" className="nav-link">Dashboard</a></li> */}
                                            </ul>
                                        </li>
                                        <li className="nav-item has-treeview">
                                            <a href="#abc" className="nav-link">
                                                <i className="nav-icon fa fa-copy" /> <p>
                                                    Quản lý học tập
                            <i className="right fa fa-angle-left"></i>
                                                </p>

                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item"><a href="/registerclass" className="nav-link">Đăng ký lớp</a></li>
                                                <li className="nav-item"><a href="/listpoint" className="nav-link">Kết quả học tập</a></li>
                                                <li className="nav-item"><a href="/classoftern" className="nav-link">Danh sách lớp</a></li>
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
}