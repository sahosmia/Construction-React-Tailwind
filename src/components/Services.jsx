import SectionHeading from "./SectionHeading";
import Service from "./short/Service";

function Services() {
  const services = [
    {
      icon: (
        <img src="https://img.icons8.com/color-glass/48/home.png" alt="home" />
      ),
      title: "Home Decoration",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur impedit qui reiciendis ipsum quibusdam quisquam, quam natus modi eaque?",
    },
    {
      icon: (
        <img src="https://img.icons8.com/fluency/48/kitchen-room.png" alt="kitchen-room"/>
      ),
      title: "Kitchen Decoration",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur impedit qui reiciendis ipsum quibusdam quisquam, quam natus modi eaque?",
    },
    {
      icon: (
        <img src="https://img.icons8.com/color-glass/48/road--v1.png" alt="road--v1" />
      ),
      title: "Road Construction",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur impedit qui reiciendis ipsum quibusdam quisquam, quam natus modi eaque?",
    },
    {
      icon: (
        <img src="https://img.icons8.com/color-glass/48/city-buildings.png" alt="city-buildings" />
      ),
      title: "Bulding Construction",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur impedit qui reiciendis ipsum quibusdam quisquam, quam natus modi eaque?",
    },
    {
      icon: (
        <img src="https://img.icons8.com/color-glass/48/house-with-a-garden.png" alt="house-with-a-garden" />
      ),
      title: "Garden Decoration",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur impedit qui reiciendis ipsum quibusdam quisquam, quam natus modi eaque?",
    },
    {
      icon: (
        <img src="https://img.icons8.com/color-glass/48/shop.png" alt="shop" />
      ),
      title: "Shop Decoration",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur impedit qui reiciendis ipsum quibusdam quisquam, quam natus modi eaque?",
    },
  ];
  return (
    <section className="bg-light py-10 sm:py-16 lg:py-20" id="service">
      <SectionHeading
        title="Our Service"
        des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
        aperiam ea eligendi consectetur et quas ipsa impedit."
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Service key={i} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
