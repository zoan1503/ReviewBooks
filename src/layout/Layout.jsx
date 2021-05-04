import React, { Component } from 'react';
import MainHeader from './Header';
import SideBar from './SideBar';
// import Footer from './footer/components/footer';
// import Content from './content';
// import { connect } from 'react-redux';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <React.Fragment>
                <MainHeader/>
                <SideBar />
                {/* <Content arrPage={this.props.arrPage} isLoading={this.props.isLoading} pageName="Home">{ this.props.children }</Content> */}
                {/* <Footer /> */}
            </React.Fragment>
         );
    }
}
 
export default Layout;