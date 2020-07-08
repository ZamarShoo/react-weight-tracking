import React from "react";
import s from './Table.module.css'
import {AppStateType} from "../../redux/store";
import {ItemsType} from "../../../types/type";
import { compose } from "redux";
import {connect} from "react-redux";
import {actions} from "../../redux/table-reducer";
import TableElem from "../TableElem/TableElem";
import TableForm from "./TableForm";
import {reduxForm} from "redux-form";


type mapStateToPropsType = {
    items: Array<ItemsType>
}

type MapDispatchToPropsType = {
    addItem: (date : string, weight: number, waist: number,
              chest: number, arm: number, leg: number) => void,
    deleteItem: (id : number) => void
}

const mapStateToProps = (state : AppStateType) :  mapStateToPropsType => ({
    items: state.table.items
})

type TableType = mapStateToPropsType & MapDispatchToPropsType

class Table extends React.Component<TableType>{

    deleteOneItem = (id : number) => {
        this.props.deleteItem(id)
    }

    addOneItem = (values : any) => {
        this.props.addItem(values.date, values.weight,
            values.waist, values.chest, values.arm, values.leg)
    }

    render() {

        let TableReduxForm = reduxForm({form: `tableform`})(TableForm);
        let shortItems = false
        if (this.props.items.length < 2) {shortItems = true}
        return (
            <div className={s.elem}>
                <ul>
                    <li className={s.liElem}>
                        <div>Date</div>
                        <div>Weight</div>
                        <div>Waist</div>
                        <div>Chest</div>
                        <div>Arm</div>
                        <div>Leg</div>
                        <div></div>
                    </li>
                    <div className={s.tableElemWrapper}>
                        <div className={s.tableElemWrapperIn}>
                        {

                            this.props.items.map(item => {
                                return <TableElem item={item} key={item.id} deleteItem={this.deleteOneItem} shortItems={shortItems}/>
                            })

                        }
                        </div>
                    </div>
                    <TableReduxForm onSubmit={ this.addOneItem }/>
                </ul>
            </div>
        )
    }
}

export default compose(
    connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {addItem: actions.addItem, deleteItem: actions.deleteItem})
)(Table)