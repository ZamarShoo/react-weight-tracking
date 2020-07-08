import React from "react";
import s from './TableElem.module.css'
import DeleteImage from "../../common/delete";


const TableElem = (props : any) => {
    return (
        <li className={s.liElem}>
            <div>{props.item.date}</div>
            <div>{props.item.weight}</div>
            <div>{props.item.waist}</div>
            <div>{props.item.chest}</div>
            <div>{props.item.arm}</div>
            <div>{props.item.leg}</div>
            <div>
                {!props.shortItems &&
                <div className={s.delete} onClick={() => props.deleteItem(props.item.id)}><DeleteImage /></div>
                }
            </div>
        </li>
    )
}

export default TableElem