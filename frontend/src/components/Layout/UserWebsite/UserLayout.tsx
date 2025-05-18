import { useLanguage } from "@/shared/contexts/LanguageContext";
import type { FunctionComponent } from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";

type UserLayoutProps = object;

const UserLayout: FunctionComponent<UserLayoutProps> = () => {
  const { dir } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
      <UserHeader />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
