import { IconType } from "react-icons";

interface carsProps {
  name: string;
  quantity: string;
  Icon: IconType;
}


const AdminCard: React.FC<carsProps> = ({ name, quantity, Icon}) => {
  return (
    <div className="bg-[var(--bg)] w-[250px] h-[150px] rounded-xl">
      <div className="flex space-x-6 justify-center items-center">
        <div className="flex items-center">
          <Icon className="size-32 opacity-70" />
        </div>
        <div className="mt-4 mr-[-10px]">
          <h1 className="text-4xl font-semibold">{name}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-medium text-3xl text-slate-400">{quantity}</h1>
      </div>
    </div>
  );
};

export default AdminCard;
