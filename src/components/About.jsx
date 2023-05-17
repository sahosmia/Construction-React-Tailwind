import Button from "./short/Button";

function About({ about }) {
  return (
    <div className="py-20">
      <div className="container flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col-reverse lg:flex-col">
          <div className="px-0 lg:px-10">
            <h3 className="text-xl md:text-3xl pt-5 md:pt-10 pb-5 font-semibold text-black text-opacity-90">
              {about.aboutTitle1}
            </h3>
            <p className="pb-10">{about.aboutDes1}</p>
          </div>
          <img src={about.aboutImg1} alt="About1" />
        </div>
        <div className="flex-1">
          <img src={about.aboutImg2} alt="About2" />
          <div className="px-0 lg:px-10">
            <h3 className="text-xl md:text-3xl pt-5 md:pt-8 pb-5 font-semibold text-black text-opacity-90">
              {about.aboutTitle2}
            </h3>

            <ul className="flex flex-col gap-2 mb-5">
              <li className="flex gap-2">
                <span className="text-main">
                  <i className="fa-solid fa-check"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="flex gap-2">
                <span className="text-main">
                  <i className="fa-solid fa-check"></i>
                </span>
                Enim quidem tempora deleniti commodi
              </li>
              <li className="flex gap-2">
                <span className="text-main">
                  <i className="fa-solid fa-check"></i>
                </span>
                Dignissimos consectetur natus.
              </li>
              <li className="flex gap-2">
                <span className="text-main">
                  <i className="fa-solid fa-check"></i>
                </span>
                Dignissimos ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
            <Button title="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
