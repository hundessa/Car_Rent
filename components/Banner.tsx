import banner from "../public/assets/car-3.jpg";

const Banner: React.FC = () => {
  return (
    <div className="max-h-screen ">
      <div className="relative">
        <img className="" src={banner.src} alt="" />
        <div className="absolute bottom-[40px] left-14">
          <h1 className=" font-bold text-5xl max-w-[700px] text-slate-200">
            Need to Rent a Luxury Car? Send A Request
          </h1>
          <p className="font-semibold text-slate-200 mt-4 text-justify max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos totam nihil, recusandae minus eligendi quo quisquam accusamus iusto, voluptatem a blanditiis dolor! Doloremque explicabo incidunt repellendus quisquam ex facilis?</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
