import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import './Achievements.css';

interface Achievement {
  id: number;
  title: string;
  description: string;
}

const Achievements: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    // This assumes the API returns achievements for the current user.
    // A real implementation would require user authentication.
    axios.get('/api/gamification/achievements/')
      .then(response => setAchievements(response.data))
      .catch(error => console.error('Error fetching achievements:', error));
  }, []);

  return (
    <div className="achievements-container">
      <h2>Achievements & Trophies</h2>
      <div className="achievements-list">
        {achievements.map(ach => (
          <div key={ach.id} className="achievement">
            <h3>🏆 {ach.title}</h3>
            <p>{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
