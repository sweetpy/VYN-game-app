import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './ExecutionPipeline.css';

interface Project {
  id: number;
  idea: {
    title: string;
  };
  stage: string;
}

const ExecutionPipeline: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const stages = ['BRAINSTORMING', 'VALIDATION', 'MVP', 'LAUNCH', 'GROWTH', 'PROFIT_MONITORING'];

  useEffect(() => {
    axios.get('/api/ideas/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div className="execution-pipeline">
      <h2>Execution Pipeline</h2>
      <div className="kanban-board">
        {stages.map(stage => (
          <div key={stage} className="kanban-column">
            <h3>{stage}</h3>
            <div className="kanban-cards">
              {projects.filter(p => p.stage === stage).map(project => (
                <div key={project.id} className="kanban-card">
                  {project.idea.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutionPipeline;
