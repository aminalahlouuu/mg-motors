import revuelto from "@/assets/hero-mgmotors.jpg";
import sto from "@/assets/cars/huracan-sto.jpg";
import tecnica from "@/assets/cars/huracan-tecnica.jpg";
import sterrato from "@/assets/cars/huracan-sterrato.jpg";
import urusPerf from "@/assets/cars/urus-performante.jpg";
import urusS from "@/assets/cars/urus-s.jpg";
import svj from "@/assets/cars/aventador-svj.jpg";
import ultimae from "@/assets/cars/aventador-ultimae.jpg";
import evoSpyder from "@/assets/cars/huracan-evo-spyder.jpg";
import performante from "@/assets/cars/huracan-performante.jpg";
import centenario from "@/assets/cars/centenario.jpg";
import sian from "@/assets/cars/sian.jpg";
import countach from "@/assets/cars/countach.jpg";
import svj63 from "@/assets/cars/svj-63.jpg";
import revueltoR from "@/assets/cars/revuelto-roadster.jpg";
import phantom from "@/assets/cars/phantom.jpg";
import bentley from "@/assets/cars/bentley-gtc.jpg";
import gt3rs from "@/assets/cars/gt3-rs.jpg";
import g63 from "@/assets/cars/g63-4x4.jpg";
import cayenne from "@/assets/cars/cayenne-turbo-gt.jpg";

export type Car = {
  slug: string;
  name: string;
  year: number;
  price: number;
  brand: string;
  image: string;
};

export const CARS: Car[] = [
  { slug: "lamborghini-revuelto-2024", name: "Lamborghini Revuelto", year: 2024, price: 850000, brand: "Lamborghini", image: revuelto },
  { slug: "lamborghini-huracan-sto", name: "Lamborghini Huracán STO", year: 2023, price: 480000, brand: "Lamborghini", image: sto },
  { slug: "lamborghini-huracan-tecnica", name: "Lamborghini Huracán Tecnica", year: 2024, price: 420000, brand: "Lamborghini", image: tecnica },
  { slug: "lamborghini-huracan-sterrato", name: "Lamborghini Huracán Sterrato", year: 2024, price: 450000, brand: "Lamborghini", image: sterrato },
  { slug: "lamborghini-urus-performante", name: "Lamborghini Urus Performante", year: 2024, price: 380000, brand: "Lamborghini", image: urusPerf },
  { slug: "lamborghini-urus-s", name: "Lamborghini Urus S", year: 2024, price: 320000, brand: "Lamborghini", image: urusS },
  { slug: "lamborghini-aventador-svj", name: "Lamborghini Aventador SVJ", year: 2022, price: 720000, brand: "Lamborghini", image: svj },
  { slug: "lamborghini-aventador-ultimae-roadster", name: "Lamborghini Aventador Ultimae Roadster", year: 2022, price: 950000, brand: "Lamborghini", image: ultimae },
  { slug: "lamborghini-huracan-evo-spyder", name: "Lamborghini Huracán EVO Spyder", year: 2023, price: 360000, brand: "Lamborghini", image: evoSpyder },
  { slug: "lamborghini-huracan-performante", name: "Lamborghini Huracán Performante", year: 2019, price: 390000, brand: "Lamborghini", image: performante },
  { slug: "lamborghini-centenario", name: "Lamborghini Centenario", year: 2017, price: 2800000, brand: "Lamborghini", image: centenario },
  { slug: "lamborghini-sian-fkp-37", name: "Lamborghini Sián FKP 37", year: 2020, price: 3500000, brand: "Lamborghini", image: sian },
  { slug: "lamborghini-countach-lpi-800-4", name: "Lamborghini Countach LPI 800-4", year: 2022, price: 2900000, brand: "Lamborghini", image: countach },
  { slug: "lamborghini-svj-63", name: "Lamborghini Aventador SVJ 63", year: 2020, price: 780000, brand: "Lamborghini", image: svj63 },
  { slug: "lamborghini-revuelto-roadster", name: "Lamborghini Revuelto Roadster", year: 2025, price: 1050000, brand: "Lamborghini", image: revueltoR },
  { slug: "rolls-royce-phantom-series-ii-2024", name: "Rolls-Royce Phantom Series II", year: 2024, price: 2600000, brand: "Rolls-Royce", image: phantom },
  { slug: "bentley-continental-gtc-speed-2025", name: "Bentley Continental GTC Speed", year: 2025, price: 1550000, brand: "Bentley", image: bentley },
  { slug: "porsche-992-gt3-rs-2025", name: "Porsche 992 GT3 RS", year: 2025, price: 1800000, brand: "Porsche", image: gt3rs },
  { slug: "mercedes-g63-amg-4x4-squared-2023", name: "Mercedes-Benz G63 AMG 4x4²", year: 2023, price: 1250000, brand: "Mercedes-Benz", image: g63 },
  { slug: "porsche-cayenne-turbo-gt-2024", name: "Porsche Cayenne Turbo GT", year: 2024, price: 900000, brand: "Porsche", image: cayenne },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("it-IT").format(n) + " €";
