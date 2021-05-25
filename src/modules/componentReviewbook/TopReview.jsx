import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './../css/screen2_style.css'
import Axios from 'axios'
TopReview.propTypes = {
    reviews: PropTypes.object,
};
TopReview.defaultProps = {
    reviews: {}
}
function TopReview(props) {
    const [user, setUser] = useState({});
    const { reviews } = props;
    // useEffect(() => {
    //     Axios
    //         .get("http://localhost:8000/review/getlast", {
    //             params: {
    //                 'review_id': 3
    //             }
    //         })
    //         .then(response => setUser(response.data));
    // }, []);
    console.log(user)
    return (
        <div>
            <div classname="reviewUser" style={{ marginTop: '20px' }}>
                <div classname="userImage column7">
                    <img src="https://www.seekpng.com/png/small/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png" width='50' height='50' />
                </div>
                <div classname="detailReview column7">
                    <div>
                        <span><a>{user.fullname}</a></span>
                        <span style={{ color: 'grey' }}> </span>
                        <span>
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                            <span classname="fa fa-star checked" />
                        </span>
                        <span>.</span>
                        <span>review of another edition</span>
                        <span>Aug 21,2020</span>
                    </div>
                    <div>
                        {reviews?.content_review}
                    </div>
                    <div>
                        <span>
                            2176 likes
        </span>
                        <span>.</span>
                        <span>
                            <button type="button">Like</button>
                        </span>
                        <span>.</span>
                        <span>
                            <a> see review</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopReview;