import React, { useState } from "react";

const imgWepikExport20231026003443TjA71 = "http://localhost:3845/assets/92bb2a2fd5c9e4ebd1ab04fad9ea9737b8ff64b2.png";
const imgVector = "http://localhost:3845/assets/43acbb5d2f9a23555f7f47783c3ba7c10a5cc675.svg";
const imgEllipse5 = "http://localhost:3845/assets/50de0ea4ace7629c508ea88997dbe8e2f4823491.svg";
const imgVector1 = "http://localhost:3845/assets/cb4ad923caa10cf0b19648c049a19b2dacc02be0.svg";

export default function App() {
  const [count, setCount] = useState(0);
  const sumTotal = () => {
    // return count;
    return count - 100 + b;
  };
  const handleClick = () => {
    setCount(sumTotal());
  };
  return (
    <div className="bg-neutral-900 relative min-h-screen w-full font-sans overflow-hidden">
      {/* Background Vector */}
      <button onClick={handleClick}>Click me</button>
      <div className="absolute flex h-0 items-center justify-center left-[-610px] top-[-440px] w-0">
        <div className="flex-none rotate-[342.401deg]">
          <div className="h-[487.197px] relative w-[1670px]">
            <img alt="vector" className="block max-w-none w-full h-full" src={imgVector} />
          </div>
        </div>
      </div>
      {/* Ellipse */}
      <div className="absolute w-[893px] h-[893px] top-1/2 left-1/2 -translate-y-1/2 translate-x-[53px]">
        <div className="absolute inset-[-16.573%]">
          <img alt="ellipse" className="block max-w-none w-full h-full" src={imgEllipse5} />
        </div>
      </div>
      {/* Main Image */}
      <div
        className="absolute bg-center bg-cover bg-no-repeat w-[530px] h-[530px] top-[182px]"
        style={{ left: "calc(58.3333% + 13px)", backgroundImage: `url('${imgWepikExport20231026003443TjA71}')` }}
      />
      {/* Text Content */}
      <div className="absolute left-[98px] top-[223px] w-[675px]">
        <div className="flex flex-col gap-10 items-start justify-center text-white w-[675px]">
          <div
            className="font-bold font-['Titillium_Web'] text-[90px] tracking-[-0.9px] leading-none"
            style={{ width: "min-content" }}
          >
            Empowering You in the Digital Age
          </div>
          <div className="font-['Poppins'] text-[16px] w-[626px] leading-[23px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.
            Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus
            quis, ullamcorper non metus.
          </div>
        </div>
      </div>
      {/* Purchase Button */}
      <div
        className="absolute left-[98px] top-[599px] w-[324px] rounded-lg"
        style={{ backgroundImage: "linear-gradient(-22.2253deg, rgb(10, 118, 123) 7.6962%, rgb(0, 167, 214) 97.118%)" }}
      >
        <div className="flex flex-row items-center justify-center w-full h-full">
          <div className="flex flex-row gap-2 items-center justify-center p-6 w-[324px]">
            <div className="font-bold font-['Titillium_Web'] text-[24px] text-white text-center w-full leading-[24px]">
              Purchase
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="absolute left-0 right-0 top-0">
        <div className="flex flex-row items-center relative w-full">
          <div className="flex flex-row items-center justify-between px-[98px] py-5 w-full">
            <div className="font-semibold font-['Titillium_Web'] text-[38px] text-white text-left whitespace-nowrap leading-[48px]">
              <span>Cyber</span>
              <span className="text-[#3ed5dd]">Ez</span>
            </div>
            <div className="backdrop-blur-[25px] bg-[rgba(206,249,254,0.13)] rounded-[100px] w-[507px]">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center justify-between p-[15px] w-[507px]">
                  <div
                    className="rounded-[40px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(-46.4164deg, rgb(10, 118, 123) 7.6962%, rgb(0, 167, 214) 97.118%)",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center px-[18px] py-2.5">
                      <div className="font-semibold font-['Titillium_Web'] text-[16px] text-white whitespace-nowrap leading-[24px]">
                        Home
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold font-['Titillium_Web'] text-[16px] text-white whitespace-nowrap leading-[24px]">
                    FAQ
                  </div>
                  <div className="font-semibold font-['Titillium_Web'] text-[16px] text-white whitespace-nowrap leading-[24px]">
                    Contact us
                  </div>
                  <div className="font-semibold font-['Titillium_Web'] text-[16px] text-white whitespace-nowrap leading-[24px]">
                    Our Menu
                  </div>
                  <div className="h-[24.5px] w-0">
                    <img alt="vector1" className="block max-w-none w-full h-full" src={imgVector1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
