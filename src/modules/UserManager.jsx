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
                <div>
                    <div className="avatarImage">
                        <img className="img-fluid rounded-circle" src="https://s.gr-assets.com/assets/nophoto/user/f_225x300-9aa43f0ccc0355209c834d010c65a83b.png" style={{ maxHeight: '180px' }} />
                    </div>
                    <br />
                    <div className="avatar">
                        <h3>Thông tin cá nhân</h3>
                    </div>
                    <br />
                    <div className="personalInformation">

                        <div className="hoten row" style={{ paddingBottom: '5px' }}>
                            <p className="col-3" style={{ textAlign: 'right' }}>Họ và tên<span style={{ color: 'red' }}>*</span>:</p>
                            <div className="card col-9">
                                <div>
                                    <p>{user.fullname}</p>
                                </div>
                            </div>
                        </div>
                        <div className="email row" style={{ paddingBottom: '5px' }}>
                            <p className="col-3" style={{ textAlign: 'right' }}>Email<span style={{ color: 'red' }}>*</span>:</p>
                            <div className="card col-9">
                                <div>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="ten row" style={{ paddingBottom: '5px' }}>
                            <p className="col-3" style={{ textAlign: 'right' }}>Tuổi<span style={{ color: 'red' }}>*</span></p>
                            <div className="card col-9">
                                <div>
                                    <p>{user.age}</p>
                                </div>
                            </div>
                        </div>
                        <div className="ngaysinh row" style={{ paddingBottom: '5px' }}>
                            <p className="col-3" style={{ textAlign: 'right' }}>Địa chỉ<span style={{ color: 'red' }}>*</span>:</p>
                            <div className="card col-9">
                                <div>
                                    <p>{user.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="suaThongTin">
                        <button className="btn btn-primary">Sửa thông tin</button>
                    </div>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <h3>Thay đổi mật khẩu</h3>
                    </div>
                    <br />
                    <div className="container-fluid password">
                        <div className="row" style={{ paddingBottom: '5px' }}>
                            <p style={{ textAlign: 'right' }} className="col-3 col-sm-3">
                                Mật khẩu cũ<span style={{ color: 'red' }}>*</span>:
      </p>
                            <input type="text" id="subject" placeholder="Nhập mật khẩu cũ" className="col-9 col-sm-9 form-control" />
                        </div>
                        <div className="row" style={{ paddingBottom: '5px' }}>
                            <p style={{ textAlign: 'right' }} className="col-3 col-sm-3">
                                Mật khẩu mới<span style={{ color: 'red' }}>*</span>:
      </p>
                            <input type="text" id="subject" placeholder="Nhập mật khẩu mới" className="col-9 col-sm-9 form-control" />
                        </div>
                        <div className="row" style={{ paddingBottom: '5px' }}>
                            <p style={{ textAlign: 'right' }} className="col-3 col-sm-3">
                                Nhập lại mật khẩu mới<span style={{ color: 'red' }}>*</span>:
      </p>
                            <input type="text" id="subject" placeholder="Nhập lại mật khẩu mới" className="col-9 col-sm-9 form-control" />
                        </div>
                    </div>
                    <div className="doiMatKhau">
                        <button className="btn btn-primary">Đổi mật khẩu</button>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}
