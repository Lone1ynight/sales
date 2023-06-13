import React, {
  useEffect,
  useState
} from 'react';
import { Chart } from 'react-google-charts';
import Data from '../data/data.json';
import { transformData } from '../helpers/transformData.js';

export const SalesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => setData(transformData(Data)), [])

  const options = {
    title: 'Products',
    legend: { position: 'none', height: '700px' },
    colors: ['#3366cc', '#dc3912'],
    hAxis: {
      title: 'Sales'
    },
    vAxis: {
      title: 'Years'
    },
  }

  return (
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        height={'700px'}
      />
  );

};
