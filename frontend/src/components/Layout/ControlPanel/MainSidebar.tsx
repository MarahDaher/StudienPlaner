// components/sidebar/MainSidebar.tsx
import MainSidebarFooter from "./Sidebar/SidebarFooter";
import MainSidebarHeader from "./Sidebar/SidebarHeader";
import React from "react";
import SidebarMenuRenderer from "./Sidebar/SidebarMenuRenderer";
import { Library } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/shared/contexts/LanguageContext";

const menuItems = [{ label: "Study Plans", icon: Library, to: "/study-plans" }];

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
