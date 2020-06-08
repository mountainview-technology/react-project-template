import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {accountService} from '../services';


const PrivateRoute = ({ component: Component, roles, ...rest })=>{
    return (
        <Route {...rest}
            render={
                (props)=>{
                    const user = accountService.userValue;
                    if(!user){
                        return <Redirect to={{
                            pathname:'/accounts/login',
                            state:{
                                from: props.location
                            }
                        }} />
                    }

                    if (roles && roles.indexOf(user.role) === -1) {
                        return <Redirect to={{ pathname: '/'}} />
                    }
                    return (<Component {...props} />);
                }
            }
        />
    );
}

export default PrivateRoute;