import { SidebarProvider } from "@/components/ui/sidebar";
import type { FunctionComponent } from "react";
import AppShell from "./MainShell";
import { useLanguage } from "@/shared/contexts/LanguageContext";

type MainLayoutProps = object;

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const { dir } = useLanguage();
  return (
    <>
      <div dir={dir}>
        <SidebarProvider>
          <AppShell />
        </SidebarProvider>
      </div>
    </>
  );
};

export default MainLayout;
