import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './../css/screen2_style.css'
import './comment.css'
import Axios from 'axios'
import Rating from 'react-rating'
TopReview.propTypes = {
    reviews: PropTypes.object,
};
TopReview.defaultProps = {
    reviews: []
}
function TopReview(props) {
    const [disableLike, setdisableLike] = useState(false);
    const [disableDislike, setdisableDislike] = useState(false);
    const { reviews } = props;
    function handleLike(e) {
        e.preventDefault();
        setdisableLike(true);
        setdisableDislike(false);
    }
    function handleDislike(e) {
        e.preventDefault();
        setdisableDislike(true);
        setdisableLike(false);
    }
    return (
        <React.Fragment>
            {reviews && reviews.map(item => {
                return (
                    <div className="post clearfix">
                        <div className="user-block">
                            <img className="img-circle img-bordered-sm" src={item.image_url} alt="User Image" style={{ width: "60px", height: "60px" }} />
                            <span className="username" style={{ marginLeft: "65px" }}>
                                <a href="#">{item.username}</a>
                                &nbsp;
                                <Rating
                                    fractions={2}
                                    emptySymbol="fa fa-star-o fa high"
                                    fullSymbol="fa fa-star fa high"
                                    initialRating={item && item.rating_value}
                                // onClick={(value) => {
                                //     setRating(value)
                                //     console.log(rating)
                                // }}
                                />
                            </span>
                            <span className="description" style={{ marginLeft: "65px" }}>Posted a review</span>
                        </div>
                        <p className="review-area">
                            {item.content_review}
                            <br />
                            <div>

                                <button className="fa fa-thumbs-up" aria-hidden="true" onClick={handleLike} disabled={disableLike}></button>

                                <h4 style={{ marginLeft: "10px" }}>
                                    {item.likes - item.dislike}
                                </h4>

                                <button class="fa fa-thumbs-down" aria-hidden="true" onClick={handleDislike} disabled={disableDislike} ></button>

                            </div>
                            <br />
                            {/* Số lượt thích: {item.likes} - Số lượt không thích: {item.dislike} */}
                        </p>
                    </div>
                )
            })}
        </React.Fragment>






    );
}

export default TopReview;