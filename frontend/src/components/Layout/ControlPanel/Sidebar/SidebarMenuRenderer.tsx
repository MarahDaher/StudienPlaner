import React from "react";
import { useNavigate } from "react-router-dom";
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

  return (
    <SidebarMenu>
      {items.map((item, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuButton
            onClick={() => (item.to ? navigate(item.to) : item.action?.())}
            isActive={item.active}
            className="cursor-pointer"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarMenuRenderer;
