import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignUp from '../modules/auth/components/SignUp'
import { getStorage } from '../config';

export const PrivateRoute = ({ links, auth, component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => {
        var logged = localStorage.getItem('isLogged')
        console.log(logged)
        if (logged == 1) {
            return <Layout><Component {...props} /></Layout>
        }
        if (logged == 0) {
            return  <SignUp/>
        } 
        else {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        //return <Layout><Component {...props} /></Layout>
    }} />
)