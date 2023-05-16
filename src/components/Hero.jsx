/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./short/Button";

function Hero({ sliders }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % sliders.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentImage, sliders.length]);

  return (
    <div className="relative w-full h-72 md:h-[46rem]">
      {sliders.map((slider, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url(${slider.img})` }}
          className={`absolute inset-0 w-full h-full ${
            i == currentImage ? "opacity-100" : "opacity-0"
          } transition transition-opacity duration-300 ease-in-out bg-cover bg-center bg-no-repeat after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-50 after:-z-10 z-10`}
        >
          <div className="container flex items-center justify-center text-center h-full w-full lg:w-1/2">
            <div className="">
              <h4 className="text-lg md:text-xl font-semibold text-main uppercase mb-5">
                {slider.title}
              </h4>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white  leading-tight mb-10">
                {slider.mainTitle}
              </h1>

              <Button title="Read More"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
