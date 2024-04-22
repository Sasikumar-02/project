import React from 'react'
import GaugeChat from 'react-gauge-chart'
import {ResponsiveContainer,} from "recharts";

const GaugeChart:React.FC<{percent:any}> = ({percent}) => {
  let color;

  if (percent < 0.3) {
    color = '#EA4228'; // Red for below 30%
  } else if (percent >= 0.3 && percent <= 0.6) {
    color = '#F5CD19'; // Yellow for 30% to 60%
  } else {
    color = '#5BE12C'; // Green for above 60%
  }
  return (
    <ResponsiveContainer width="90%" height="100%">
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <GaugeChat id="gauge-chart5"
    nrOfLevels={420}
    arcsLength={[0.3, 0.5, 0.2]}
    colors={[ '#EA4228', '#F5CD19','#5BE12C',]}
    percent={percent}
    arcPadding={0.00}
    hideText={true}
  />
  <h1 style={{ color:color }}>{(percent * 100)?.toFixed(0)}%</h1>
  </div>
  </ResponsiveContainer>
  )
}

export default GaugeChart