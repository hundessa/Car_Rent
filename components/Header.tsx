import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../public/assets/logo-2.png";
import Link from "next/link";

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const handleRoute = () =>{
    navigate("/sign-up")
  }
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // This ensures the code only runs on the client side
    window.addEventListener("scroll", changeBackground);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`border-b-2 z-[1001] w-full transition-all ease-in-out duration-300 ${
        navbar ? "fixed bg-[#0C1315] border-slate-500" : "absolute "
      }`}
    >
      <nav className="flex my-4 mx-20">
        <div className="flex space-x-2 cursor-pointer">
          <img className="size-20" src={logo.src} alt="" />
          <h1 className="flex align-center my-auto text-3xl font-bold text-white">
            LuxeCar
          </h1>
        </div>
        <div className="flex align-center my-auto justify-center mx-auto">
          <ul className="flex space-x-2 text-xl font-semibold text-white relative">
            <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:bg-[#DFA46D]">
              <Link href="/">Home</Link>
            </li>
            <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:bg-[#DFA46D]">
              <Link href="/">About Us</Link>
            </li>
            <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:bg-[#DFA46D]">
              <Link href="/">Pages</Link>
            </li>
            <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:bg-[#DFA46D]">
              <Link href="/">Blog</Link>
            </li>
            <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:bg-[#DFA46D]">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-items-end py-4 space-x-6">
          <button className="border-[2px] border-[var(--color)] text-slate-300 font-semibold px-4 rounded-lg hover:text-slate-600 hover:bg-[var(--color)] transition-all ease-in-out duration-500" onClick={handleRoute}>Sign Up</button>
          <button className="border-[2px] border-[var(--color)] text-slate-300 font-semibold px-4 rounded-lg bg-[var(--color)] hover:text-slate-00 hover:bg-transparent transition-all ease-in-out duration-500">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
