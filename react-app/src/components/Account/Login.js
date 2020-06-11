import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { alertService, accountService } from '../../services';
import { connect } from 'react-redux';
import { login as accountLogin,logout as accountLogout } from '../../states/Account/reducer';

const App = ({history, location, login, logout, state})=>{

    useEffect(()=>{
        logout();
    },[])
    const initialValues = {
        email:'',
        password:''
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    });

    function onSubmit({email, password}, {setSubmitting}){
        alertService.clear();
        login({email: email, password: password});

        // accountService.login(email, password)
        //     .then(()=>{
        //         const {from} = location.state || {from: { pathname:"/"}};
        //         history.push(from);
        //     })
        //     .catch(error =>{
        //         setSubmitting(false);
        //         alertService.error(error);
        //     })
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                ({values,
                    errors, 
                    touched, 
                }) =>
                {
                    const formContrlClassName = 'form-control ' + (errors.email && touched.email ? 'control-invalid':'')
                    return (
                        <FormikForm >
                            <h3>Login</h3>
                            <div className='form-container'>
                                <div className='form-group'>
                                    <label htmlFor="email">Email</label>
                                    <Field name='email' type='text' className={formContrlClassName} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password</label>
                                    <Field name='password' type='password' className = {formContrlClassName} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-row">
                                    <div className='form-group col'>
                                        <button type='submit' disabled={state.isLoggingIn} className='btn btn-primary'>
                                            {state.isLoggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Login
                                        </button>
                                        <Link to="register" className="btn btn-link">Register</Link>
                                    </div>
                                    <div className="form-group col text-right">
                                        <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link>
                                    </div>
                                </div>
                            </div>
                        </FormikForm>
                    );
                    
                }
            }

        </Formik>
    );
};

const mapStateToProps = (state) => {
    return {
        state: state.account
    }
};

const Login = connect(
    mapStateToProps,
    {login:accountLogin, logout:accountLogout}
    )(App)
export default Login;