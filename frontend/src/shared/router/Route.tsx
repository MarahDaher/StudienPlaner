import { createBrowserRouter } from "react-router";
import { UserRoutes } from "./UserRoutes";
import { MainRoutes } from "./MainRoutes";
import NotFoundPage from "@/pages/Errors/NotFoundPage";
import LoginPage from "@/pages/Auth/LoginPage";
//Error page
export const router = createBrowserRouter([
  MainRoutes,
  UserRoutes,
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
