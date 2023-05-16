function Target() {
  const items = [
    {
      icon: (
        <img
          src="https://img.icons8.com/ios/50/gear.png"
          alt="gear"
        />
      ),
      title: "Sustainable System",
      des: "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.",
    },
    {
      icon: (
        <img
          src="https://img.icons8.com/ios/50/ffffff/like--v1.png"
          alt="like--v1"
        />
      ),
      title: "Remodeling Experts",
      des: "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.",
    },
    {
      icon: (
        <img
          src="https://img.icons8.com/pulsar-line/48/realtime-protection.png"
          alt="realtime-protection"
        />
      ),
      title: "Quality Services",
      des: "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.",
    },
  ];
  return (
    <div className="mt-10 lg:-mt-36 relative z-20">
      <div className="container flex flex-col lg:flex-row">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-1 h-72 py-5 lg:py-10 px-5 shadow shadow-slate-600/30 bg-main odd:bg-white group"
          >
            <span className="group-odd:text-main text-white text-4xl lg:text-5xl mb-4 block">
              {item.icon}
            </span>
            <h4 className="text-xl font-semibold text-opacity-90 mb-4">
              {item.title}
            </h4>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Target;
