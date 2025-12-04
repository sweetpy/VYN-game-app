import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import './Journal.css';

interface JournalEntry {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    axios.get('/api/journal/entries/')
      .then(response => setEntries(response.data))
      .catch(error => console.error('Error fetching journal entries:', error));
  };

  const handleCreateEntry = () => {
    axios.post('/api/journal/entries/', {
      title: newEntryTitle,
      content: newEntryContent,
    })
    .then(() => {
      fetchEntries();
      // Reset form
      setNewEntryTitle('');
      setNewEntryContent('');
    })
    .catch(error => console.error('Error creating journal entry:', error));
  };

  return (
    <div className="journal-container">
      <h2>Journal & Notes</h2>
      <div className="journal-form">
        <input type="text" placeholder="Entry Title" value={newEntryTitle} onChange={e => setNewEntryTitle(e.target.value)} />
        <textarea placeholder="Your notes for today..." value={newEntryContent} onChange={e => setNewEntryContent(e.target.value)} />
        <button onClick={handleCreateEntry}>Add Entry</button>
      </div>
      <div className="journal-entries">
        {entries.map(entry => (
          <div key={entry.id} className="journal-entry">
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <small>Created on: {new Date(entry.created_at).toLocaleDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
