
function Footer() {
  return (
    <div
      className="text-white relative py-16 bg-cover bg-no-repeat bg-center after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-80 after:-z-10 z-10"
      style={{ backgroundImage: "url(/src/assets/footer-bg.jpg)" }}
    >
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 md:mb-8">About</h2>
          <p>
            Koncrete - Construction Bootstrap 5 Templatethe best theme for elit,
            sed do to eiumod tempor dolor sit amet, ctetur adipiscing elit seddo
            dolor sit amet.
          </p>
          <ul className="flex gap-1 mt-4">
            <li>
              <a href="#">
                <span className="bg-main bg-opacity-20 w-10 h-10 flex items-center justify-center rounded text-main">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-main bg-opacity-20 w-10 h-10 flex items-center justify-center rounded text-main">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-main bg-opacity-20 w-10 h-10 flex items-center justify-center rounded text-main">
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-main bg-opacity-20 w-10 h-10 flex items-center justify-center rounded text-main">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="bg-main bg-opacity-20 w-10 h-10 flex items-center justify-center rounded text-main">
                  <i className="fa-brands fa-youtube"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 md:mb-8">Contact</h2>

          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <span>
                <i className="fa-regular fa-map"></i>
              </span>
              <p>72/54 Link Road, Radison Area, Singapur</p>
            </div>

            <div className="flex gap-5">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <ul>
                <li>+8801952827301</li>
                <li>+8801952827301</li>
              </ul>
            </div>

            <div className="flex gap-5">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <p>sahosmia.webdv@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 md:mb-8">Link</h2>
          <ul>
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">Service</a></li>
            <li className="mb-2"><a href="#">Project</a></li>
            <li className="mb-2"><a href="#">Blogs</a></li>
            <li className="mb-2"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 md:mb-8">Newsletter</h2>
          <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, non. Eligendi autem maxime consequatur vero distinctio odio dolorem fugiat nihil.</p>
          <form action="">
            <input type="text" placeholder="Your Email Address" className="bg-transparent border border-main p-2 w-48"/>
            <button className="w-10 bg-main py-2 border border-main"><i className="fa-regular fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Footer;
