import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
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
                        <Link to={'reviewbooks' + bestBook.id_book}>
                            <img src={bestBook.image_url} style={{ width: '170px', height: '300px', marginLeft: '0px' }} />
                        </Link>

                    </div>
                </div>
                <div className="rightTopContainer column" style={{ marginRight: '200px' }}>
                    <div className="Details">
                        <div className="detailsAndbutton">
                            <div className="bookDetails column2">
                                <div>
                                    <span style={{ color: 'orange', fontWeight: 'bold' }}>WINNER</span>
                                    &nbsp; &nbsp; &nbsp;
                                    <span style={{ color: 'grey' }}>{bestBook.counting} votes</span>
                                </div>
                                <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                    <Link to={'reviewbooks' + bestBook.id_book}>
                                        {bestBook.book_title}
                                    </Link>
                                </div>
                                <div style={{ color: 'grey' }}>
                                    {bestBook.author}
                                </div>
                            </div>
                            <div className="wrapperButton column2">
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