import AdminCard from "@/components/admin-dashboard-cards/AdminCard";
import { FaUser, FaCar, FaCarAlt } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const index = () => {
  return (
    <div>
      <div className="flex space-x-20 justify-center mt-12">
        <AdminCard name="Users" quantity="342" Icon={FaUser} />
        <AdminCard name="Cars" quantity="20342" Icon={IoCarSport} />
        <AdminCard name="Cars Sold" quantity="20342" Icon={FaCarAlt} />
        <AdminCard name="Cars Rent" quantity="20342" Icon={FaCar} />
      </div>
      <button>Add Car</button>
    </div>
  );
};

export default index;
