import React from "react";
import { SidebarHeader } from "@/components/ui/sidebar";

const MainSidebarHeader: React.FC = () => (
  <SidebarHeader className="p-4 flex flex-row items-center justify-start">
    {/* <img src="/ampel.png" width="20" height="10" /> */}
    <h1 className="text-xl font-bold bg-clip-text">CarMarket</h1>
  </SidebarHeader>
);

export default MainSidebarHeader;
