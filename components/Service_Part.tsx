import Image from "next/image";
import car_rent from "../public/assets/car-rent.png";
import car_price from '../public/assets/new-car.png';
import support from '../public/assets/customer-support.png'
import service_1 from '../public/assets/service_1.jpg';
import service_2 from "../public/assets/service_2.jpg";
import service_3 from '../public/assets/service_3.jpg';

const Service_Part: React.FC = () => {
  return (
    <div className=" mt-[1000px] mx-16">
      <div className="grid grid-cols-[1fr_auto] auto-cols-fr gap-8 border-b border-[#d9d9d9] grid-rows-auto items-center pb-5 mb-20">
        <div className="mr-[96px] pb-[20px] pr-[30%]">
          <div className="text-[#bfa37c] uppercase tracking-[.2rem]">
            BEST SERVICES
          </div>
          <h1 className="capitalize mt-2.5 mb-5 text-[48px] font-normal leading-[60px] inline-block">
            Ride To Destinations With Maximum Comfort
          </h1>
        </div>
        <div>
          <button className="flex justify-end ml-auto mr-4 border border-[#bfa37c] px-12 py-5 hover:bg-[#bfa37c] hover:text-white transition=all ease-in-out duration-700">
            VIEW MORE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 border-[2px]">
        <div className="space-y-4 flex-col items-center my-auto">
          <Image
            src={car_rent}
            alt="car image"
            className="size-24 flex mx-auto"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(64%) sepia(10%) saturate(948%) hue-rotate(9deg) brightness(95%) contrast(100%)",
            }}
          />
          <h1 className="text-[26px] flex justify-center">Variety of Cars</h1>
          <p className="text-center text-[var(--paragraph)] text-[17px] mx-14">At our car shop, we are committed to providing our customers with exceptional service and  competitive pricing.</p>
        </div>
        <div className="overflow-hidden">
          <Image
            src={service_1}
            alt="car image"
            className="hover:scale-110 transition-all ease-in-out duration-700 m-0"
          />
        </div>
        <div className="space-y-4 flex-col items-center my-auto">
          <Image
            src={car_price}
            alt="car image"
            className="size-[70px] flex mx-auto"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(64%) sepia(10%) saturate(948%) hue-rotate(9deg) brightness(95%) contrast(100%)",
            }}
          />
          <h1 className="text-[26px] flex justify-center">Competitive Pricing</h1>
          <p className="text-center text-[var(--paragraph)] text-[17px] mx-10">At our car shop, we are committed to providing our customers with exceptional service and  competitive pricing.</p>
        </div>
        <div className="overflow-hidden">
          <Image
            src={service_2}
            alt="car image"
            className="hover:scale-110 transition-all ease-in-out duration-700 max-w-[100%]"
          />
        </div>
        <div className="space-y-4 flex-col items-center my-auto">
          <Image
            src={support}
            alt="car image"
            className="size-[70px] flex mx-auto"
            style={{
                filter:
                  "brightness(0) saturate(100%) invert(64%) sepia(10%) saturate(948%) hue-rotate(9deg) brightness(95%) contrast(100%)",
              }}
          />
          <h1 className="text-[26px] flex justify-center font-[var(--title)]">24/7 support</h1>
          <p className="text-center text-[var(--paragraph)] text-[17px] mx-10">At our car shop, we are committed to providing our customers with exceptional service and  competitive pricing.</p>
        </div>
        <div className="overflow-hidden">
          <Image
            src={service_3}
            alt="car image"
            className="hover:scale-110 transition-all ease-in-out duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Service_Part;
