
import React, { Component } from 'react';
import "./BookInformation.css"
export default class BookInformation extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="nomineeBook column1">
                    <div style={{ textAlign: 'center', fontWeight: 'bold', color: 'grey' }}>
                        72,828 votes
                    </div>
                    <div>
                        <a href="#"><img src="image/bookImage.png" /></a>
                    </div>
                    <div className="readButton" style={{ textAlign: 'center' }}>
                        <div className="readButton">
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown">Want to read
                  <span className="caret" /></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Want to read</a></li>
                                    <li><a href="#">Currently read</a></li>
                                    <li><a href="#">Read</a></li>
                                    <hr style={{ marginTop: '5px', marginBottom: '5px' }} />
                                    <div style={{ paddingLeft: '5px' }}>Add New Shelf</div>
                                </ul>
                            </div>
                        </div>
                        <div className="rate">
                            <input type="radio" id="star5" name="rate" defaultValue={5} />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" defaultValue={4} />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" defaultValue={3} />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" defaultValue={2} />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" defaultValue={1} />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}