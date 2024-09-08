import Image from "next/image";
import StarRating from "../Rating/StarRating";

export interface Testimonials {
  title: string;
  rating: number;
  description: string;
  image: string;
  name: string;
  country: string;
//   currentIndex: number;
}

const Testimonials_Card: React.FC<Testimonials> = ({
  title,
  rating,
  description,
  image,
  name,
  country,
//   currentIndex
}) => {
  return (
    <div className="align-top whitespace-normal text-left w-full h-full inline-block relative">
      <div className="pr-[5%]">
        <h1 className="text-[32px] font-medium leading-[36px] mb-[10px]">
          {title}
        </h1>
        <div className="mb-[30px]">
          <StarRating rating={rating} />
        </div>
        <div>
          <p className="flex justify-center max-w-[700px] text-justify text-[25px] text-[var(--paragraph)] mb-[30px] leading-[45px]">
            {description}
          </p>
        </div>
        <div className="flex gap-x-[30px] mb-[45px]">
          <Image
            src={image}
            alt="profile picture"
            className="size-[110px] rounded-full"
          />
          <div className="flex items-center">
            <div className="space-y-[5px]">
              <h1 className="text-[35px] font-[var(--title)] capitalize">
                {name}
              </h1>
              <h2 className="uppercase text-[var(--color)] font-medium tracking-[.1rem] text-[22px]">
                {country}
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-[#d9d9d9] w-[74%] h-[2px]"></div>
      </div>
    </div>
  );
};

export default Testimonials_Card;
