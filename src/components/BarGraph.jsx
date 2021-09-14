import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Zapelino", "OI", "BRB", "BRB Nação"],
  datasets: [
    {
      label: "Quantidade de Contas Abertas",
      data: [2300, 1250, 520, 1000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Contas Abertas - BOT",
    },
  },
};

const BarGraph = () => {
  return <Bar data={data} options={options} height="85%" />;
};

export default BarGraph;
