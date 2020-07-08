import React, {useEffect, useState} from "react";
import s from './Info.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import change from './../../image/change.svg'
import PieInfoChart from "./PieInfoChart";
import {actions} from './../../redux/table-reducer'

type mapStateToPropsType = {
    height: number,
    age: number,
    sex: 'male' | 'female',
    item: number
}

type MapDispatchToPropsType = {
    changeAge: (userAge : number) => void,
    changeHeight: (userHeight : number) => void,
    changeSex: (userSex : 'male' | 'female') => void
}

const mapStateToProps = (state : AppStateType) :  mapStateToPropsType => ({
    height: state.table.userHeight,
    age: state.table.userAge,
    sex: state.table.userSex,
    item: state.table.items[state.table.items.length - 1].weight
})

type infoType = mapStateToPropsType & MapDispatchToPropsType

const Info: React.FC<infoType> = React.memo((props) => {
    const sexEdentify = props.sex === 'male' ? 5 : -161;
    const kcal = (10 * props.item) + (6.25 * props.height) - (5 * props.age) + sexEdentify;
    const proteinsAndFat = (kcal / 100 * 30).toFixed(0);
    const carbohydrates = (kcal / 100 * 40).toFixed(0);

    const [age, setAge] = useState(props.age)
    const [editAge, setEditAge] = useState(false)
    const [sex, setSex] = useState(props.sex)
    const [editSex, setEditSex] = useState(false)
    const [height, setHeight] = useState(props.height)
    const [editHeight, setEditHeight] = useState(false)

    const onAgeChange = (e : any) => {
        setAge(e.currentTarget.value)
    }
    const editChangeAge = () => {
        setEditAge(true)
    }

    const editChangeHeight = () => {
        setEditHeight(true)
    }

    const editChangeSex = () => {
        setEditSex(true)
    }

    const deactivateEditAge = () => {
        setEditAge(false)
        props.changeAge(age)
    }

    const deactivateEditHeight = () => {
        setEditHeight(false)
        props.changeHeight(height)
    }

    const deactivateEditSex = () => {
        setEditSex(false)
        props.changeSex(sex)
    }

    const onSexChange = (e : any) => {
        setSex(e.target.value)
    }

    const onHeightChange = (e : any) => {
        setHeight(e.currentTarget.value)
    }

    return (
        <div className={s.elem}>
            <div>
                <div>
                    <p className={s.infoElem}>
                        <span>Age:</span>
                        {!editAge &&
                        <span>{props.age}< img src={change} onClick={editChangeAge} alt="change"/></span>
                        }
                        {editAge &&
                        <input type="text"
                               onChange={onAgeChange}
                               value={age} autoFocus={true}
                               onBlur={deactivateEditAge}/>
                        }
                    </p>
                    <p className={s.infoElem}>
                        <span>Sex:</span>
                        {!editSex &&
                        <span>{props.sex} < img src={change} onClick={editChangeSex} alt="change"/></span>
                        }
                        {editSex &&
                        <div>
                            <label>
                                <input type="radio" name={"sex"} onClick={onSexChange} value={'male'}
                                       checked={sex === 'male' ? true : false} autoFocus={true} onBlur={deactivateEditSex}/>
                                <span>Male</span>
                            </label>
                            < label >
                                < input type="radio" name={"sex"} onClick={onSexChange} value={'female'} autoFocus={true}
                                        onBlur={deactivateEditSex} checked={sex === 'female' ? true : false}/>
                                <span>Female</span>
                            </label>
                        </div>
                        }
                    </p>
                    <p className={s.infoElem}>
                        <span>Height:</span>
                        {!editHeight &&
                        <span>{props.height}<img src={change} onClick={editChangeHeight} alt="change"/></span>
                        }
                        {editHeight &&
                        <input type="text"
                               onChange={onHeightChange}
                               value={height} autoFocus={true}
                               onBlur={deactivateEditHeight}/>
                        }
                    </p>
                    <p className={s.infoElem}>
                        <span>Kcal:</span> <span>{kcal}</span>
                    </p>
                    <p className={s.infoElem}>
                        <span>Proteins:</span> <span>{proteinsAndFat}</span>
                    </p>
                    <p className={s.infoElem}>
                        <span>Fat:</span> <span>{proteinsAndFat}</span>
                    </p>
                    <p className={s.infoElem}>
                        <span>Carbohydrates:</span> <span>{carbohydrates}</span>
                    </p>
                </div>
                <div>
                    <PieInfoChart kcal={kcal}
                                  proteins={proteinsAndFat}
                                  fat={proteinsAndFat}
                                  carbohydrates={carbohydrates} />
                </div>
            </div>
            <p className={s.attention}>Calorie calculation is carried out according to a simple scheme and with easy activity, if you want to adjust your weight, but got here, it is better to consult a nutritionist
            <br /><br />My GitHub: <a target={'_blank'} href="https://github.com/ZamarShoo">ZamarShoo</a></p>
        </div>
    )
})

export default compose(
    connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {changeAge: actions.changeAge, changeHeight: actions.changeHeight, changeSex: actions.changeSex})
)(Info)