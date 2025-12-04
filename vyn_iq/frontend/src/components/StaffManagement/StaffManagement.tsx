import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import './StaffManagement.css';

interface Staff {
  id: number;
  name: string;
  role: string;
  kpis: string;
  business: number;
}

interface Business {
  id: number;
  name: string;
}

const StaffManagement: React.FC = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [newStaffName, setNewStaffName] = useState('');
  const [newStaffRole, setNewStaffRole] = useState('');
  const [newStaffKPIs, setNewStaffKPIs] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState<number | ''>('');

  useEffect(() => {
    fetchStaff();
    fetchBusinesses();
  }, []);

  const fetchStaff = () => {
    axios.get('/api/staff/staff/')
      .then(response => {
        setStaff(response.data);
      })
      .catch(error => {
        console.error('Error fetching staff:', error);
      });
  };

  const fetchBusinesses = () => {
    axios.get('/api/businesses/')
      .then(response => {
        setBusinesses(response.data);
      })
      .catch(error => {
        console.error('Error fetching businesses:', error);
      });
  };

  const handleCreateStaff = () => {
    if (!selectedBusiness) {
      alert('Please select a business.');
      return;
    }
    axios.post('/api/staff/staff/', {
      name: newStaffName,
      role: newStaffRole,
      kpis: newStaffKPIs,
      business: selectedBusiness,
    })
    .then(() => {
      fetchStaff();
      setNewStaffName('');
      setNewStaffRole('');
      setNewStaffKPIs('');
      setSelectedBusiness('');
    })
    .catch(error => {
      console.error('Error creating staff:', error);
    });
  };

  return (
    <div className="staff-management">
      <h2>Staff Management</h2>
      <div className="staff-form">
        <input
          type="text"
          placeholder="New Staff Name"
          value={newStaffName}
          onChange={(e) => setNewStaffName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={newStaffRole}
          onChange={(e) => setNewStaffRole(e.target.value)}
        />
        <textarea
          placeholder="KPIs"
          value={newStaffKPIs}
          onChange={(e) => setNewStaffKPIs(e.target.value)}
        />
        <select value={selectedBusiness} onChange={(e) => setSelectedBusiness(Number(e.target.value))}>
          <option value="" disabled>Select Business</option>
          {businesses.map(business => (
            <option key={business.id} value={business.id}>{business.name}</option>
          ))}
        </select>
        <button onClick={handleCreateStaff}>Add Staff</button>
      </div>
      <div className="staff-list">
        {staff.map(member => (
          <div key={member.id} className="staff-member">
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Business:</strong> {businesses.find(b => b.id === member.business)?.name}</p>
            <p><strong>KPIs:</strong> {member.kpis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffManagement;
