import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { SidebarItemType } from "@/shared/models/sidebar";

interface SidebarMenuRendererProps {
  items: SidebarItemType[];
}

const SidebarMenuRenderer: React.FC<SidebarMenuRendererProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔍 Get current path

  return (
    <SidebarMenu>
      {items.map((item, index) => {
        const isActive = location.pathname.startsWith(item.to || "");

        return (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              onClick={() => (item.to ? navigate(item.to) : item.action?.())}
              isActive={isActive}
              className="cursor-pointer"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};

export default SidebarMenuRenderer;
