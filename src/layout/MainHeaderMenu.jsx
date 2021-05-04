// Header.js
import React, {Component} from 'react';

export default class MainHeaderMenu extends Component {
    render() {
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li>
                       
                    </li>
                    <li className="dropdown user user-menu">
                        <a href="#abc" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Avatar" />
                            <span className="hidden-xs" style={{color:"white    "}}> Thành</span>
                        </a>
                        <ul className="dropdown-menu">
                            {/* User image */}
                            <li className="user-header">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Avatar" />
                                <p cl>
                                    Thành
                                    <small>thanhdt@gmail.com</small>
                                </p>
                            </li>
                            <li className="user-footer">
                                <div className="row">
                                    {/* <div className="col-sm-6">
                                        <a href="#abc" className="btn btn-default btn-flat">Hồ sơ</a>
                                    </div> */}
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-default btn-flat">Đăng xuất</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                   
                    
                </ul>
                
            </div>
        );
    }
}