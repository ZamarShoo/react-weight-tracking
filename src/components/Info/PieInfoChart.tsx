import React, {useEffect, useRef} from "react";
import s from './Info.module.css'
import {select} from "d3-selection";

const PieInfoChart = React.memo((props : any) => {
    const svgElem = useRef<SVGSVGElement>(null)
    useEffect(() => {
        const data = [props.proteins, props.fat, props.carbohydrates]
        const svg = select(svgElem.current)

    }, [props.proteins, props.fat, props.carbohydrates])

    return (
        <div className={s.pie}>
            <svg viewBox={'0 0 300 300'}
                 ref={svgElem}></svg>
        </div>
    )
})

export default PieInfoChart