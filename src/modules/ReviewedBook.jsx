import React, { useState, useEffect } from 'react';
import BookInformation from '../modules/componentHome/BookInformation'
import BookInfor from '../modules/componentReviewbook/BookInfor'
import Axios from 'axios'
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
function ReviewedBook() {
    const [listBook, setListBook] = useState([]);
    useEffect(() => {
        Axios
            .get("http://localhost:8000/signin/getallreviewbook", {
                params: {
                    'id_user': 1
                }
            })
            .then(response => setListBook(response.data));
    }, []);
    return (
        <React.Fragment>
            {listBook && listBook.map(item => {
                return (
                    <div className="topContainer">
                        <div className="leftTopContainer column">
                            <div className="bookImage">
                                <Link to='/reviewbooks'>
                                    <img src={item.image_url} style={{ width: '170px', height: '300px', marginLeft: '0px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="rightTopContainer column">
                            <div className="Details">
                                <div className="detailsAndbutton">
                                    <div className="bookDetails column2">
                                        <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                            <Link to='/reviewbooks'>
                                                {item.book_title}
                                            </Link>
                                        </div>
                                        <div style={{ color: 'grey' }}>
                                            {item.author}
                                        </div>
                                    </div>
                                    <Rating
                                        fractions={2}
                                        emptySymbol="fa fa-star-o fa high"
                                        fullSymbol="fa fa-star fa high"
                                        initialRating={item && item.avgRating}
                                    // onClick={(value) => {
                                    //     setRating(value)
                                    //     console.log(rating)
                                    // }}
                                    />
                                </div>
                                <div className="bookDescription">
                                    {item.description}
                                    <br />
                                    <br />
                                    Bạn đã review: {item.content_review}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    );
}

export default ReviewedBook;