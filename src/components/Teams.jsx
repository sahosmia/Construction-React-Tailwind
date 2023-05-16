import SectionHeading from "./SectionHeading";
import Team from "./short/Team";

function Teams() {
  const teams = [
    {
      img: "/src/assets/team/team-1.jpg",
      alt: "team1",
      name: "Alex Kapur",
      title: "Home Decoration",
    },
    {
      img: "/src/assets/team/team-2.jpg",
      alt: "team2",
      name: "Lagsid Rudwey",
      title: "Bulding Designer",
    },
    {
      img: "/src/assets/team/team-3.jpg",
      alt: "team3",
      name: "Samex Kids",
      title: "Civil Engineer",
    },
    {
      img: "/src/assets/team/team-4.jpg",
      alt: "team4",
      name: "Alex Kapur",
      title: "Quality Manager",
    },
  ];
  return (
    <div className="py-16">
      <SectionHeading
        title="Our Team"
        des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
        aperiam ea eligendi consectetur et quas ipsa impedit."
      />
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {teams.map((team, i) => (
          <Team key={i} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
