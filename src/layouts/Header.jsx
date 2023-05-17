import { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <>
      <header className="">
        <nav className="container flex justify-between items-center py-5">
          <div>
            <a href="#" className="text-white text-xl font-semibold">
              <img className="w-3/5 lg:w-full" src="/assets/logo-dark.png" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-8 items-center">
              <li>
                <a
                  href="#"
                  className="font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#protfolio"
                  className="font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Protfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:hidden">
            <i
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="fa-solid fa-bars"
            ></i>
          </div>

          {/* mobail menu  */}
            <ul
              id="mobile-menu"
              className={`${
                toggleMenu ? "flex" : "hidden"
              } flex-col absolute top-20 left-0 bg-black bg-opacity-90 w-full gap-4 items-center py-10 z-40`}
            >
              <li>
                <a
                  href="#"
                  className="text-white font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-white font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#protfolio"
                  className="text-white font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Protfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  Contact
                </a>
              </li>

              <span
                id="cross-main"
                className="text-white absolute top-5 right-5"
              >
                <i
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                  }}
                  className="fa-solid fa-x"
                ></i>
              </span>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
