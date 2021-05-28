import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import PropTypes from 'prop-types';

WriteReview.propTypes = {
    book: PropTypes.object,
    onSubmit: PropTypes.func,
};
WriteReview.defaultProps = {
    book: {},
    onSubmit: null
}
function WriteReview(props) {
    const { book, onSubmit } = props;
    const [newListCmt, setnewListCmt] = useState([]);
    let user = {
        "id_user": 2,
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
    }
    async function submit(e) {
        e.preventDefault();
        await Axios.post('http://localhost:8000/review/add', {
            content_review: review,
            id_user: user.id_user,
            id_book: book.id_book
        })
            .then(function (response) {
                setnewListCmt(response);
            })
        onSubmit(newListCmt);
    }
    return (
        <div>
            <form action="" method="POST" role="form" onSubmit={submit}>
                <legend>Viết đánh giá của bạn tại đây</legend>
                <div class="form-group">
                    <input type="text" class="form-control" id="" placeholder="Review..." onChange={(e) => changeValue(e)} />
                </div>
                <button type="submit" class="btn btn-primary" >Gửi</button>
            </form>
        </div>
    );
}

export default WriteReview;