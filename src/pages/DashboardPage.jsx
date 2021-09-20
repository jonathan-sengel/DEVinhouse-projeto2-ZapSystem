import { Box, Container } from '@chakra-ui/react';
import { Bar, Line } from 'react-chartjs-2';

const barData = {
  labels: ['Zapelino', 'OI', 'BRB', 'BRB Nação'],
  datasets: [
    {
      label: 'Quantidade de Contas Abertas',
      data: [2300, 1250, 520, 1000],
      backgroundColor: ['#C5303066', '#2F855A66', '#6B46C166', '#2B6CB066'],
      borderColor: ['#C53030', '#2F855A', '#6B46C1', '#2B6CB0'],
      borderWidth: 1,
    },
  ],
};

const barOption = {
  maintainAspectRatio: false,
  responsive: true,
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Contas Abertas - BOT',
    },
  },
};

const lineData = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  datasets: [
    {
      label: 'PIX realizados ultimos 20 dias',
      data: [
        100, 300, 200, 700, 420, 554, 900, 745, 800, 622, 480, 590, 610, 715,
        399, 650, 790, 827, 899, 920,
      ],
      fill: false,
      backgroundColor: '#ED893666',
      borderColor: '#ED8936',
    },
  ],
};

const lineOptions = {
  maintainAspectRatio: false,
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
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Quantidade Transações PIX',
    },
  },
};

const DashboardPage = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxW="95%"
      h="100%"
      py="4"
      my="4"
    >
      <Box h="50%">
        <Bar data={barData} options={barOption} width="100%" height="100%" />
      </Box>
      <Box h="50%">
        <Line
          data={lineData}
          options={lineOptions}
          width="100%"
          height="100%"
        />
      </Box>
    </Container>
  );
};

export default DashboardPage;
