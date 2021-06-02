import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import swal from 'sweetalert';


function SignUp() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [age, setage] = useState();
    const [address, setaddress] = useState('');
    function handleUsername(e) {
        setusername(e.target.value)
    }
    function handlePassword(e) {
        setpassword(e.target.value)
    }
    function handleFullname(e) {
        setfullname(e.target.value)
    }
    function handleEmail(e) {
        setemail(e.target.value)
    }
    function handleAge(e) {
        setage(e.target.value)
    }
    function handleAddress(e) {
        setaddress(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault();
        await Axios.post('http://localhost:8000/signup/add', {
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            age: age,
            address: address
        })
            .then(function (response) {
                if (response.data.isSignUp) {
                    swal({
                        title: "Đăng ký thành công!",
                        text: "Đăng nhập ngay!",
                        icon: "success",
                        button: "OK!",
                    });
                }
            })
        window.location.href = 'http://localhost:4000/login';
    }
    return (
        <React.Fragment>

            <div className="modal-header">
                <h4 className="modal-title">Tạo tài khoản</h4>
            </div>
            <div className="modal-body">
                <form style={{ marginBottom: '10px' }}>
                    <div className="row">

                        <div className="form-group col-sm-5">
                            <label>Tài khoản</label>
                            <input type="text" className="form-control" name="username" onChange={handleUsername} required={true}/><br />
                        </div>
                        <div className="form-group col-sm-5">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" name="password" onChange={handlePassword} required/><br />
                        </div>
                        <div className="form-group col-sm-5">
                            <label>Họ tên</label>
                            <input type="text" className="form-control" name="fullname" onChange={handleFullname} required/><br />
                        </div>
                        <div className="form-group col-sm-5">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" onChange={handleEmail} /><br />
                        </div>
                        <div className="form-group col-sm-5">
                            <label>Tuổi</label>
                            <input type="text" className="form-control" name="age" onChange={handleAge} /><br />
                        </div>
                        <div className="form-group col-sm-5">
                            <label>Địa chỉ</label>
                            <input type="text" className="form-control" name="address" onChange={handleAddress} /><br />
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                {/* <button type="button" className="btn btn-danger pull-left" data-dismiss="modal"><i className="fa fa-close"></i>Đóng </button> */}
                <button type="button" style = {{marginRight: '220px'}} className="btn btn-primary" onClick={handleSubmit} data-dismiss="modal"><i className="fa fa-save"></i> Đăng ký</button>
            </div>

        </React.Fragment>



    );
}

export default SignUp;