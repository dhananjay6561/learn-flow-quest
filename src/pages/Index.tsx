import { useState } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import ModuleSidebar from "@/components/ModuleSidebar";
import ModuleContent from "@/components/ModuleContent";
import LevelUpModal from "@/components/LevelUpModal";
import { modulesData, getUserData } from "@/data/moduleData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  
  const { toast } = useToast();
  
  const userData = getUserData();
  const activeModule = modulesData.find((module) => module.id === activeModuleId) || modulesData[0];
  
  const handleModuleSelect = (moduleId: number) => {
    setActiveModuleId(moduleId);
  };
  
  const handleStartModule = () => {
    toast({
      title: "Module Started",
      description: "You've started a new learning journey!",
    });
  };
  
  const handleContinueModule = () => {
    toast({
      title: "Welcome Back!",
      description: "Continue your learning where you left off.",
    });
  };
  
  const handleTakeQuiz = () => {
    // Simulate XP gain and level up
    setXpGained(30);
    setShowLevelUpModal(true);
    
    toast({
      title: "Quiz Started",
      description: "Test your knowledge and earn XP!",
    });
  };

  return (
    <div className="min-h-screen bg-lms-gray-light/30">
      <Header />
      
      <main className="lms-container">
        <Dashboard
          level={userData.level}
          xp={userData.xp}
          maxXp={userData.maxXp}
          streak={userData.streak}
          modulesInProgress={userData.modulesInProgress}
        />
        
        <div className="my-8">
          <ModuleSidebar
            modules={modulesData.map(m => ({
              id: m.id,
              title: m.title,
              progress: m.progress,
              xpReward: m.xpReward
            }))}
            activeModuleId={activeModuleId}
            onModuleSelect={handleModuleSelect}
          />
        </div>
        
        <ModuleContent
          module={activeModule}
          onStartModule={handleStartModule}
          onContinueModule={handleContinueModule}
          onTakeQuiz={handleTakeQuiz}
        />
      </main>
      
      <LevelUpModal
        isOpen={showLevelUpModal}
        onClose={() => setShowLevelUpModal(false)}
        level={userData.level + 1}
        xpGained={xpGained}
      />
    </div>
  );
};

export default Index;
