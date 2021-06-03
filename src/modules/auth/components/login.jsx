import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../redux/actions';
import Axios from 'axios'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import SignUp from './SignUp'
export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            info: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.forgotPassword = this.forgotPassword.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var username = this.state.email;
        var password = this.state.password;
        // this.props.login(user);
        Axios
            .get("http://localhost:8000/signin/checksignin", {
                params: {
                    'username': username,
                    'password': password
                }
            })
            .then(response => {
                if (response.data.length == 0) {
                    console.log('true');
                    swal({
                        title: "Đăng nhập thất bại!",
                        text: "Vui lòng kiểm tra lại tài khoản & mật khẩu",
                        icon: "warning",
                    });
                }
                else {
                    // localStorage.setItem({'id_user': response.data[0].id_user}, {'isLogged' : 1} )
                    this.setState({ info: response.data[0] })
                    // console.log(this.state.info.fullname)
                    localStorage.setItem('id_user', this.state.info.id_user)
                    localStorage.setItem('isLogged', 1)
                    window.location.href = 'http://localhost:4000/home';
                }
            });

        // .then(response => console.log(response.data))
    }

    // forgotPassword(){
    //     const { emailForgot } = this.state;
    //     this.props.forgotPassword(emailForgot);
    // }
    handleSignUp() {
        localStorage.setItem('isLogged', 0)
    }

    render() {
        const { auth } = this.props;
        return (
            <div className="hold-transition login-page" style={{ minHeight: '50vh' }}>
                <div className="login-box" >
                    <div className="login-logo">
                        <a href="/index2.html"><b></b>Review Sách</a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Đăng nhập để bắt đầu!</p>

                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input name="email" onChange={this.handleChange} type="text" className="form-control" placeholder={"Tài khoản"} required />
                                    <span className="glyphicon glyphicon-envelope form-control-feedback" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input name="password" onChange={this.handleChange} type="password" className="form-control" placeholder={"Mật khẩu"} required />
                                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-7" style = {{marginTop: '4px'}} >
                                        {/* <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label for="remember">
                                                Remember Me
                                            </label>
                                        </div> */}
                                        <a href = '/signup' style = {{marginLeft: '10px', textDecoration: 'underline'}} onClick={this.handleSignUp}>Đăng ký</a>
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-primary btn-block">Đăng nhập</button>
                                    </div>
                                </div>
                            </form>


                        </div>

                    </div>

                </div>
            </div>
            // </div>
        );
    }
}

// const mapStateToProps = state => {
//     return state;
// }

// const mapDispatchToProps = {
//     login: AuthActions.login,
//     // forgotPassword: AuthActions.forgotPassword,
// }

// export default connect( mapStateToProps, mapDispatchToProps )( Login );