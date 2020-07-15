import React, {useEffect, useRef} from "react";
//@ts-ignore
import DonutChart from 'react-d3-donut';


const PieInfoChart = React.memo((props : any) => {

    const data = [
        {count: props.proteins, color: "#1f77b4", name: 'Proteins'},
        {count: props.fat, color: "#ff7f0e", name: 'Fat'},
        {count: props.carbohydrates, color: "#2ca02c", name: 'Carbohydrates'}
    ]

    return (
            <DonutChart
                innerRadius={110}
                outerRadius={150}
                transition={true}
                svgClass="example6"
                pieClass="pie6"
                displayTooltip={true}
                strokeWidth={3}
                data={data} />
    )
})

export default PieInfoChart