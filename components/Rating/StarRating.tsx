import { FaStar, FaStarHalf } from "react-icons/fa";

interface Rating {
  rating: number;
}

const StarRating: React.FC<Rating> = ({ rating }) => {
  const validRating = !isNaN(rating) && rating >= 0 ? rating : 0;
  const fullStars = Math.max(0, Math.floor(validRating));
  const remainder = validRating - fullStars;

  return (
    <div className="flex items-center gap-x-[20px]">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-[#BFA37C] size-[30px]" />
      ))}
      {remainder > 0 && <FaStarHalf className="text-[#BFA37C] size-[30px]" />}
      {/* <span className="ml-2 font-semibold text-[#bfa37c]">{validRating}</span> */}
    </div>
  );
};

export default StarRating;
