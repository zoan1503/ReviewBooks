import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating'

BestBook.propTypes = {
    bestBook: PropTypes.object,
};

BestBook.defaultProps = {
    bestBook: {},
}
function BestBook(props) {
    const { bestBook } = props;
    return (
        <div>
            <div className="topContainer">
                <div className="leftTopContainer column">
                    <div className="bookImage">
                        <a>
                            <img src={bestBook.image_url} style={{ width: '170px', height: '300px', marginLeft: '0px' }}
                            />
                        </a>
                    </div>
                </div>
                <div className="rightTopContainer column">
                    <div className="Details">
                        <div className="detailsAndbutton">
                            <div className="bookDetails column2">
                                <div>
                                    <span style={{ color: 'orange', fontWeight: 'bold' }}>WINNER</span>
                                    <span style={{ color: 'grey' }}>{bestBook.counting} votes</span>
                                </div>
                                <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                    {bestBook.book_title}
                                </div>
                                <div style={{ color: 'grey' }}>
                                    {bestBook.author}
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
                                <Rating
                                    fractions={2}
                                    emptySymbol="fa fa-star-o fa high"
                                    fullSymbol="fa fa-star fa high"
                                    initialRating={bestBook && bestBook.avgRating}
                                // onClick={(value) => {
                                //     setRating(value)
                                //     console.log(rating)
                                // }}
                                />
                            </div>
                        </div>
                        <div className="bookDescription">
                            {bestBook.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestBook;