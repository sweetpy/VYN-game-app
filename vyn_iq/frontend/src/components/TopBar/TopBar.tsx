import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopBar.css';

interface Business {
  id: number;
  name: string;
  worth: number;
  bank_balance: number;
  cashflow: number;
}

const TopBar: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    axios.get('/api/businesses/')
      .then(response => {
        setBusinesses(response.data);
      })
      .catch(error => {
        console.error('Error fetching businesses:', error);
      });
  }, []);

  const totalEmpireValue = businesses.reduce((total, business) => total + business.worth, 0);

  return (
    <div className="top-bar">
      <div className="empire-stats">
        <span>💰 Total Empire Value: ${totalEmpireValue.toLocaleString()}</span>
        <span>📊 Net Worth</span>
        <span>💵 Daily Profit</span>
      </div>
      <div className="ai-insights">
        <span>🧠 AI Insights alert</span>
      </div>
      <div className="action-points">
        <span>💎 “Action Points” for daily tasks</span>
      </div>
    </div>
  );
};

export default TopBar;
