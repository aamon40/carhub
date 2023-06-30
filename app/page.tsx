import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";
import Image from "next/image";

export default function Home({ searchParams }) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue searchParams={searchParams} />
    </main>
  );
}
