import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ReactApexChart from 'react-apexcharts';

const barChartOptions = {
  chart: {
    type: 'bar',
    height: 365,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '45%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    show: true,
    min: 7,   
    max: 27,
    tickAmount: 5,
    axisBorder: {
      show: true
    },
    labels: {
      style: {
        colors: ['rgb(131,132,137)'],
      }
    },
    axisTicks: {
      show: true
    }
  },
  yaxis: {
    show: true,
    min: 0,   
    max: 15,
    tickAmount: 3,
    axisTicks: {
      show: true
    },
    labels: {
      style: {
        colors: ['rgb(131,132,137)'],
      }
    }
  },
  grid: {
    show: false
  }
};


export default function MonthlyBarChart() {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series] = useState([
    {
      data: [2.5,10,5,4,6.2,6.2,5.5,6.1,5.9,0.3,7,7.5,6,11,9,12.5,16,11,7,5,6,11,8,7,6,10,12]
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [info],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      }
    }));
  }, [primary, info, secondary]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series} type="bar" height={200} />
    </Box>
  );
}