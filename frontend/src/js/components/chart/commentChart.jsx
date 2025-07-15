import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../css/chart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Jumlah komentar',
      data: [10, 20, 15, 30, 25, 12],
      backgroundColor: 'blue',
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Statistik komentar per Bulan'
    }
  }
};

const BarChart = () => {
  return (
    <div className="chartContainer">
      <label className="chartTitle">Statistik Berita</label>
      <div className="chartWrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
