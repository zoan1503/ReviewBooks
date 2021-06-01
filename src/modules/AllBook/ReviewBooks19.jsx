
import React, { useState, useEffect } from 'react';
import BookInfo from '../componentReviewbook/BookInfor'
import TopReview from '../componentReviewbook/TopReview';

import WriteReview from '../componentReviewbook/WriteReview'
import Axios from 'axios'
import '../css/screen2_style.css'
export default function ReviewBooks19() {

    const [bookInfo, setBookInfo] = useState([]);
    let id_user = localStorage.getItem('id_user')
    useEffect(() => {
        const getBookInterval = setInterval(() => {
            Axios
                .get('http://localhost:8000/review/getallreview1book', {
                    params: {
                        'id_book': 19,
                        'id_user': id_user
                    }
                })
                .then(response => setBookInfo(response.data));
        }, 100);
        // return () => {
        //     //Cleanup
        //     console.log("Clock Cleanup")
        //     clearInterval(getBookInterval)
        // }
        //.then(response => console.log(response.data));

    }, []);
    function rerenderAfterComment(newListCmt) {
        console.log(newListCmt)
    }
    // useEffect(() => {
    // let bookInfo = [
    //     {
    //     "id_book": 1,
    //     "book_title": "SA MÔN KHÔNG HẢI THẾT YẾN BẦY QUỶ ĐẠI ĐƯỜNG",
    //     "author": "Yumemakura Baku",
    //     "description": "Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.",
    //     "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
    //     "review_id": 1,
    //     "content_review": "Sách non",
    //     "id_user": 1,
    //     "username": "quang1"
    // },
    // {
    //     "id_book": 1,
    //     "book_title": "SA MÔN KHÔNG HẢI THẾT YẾN BẦY QUỶ ĐẠI ĐƯỜNG",
    //     "author": "Yumemakura Baku",
    //     "description": "Nhà sư trẻ tuổi Không Hải, cùng người bạn thân Quất Dật Thế, từ Nhật Bản xa xôi vượt biển tới Đại Đường với tư cách sứ thần sang du học. Vào thời đại đó, Trường An, kinh đô của nhà Đại Đường là nơi nổi tiếng thịnh vượng phồn hoa, tập trung nhiều sắc dân từ khắp nơi đổ về. Như bóng tối luôn song hành cùng ánh sáng, nhiều loài yêu ma quỷ quái cũng bị thu hút về đây. Một con yêu quái mèo đã ám dinh cơ của viên chức dịch họ Lưu và đưa ra lời tiên tri về cái chết của hoàng đế. Tự tin vào vốn kiến thức uyên bác cùng tài ứng biến phi thường của bản thân, Không Hải đã dẫn Quất Dật Thế đến nhà họ Lưu để đương đầu với yêu mèo. Song họ không ngờ, mình đã vô tình dính líu vào một sự kiện lớn làm rung chuyển nhà Đường. Kiệt tác tiểu thuyết truyền kỳ Nhật Bản lấy bối cảnh Trung Hoa mở ra từ đây.",
    //     "image_url": "http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/1/7/SQHEFH86.jpg",
    //     "review_id": 9,
    //     "content_review": "SÁch ngáo vl",
    //     "id_user": 6,
    //     "username": "thanhmoose"
    // }
    // ]
    // }, []);
    return (

        <React.Fragment>
            <div className="container">
                <div>
                    <h1>Review Sách</h1>
                    <br />
                    <div className="topScreen">
                        <div className="column3"><span></span></div>
                    </div>
                </div>
                <div className="leftContainer column8">
                    <BookInfo bookInfo={bookInfo[0]} />
                    <WriteReview book={bookInfo[0]} onSubmit={rerenderAfterComment} />
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
                        {/* <Comment /> */}
                        <TopReview reviews={bookInfo} />
                        {/* {bookInfo && bookInfo.map(list => (<Comment info={list} />))} */}
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