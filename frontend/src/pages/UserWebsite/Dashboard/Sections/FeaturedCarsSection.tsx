import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import type { FC } from "react";

type FeaturedCarsSectionProps = object;

const FeaturedCarsSection: FC<FeaturedCarsSectionProps> = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      name: "Audi A4",
      year: 2022,
      description: "2.0 D5 PowerPulse Momentum 5dr AWD",
      mileage: "150 Miles",
      fuel: "Diesel",
      transmission: "CVT",
      price: 120000,
      oldPrice: null,
      image: "/cars/1.jpeg",
      condition: "Sale",
    },
    {
      id: 2,
      name: "Ranger Black",
      year: 2021,
      description: "2.0 D5 PowerPulse Momentum 5dr AWD",
      mileage: "250 Miles",
      fuel: "Petrol",
      transmission: "Manual",
      price: 165000,
      oldPrice: 180000,
      image: "/cars/2.jpeg",
      condition: "Sale",
    },
    {
      id: 3,
      name: "Ranger Black",
      year: 2021,
      description: "2.0 D5 PowerPulse Momentum 5dr AWD",
      mileage: "250 Miles",
      fuel: "Petrol",
      transmission: "Manual",
      price: 165000,
      oldPrice: 180000,
      image: "/cars/3.jpeg",
      condition: "Sale",
    },
    {
      id: 4,
      name: "Ranger Black",
      year: 2021,
      description: "2.0 D5 PowerPulse Momentum 5dr AWD",
      mileage: "250 Miles",
      fuel: "Petrol",
      transmission: "Manual",
      price: 165000,
      oldPrice: 180000,
      image: "/cars/4.jpeg",
      condition: "Sale",
    },
    {
      id: 4,
      name: "Ranger Black",
      year: 2021,
      description: "2.0 D5 PowerPulse Momentum 5dr AWD",
      mileage: "250 Miles",
      fuel: "Petrol",
      transmission: "Manual",
      price: 165000,
      oldPrice: 180000,
      image: "/cars/5.jpeg",
      condition: "Sale",
    },
    {
      id: 4,
      name: "Ranger Black",
      year: 2021,
      description: "2.0 D5 PowerPulse Momentum 5dr AWD",
      mileage: "250 Miles",
      fuel: "Petrol",
      transmission: "Manual",
      price: 165000,
      oldPrice: 180000,
      image: "/cars/6.jpeg",
      condition: "Sale",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="px-32">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("home.featured.title")}
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            {t("home.featured.description")}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-12">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="rounded-xl overflow-hidden relative shadow-sm hover:shadow-lg transition-shadow group py-0"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-[200px] w-full">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                  {car.condition}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4 text-black" />
                  <span className="sr-only">Favorite</span>
                </Button>
              </div>

              {/* CONTENT */}
              <CardContent className="p-4 space-y-1">
                <h3 className="text-lg font-semibold">
                  {car.name} – {car.year}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {car.description}
                </p>

                {/* <div className="flex justify-between text-sm pt-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <GaugeIcon className="w-4 h-4" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FuelIcon className="w-4 h-4" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CarIcon className="w-4 h-4" />
                    <span>{car.transmission}</span>
                  </div>
                </div> */}
              </CardContent>

              {/* FOOTER */}
              <CardFooter className="flex flex-col items-start p-4 pt-0 gap-1">
                <div className="text-lg font-bold">
                  {car.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through mr-2">
                      ${car.oldPrice.toLocaleString()}
                    </span>
                  )}
                  <span>${car.price.toLocaleString()}</span>
                </div>
                <Link
                  to={`/cars/${car.id}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  {t("common.viewDetails")}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/cars">{t("home.featured.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
