import React from "react";
import {Field} from "redux-form";


const TableForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'date'} component='input'/></div>
            <div><Field name={'weight'} component='input'/></div>
            <div><Field name={'waist'} component='input'/></div>
            <div><Field name={'chest'} component='input'/></div>
            <div><Field name={'arm'} component='input'/></div>
            <div><Field type={'date'} name={'leg'} component='input'/></div>
            <div><button>Send</button></div>
        </form>
    )
}

export default TableForm