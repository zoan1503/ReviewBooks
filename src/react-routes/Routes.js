import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../modules/auth/components/login';
import CreateUser from '../modules/auth/components/CreateUser'
// import Home from '../modules/home/index';
import { PrivateRoute } from './CombineRoutes';
import Layout from '../layout/Layout';
//import { UserManager } from '../modules/auth/components/UserManager';
import ReviewBooks from '../modules/ReviewBooks'
import BookSearching from '../modules/BookSearching'
import UserManager from '../modules/UserManager'
import ReviewedBook from '../modules/ReviewedBook'
import ReactionHistory from '../modules/ReactionHistory'
import ReviewBooks1 from '../modules/AllBook/ReviewBooks1'
import ReviewBooks2 from '../modules/AllBook/ReviewBooks2'
import ReviewBooks3 from '../modules/AllBook/ReviewBooks3'
import ReviewBooks4 from '../modules/AllBook/ReviewBooks4'
import ReviewBooks5 from '../modules/AllBook/ReviewBooks5'
import ReviewBooks6 from '../modules/AllBook/ReviewBooks6'
import Home from '../modules/Home'
import Axios from 'axios'
import { AuthRoute } from './AuthRoute';


const privatePage = [
    { path: '/', exact: true, component: () => <Home /> },
    { path: '/home', exact: true, component: () => <Home /> },
    { path: '/reviewbooks', exact: true, component: () => <ReviewBooks /> },
    { path: '/booksearching', exact: true, component: () => <BookSearching /> },
    { path: '/usermanager', exact: true, component: () => <UserManager /> },
    { path: '/reviewedbook', exact: true, component: () => <ReviewedBook /> },
    { path: '/reactionhistory', exact: true, component: () => <ReactionHistory /> },
    { path: '/reviewbooks1', exact: true, component: () => <ReviewBooks1 /> },
    { path: '/reviewbooks2', exact: true, component: () => <ReviewBooks2 /> },
    { path: '/reviewbooks3', exact: true, component: () => <ReviewBooks3 /> },
    { path: '/reviewbooks4', exact: true, component: () => <ReviewBooks4 /> },
    { path: '/reviewbooks5', exact: true, component: () => <ReviewBooks5 /> },
    { path: '/reviewbooks6', exact: true, component: () => <ReviewBooks6 /> },

    // { path: '/subjectmanager', exact: true, component: () => <SubjectManager /> },
    // { path: '/ternmanager', exact: true, component: () => <TernManager /> },
    // { path: '/profile', exact: true, component: () => <ProfileManager /> },
    // { path: '/sessionmanager', exact: true, component: () => <SessionManager /> },
    // { path: '/classmanager', exact: true, component: () => <ClassManager /> },
    // { path: '/assignment', exact: true, component: () => <Assignment /> },
    // { path: '/lecturermanager', exact: true, component: () => <LecClassManager /> },
    // { path: '/registerclass', exact: true, component: () => <RegisterClass /> },
    // { path: '/classoftern', exact: true, component: () => <ClassOfTern /> },
    // { path: '/setpoint', exact: true, component: () => <SetPoint /> },
    // { path: '/listpoint', exact: true, component: () => <ListPoint /> },
    // { path: '/studentsmanager', exact: true, component: () => <StudentsManager /> },
]
export default class Routes extends Component {
    render() {
        const { auth } = this.props;
        return (
            <React.Fragment>
                <AuthRoute auth={auth} exact path="/login" component={Login} />
                {
                    privatePage.map(page => (
                        <PrivateRoute
                            key={page.path}
                            auth={auth}
                            exact={page.exact}
                            path={page.path}
                            layout={Layout}
                            component={page.component}
                        />
                    ))
                }
            </React.Fragment>
        )
    }
};



