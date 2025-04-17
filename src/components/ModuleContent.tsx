
import { Award, BookOpen, CheckCircle, CheckSquare, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

export interface Checkpoint {
  id: number;
  title: string;
  completed: boolean;
  xpReward: number;
}

export interface ModuleData {
  id: number;
  title: string;
  description: string;
  content: string;
  checkpoints: Checkpoint[];
  progress: number;
  xpReward: number;
  hasQuiz: boolean;
}

interface ModuleContentProps {
  module: ModuleData;
  onStartModule: () => void;
  onContinueModule: () => void;
  onTakeQuiz: () => void;
}

const ModuleContent = ({
  module,
  onStartModule,
  onContinueModule,
  onTakeQuiz,
}: ModuleContentProps) => {
  const isStarted = module.progress > 0;
  const isCompleted = module.progress === 100;
  
  const completedCheckpoints = module.checkpoints.filter(
    (checkpoint) => checkpoint.completed
  ).length;

  return (
    <div className="lms-card animate-slide-up">
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">{module.title}</h2>
            <p className="mt-1 text-gray-600">{module.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="xp-badge">+{module.xpReward} XP</div>
            <div className="text-xs text-gray-500">
              {completedCheckpoints}/{module.checkpoints.length} checkpoints
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {isStarted && !isCompleted ? (
            <Button className="primary-button" onClick={onContinueModule}>
              <Play className="mr-2 h-4 w-4" /> Continue Learning
            </Button>
          ) : !isStarted ? (
            <Button className="primary-button" onClick={onStartModule}>
              <Play className="mr-2 h-4 w-4" /> Start Module
            </Button>
          ) : null}

          {isCompleted && module.hasQuiz && (
            <Button className="primary-button" onClick={onTakeQuiz}>
              <CheckSquare className="mr-2 h-4 w-4" /> Take Quiz
            </Button>
          )}

          {!isCompleted && (
            <Button className="outline-button">
              <BookOpen className="mr-2 h-4 w-4" /> Module Overview
            </Button>
          )}
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Checkpoints</h3>
          <div className="space-y-3">
            {module.checkpoints.map((checkpoint, index) => (
              <Card
                key={checkpoint.id}
                className={`flex items-center justify-between p-3 transition-all duration-200 ${
                  checkpoint.completed
                    ? "border-lms-teal bg-lms-blue-light/20"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      checkpoint.completed
                        ? "bg-lms-teal text-white"
                        : "bg-lms-gray-light text-gray-500"
                    }`}
                  >
                    {checkpoint.completed ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`font-medium ${
                      checkpoint.completed ? "text-lms-teal" : ""
                    }`}
                  >
                    {checkpoint.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {checkpoint.completed ? (
                    <div className="flex items-center gap-1 text-lms-teal">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        +{checkpoint.xpReward} XP
                      </span>
                    </div>
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {module.content && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Module Content</h3>
              <div className="prose max-w-none text-gray-700">
                <p>{module.content}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModuleContent;
