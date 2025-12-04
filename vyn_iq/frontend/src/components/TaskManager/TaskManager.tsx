import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import './TaskManager.css';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = ()_=> {
    axios.get('/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  const handleCompleteTask = (taskId: number) => {
    axios.patch(`/api/tasks/${taskId}/`, { completed: true })
      .then(() => {
        // For now, just refetch tasks. A more advanced implementation
        // would also trigger an XP update.
        fetchTasks();
      })
      .catch(error => console.error('Error completing task:', error));
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <div className="tasks">
        {tasks.map(task => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {!task.completed && (
              <button onClick={() => handleCompleteTask(task.id)}>Complete Task</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
