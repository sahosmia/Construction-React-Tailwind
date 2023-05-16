/* eslint-disable react/prop-types */

function Project({project}) {
  return (
    <div className="text-center relative group">
      <img src={project.img} alt={project.alt} />
      <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 transition-all duration-500">
        <div className="flex flex-col justify-center gap-4 bg-black bg-opacity-90 w-[95%] h-[95%] m-auto my-[2.5%]">
          <h6 className="font-semibold text-2xl text-white text-opacity-90">
            {project.name}
          </h6>
          <h4 className=" text-md text-main">{project.location}</h4>
        </div>
      </div>
    </div>
  );
}

export default Project