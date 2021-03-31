import React, { useRef } from 'react'
import Chart from 'chart.js';

const Graph = ({pointData}) => {

let chartRef = useRef()



const activate =()=>{   
  const myChartRef = chartRef.current.getContext("2d");      
  var gradient = myChartRef.createLinearGradient(0, 40, 0, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgb(36, 152, 4)");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                
                datasets: [
                    {
                        data: pointData || [36, 67, 91],
                        backgroundColor: gradient,
                        borderColor:'rgba(59,172,7,0.65)'
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
                  gridLines: {
                      display:false
                  }
              }],
              yAxes: [{
                ticks: {
                  min: Math.min.apply(this, pointData) - .10,
                  max: Math.max.apply(this, pointData) + .10,
                  stepSize:.02
               },
                  display:false,
                  gridLines: {
                      display:false
                  },  
                  title:{
                    display:false
                  }
              }]
            }
             
            }
        });
      }


  return (
    <div>
      <canvas id="myChart" ref={chartRef}  width="160" height="40"></canvas>
      <button onClick={() =>{activate()}}>activate</button>
    </div>
  )
}

export default Graph
