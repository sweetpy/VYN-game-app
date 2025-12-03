import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BusinessControlCenter.css';

interface Business {
  id: number;
  name: string;
  profit: number;
  margins: number;
  orders: number;
}

interface Staff {
  id: number;
  name: string;
  role: string;
}

interface BusinessControlCenterProps {
  businessId: number;
  onBack: () => void;
}

const BusinessControlCenter: React.FC<BusinessControlCenterProps> = ({ businessId, onBack }) => {
  const [business, setBusiness] = useState<Business | null>(null);
  const [staff, setStaff] = useState<Staff[]>([]);

  useEffect(() => {
    axios.get(`/api/businesses/${businessId}/`)
      .then(response => {
        setBusiness(response.data);
      })
      .catch(error => {
        console.error('Error fetching business details:', error);
      });

    axios.get(`/api/staff/staff/?business=${businessId}`)
      .then(response => {
        setStaff(response.data);
      })
      .catch(error => {
        console.error('Error fetching staff for business:', error);
      });
  }, [businessId]);

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div className="business-control-center">
      <button onClick={onBack}>&larr; Back to Main Screen</button>
      <h2>{business.name} Control Center</h2>
      <div className="kpis">
        <div className="kpi">
          <h3>Profit</h3>
          <p>${business.profit.toLocaleString()}</p>
        </div>
        <div className="kpi">
          <h3>Margins</h3>
          <p>{business.margins}%</p>
        </div>
        <div className="kpi">
          <h3>Orders</h3>
          <p>{business.orders}</p>
        </div>
      </div>
      <h3>Staff</h3>
      <div className="staff-list">
        {staff.map(member => (
          <div key={member.id} className="staff-member">
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessControlCenter;
