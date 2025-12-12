import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './IdeaForge.css';

interface Idea {
  id: number;
  title: string;
  description: string;
}

const IdeaForge: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [newIdeaTitle, setNewIdeaTitle] = useState('');
  const [newIdeaDescription, setNewIdeaDescription] = useState('');

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = () => {
    axios.get('/api/ideas/ideas/')
      .then(response => {
        setIdeas(response.data);
      })
      .catch(error => {
        console.error('Error fetching ideas:', error);
      });
  };

  const handleCreateIdea = () => {
    axios.post('/api/ideas/ideas/', {
      title: newIdeaTitle,
      description: newIdeaDescription,
    })
    .then(() => {
      fetchIdeas();
      setNewIdeaTitle('');
      setNewIdeaDescription('');
    })
    .catch(error => {
      console.error('Error creating idea:', error);
    });
  };

  const handleConvertToProject = (ideaId: number) => {
    axios.post('/api/ideas/projects/', {
      idea: ideaId,
    })
    .then(() => {
      // Optionally, you could remove the idea from the list
      // or provide some visual feedback.
      alert('Idea converted to project!');
    })
    .catch(error => {
      console.error('Error converting idea to project:', error);
    });
  };

  return (
    <div className="idea-forge">
      <h2>Idea Forge</h2>
      <div className="idea-form">
        <input
          type="text"
          placeholder="New Idea Title"
          value={newIdeaTitle}
          onChange={(e) => setNewIdeaTitle(e.target.value)}
        />
        <textarea
          placeholder="New Idea Description"
          value={newIdeaDescription}
          onChange={(e) => setNewIdeaDescription(e.target.value)}
        />
        <button onClick={handleCreateIdea}>Create Idea</button>
      </div>
      <div className="ideas">
        {ideas.map(idea => (
          <div key={idea.id} className="idea">
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <button onClick={() => handleConvertToProject(idea.id)}>Convert to Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaForge;
