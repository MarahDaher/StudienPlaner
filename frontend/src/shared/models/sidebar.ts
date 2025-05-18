import type { LucideIcon } from "lucide-react";

export interface SidebarItemType {
  label: string;
  icon: LucideIcon;
  to?: string;
  action?: () => void;
  active?: boolean;
}
