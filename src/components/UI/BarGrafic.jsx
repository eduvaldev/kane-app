import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';

const BarGrafic = () => {

  const ganancias = useSelector(state => state.data.ganancias);

  const [chartData, setChartData] = useState({})
  const chart = ()=>{

    let chartmounts = [];
    let dataNuevos = [];
    let dataRecc = [];

    ganancias.map( elem => {
      chartmounts.push(elem.mes.slice(0, 3));
      dataNuevos.push(parseInt(elem.nuevos));
      dataRecc.push(parseInt(elem.recurrentes));
    })

    setChartData({
      labels: chartmounts,
      datasets:[
        {
          label: 'Nuevos',
          data: dataNuevos,
          backgroundColor: 'rgba(117, 131, 222, 1)'
        },
        {
          label: 'Recurrentes',
          data: dataRecc,
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