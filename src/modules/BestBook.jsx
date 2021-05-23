import React from 'react';
import PropTypes from 'prop-types';

BestBook.propTypes = {

};

function BestBook(props) {
    return (
        <div>
            <div>
                <h1>Best Fiction</h1>
                <div className="topScreen">
                    <div className="column3"><span>New to Goodreads? Get great book recommendations!<a> Start Now</a></span></div>
                    <div className="column3 iconSocialNetwork">
                        <span><a><img src="image/fb.PNG" /></a></span>
                        <span><a><img src="image/twitter.PNG" /></a></span>
                    </div>
                </div>
            </div>
            <div className="topContainer">
                <div className="leftTopContainer column">
                    <div className="bookImage">
                        <a>
                            <img src="image/bookImage.png" style={{ width: '170px', height: '300px', marginLeft: '0px' }} />
                        </a>
                    </div>
                </div>
                <div className="rightTopContainer column">
                    <div className="Details">
                        <div className="detailsAndbutton">
                            <div className="bookDetails column2">
                                <div>
                                    <span style={{ color: 'orange', fontWeight: 'bold' }}>WINNER</span>
                                    <span style={{ color: 'grey' }}>72,828 votes</span>
                                </div>
                                <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                    The Midnight Library
              </div>
                                <div style={{ color: 'grey' }}>
                                    by Matt Haig (Goodreads author)
              </div>
                            </div>
                            <div className="wrapperButton column2">
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
                                <div className="rate1">
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
                        <div className="bookDescription">
                            This year’s Goodreads Choice Award for Fiction was the closest contest in the history of the awards. Your winner—by five votes—is The Midnight Library, author Matt Haig’s wildly inventive blend of literary and speculative fiction. The quick gist: Imagine a library in which each book represents a different path your life could have taken. Now imagine spending eternity in that library. It’s a Goodreads kind of dream…
          </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestBook;