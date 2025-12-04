import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../axiosConfig';
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

interface Transaction {
    id: number;
    description: string;
    amount: number;
    transaction_type: string;
    date: string;
}

const BusinessControlCenter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<Business | null>(null);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (id) {
        axios.get(`/api/businesses/${id}/`)
          .then(response => setBusiness(response.data))
          .catch(error => console.error('Error fetching business details:', error));

        axios.get(`/api/staff/staff/?business=${id}`)
          .then(response => setStaff(response.data))
          .catch(error => console.error('Error fetching staff for business:', error));

        axios.get(`/api/finance/transactions/?business=${id}`)
          .then(response => setTransactions(response.data))
          .catch(error => console.error('Error fetching transactions for business:', error));
    }
  }, [id]);

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div className="business-control-center">
      <Link to="/"><button>&larr; Back to Main Screen</button></Link>
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
      <div className="details-columns">
        <div className="column">
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
        <div className="column">
            <h3>Recent Transactions</h3>
            <div className="transactions-list">
                {transactions.map(t => (
                <div key={t.id} className={`transaction ${t.transaction_type.toLowerCase()}`}>
                    <span>{t.description}</span>
                    <span>${t.amount.toLocaleString()}</span>
                    <span>{t.date}</span>
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessControlCenter;
