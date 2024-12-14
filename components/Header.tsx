import { useEffect, useState } from "react";
import logo from "../public/assets/logo-2.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

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
            <Link href="/">
              <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:text-[#DFA46D]">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:text-[#DFA46D]">
                About Us
              </li>
            </Link>
            <Link href="/">
              <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:text-[#DFA46D]">
                Pages
              </li>
            </Link>
            <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:text-[#DFA46D]">
              <Link href="/">Blog</Link>
            </li>
            <Link href="/">
              <li className="py-3 px-5 transition-all ease-in-out duration-700 hover:text-[#DFA46D]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-items-end py-4 space-x-6">
          <button
            className="border-[2px] border-[var(--color)] text-white font-semibold px-4 rounded-lg hover:bg-[var(--color)] transition-all ease-in-out duration-500"
            onClick={() => router.push("/sign-up")}
          >
            Sign Up
          </button>
          <button
            className="border-[2px] border-[var(--color)] text-white font-semibold px-4 rounded-lg bg-[var(--color)] hover:text-slate-00 hover:bg-transparent transition-all ease-in-out duration-500"
            onClick={() => router.push("/sign-in")}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
