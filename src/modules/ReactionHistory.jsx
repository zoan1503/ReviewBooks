import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';

function ReactionHistory() {
    const [reaction, setReation] = useState([]);
    let id_user = localStorage.getItem('id_user')
    useEffect(() => {
        Axios
            .get("http://localhost:8000/signin/getallreaction", {
                params: {
                    'id_user': id_user
                }
            })
            .then(response => setReation(response.data));
    }, []);
    return (
        <React.Fragment>
            <div>
                <h1>Lịch sử tương tác</h1>
                <div className="topScreen">
                    <div className="column3"><span></span></div>
                </div>
            </div>
            {reaction && reaction.map(item => {
                return (
                    <div className="topContainer">
                        <div className="leftTopContainer column">
                            <div className="bookImage">
                                <Link to={'reviewbooks' + item.id_book}>
                                    <img src={item.image_url} style={{ width: '85px', height: '150px', marginLeft: '0px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="rightTopContainer column">
                            <div className="Details">
                                <div className="detailsAndbutton">
                                    <div className="bookDetails column2">
                                        <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px' }}>
                                            <Link to={'reviewbooks' + item.id_book}>
                                                {item.book_title}
                                            </Link>
                                        </div>
                                        <div style={{ color: 'grey' }}>
                                            {item.author}
                                        </div>
                                    </div>
                                </div>
                                <div className="bookDescription">
                                    <br />
                                    {item.user_react} đã {item.reaction_choice === 1 ? "THÍCH" : "KHÔNG THÍCH"} bình luận của {item.reviewer} về quyển sách này
                                    <br />
                                    <br />
                                    {item.reviewer}: {item.content_review}

                                </div>

                            </div>
                        </div>

                    </div>
                )
            })}
        </React.Fragment>
    );
}

export default ReactionHistory;