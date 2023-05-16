/* eslint-disable react/prop-types */

function SectionHeading({ title, des }) {
  return (
    <div className="container mb-12 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-3 text-black text-opacity-90">
        {title}
      </h2>
      <p className="w-full lg:w-1/2 m-auto text-black text-opacity-70">{des}</p>
    </div>
  );
}

export default SectionHeading;
