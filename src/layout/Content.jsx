import React, { Component } from 'react';
// import { connect } from 'react-redux';
import BookInformation from '../modules/BookInformation'
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidUpdate() {
    }

    render() {
        const { translate, pageName, arrPage, isLoading } = this.props;
        return (
            <React.Fragment>
                <div className="content-wrapper">
                    <section className="content-header">
                        {/* <h1> {pageName} &nbsp; { isLoading && <Loading/> } </h1> */}
                        
                        <ol className="breadcrumb">
                            {
                                arrPage !== undefined && arrPage.map( page => 
                                    <li key={page.name}> 
                                        <a href={page.link}>
                                            <i className={ page.icon }/>
                                            { translate(`menu.${page.name}`) }
                                        </a>
                                    </li> )
                            }
                        </ol>
                    </section>
                    <section className="content">
                        { this.props.children }
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
