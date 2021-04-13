import React from "react";
import f from './formControls.module.scss';

const FormControl = ({input, meta, child, ...props}) => {
    const {
        error,
        formControl,
    } = f;

    const hasError = meta.touched && meta.error;

    return (
        <p className={formControl + ' ' + (hasError ? error : '')}>
            <p>
                {props.children}
            </p>
            {hasError && <span>{meta.error}</span>}
        </p>
    )
};

const Textarea = props => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
                <textarea
                    {...input}
                    {...restProps}
                    placeholder='Type your message...'
                />
        </FormControl>
    )
};

const Input = props => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
                <input
                    {...input}
                    {...restProps}
                    placeholder={props.placeholder}
                />
        </FormControl>
    )
};

export {
    Input,
    Textarea,
};
