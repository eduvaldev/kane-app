import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarGrafic = () => {
  const [chartData, setChartData] = useState({})
  const chart = ()=>{
    setChartData({
      labels: [ 'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'],
      datasets:[
        {
          label: 'Nuevos',
          data: [60, 21, 46, 36, 44, 38],
          backgroundColor: 'rgba(117, 131, 222, 1)'
        },
        {
          label: 'Recurrentes',
          data: [40, 15, 39, 29, 38, 50],
          backgroundColor: 'rgb(174, 221, 235)'
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])

  return ( 
    <div style={{ height: '190px', width: '430px'}}>
      <Bar 
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true
                }
              }
            ]
          },
        }}
        
      />
    </div>
   );
}
 
export default BarGrafic;