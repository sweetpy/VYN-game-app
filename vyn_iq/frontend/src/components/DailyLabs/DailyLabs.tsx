import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DailyLabs.css';

interface DailyExperiment {
  id: number;
  idea: string;
  result: string;
  cost: number;
}

interface IncomeTarget {
  id: number;
  target_amount: number;
  current_amount: number;
  date: string;
}

const DailyLabs: React.FC = () => {
  const [experiments, setExperiments] = useState<DailyExperiment[]>([]);
  const [incomeTarget, setIncomeTarget] = useState<IncomeTarget | null>(null);
  // Form state for new experiment
  const [newExperimentIdea, setNewExperimentIdea] = useState('');
  const [newExperimentResult, setNewExperimentResult] = useState('');
  const [newExperimentCost, setNewExperimentCost] = useState('');

  useEffect(() => {
    fetchExperiments();
    fetchIncomeTarget();
  }, []);

  const fetchExperiments = () => {
    axios.get('/api/labs/experiments/')
      .then(response => setExperiments(response.data))
      .catch(error => console.error('Error fetching experiments:', error));
  };

  const fetchIncomeTarget = () => {
    // For simplicity, fetching the latest income target.
    // A real implementation might filter by date.
    axios.get('/api/labs/income-targets/')
      .then(response => {
        if (response.data.length > 0) {
          setIncomeTarget(response.data[0]);
        }
      })
      .catch(error => console.error('Error fetching income target:', error));
  };

  const handleCreateExperiment = () => {
    axios.post('/api/labs/experiments/', {
      idea: newExperimentIdea,
      result: newExperimentResult,
      cost: newExperimentCost,
    })
    .then(() => {
      fetchExperiments();
      // Reset form
      setNewExperimentIdea('');
      setNewExperimentResult('');
      setNewExperimentCost('');
    })
    .catch(error => console.error('Error creating experiment:', error));
  };

  return (
    <div className="daily-labs">
      <div className="lab-section">
        <h2>Daily Lab Mode</h2>
        <div className="experiment-form">
          <input type="text" placeholder="Experiment Idea" value={newExperimentIdea} onChange={e => setNewExperimentIdea(e.target.value)} />
          <textarea placeholder="Result" value={newExperimentResult} onChange={e => setNewExperimentResult(e.target.value)} />
          <input type="number" placeholder="Cost" value={newExperimentCost} onChange={e => setNewExperimentCost(e.target.value)} />
          <button onClick={handleCreateExperiment}>Log Experiment</button>
        </div>
        <div className="experiments-list">
          {experiments.map(exp => (
            <div key={exp.id} className="experiment">
              <h4>{exp.idea}</h4>
              <p><strong>Result:</strong> {exp.result}</p>
              <p><strong>Cost:</strong> ${exp.cost}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lab-section">
        <h2>Daily Income Lab (TZS 25,000 Minimum)</h2>
        {incomeTarget ? (
          <div className="income-tracker">
            <p>Today's Target: ${incomeTarget.target_amount.toLocaleString()}</p>
            <p>Current: ${incomeTarget.current_amount.toLocaleString()}</p>
            <progress value={incomeTarget.current_amount} max={incomeTarget.target_amount}></progress>
          </div>
        ) : (
          <p>No income target set for today.</p>
        )}
      </div>
    </div>
  );
};

export default DailyLabs;
