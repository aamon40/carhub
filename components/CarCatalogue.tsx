import { CarCard, CustomFilter, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

const CarCatalogue = async () => {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className=" mt-12 padding-x padding-y max-width " id="discover">
      <div className="home__text-container">
        <h1 className=" text-4xl font-extrabold ">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;