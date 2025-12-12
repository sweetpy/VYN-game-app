import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './AI_Brain.css';

interface Recommendation {
  id: number;
  title: string;
  recommendation: string;
}

const AI_Brain: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    axios.get('/api/ai/recommendations/')
      .then(response => {
        setRecommendations(response.data);
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);
      });
  }, []);

  return (
    <div className="ai-brain">
      <h2>AI Brain</h2>
      <div className="recommendations">
        {recommendations.map(rec => (
          <div key={rec.id} className="recommendation">
            <h3>{rec.title}</h3>
            <p>{rec.recommendation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AI_Brain;
