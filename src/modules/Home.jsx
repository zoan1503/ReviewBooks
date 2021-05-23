
import React, { Component } from 'react';
import BestBook from './BestBook'
import BookInformation from './BookInformation'
import './css/screen1_style.css'
export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="container">
                        <BestBook />
                        <hr />
                        <div className="belowContainer">
                            <div className="nominees" style={{ paddingBottom: '20px' }}>
                                <span>All Nominees . 506,978 votes total</span>
                            </div>
                            <div className="allNominees" style={{ textAlign: 'center', justifyContent: 'center' }}>
                                <BookInformation />
                                <BookInformation />
                                <BookInformation />
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <a href="#" style={{ color: 'grey', fontWeight: 'bold', fontSize: '20px' }}>MYSTERY &amp; THRILLER &gt;</a>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}