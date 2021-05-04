// Header.js
import React, {Component} from 'react';
import MainHeaderMenu from './MainHeaderMenu';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
            {/* Logo */}
            
                {/* mini logo for sidebar mini 50x50 pixels */}
           
                {/* logo for regular state and mobile devices */}
                {/* <span className="logo-lg"><img src="/main/image/logo.png" alt="Logo" style={{width: "40px", marginTop: "-5px", marginLeft: "-15px"}}></img></span> */}
           
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top" style={{backgroundColor:"#3c8dbc"}}>
                {/* Sidebar toggle button*/}
                <a href="#abc" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <MainHeaderMenu/>
            </nav>
        </header>
        )
    }
}