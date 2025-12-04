import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MainScreen.css';

interface Business {
  id: number;
  name: string;
}

const MainScreen: React.FC = () => {
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

  return (
    <div className="main-screen">
      <h1>Welcome to VYN IQ</h1>
      <div className="buildings">
        {businesses.map(business => (
          <Link to={`/business/${business.id}`} key={business.id}>
            <div className="building">
              {business.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="journal">
        <Link to="/journal"><button>📖 Journal</button></Link>
      </div>
    </div>
  );
};

export default MainScreen;
