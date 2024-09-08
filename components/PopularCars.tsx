import { cars } from "@/public/data/cars";
import CarsCard from "./Cars_Card/CarsCard";

const PopularCars: React.FC = () => {
  return (
    <div className="font-[epilogue,sans-serif] mt-[600px] mx-16">
      <div className="grid grid-cols-[1fr_auto] auto-cols-fr gap-8 border-b border-[#d9d9d9] grid-rows-auto items-center pb-5 mb-20">
        <div className="mr-[96px] pb-[20px] pr-[30px]">
          <div className="text-[#bfa37c] uppercase tracking-[.2rem]">we recommend</div>
          <h1 className="capitalize mt-2.5 mb-5 text-[48px] font-normal leading-[60px] inline-block">
            Luxury Limousine For Maximum Satisfaction Enjoy
          </h1>
        </div>
        <div>
          <button className="flex justify-end ml-auto mr-4 border border-[#bfa37c] px-12 py-5 hover:bg-[#bfa37c] hover:text-white transition=all ease-in-out duration-[1000ms]">
            VIEW MORE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 gap-y-[60px]">
        {cars.map((car, index) => (
          <div key={index}>
            <CarsCard
              image={car.image}
              productYear={car.productYear}
              productType={car.productType}
              mileage={car.mileage}
              rating={car.rating}
              description={car.description}
              price={car.price}
              name={car.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
