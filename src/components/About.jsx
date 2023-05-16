import Button from './short/Button';

function About() {
  return (
    <div className="py-20">
      <div className="container flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col-reverse lg:flex-col">
          <div className="px-0 lg:px-10">
            <h3 className="text-xl md:text-3xl pt-5 md:pt-10 pb-5 font-semibold text-black text-opacity-90">
              50 Years Experience
            </h3>
            <p className="pb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              illum cumque commodi vero unde recusandae quia molestias quos
              enim, exercitationem nobis culpa. Sunt dicta iste aliquam cum, hic
              delectus eum, quos expedita, facilis est impedit odit? Illo
              consequuntur saepe ad placeat consectetur sed debitis modi dolor
              natus quas, magnam asperiores.
            </p>
          </div>
          <img src="/src/assets/about-1.jpg" alt="About1" />
        </div>
        <div className="flex-1">
          <img src="/src/assets/about-2.jpg" alt="About2" />
          <div className="px-0 lg:px-10">
            <h3 className="text-xl md:text-3xl pt-5 md:pt-8 pb-5 font-semibold text-black text-opacity-90">
              Client is alawys happy.
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

export default About