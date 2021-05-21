import React from 'react';
import { Route, Redirect} from 'react-router-dom';


export const PrivateRoute = ({ links, auth, component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => {
        // if(logged !== null){
            return <Layout><Component {...props}/></Layout>
        // }else{
        //     return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        // }
    }} />
)