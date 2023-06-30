import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
