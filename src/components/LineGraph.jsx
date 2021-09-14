import { Line } from "react-chartjs-2";

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  datasets: [
    {
      label: "PIX realizados ultimos 20 dias",
      data: [
        100, 300, 200, 700, 420, 554, 900, 745, 800, 622, 480, 590, 610, 715, 399, 650, 790, 827,
        899, 920,
      ],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Quantidade Transações PIX",
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} height="85%" />;
};

export default LineChart;
