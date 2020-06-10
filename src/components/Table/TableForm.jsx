import React from "react";
import {Field} from "redux-form";
import s from './Table.module.css'
import {required} from "../FormValidators/FormValidation";


const TableForm = (props) => {
    return (
        <form className={s.formTable} onSubmit={props.handleSubmit}>
            <div><Field validate={[required]} type={'date'} name={'date'} component='input'/></div>
            <div><Field validate={[required]} pattern="[0-9]{2,}" name={'weight'} component='input'/></div>
            <div><Field validate={[required]} pattern="[0-9]{2,}" name={'waist'} component='input'/></div>
            <div><Field validate={[required]} pattern="[0-9]{2,}" name={'chest'} component='input'/></div>
            <div><Field validate={[required]} pattern="[0-9]{2,}" name={'arm'} component='input'/></div>
            <div><Field validate={[required]} pattern="[0-9]{2,}" name={'leg'} component='input'/></div>
            <div><button>Send</button></div>
        </form>
    )
}

export default TableForm