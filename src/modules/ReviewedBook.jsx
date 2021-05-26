import React, { useState, useEffect } from 'react';
import BookInformation from '../modules/componentHome/BookInformation'
import BookInfor from '../modules/componentReviewbook/BookInfor'
import Axios from 'axios'
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
                                <a>
                                    <img src={item.image_url} style={{ width: '170px', height: '300px', marginLeft: '0px' }} />
                                </a>
                            </div>
                        </div>
                        <div className="rightTopContainer column">
                            <div className="Details">
                                <div className="detailsAndbutton">
                                    <div className="bookDetails column2">
                                        <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>
                                            {item.book_title}
                                        </div>
                                        <div style={{ color: 'grey' }}>
                                            {item.author}
                                        </div>
                                    </div>
                                    <div className="wrapperButton column2">
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