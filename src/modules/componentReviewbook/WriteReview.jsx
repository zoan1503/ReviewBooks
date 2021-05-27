import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import PropTypes from 'prop-types';

WriteReview.propTypes = {
    book: PropTypes.object,
};
WriteReview.defaultProps = {
    book: {}
}
function WriteReview(props) {
    const { book } = props;
    let user = {
        "id_user": 6,
        "username": "thanhmoose",
        "password": "123321",
        "fullname": "Thanh Do",
        "address": "Ha Noi",
        "email": "thanh@gmail.com",
        "age": 19
    }
    const [review, setReview] = useState('');
    function changeValue(e) {
        setReview(e.target.value);
        console.log(review)
    }
    async function submit(e) {
        e.preventDefault();
        await Axios.post('http://localhost:8000/review/add', {
            content_review: review,
            id_user: user.id_user,
            id_book: book.id_book
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    return (
        <div>
            <form action="" method="POST" role="form">
                <legend>Viết đánh giá của bạn tại đây</legend>
                <div class="form-group">
                    <input type="text" class="form-control" id="" placeholder="Review..." onChange={changeValue} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={submit}>Gửi</button>
            </form>
        </div>
    );
}

export default WriteReview;