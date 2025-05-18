import { Button } from "@/components/ui/button";
import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// image
import IntroImg from "/cars/1.webp";

type IntroSectionProps = object;

const IntroSection: FunctionComponent<IntroSectionProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="w-full py-12  bg-muted">
        <div className="px-4 md:px-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t("home.hero.title")}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {t("home.hero.description")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link to="/cars">{t("home.hero.browse")}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/showrooms">{t("home.hero.viewShowrooms")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
              <img
                src={IntroImg}
                alt="Latest model cars in a showroom"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
