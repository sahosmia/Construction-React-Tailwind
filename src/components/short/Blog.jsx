/* eslint-disable react/prop-types */

function Blog({ blog }) {
  return (
    <div className="group transition-all duration-700">
      <div className="h-60 overflow-hidden rounded">
        <img
          className="group-hover:scale-110 w-full transition-all duration-700"
          src={blog.img}
        />
      </div>
      <div className="pt-5 ">
        <h2 className="text-black text-opacity-90 text-2xl font-bold pb-2">
          {blog.title}
        </h2>
        <p>{blog.des}</p>
        <a
          className="text-white text-sm font-medium bg-slate-800 py-1 px-3  inline-block mt-3"
          href="#"
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default Blog;
