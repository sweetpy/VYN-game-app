import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainScreen.css';

interface Business {
  id: number;
  name: string;
}

interface MainScreenProps {
  onSelectBusiness: (businessId: number) => void;
  onSelectJournal: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ onSelectBusiness, onSelectJournal }) => {
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
          <div key={business.id} className="building" onClick={() => onSelectBusiness(business.id)}>
            {business.name}
          </div>
        ))}
      </div>
      <div className="journal">
        <button onClick={onSelectJournal}>📖 Journal</button>
      </div>
    </div>
  );
};

export default MainScreen;
