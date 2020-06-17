import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    component={'input'}
                />
            </p>
            <p>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={'input'}
                />
            </p>
            <p>
                <Field
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={'input'}
                /> remember me
            </p>
            <p>
                <button>Login</button>
            </p>
        </form>
    )
};

const LogonReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = props => {
    const onSubmit = formData => console.log(formData);

    return (
        <div>
            <h1>Login</h1>
            <LogonReduxForm onSubmit={onSubmit} />
        </div>

    )
};

export default Login;