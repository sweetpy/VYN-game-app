import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from './axiosConfig';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import BottomRightMenu from './components/BottomRightMenu/BottomRightMenu';
import MainScreen from './components/MainScreen/MainScreen';
import AI_Brain from './components/AI_Brain/AI_Brain';
import TaskManager from './components/TaskManager/TaskManager';
import IdeaForge from './components/IdeaForge/IdeaForge';
import ExecutionPipeline from './components/ExecutionPipeline/ExecutionPipeline';
import StaffManagement from './components/StaffManagement/StaffManagement';
import BusinessControlCenter from './components/BusinessControlCenter/BusinessControlCenter';
import FinanceBrain from './components/FinanceBrain/FinanceBrain';
import DailyLabs from './components/DailyLabs/DailyLabs';
import Journal from './components/Journal/Journal';
import Login from './components/Login/Login';
import Achievements from './components/Achievements/Achievements';
import Notifications from './components/Notifications/Notifications';

interface Notification {
  id: number;
  read: boolean;
}

const App: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Fetch notifications periodically to update the indicator
    const interval = setInterval(fetchNotifications, 5000); // every 5 seconds
    fetchNotifications(); // Initial fetch

    return () => clearInterval(interval);
  }, []);

  const fetchNotifications = () => {
    axios.get('/api/notifications/')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications:', error));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Router>
      <div className="App">
        <TopBar />
        <LeftSideBar />
        <RightSideBar unreadNotifications={unreadCount} />
        <BottomRightMenu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ai-brain" element={<AI_Brain />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/ideas" element={<IdeaForge />} />
            <Route path="/pipeline" element={<ExecutionPipeline />} />
            <Route path="/staff" element={<StaffManagement />} />
            <Route path="/business/:id" element={<BusinessControlCenter />} />
            <Route path="/finance" element={<FinanceBrain />} />
            <Route path="/labs" element={<DailyLabs />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
