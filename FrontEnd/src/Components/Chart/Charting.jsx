import React from 'react'
import "./Chart.css"

import { 
  Line,
  ResponsiveContainer,
  LineChart,
  Tooltip,
  CartesianGrid,
  XAxis
 } from 'recharts';



export default function Charting({title , data , dataKey , grid}) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>

        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke={"black" || localStorage.getItem("Theme")} />
              <Line type="monotone"  dataKey={dataKey} stroke={"black" || localStorage.getItem("Theme")}/>
            <Tooltip />
            <CartesianGrid stroke={"#02208262"} strokeDasharray={10}/>
            {grid && <CartesianGrid stroke={"black" || localStorage.getItem("Theme")} strokeDasharray={10}/>}
            </LineChart>  
        </ResponsiveContainer>
    </div>
  )
}
