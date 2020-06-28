import React, {useEffect, useRef, useState} from "react";
import s from './Chart.module.css'
import { select, line, curveCardinal, scaleLinear, max } from "d3";


const Chart = (props : any) => {

    const [data, setData] = useState([86, 32, 86, 32, 10, 84, 38, 80, 2, 100])
    const svgRef = useRef()

    useEffect(() => {
        // @ts-ignore
        const svg = select(svgRef.current)

        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 1240])

        const yScale = scaleLinear()
        // @ts-ignore
            .domain([0, max(data)])
            .range([300, 0])
        // @ts-ignore
        const myLine = line()
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
    }, [data])

    return (
        <div className={s.elem}>
            <svg viewBox={'0 0 1240 300'}
                // @ts-ignore
                ref={svgRef}></svg>
        </div>
    )
}

export default Chart