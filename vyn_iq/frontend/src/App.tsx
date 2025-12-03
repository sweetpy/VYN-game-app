import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import BottomRightMenu from './components/BottomRightMenu/BottomRightMenu';
import MainScreen from './components/MainScreen/MainScreen';
import AI_Brain from './components/AI_Brain/AI_Brain';
import TaskManager from './components/TaskManager/TaskManager';

const App: React.FC = () => {
  const [showAIBrain, setShowAIBrain] = useState(false);
  const [showTaskManager, setShowTaskManager] = useState(false);

  const toggleAIBrain = () => {
    setShowAIBrain(!showAIBrain);
    setShowTaskManager(false);
  };

  const toggleTaskManager = () => {
    setShowTaskManager(!showTaskManager);
    setShowAIBrain(false);
  };

  return (
    <div className="App">
      <TopBar />
      <LeftSideBar toggleTaskManager={toggleTaskManager} />
      <RightSideBar toggleAIBrain={toggleAIBrain} />
      {showAIBrain ? <AI_Brain /> : showTaskManager ? <TaskManager /> : <MainScreen />}
      <BottomRightMenu />
    </div>
  );
};

export default App;
