import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function ReactionHistory() {
    const [reaction, setReation] = useState([]);
    useEffect(() => {
        Axios
            .get("http://localhost:8000/signin/getallreaction", {
                params: {
                    'id_user': 1
                }
            })
            .then(response => setReation(response.data));
    }, []);
    return (
        <React.Fragment>
            {reaction && reaction.map(item => {
                return (
                    <div className="topContainer">
                        <div className="leftTopContainer column">
                            <div className="bookImage">
                                <a>
                                    <img src={item.image_url} style={{ width: '85px', height: '150px', marginLeft: '0px' }} />
                                </a>
                            </div>
                        </div>
                        <div className="rightTopContainer column">
                            <div className="Details">
                                <div className="detailsAndbutton">
                                    <div className="bookDetails column2">
                                        <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px' }}>
                                            {item.book_title}
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