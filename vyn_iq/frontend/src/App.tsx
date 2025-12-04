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
import StaffManagement from './components/StaffManagement/StaffManagement';
import BusinessControlCenter from './components/BusinessControlCenter/BusinessControlCenter';
import FinanceBrain from './components/FinanceBrain/FinanceBrain';
import DailyLabs from './components/DailyLabs/DailyLabs';
import Journal from './components/Journal/Journal';

type View = 'MAIN_SCREEN' | 'AI_BRAIN' | 'TASK_MANAGER' | 'IDEA_FORGE' | 'EXECUTION_PIPELINE' | 'STAFF_MANAGEMENT' | 'BUSINESS_CONTROL_CENTER' | 'FINANCE_BRAIN' | 'DAILY_LABS' | 'JOURNAL';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('MAIN_SCREEN');
  const [selectedBusinessId, setSelectedBusinessId] = useState<number | null>(null);

  const handleSetView = (view: View) => {
    setCurrentView(view);
    setSelectedBusinessId(null);
  };

  const handleSelectBusiness = (businessId: number) => {
    setSelectedBusinessId(businessId);
    setCurrentView('BUSINESS_CONTROL_CENTER');
  };

  const handleBackToMain = () => {
    setCurrentView('MAIN_SCREEN');
    setSelectedBusinessId(null);
  }

  const renderContent = () => {
    switch (currentView) {
      case 'AI_BRAIN':
        return <AI_Brain />;
      case 'TASK_MANAGER':
        return <TaskManager />;
      case 'IDEA_FORGE':
        return <IdeaForge />;
      case 'EXECUTION_PIPELINE':
        return <ExecutionPipeline />;
      case 'STAFF_MANAGEMENT':
        return <StaffManagement />;
      case 'BUSINESS_CONTROL_CENTER':
        return <BusinessControlCenter businessId={selectedBusinessId!} onBack={handleBackToMain} />;
      case 'FINANCE_BRAIN':
        return <FinanceBrain />;
      case 'DAILY_LABS':
        return <DailyLabs />;
      case 'JOURNAL':
        return <Journal />;
      default:
        return <MainScreen onSelectBusiness={handleSelectBusiness} onSelectJournal={() => handleSetView('JOURNAL')} />;
    }
  };

  return (
    <div className="App">
      <TopBar />
      <LeftSideBar
        toggleTaskManager={() => handleSetView('TASK_MANAGER')}
        toggleDailyLabs={() => handleSetView('DAILY_LABS')}
      />
      <RightSideBar
        toggleAIBrain={() => handleSetView('AI_BRAIN')}
        toggleIdeaForge={() => handleSetView('IDEA_FORGE')}
        toggleExecutionPipeline={() => handleSetView('EXECUTION_PIPELINE')}
        toggleStaffManagement={() => handleSetView('STAFF_MANAGEMENT')}
      />
      {renderContent()}
      <BottomRightMenu toggleFinanceBrain={() => handleSetView('FINANCE_BRAIN')} />
    </div>
  );
};

export default App;
