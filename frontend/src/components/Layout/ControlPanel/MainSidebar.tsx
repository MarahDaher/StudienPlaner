// components/sidebar/MainSidebar.tsx
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Home, Car, Settings } from "lucide-react";
import MainSidebarHeader from "./Sidebar/SidebarHeader";
import MainSidebarFooter from "./Sidebar/SidebarFooter";
import SidebarMenuRenderer from "./Sidebar/SidebarMenuRenderer";
import { useLanguage } from "@/shared/contexts/LanguageContext";

const menuItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Cars", icon: Car, to: "/cars" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

const MainSidebar: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <Sidebar side={dir === "rtl" ? "right" : "left"} dir={dir}>
      <SidebarContent>
        <MainSidebarHeader />
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenuRenderer items={menuItems} />
        </SidebarGroup>
        <MainSidebarFooter />
      </SidebarContent>
    </Sidebar>
  );
};

export default MainSidebar;
