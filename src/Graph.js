import React, { useEffect,useRef } from 'react'
import Chart from 'chart.js';

const Graph = () => {

let chartRef = useRef()


const activate =()=>{   
  const myChartRef = chartRef.current.getContext("2d");      

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
      }


  return (
    <div>
      <canvas id="myChart" ref={chartRef}  width="200" height="200"></canvas>
      <button onClick={() =>{activate()}}>activate</button>
    </div>
  )
}

export default Graph
