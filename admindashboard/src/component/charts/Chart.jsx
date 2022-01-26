import React from 'react';
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Chart({title, data, dataKey, grid}) {
  return (
      <div className="chart">
          <span className="chartTitle">{title}</span>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5"/>}
              </LineChart>

          </ResponsiveContainer>
      </div>
  );
}
