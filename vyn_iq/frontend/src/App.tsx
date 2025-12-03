import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [showAIBrain, setShowAIBrain] = useState(false);
  const [showTaskManager, setShowTaskManager] = useState(false);
  const [showIdeaForge, setShowIdeaForge] = useState(false);
  const [showExecutionPipeline, setShowExecutionPipeline] = useState(false);

  const toggleAIBrain = () => {
    setShowAIBrain(!showAIBrain);
    setShowTaskManager(false);
    setShowIdeaForge(false);
    setShowExecutionPipeline(false);
  };

  const toggleTaskManager = () => {
    setShowTaskManager(!showTaskManager);
    setShowAIBrain(false);
    setShowIdeaForge(false);
    setShowExecutionPipeline(false);
  };

  const toggleIdeaForge = () => {
    setShowIdeaForge(!showIdeaForge);
    setShowAIBrain(false);
    setShowTaskManager(false);
    setShowExecutionPipeline(false);
  };

  const toggleExecutionPipeline = () => {
    setShowExecutionPipeline(!showExecutionPipeline);
    setShowAIBrain(false);
    setShowTaskManager(false);
    setShowIdeaForge(false);
  };

  return (
    <div className="App">
      <TopBar />
      <LeftSideBar toggleTaskManager={toggleTaskManager} />
      <RightSideBar
        toggleAIBrain={toggleAIBrain}
        toggleIdeaForge={toggleIdeaForge}
        toggleExecutionPipeline={toggleExecutionPipeline}
      />
      {showAIBrain ? <AI_Brain /> : showTaskManager ? <TaskManager /> : showIdeaForge ? <IdeaForge /> : showExecutionPipeline ? <ExecutionPipeline /> : <MainScreen />}
      <BottomRightMenu />
    </div>
  );
};

export default App;
