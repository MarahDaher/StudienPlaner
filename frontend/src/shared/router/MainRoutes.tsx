import MainLayout from "@/components/Layout/ControlPanel/MainLayout";
import StudyPlanDetails from "@/pages/ControlPanel/StudyPlans/Details/StudyPlanDetails";
import NewPlanForm from "@/pages/ControlPanel/StudyPlans/Form/NewPlanForm";
import StudyPlansPage from "@/pages/ControlPanel/StudyPlans/StudyPlansPage";
import { Library } from "lucide-react";

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      path: "study-plans",
      element: <StudyPlansPage />,
      label: "sidebar.studyPlans",
      icon: <Library className="size-4" />,
    },
    {
      path: "study-plans/:id",
      element: <StudyPlanDetails />,
      label: "sidebar.studyPlans",
      icon: <Library className="size-4" />,
    },
    {
      path: "study-plans/new",
      element: <NewPlanForm />,
      label: "sidebar.studyPlans",
      icon: <Library className="size-4" />,
    },
  ],
};
