import React, { useState, useEffect } from 'react';
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
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState([5]);
    const [like, setLike] = useState([]);
    const { reviews } = props;
    // useEffect(() => {
    //     Axios
    //         .get('http://localhost:8000/reaction/getalllike', {
    //             params: {
    //                 'review_id': reviews.review_id
    //             }
    //         })
    //         .then(response => console.log(response.data));
    //     //.then(response => console.log(response.data));

    // }, [reviews]);
    // let bookInfo = [
    //     {
    //         "id_book": 1,
    //         "book_title": "Vũ trụ trong vỏ hạt dẻ",
    //         "author": "Dương Đăng Quang",
    //         "description": "Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.",
    //         "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
    //         "review_id": 1,
    //         "content_review": "Sách non",
    //         "id_user": 1
    //     },
    //     {
    //         "id_book": 1,
    //         "book_title": "Lược sử thời gian",
    //         "author": "Đỗ Tiến Thành",
    //         "description": "Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.",
    //         "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
    //         "review_id": 9,
    //         "content_review": "sách gì hay quá",
    //         "id_user": 6
    //     }
    // ]
    return (
        <React.Fragment>
            {reviews && reviews.map(item => {
                return (
                    <div className="post clearfix">
                        <div className="user-block">
                            <img className="img-circle img-bordered-sm" src={item.image_url} alt="User Image" style={{ width: "60px", height: "60px" }} />
                            <span className="username" style={{ marginLeft: "65px" }}>
                                <a href="#">{item.username}</a>
                                <Rating
                                    fractions={2}
                                    emptySymbol="fa fa-star-o fa high"
                                    fullSymbol="fa fa-star fa high"
                                    initialRating={rating}
                                    onClick={(value) => {
                                        setRating(value)
                                        console.log(rating)
                                    }}
                                />
                            </span>
                            <span className="description" style={{ marginLeft: "65px" }}>Post a review - 3 days ago</span>
                        </div>
                        <p className="review-area">
                            {item.content_review}
                        </p>
                    </div>
                )
            })}
        </React.Fragment>
    );
}

export default TopReview;