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
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="bookImage">
                        <Link to={'reviewbooks' + bestBook.id_book}>
                            <img src={bestBook.image_url} style={{ width: '170px', height: '300px', marginTop: '20px' }} />
                        </Link>

                    </div>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" >
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
                                <div style={{ color: 'red' }}>
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