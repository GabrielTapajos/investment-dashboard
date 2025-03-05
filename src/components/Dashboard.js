import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Recommendations from './Recommendations';
import { getFinancialData } from '../utils/api';
import { analyzeData } from '../utils/analysis';

function Dashboard() {
  const [data, setData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const financialData = await getFinancialData();
      setData(financialData);
      const analysis = analyzeData(financialData);
      setRecommendations(analysis);
    }
    fetchData();
  }, []);

  return (
    <div className="Dashboard">
      <Chart data={data} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export default Dashboard;