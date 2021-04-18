import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './MainHeader.jsx'
import MainHeader from './MainHeader.jsx';
import Header from './Header.jsx';
import SideBar from './SideBar';
function App(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Header></Header>
            <SideBar></SideBar>
        </div>
    );
}

export default App;
