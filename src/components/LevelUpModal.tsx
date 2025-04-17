
import { Award, PartyPopper, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface LevelUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  level: number;
  xpGained: number;
}

const LevelUpModal = ({ isOpen, onClose, level, xpGained }: LevelUpModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md border-lms-purple-light bg-gradient-to-b from-white to-lms-purple-lighter/30 sm:max-w-md">
        <DialogHeader>
          <div className="absolute right-4 top-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mb-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-1 -right-1">
                <PartyPopper className="h-6 w-6 text-lms-purple" />
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lms-purple text-white">
                <Award className="h-10 w-10" />
              </div>
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Level Up!
          </DialogTitle>
          <DialogDescription className="text-center">
            Congratulations, you've reached Level {level}!
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">You gained</p>
            <p className="text-3xl font-bold text-lms-purple">
              +{xpGained} XP
            </p>
          </div>

          <div className="w-full rounded-lg bg-white p-4 text-center shadow-sm">
            <p className="text-sm text-gray-500">New skills unlocked</p>
            <ul className="mt-2 space-y-2">
              <li className="text-sm font-medium">Advanced Module Access</li>
              <li className="text-sm font-medium">New Learning Paths</li>
              <li className="text-sm font-medium">More Challenging Quizzes</li>
            </ul>
          </div>

          <Button className="primary-button w-full" onClick={onClose}>
            Continue Learning
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LevelUpModal;
