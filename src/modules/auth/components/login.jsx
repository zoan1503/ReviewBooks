import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../redux/actions';



export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
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
        var { email, password } = this.state;
        var user = { email, password };
        this.props.login(user);
    }

    // forgotPassword(){
    //     const { emailForgot } = this.state;
    //     this.props.forgotPassword(emailForgot);
    // }

    render() {
        const { auth } = this.props;
        return (
            <div className="hold-transition login-page" style={{ minHeight: '50vh' }}>
                <div className="login-box" >
                    <div className="login-logo">
                        <a href="/index2.html"><b></b>Đăng nhập</a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input name="email" onChange={this.handleChange} type="email" className="form-control" placeholder={"Tài khoản"} required />
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
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label for="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-primary btn-block">Sign In</button>
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