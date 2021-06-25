import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'Black',
          'rgba(153, 102, 255, 1)',
          'rgba(66, 206, 245)',
          'rgba(114, 245, 66)',
          'rgba(245, 215, 66)',
          'red',
          'green',
          'yellow'
          
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Doughnut Chart'
    }
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart