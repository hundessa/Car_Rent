import logo from "../public/assets/logo-2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-[var(--bg2)] px-20 pt-10">
      <div className="flex">
        <div className="flex space-x-2 cursor-pointer">
          <img className="size-20" src={logo.src} alt="" />
          <h1 className="flex align-center my-auto text-3xl font-bold text-white">
            LuxeCar
          </h1>
        </div>
        <div className="ml-auto mr-20 flex">
          <h1 className="text-white font-semibold text-3xl flex items-center ">
            Welcome To Luxe Car
          </h1>
        </div>
      </div>
      <hr className="mt-10 pb-20 text-slate-300" />
      <div className="flex justify-between">
        <div className="text-white space-y-6">
          <h1 className="text-4xl">About Us</h1>
          <p className="max-w-[300px] font-medium leading-9 text-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            consequatur nobis magni neque.
          </p>
          <div className="flex space-x-10 ml-[-6px]">
            <div>
              <FaFacebookF className="size-8 hover:text-[var(--color)] cursor-pointer transition-all ease-in-out duration-300" />
            </div>
            <div>
              <FaInstagram className="size-8 hover:text-[var(--color)] cursor-pointer transition-all ease-in-out duration-300" />
            </div>
            <div>
              <FaYoutube className="size-8 hover:text-[var(--color)] cursor-pointer transition-all ease-in-out duration-300" />
            </div>
            <div>
              <FaLinkedin className="size-8 hover:text-[var(--color)] cursor-pointer transition-all ease-in-out duration-300" />
            </div>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-4xl mb-6">Contact Info</h1>
          <h1 className="text-2xl mb-1">Address:</h1>
          <p className="text-2xl max-w-[300px] leading-9">
            Addis Abeba, Bole Medhanealem Mall, 3rd Floor
          </p>
          <h1 className="text-2xl mt-6 mb-">Email:</h1>
          <a
            href=""
            className="text-2xl hover:text-[var(--color)] transition-all ease-in-out duration-300"
          >
            luxecar@gmail.com
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-4xl mb-6">Opening Hours</h1>
          <h1 className="text-2xl">Monday - Friday</h1>
          <p className="text-2xl">09:00 AM - 05:00 PM</p>
          <h1 className="text-2xl mt-6">Saturday</h1>
          <p className="text-2xl">10:00 AM - 05:00 PM</p>
        </div>
      </div>
      <hr className="text-slate-300 mt-20 pb-20 "/>
      <h1 className="text-slate-300 flex pb-10 justify-center text-xl">&copy; 2024 LuxeCar Ethiopia. All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
