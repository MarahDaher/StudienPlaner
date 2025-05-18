import { SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainSidebar from "./MainSidebar";
import { useLanguage } from "@/shared/contexts/LanguageContext";

const AppShell = () => {
  const { dir } = useLanguage();

  return (
    <div className="flex h-screen w-full" dir={dir}>
      <MainSidebar />
      <SidebarInset className="flex flex-col flex-grow">
        <MainHeader />
        <main className="flex-grow p-3 px-4 overflow-auto relative">
          <Outlet />
        </main>
      </SidebarInset>
    </div>
  );
};

export default AppShell;
