import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './FinanceBrain.css';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  transaction_type: string;
  date: string;
  business: number;
}

interface PersonalDebt {
  id: number;
  description: string;
  amount: number;
  due_date: string;
}

interface Business {
    id: number;
    name: string;
}

const FinanceBrain: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [debts, setDebts] = useState<PersonalDebt[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  // Form state for new transaction
  const [newTransactionDescription, setNewTransactionDescription] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');
  const [newTransactionType, setNewTransactionType] = useState('INCOME');
  const [selectedBusiness, setSelectedBusiness] = useState<number | ''>('');
  const [newTransactionDate, setNewTransactionDate] = useState('');
  // Form state for new debt
  const [newDebtDescription, setNewDebtDescription] = useState('');
  const [newDebtAmount, setNewDebtAmount] = useState('');
  const [newDebtDueDate, setNewDebtDueDate] = useState('');


  useEffect(() => {
    fetchTransactions();
    fetchDebts();
    fetchBusinesses();
  }, []);

  const fetchTransactions = () => {
    axios.get('/api/finance/transactions/')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  };

  const fetchDebts = () => {
    axios.get('/api/finance/personal-debt/')
      .then(response => setDebts(response.data))
      .catch(error => console.error('Error fetching debts:', error));
  };

  const fetchBusinesses = () => {
    axios.get('/api/businesses/')
      .then(response => setBusinesses(response.data))
      .catch(error => console.error('Error fetching businesses:', error));
  };

  const handleCreateTransaction = () => {
    if (!selectedBusiness) {
        alert('Please select a business.');
        return;
    }
    axios.post('/api/finance/transactions/', {
      description: newTransactionDescription,
      amount: newTransactionAmount,
      transaction_type: newTransactionType,
      business: selectedBusiness,
      date: newTransactionDate,
    })
    .then(() => {
      fetchTransactions();
      // Reset form
      setNewTransactionDescription('');
      setNewTransactionAmount('');
      setNewTransactionType('INCOME');
      setSelectedBusiness('');
      setNewTransactionDate('');
    })
    .catch(error => console.error('Error creating transaction:', error));
  };

  const handleCreateDebt = () => {
    axios.post('/api/finance/personal-debt/', {
      description: newDebtDescription,
      amount: newDebtAmount,
      due_date: newDebtDueDate,
    })
    .then(() => {
      fetchDebts();
      // Reset form
      setNewDebtDescription('');
      setNewDebtAmount('');
      setNewDebtDueDate('');
    })
    .catch(error => console.error('Error creating debt:', error));
  };

  return (
    <div className="finance-brain">
      <h2>Finance Brain</h2>
      <div className="finance-columns">
        <div className="column">
          <h3>Business Transactions</h3>
          <div className="transaction-form">
            <input type="text" placeholder="Description" value={newTransactionDescription} onChange={e => setNewTransactionDescription(e.target.value)} />
            <input type="number" placeholder="Amount" value={newTransactionAmount} onChange={e => setNewTransactionAmount(e.target.value)} />
            <select value={newTransactionType} onChange={e => setNewTransactionType(e.target.value)}>
              <option value="INCOME">Income</option>
              <option value="EXPENSE">Expense</option>
            </select>
            <select value={selectedBusiness} onChange={e => setSelectedBusiness(Number(e.target.value))}>
                <option value="" disabled>Select Business</option>
                {businesses.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
            <input type="date" value={newTransactionDate} onChange={e => setNewTransactionDate(e.target.value)} />
            <button onClick={handleCreateTransaction}>Add Transaction</button>
          </div>
          <div className="transactions-list">
            {transactions.map(t => (
              <div key={t.id} className={`transaction ${t.transaction_type.toLowerCase()}`}>
                <span>{businesses.find(b => b.id === t.business)?.name}</span>
                <span>{t.description}</span>
                <span>${t.amount.toLocaleString()}</span>
                <span>{t.date}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <h3>Personal Debt Schedule</h3>
          <div className="debt-form">
            <input type="text" placeholder="Description" value={newDebtDescription} onChange={e => setNewDebtDescription(e.target.value)} />
            <input type="number" placeholder="Amount" value={newDebtAmount} onChange={e => setNewDebtAmount(e.target.value)} />
            <input type="date" value={newDebtDueDate} onChange={e => setNewDebtDueDate(e.target.value)} />
            <button onClick={handleCreateDebt}>Add Debt</button>
          </div>
          <div className="debts-list">
            {debts.map(d => (
              <div key={d.id} className="debt">
                <span>{d.description}</span>
                <span>${d.amount.toLocaleString()}</span>
                <span>Due: {d.due_date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceBrain;
