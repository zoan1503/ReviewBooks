import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import Login from '../modules/auth/components/login';
// import Home from '../modules/home/index';
import { PrivateRoute } from './CombineRoutes';
import Layout from '../layout/Layout';
// import { UserManager } from '../modules/auth/components/UserManager';
import ReviewBooks from '../modules/ReviewBooks'
import BookSearching from '../modules/BookSearching'
import Home from '../modules/Home'
const privatePage = [
    { path: '/', exact: true, component: () => <Home /> },
    { path: '/home', exact: true, component: () => <Home /> },
    { path: '/reviewbooks', exact: true, component: () => <ReviewBooks /> },
    { path: '/booksearching', exact: true, component: () => <BookSearching /> },
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
                {/* <AuthRoute auth={auth} exact path="/login" component={Login} /> */}
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



