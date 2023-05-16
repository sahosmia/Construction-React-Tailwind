
function Counter() {
  const counters = [
    {
      img: (
        <img
          src="https://img.icons8.com/ios/50/ffffff/group-of-projects.png"
          alt="group-of-projects"
        />
      ),

      countNumber: 700,
      title: "Project",
    },
    {
      img: (
        <img
          src="https://img.icons8.com/ios/50/ffffff/trophy--v1.png"
          alt="trophy--v1"
        />
      ),

      countNumber: 650,
      title: "Success",
    },
    {
      img: (
        <img
          src="https://img.icons8.com/ios/50/ffffff/prize--v1.png"
          alt="prize--v1"
        />
      ),

      countNumber: 400,
      title: "Award",
    },
    {
      img: (
        <img
          src="https://img.icons8.com/ios/50/ffffff/happy--v1.png"
          alt="happy--v1"
        />
      ),

      countNumber: 550,
      title: "Happy Client",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center py-16 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-80 after:-z-10 z-10"
      style={{ backgroundImage: "url(/src/assets/counter.jpg)" }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {counters.map((counter, i) => (
          <div
            key={i}
            className="flex text-white gap-4 items-center justify-center md:justify-normal"
          >
            {counter.img}

            <div className="">
              <h2 className="text-4xl font-bold">{counter.countNumber}</h2>
              <h2 className="text-xl text-main">{counter.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
