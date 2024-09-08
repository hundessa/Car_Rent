import Image from "next/image";
import { MdCheck } from "react-icons/md";
import priceImage from "../../public/assets/supercar(2).png";

interface PriceCard {
  priceTitle: string;
  price: number;
  descriptions: string[];
}

const Price_Card: React.FC<PriceCard> = ({
  priceTitle,
  price,
  descriptions,
}) => {
  return (
    <div className=" border-[1px] border-[#d9d9d9] px-[60px] py-[45px] mb-32">
      <div className="space-y-8">
        <div className="flex relative">
          <h1 className="text-[42px] capitalize font-medium">{priceTitle}</h1>
          <Image
            src={priceImage}
            alt="super car"
            className="size-[170px] m-0 absolute left-[60%] top-[-160%] opacity-[.4]"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(64%) sepia(10%) saturate(948%) hue-rotate(9deg) brightness(95%) contrast(100%)",
            }}
          />
        </div>
        <div className="flex">
          <div className="text-[var(--color)] text-[30px] leading-[38px] font-semibold">
            $
          </div>
          <h1 className="text-[60px] leading-[60px] font-semibold text-[var(--color)]">
            {price}
          </h1>
          <div className="text-[var(--color)] flex items-end text-[18px] font-semibold capitalize">
            /per day
          </div>
        </div>
        <div className="space-y-4">
          {descriptions.map((description, index) => (
            <div key={index} className="flex space-x-4">
              <MdCheck className="leading-[30px] text-[var(--color)] text-[30px]" />
              <span className="text-[20px] text-[var(--paragraph)]">{description}</span>
            </div>
          ))}
        </div>
        <div>
          <button className="border border-[#bfa37c] px-12 py-5 hover:bg-[#bfa37c] hover:text-white transition-all ease-in-out duration-700 uppercase">
            book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price_Card;
