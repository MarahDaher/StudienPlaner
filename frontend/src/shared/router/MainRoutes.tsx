import MainLayout from "@/components/Layout/ControlPanel/MainLayout";
import DashboardPage from "@/pages/ControlPanel/Dashboard/DashboardPage";
import { Home } from "lucide-react";

export const MainRoutes = {
  path: "/admin",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <DashboardPage />,
      label: "sidebar.dashboard",
      icon: <Home className="size-4" />,
    },
  ],
};
