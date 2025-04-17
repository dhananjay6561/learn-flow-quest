
import { Award, Clock, Flame, Target } from "lucide-react";
import { Progress } from "./ui/progress";

interface DashboardProps {
  level: number;
  xp: number;
  maxXp: number;
  streak: number;
  modulesInProgress: number;
}

const Dashboard = ({ level, xp, maxXp, streak, modulesInProgress }: DashboardProps) => {
  const xpPercentage = (xp / maxXp) * 100;

  return (
    <div className="lms-card p-6">
      <h2 className="mb-4 text-xl font-bold">Your Progress</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">Current Level</p>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-lms-purple" />
                <span className="text-lg font-bold">Level {level}</span>
              </div>
            </div>
            <div className="level-badge animate-pulse-glow">
              {level}
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">
                XP: {xp}/{maxXp}
              </span>
              <span className="text-xs text-gray-500">{xpPercentage.toFixed(0)}%</span>
            </div>
            <Progress value={xpPercentage} className="h-2 bg-lms-gray-light">
              <div className="h-full bg-gradient-to-r from-lms-purple to-lms-purple-light"></div>
            </Progress>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 md:justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lms-purple-lighter">
            <Flame className="h-8 w-8 text-lms-purple" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Learning Streak</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">{streak}</span>
              <span className="text-sm text-gray-500">days</span>
            </div>
            <div className="streak-badge mt-1 animate-pulse-glow">Keep it up!</div>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 md:justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lms-blue-light">
            <Target className="h-8 w-8 text-lms-blue" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Modules In Progress</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">{modulesInProgress}</span>
              <span className="text-sm text-gray-500">modules</span>
            </div>
            <p className="text-xs text-gray-500">Continue where you left off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
