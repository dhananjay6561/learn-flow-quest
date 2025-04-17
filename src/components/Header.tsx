
import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-lms-purple">LearnFlow</h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-lms-purple">Dashboard</a>
            <a href="#" className="text-sm font-medium hover:text-lms-purple">My Courses</a>
            <a href="#" className="text-sm font-medium hover:text-lms-purple">Library</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 rounded-lg border px-3 py-1.5">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-40 bg-transparent text-sm outline-none"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full border border-lms-purple-light">
              <User className="h-5 w-5 text-lms-purple" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
