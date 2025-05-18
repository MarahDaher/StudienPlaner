import React from "react";
import { SidebarFooter } from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MainSidebarFooter: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    // logout();
  };

  return (
    <SidebarFooter className="p-4 mt-auto">
      {/* <div className="flex items-center space-x-2 mb-2">
        <CircleUser className="h-5 w-5 text-gray-500" />
        <span className="text-sm font-medium">{user?.name}</span>
      </div> */}
      <Button
        variant="outline"
        className="w-full cursor-pointer"
        onClick={handleLogout}
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Logout</span>
      </Button>
    </SidebarFooter>
  );
};

export default MainSidebarFooter;
