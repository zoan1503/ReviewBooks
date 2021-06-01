import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import Axios from 'axios'
//import '../css/screen2_style.css'
BookInfor.propTypes = {
    bookInfo: PropTypes.object,
};
BookInfor.defaultProps = {
    bookInfo: {
    },
}
function BookInfor(props) {
    let id_user = localStorage.getItem('id_user')
    const { bookInfo } = props;
    // useEffect(() => {
    //     const getBookInterval = setInterval(() => {
    //         Axios
    //             .get('http://localhost:8000/rating/getrating', {
    //                 params: {
    //                     'id_user': id_user,
    //                     'id_book': bookInfo.id_book,
    //                 }
    //             })
    //             .then(response => console.log(response.data));
    //     }, 1000);
    //     // return () => {
    //     //     //Cleanup
    //     //     console.log("Clock Cleanup")
    //     //     clearInterval(getBookInterval)
    //     // }
    //     //.then(response => console.log(response.data));

    // }, []);
    return (
        <div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="bookImage">
                        <Link to={'reviewbooks' + bookInfo.id_book}>
                            <img src={bookInfo.image_url} style={{ width: '170px', height: '300px', marginTop: '10px' }} />
                        </Link>
                    </div>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="Details">
                        <div className="detailsAndbutton">
                            <div className="bookDetails column2">
                                <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                    {bookInfo.book_title}
                                </div>
                                <div style={{ color: 'red' }}>
                                    {bookInfo.author}
                                </div>
                            </div>
                            <div className="wrapperButton column2">
                                <Rating
                                    fractions={2}
                                    emptySymbol="fa fa-star-o fa high"
                                    fullSymbol="fa fa-star fa high"
                                    initialRating={bookInfo && bookInfo.avgRating}
                                    onClick={(value) => {
                                        Axios.post('http://localhost:8000/rating/add', {
                                            rating_value: value,
                                            id_user: id_user,
                                            id_book: bookInfo.id_book
                                        })
                                            .then(function (response) {
                                                console.log(response);
                                            })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="bookDescription">
                            {bookInfo.description}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </div>
    );
}

export default BookInfor;