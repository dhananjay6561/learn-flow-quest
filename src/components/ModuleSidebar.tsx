
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

interface Module {
  id: number;
  title: string;
  progress: number;
  xpReward: number;
}

interface ModuleSidebarProps {
  modules: Module[];
  activeModuleId: number;
  onModuleSelect: (moduleId: number) => void;
}

const ModuleSidebar = ({ modules, activeModuleId, onModuleSelect }: ModuleSidebarProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-6">
      <h2 className="mb-4 text-xl font-bold">Modules</h2>
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div
          ref={scrollRef}
          className="hide-scrollbar flex space-x-4 overflow-x-auto px-4 pb-4 pt-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {modules.map((module) => (
            <div
              key={module.id}
              className={`module-card min-w-[260px] ${
                activeModuleId === module.id ? "active" : ""
              }`}
              onClick={() => onModuleSelect(module.id)}
            >
              <div className="mb-2 flex justify-between">
                <h3 className="font-medium">{module.title}</h3>
                <div className="xp-badge animate-scale-fade-in">
                  +{module.xpReward} XP
                </div>
              </div>
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs font-medium">{module.progress}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-lms-teal"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
          onClick={scrollRight}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ModuleSidebar;
