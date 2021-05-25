import React from 'react';
import PropTypes from 'prop-types';

BookInfor.propTypes = {
    bookInfo: PropTypes.object,
};
BookInfor.defaultProps = {
    bookInfo: {
    },
}
function BookInfor(props) {
    const { bookInfo } = props;
    return (
        <div>
            <div className="topContainer">
                <div className="leftTopContainer column">
                    <div className="bookImage">
                        <a>
                            <img src={bookInfo.image_url} style={{ width: '170px', height: '300px', marginLeft: '0px' }} />
                        </a>
                    </div>
                </div>
                <div className="rightTopContainer column">
                    <div className="Details">
                        <div className="detailsAndbutton">
                            <div className="bookDetails column2">
                                <div>
                                    <span style={{ color: 'grey' }}>{bookInfo.counting} votes</span>
                                </div>
                                <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                    {bookInfo.book_title}
                                </div>
                                <div style={{ color: 'grey' }}>
                                    {bookInfo.author}
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
                            {bookInfo.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookInfor;