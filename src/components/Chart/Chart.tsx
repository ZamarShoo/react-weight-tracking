import React, {useEffect, useRef} from "react";
import s from './Chart.module.css'
import { select, line, curveCardinal, scaleLinear, max, min } from "d3";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ItemsType} from "../../../types/type";

type mapStateToPropsType = {
    items: Array<ItemsType>
}


const mapStateToProps = (state : AppStateType) :  mapStateToPropsType => ({
    items: state.table.items
})

const Chart: React.FC<mapStateToPropsType > = React.memo((props) => {
    const svgElem = useRef<SVGSVGElement>(null)

    useEffect(() => {
        const data = props.items.map((elem) => {
            return elem.weight
        })
        const svg = select(svgElem.current)

        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 1240])

        const yScale = scaleLinear()
            .domain([min(data), max(data)] as Array<number>)
            .range([280, 0])
        const myLine = line()
            .x((value, index) => xScale(index))
            //@ts-ignore
            .y(value => yScale(value))
            .curve(curveCardinal)
        svg
            .selectAll('path')
            .data([data])
            .join('path')
            //@ts-ignore
            .attr('d', value => myLine(value))
            .attr('fill', 'none')
            .attr('stroke', 'lavender')
            .attr('stroke-width', '3px')
            .attr('width', '100%')

        svg
            .selectAll('.myDot')
            .data(data)
            .join('circle')
            .attr('class', 'myDot')
            .attr('stroke', '#374072')
            .attr('fill', 'white')
            .attr('r', 4)
            .attr('cx', (value, index) => xScale(index))
            .attr('cy', yScale)
            .on('mouseenter', (value, index) => {
                svg.attr('cursor', 'pointer')
                    .selectAll('.tooltip')
                    .data([value])
                    .join('text')
                    .attr('class', 'tooltip')
                    .text(value)
                    .attr('x', xScale(index) - 8)
                    .attr('y', yScale(value) - 8)
                    .transition()
                    .attr('opacity', 1)
                    .attr('font-family', 'Open Sans')
                    .attr('stroke', '#374072')
                    .attr('font-size', 18)
            })
            .on('mouseleave', (value, index) => {
                svg.attr('cursor', 'default')
                    .select('.tooltip').remove()
                    .transition()
            })
    }, [props.items])
    return (
        <div className={s.elem}>
            <svg viewBox={'-30 -30 1300 350'}
                ref={svgElem}></svg>
        </div>
    )
})

export default compose(
    connect<mapStateToPropsType, {}, {}, AppStateType>(
        mapStateToProps, {})
)(Chart)