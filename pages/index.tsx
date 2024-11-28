import Banner from "@/components/Banner";
import Header from "@/components/Header";
import PopularCars from "@/components/PopularCars";
import { Inter } from "next/font/google";
import Image from "next/image";
import aboutus_1 from "../public/assets/about_us_1.jpg";
import aboutus_2 from "../public/assets/about_us_2.jpg";
import aboutus_3 from "../public/assets/about_us_3.jpg";
import testimonials_side from "../public/assets/testimonials_side.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Service_Part from "@/components/Service_Part";
import { cars, testimonials } from "@/public/data/cars";
import CarsCard from "@/components/Cars_Card/CarsCard";
import Price_Card from "@/components/price/Price_Card";
import Testimonials_Card from "@/components/testimonials/Testimonials_Card";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const videobg = process.env.NEXT_PUBLIC_VIDEOS_VIDEO2;

  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   currentIndex === testimonials.length - 1
  //     ? setCurrentIndex(0)
  //     : setCurrentIndex(currentIndex + 1);
  // };

  // const handlePrev = () => {
  //   currentIndex === 0
  //     ? setCurrentIndex(testimonials.length - 1)
  //     : setCurrentIndex(currentIndex - 1);
  // };
  const totalTestimonials = testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <>
      <Header />
      <Banner />
      <PopularCars />

      <div className="mt-24 mb-[600px] pt-24 pb-96 bg-[#F7F5F2]">
        <div>
          <div className="flex justify-center my-6 text-lg text-[var(--color)] tracking-[.2em]">
            PREMIUM DRIVERS
          </div>
          <div>
            <div className="flex justify-center">
              <div className="space-y-6 leading-[60px] text-[48px]">
                <div className="flex justify-center items-center">
                  <h1 className="flex text-[48px">What We</h1>
                  <Image
                    src={aboutus_1}
                    alt="about us image 1"
                    className="flex w-[115px] h-[50px] mx-2 items-center"
                  />
                  <h1 className="">Provide Is The Luxury Transport</h1>
                </div>
                <div className="flex justify-center items-center">
                  <h1 className=""> And Comfortable the</h1>
                  <Image
                    src={aboutus_2}
                    alt="about us image 1"
                    className="flex w-[115px] h-[50px] mx-2 items-center"
                  />
                  <h1 className=""> Experience</h1>
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="">For</h1>
                  <Image
                    src={aboutus_3}
                    alt="about us image 1"
                    className="flex w-[115px] h-[50px] mx-2 items-center"
                  />
                  <h1 className="">The Best You</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <button className="flex border border-[var(--color)] px-12 py-5 hover:bg-[var(--color)] hover:text-white transition-all ease-in-out duration-700">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="video-block">
        <div className="video-circle flex justify-center items-center transition-all ease-in-out duration-500">
          <div className="video-text z-10 text-white text-[25px] font-light text-center capitalize">
            Video
          </div>
        </div>
      </div>
      <Service_Part />

      <div className="bg-[var(--bg)] pb-32">
        <div className="font-[epilogue,sans-serif] mt-[120px] pt-[100px] mx-16">
          <div className="grid grid-cols-[1fr_auto] auto-cols-fr gap-8 border-b border-[#d9d9d9] grid-rows-auto items-center pb-5 mb-20">
            <div className="mr-[96px] pb-[20px] pr-[30px]">
              <div className="text-[#bfa37c] uppercase tracking-[.2rem]">
                we recommend
              </div>
              <h1 className="capitalize mt-2.5 mb-5 text-[48px] font-normal leading-[60px] inline-block">
                Latest Vehicles
              </h1>
            </div>
            <div className="flex space-x-6 mx-12">
              <a className="flex cursor-pointer font-light text-[25px] hover:text-[var(--color)] font-[sora] transition-all ease-in-out duration-700">
                All
              </a>
              <a className="flex cursor-pointer font-light text-[25px] hover:text-[var(--color)] font-[epilogue] transition-all ease-in-out duration-700">
                BMW
              </a>
              <a className="flex cursor-pointer font-light text-[25px] hover:text-[var(--color)] font-[epilogue] transition-all ease-in-out duration-700">
                Lamborgini
              </a>
              <a className="flex cursor-pointer font-light text-[25px] hover:text-[var(--color)] font-[epilogue] transition-all ease-in-out duration-700">
                Mercedes
              </a>
              <a className="flex cursor-pointer font-light text-[25px] hover:text-[var(--color)] font-[epilogue] transition-all ease-in-out duration-700">
                Rolls Royce
              </a>
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
                  bgColor="#ffff"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <button className="flex border border-[var(--color)] px-12 py-5 text-[16px] hover:bg-[#bfa37c] hover:text-white transition=all ease-in-out duration-700 uppercase">
            discover more
          </button>
        </div>
      </div>
      <div>
        <video autoPlay loop muted className="w-full h-auto">
          <source src={videobg} type="video/mp4" />
        </video>
      </div>
      <div className="mt-[120px] mx-16">
        <div className="grid grid-cols-[1fr_auto] auto-cols-fr gap-8 border-b border-[#d9d9d9] grid-rows-auto items-center pb-5 mb-20">
          <div className="mr-[96px] pb-[20px] pr-[30%]">
            <div className="text-[#bfa37c] uppercase tracking-[.2rem]">
              best possibilities
            </div>
            <h1 className="capitalize mt-2.5 mb-5 text-[48px] font-normal leading-[60px] inline-block">
              a high variety of options
            </h1>
          </div>
          <div>
            <button className="flex justify-end ml-auto mr-4 border border-[#bfa37c] px-12 py-5 hover:bg-[#bfa37c] hover:text-white transition=all ease-in-out duration-700">
              VIEW MORE
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <Price_Card
            priceTitle="super"
            price={140}
            descriptions={[
              "Leo urna molestie at elem",
              "Quisque non tellu si",
              "Pretium lectus quam id li",
              "Lorem ipsum 24/7",
            ]}
          />
          <Price_Card
            priceTitle="moderate"
            price={160}
            descriptions={[
              "Leo urna molestie at elem",
              "Quisque non tellu si",
              "Pretium lectus quam id li",
              "Lorem ipsum 24/7",
            ]}
          />
          <Price_Card
            priceTitle="luxury"
            price={199}
            descriptions={[
              "Leo urna molestie at elem",
              "Quisque non tellu si",
              "Pretium lectus quam id li",
              "Lorem ipsum 24/7",
            ]}
          />
        </div>
      </div>

      <section className="bg-[#f7f5f2] py-0 overflow-hidden">
        <div className="container">
          <div
            className="gap-x-[30px] grid custom-grid-cols"
            style={{ gridTemplateColumns: "1fr 1.5fr" }}
          >
            <div className="ml-[-210px]">
              <Image
                src={testimonials_side}
                alt="testimonial side"
                className="w-[700px] h-[750px]"
              />
            </div>
            <div className="overflow-hidden relative mt-[90px]">
              <div
                className="whitespace-nowrap transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="inline-block w-full">
                    <Testimonials_Card
                      title={testimonial.title}
                      rating={testimonial.rating}
                      description={testimonial.description}
                      image={testimonial.image}
                      name={testimonial.name}
                      country={testimonial.country}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-[30px] space-x-4 absolute bottom-[38%] right-[4%] z-[101]">
                <div
                  onClick={handlePrev}
                  className="rounded-full w-[60px] h-[60px] duration-500 bg-white text-[var(--color)] transition-all flex items-center justify-center cursor-pointer hover:bg-[var(--color)] hover:text-white ease-in-out"
                >
                  <FaAngleLeft className="text-[30px]" />
                </div>
                <div
                  onClick={handleNext}
                  className="rounded-full w-[60px] h-[60px] duration-500 bg-white text-[var(--color)] transition-all flex items-center justify-center cursor-pointer hover:bg-[var(--color)] hover:text-white ease-in-out"
                >
                  <FaAngleRight className="text-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

{
  /* <div className="video-circle absolute inset-0 flex items-center justify-center rounded-full border-2 borderwhite bg-transparent transition-colors duration-500 ease-in-out hover:bg-[#bfa37c] animate-circle"> */
}
