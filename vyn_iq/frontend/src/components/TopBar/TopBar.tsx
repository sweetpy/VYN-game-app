import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './TopBar.css';

interface Business {
  id: number;
  name: string;
  worth: number;
}

interface EmpireState {
  id: number;
  empire_score: number;
  level: number;
  xp: number;
}

const TopBar: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [empireState, setEmpireState] = useState<EmpireState | null>(null);

  useEffect(() => {
    axios.get('/api/businesses/')
      .then(response => setBusinesses(response.data))
      .catch(error => console.error('Error fetching businesses:', error));

    axios.get('/api/gamification/empire-state/')
      .then(response => {
        if (response.data.length > 0) {
          setEmpireState(response.data[0]);
        }
      })
      .catch(error => console.error('Error fetching empire state:', error));
  }, []);

  const totalEmpireValue = businesses.reduce((total, business) => total + business.worth, 0);

  return (
    <div className="top-bar">
      <div className="empire-stats">
        <span>💰 Total Empire Value: ${totalEmpireValue.toLocaleString()}</span>
        {empireState && (
          <>
            <span>🏆 Empire Score: {empireState.empire_score}</span>
            <span>⭐ Level: {empireState.level} (XP: {empireState.xp})</span>
          </>
        )}
      </div>
      <div className="ai-insights">
        <span>🧠 AI Insights alert</span>
      </div>
    </div>
  );
};

export default TopBar;
