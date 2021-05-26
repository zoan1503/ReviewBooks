import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './css/screen3_style.css'

export default function UserManager() {
    const [user, setUser] = useState(
        {
            "id_user": 1,
            "username": "quang1",
            "password": "123321",
            "fullname": "Duong Dang Quang",
            "address": "Vinh Phuc",
            "email": "quang@gmail.com",
            "age": 22
        }
    );
    return (
        <React.Fragment>
            <div class="container">
                <div className="profilePicture">
                    <a href="#">
                        <img width={150} className="profilePictureIcon " src="https://s.gr-assets.com/assets/nophoto/user/f_225x300-9aa43f0ccc0355209c834d010c65a83b.png" />
                    </a>
                    <div className="statsInfo" style={{ textAlign: 'center' }}>
                        <a style={{ color: '#00635d', textDecoration: 'none' }} href="#">1 ratings</a> <br />
                        <a style={{ color: '#00635d', textDecoration: 'none' }} href="#">1 review</a> <br />
                    </div>
                </div>
                <div className="userInfo">
                    <h1 className="userName">{user.fullname}</h1>
                    <div className="infoTitle">Username: </div>
                    <div className="infoItem">{user.username}</div>
                    <div className="infoTitle">Age</div>
                    <div className="infoItem">21</div>
                    <div className="infoTitle">Email</div>
                    <div className="infoItem">{user.email}</div>
                    <div className="infoTitle">Address</div>
                    <div className="infoItem">{user.address}</div>
                </div>
                {/* <div>
          <div>
              Họ tên: ........
          </div>
          <div>
              Ngay sinh: ........
          </div>
          <div>
              Email: ...............
          </div>
          <div>
              So sach da review: ............
          </div>
      </div> */}
                <div style={{ textAlign: 'right', fontSize: '15px', fontWeight: 'bold', position: 'absolute', bottom: '8px', right: '16px' }}>
                    <a href="#"> Chinh sua thong tin ca nhan</a>
                </div>
            </div>

        </React.Fragment>
    );
}
