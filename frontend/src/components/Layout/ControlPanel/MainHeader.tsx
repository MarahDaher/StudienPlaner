import { SidebarTrigger } from "@/components/ui/sidebar";
import type { FunctionComponent } from "react";

type MainHeaderProps = object;

const MainHeader: FunctionComponent<MainHeaderProps> = () => {
  return (
    <header className="flex items-center justify-between px-4 gap-4 py-2 bg-[#1e9df1] border-b">
      <SidebarTrigger />
    </header>
  );
};

export default MainHeader;
