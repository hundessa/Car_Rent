import Image from "next/image";
import StarRating from "../Rating/StarRating";

interface CarsCardProps {
  image: string;
  productYear: number;
  productType: string;
  mileage: number;
  rating: number;
  description: string;
  price: number;
  name: string;
  bgColor?: string;
}

const CarsCard: React.FC<CarsCardProps> = ({
  image,
  productYear,
  productType,
  mileage,
  rating,
  description,
  price,
  name,
  bgColor = "#F7F5F2"
}) => {
  return (
    <>
      <div className="group font-sans" style={{ backgroundColor: bgColor }}>
        <div className="relative overflow-hidden w-full">
          <Image
            className="w-full h-[300px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            src={image}
            alt="car image"
          />
        </div>
        <div className="justify-center px-[60px] py-8 space-y-6">
          <div className="flex">
            <div className=" space-y-5">
              <div className="flex space-x-5 items-center">
                <div className="flex text-[#bfa37c] text-[18px] space-x-4">
                  <h1>{productYear}</h1>
                  <h1>{productType.toUpperCase()}</h1>
                </div>
                <div className="bg-[#d9d9d9] h-[20px] w-[1px] items-center"></div>
                <div className="text-[#bfa37c] text-[18px] flex items-center">
                  MILEAGE: {mileage}
                </div>
              </div>
              <div className="text-[28px] font-mediium font-[epilogue,sans-serif] capitalize">
                {name}
              </div>
              <div>
                <StarRating rating={rating} />
              </div>
              <div className="max-w[300px] text-[18px] text-[var(--paragraph)]">
                {description}
              </div>
              <div className="text-[25px]">
                $
                {price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                USD
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="border border-[#bfa37c] px-24 py-4 text-[20px] hover:text-white hover:bg-[#bfa37c] transition-all ease-in-out duration-700">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsCard;
