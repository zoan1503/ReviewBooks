
import React, { Component } from 'react';
import BookInfo from './componentReviewbook/BookInfor'
import TopReview from './componentReviewbook/TopReview';
import WriteReview from './componentReviewbook/WriteReview'
import BestBook from './componentHome/BestBook'
import './css/screen2_style.css'
export default function ReviewBooks() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="leftContainer column8">
                    <BookInfo />
                    <WriteReview />
                    <div classname="review" style={{ marginTop: '20px' }}>
                        <div classname="community" style={{ marginTop: '20px' }}>
                            <div classname="column5" style={{ fontWeight: 'bold' }}>
                                COMMUNITY REVIEWS
    </div>
                            <div classname="column5 show1-30" style={{ textAlign: 'right' }}>Showing 1-30</div>
                        </div>
                        <div>
                        </div>
                        <hr style={{ marginTop: '5px', marginBottom: '10px' }} />
                        <TopReview />
                        <TopReview />
                        <TopReview />
                        <TopReview />
                        <div classname="pagination" style={{ textAlign: 'right', float: 'right' }}>
                            <a href="#">«</a>
                            <a href="#" classname="active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">»</a>
                        </div>
                    </div>
                </div>


            </div>
        </React.Fragment>
    );
}