import UserLayout from "@/components/Layout/UserWebsite/UserLayout";
import UserDashboardPage from "@/pages/UserWebsite/Dashboard/UserDashboard";

export const UserRoutes = {
  path: "/",
  element: <UserLayout />,
  children: [{ index: true, element: <UserDashboardPage /> }],
};
