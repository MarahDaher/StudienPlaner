import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import type { FunctionComponent } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type UserHeaderProps = object;

const UserHeader: FunctionComponent<UserHeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="p-2 px-32 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">CarMarket</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/cars" className="text-sm font-medium hover:underline">
              {t("nav.cars")}
            </Link>
            <Link
              to="/showrooms"
              className="text-sm font-medium hover:underline"
            >
              {t("nav.showrooms")}
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium hover:underline"
            >
              {t("nav.services")}
            </Link>
            <Link to="/about" className="text-sm font-medium hover:underline">
              {t("nav.about")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex w-full max-w-sm items-center">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            {/* <Input
              type="search"
              placeholder={t("common.searchCars")}
              className="pl-8 pr-4"
            /> */}
          </div>
          <LanguageSwitcher />
          {/* <Button variant="outline" size="sm" asChild>
            <Link to="/login">{t("nav.login")}</Link>
          </Button> */}
          <Button size="sm" asChild>
            <Link to="/login">{t("nav.login")}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
