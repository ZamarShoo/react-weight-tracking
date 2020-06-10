import React from "react";
import s from './FormControls.module.css'

const FormControl = ({meta: {error}, children}) => {
    const hasError =  error;
    return (
        <div className={s.formInput+ ' ' + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}