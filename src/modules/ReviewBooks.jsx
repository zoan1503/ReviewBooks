
import React, { useState, useEffect } from 'react';
import BookInfo from './componentReviewbook/BookInfor'
import TopReview from './componentReviewbook/TopReview';
import WriteReview from './componentReviewbook/WriteReview'
import Axios from 'axios'
import './css/screen2_style.css'
export default function ReviewBooks() {

    const [bookInfo, setBookInfo] = useState([]);
    const [listReview, setListReview] = useState([]);
    useEffect(() => {
        Axios
            .get('http://localhost:8000/review/getallreview1book', {
                params: {
                    'id_book': 2
                }
            })
            .then(response => setBookInfo(response.data));
        //.then(response => console.log(response.data));

    }, []);
    // useEffect(() => {


    // }, []);
    return (

        <React.Fragment>
            <div className="container">
                <div className="leftContainer column8">
                    <BookInfo bookInfo={bookInfo[0]} />
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
                        {bookInfo && bookInfo.map(list => (<TopReview reviews={list} />))}
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
        </React.Fragment >
    );
}