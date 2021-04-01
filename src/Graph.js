import React, { useRef,useEffect } from 'react'
import Chart from 'chart.js';

const Graph = ({pointData}) => {

let chartRef = useRef()

useEffect(() => {
  let label = [];
for(let i = 0; i < 168; i++ ){
  label[i] = i
}
  const myChartRef = chartRef.current.getContext("2d");      
  var gradient = myChartRef.createLinearGradient(0, 40, 0, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgb(36, 152, 4)");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels:label,
                datasets: [
                    {
                        data: pointData,
                        backgroundColor: gradient,
                        borderColor:'rgba(59,172,7,0.65)',
                        lineTension: 0.4
                    }
                ]
            },
            options: {
              legend: {
                display: false
             },
             tooltips: {
                enabled: false
             },
             elements: {
              point:{
                  radius: 0
              }
            },
             scales: {
              xAxes: [{
                  
                  display:false,
                  scaleLabel:{
                    type:'linear',
                    display:true,
                    
                  },
                  ticks:{
                    
                  },
                  gridLines: {
                      display:true
                  }
              }],
              yAxes: [{
                ticks: {
                 //min: Math.min(...pointData),
                  //max: Math.max(...pointData),
                  //stepSize:0.10
               },
                  display:false,
                  gridLines: {
                      display:true
                  },  
                  title:{
                    display:false
                  }
              }]
            }
             
            }
        });
      }, [])

  


  return (
    <div>
      <canvas id="myChart" height="40" width="160" ref={chartRef}></canvas>
    </div>
  )
}

export default Graph
