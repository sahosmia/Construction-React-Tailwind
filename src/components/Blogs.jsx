import SectionHeading from "./SectionHeading";
import Blog from "./short/Blog";

function Blogs() {
  const blogs = [
    {
      img: "/src/assets/blog/project-12.jpg",
      title: "This is a good title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel sit nostrum laborum ut quod animi vitae veritatis porro dolorem",
    },
    {
      img: "/src/assets/blog/project-2.jpg",
      title: "This is a good title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel sit nostrum laborum ut quod animi vitae veritatis porro dolorem",
    },
    {
      img: "/src/assets/blog/project-6.jpg",
      title: "This is a good title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel sit nostrum laborum ut quod animi vitae veritatis porro dolorem",
    },
    {
      img: "/src/assets/blog/project-7.jpg",
      title: "This is a good title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel sit nostrum laborum ut quod animi vitae veritatis porro dolorem",
    },
    {
      img: "/src/assets/blog/project-8.jpg",
      title: "This is a good title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel sit nostrum laborum ut quod animi vitae veritatis porro dolorem",
    },
    {
      img: "/src/assets/blog/project-9.jpg",
      title: "Kaouwa has expert doctors. ",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel sit nostrum laborum ut quod animi vitae veritatis porro dolorem",
    },
  ];
  return (
    <section
      className="bg-slate-200 bg-opacity-70 py-10 sm:py-16 lg:py-20"
      id="service"
    >
      <SectionHeading
        title="Our News"
        des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
        aperiam ea eligendi consectetur et quas ipsa impedit."
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <Blog key={i} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
