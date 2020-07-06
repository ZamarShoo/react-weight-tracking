import React, {useEffect, useRef, useState} from "react";
import s from './Chart.module.css'
import { select, line, curveCardinal, scaleLinear, max, min } from "d3";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ItemsType} from "../../../types/type";

type mapStateToPropsType = {
    items: Array<ItemsType>
}

type MapDispatchToPropsType = {

}

type ChartType = mapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state : AppStateType) :  mapStateToPropsType => ({
    items: state.table.items
})

const Chart: React.FC<ChartType> = React.memo((props : any) => {

    const svgRef = useRef()

    useEffect(() => {
        // @ts-ignore
        const data = props.items.map((elem) => {
            return elem.weight
        })
        // @ts-ignore
        const svg = select(svgRef.current)

        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 1240])

        const yScale = scaleLinear()
        // @ts-ignore
            .domain([min(data), max(data)])
            .range([280, 0])
        const myLine = line()
        // @ts-ignore
            .x((value, index) => xScale(index))
            // @ts-ignore
            .y(value => yScale(value))
            .curve(curveCardinal)
        svg
            .selectAll('path')
            .data([data])
            .join('path')
            // @ts-ignore
            .attr('d', value => myLine(value))
            .attr('fill', 'none')
            .attr('stroke', 'lavender')
            .attr('stroke-width', '3px')
            .attr('width', '100%')
    }, [props.items])

    return (
        <div className={s.elem}>
            <svg viewBox={'0 -9 1240 300'}
                // @ts-ignore
                ref={svgRef}></svg>
        </div>
    )
})

export default compose(
    connect<mapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {})
)(Chart)