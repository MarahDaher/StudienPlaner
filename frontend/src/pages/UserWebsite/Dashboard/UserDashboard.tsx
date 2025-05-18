import type { FunctionComponent } from "react";
import IntroSection from "./Sections/IntroSection";
import FeaturedCarsSection from "./Sections/FeaturedCarsSection";

type UserDashboardPageProps = object;

const UserDashboardPage: FunctionComponent<UserDashboardPageProps> = () => {
  return (
    <>
      <IntroSection />

      <FeaturedCarsSection />
    </>
  );
};

export default UserDashboardPage;
