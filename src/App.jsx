import About from "./components/About";
import Blogs from "./components/Blogs";
import Brand from "./components/Brand";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Target from "./components/Target";
import Teams from "./components/Teams";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  const sliders = [
    {
      img: "/assets/hero/hero-1.jpg",
      title: "Welcome to Construction",
      mainTitle: "We Are Best Builders In The World",
    },
    {
      img: "/assets/hero/hero-2.jpg",
      title: "Bulding & Construction",
      mainTitle: "Best Soluition For Construction",
    },
    {
      img: "/assets/hero/hero-3.jpg",
      title: "Hard Work for your Dream",
      mainTitle: "We Building For Dream House",
    },
  ];

  const about = {
    aboutTitle1: "50 Years Experience",
    aboutDes1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              illum cumque commodi vero unde recusandae quia molestias quos
              enim, exercitationem nobis culpa. Sunt dicta iste aliquam cum, hic
              delectus eum, quos expedita, facilis est impedit odit? Illo
              consequuntur saepe ad placeat consectetur sed debitis modi dolor
              natus quas, magnam asperiores.`,
    aboutImg1: "/assets/about-1.jpg",
    aboutTitle2: "Client is alawys happy",
    aboutDes2: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              illum cumque commodi vero unde recusandae quia molestias quos
              enim, exercitationem nobis culpa. Sunt dicta iste aliquam cum, hic
              delectus eum, quos expedita, facilis est impedit odit? Illo
              consequuntur saepe ad placeat consectetur sed debitis modi dolor
              natus quas, magnam asperiores.`,
    aboutImg2: "/assets/about-2.jpg",
  };
  return (
    <>
      <Header />
      <Hero sliders={sliders} />
      <Target />
      <About about={about} />
      <Services />
      <Projects />
      <Teams />
      <Counter />

      <Blogs />

      <Brand />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
