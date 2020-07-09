import React from "react";
import { Field, reduxForm } from "redux-form";
import {Input} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxlenght25 = maxLengthCreator(25);

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[required, maxlenght25]}
                />
            </p>
            <p>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxlenght25]}
                />
            </p>
            <p>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                /> remember me
            </p>
            <p>
                <button>Login</button>
            </p>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm);
