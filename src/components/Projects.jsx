import SectionHeading from './SectionHeading';
import Project from './short/Project';

function Projects() {
    const projects = [
      {
        img: "/assets/project/(1).jpg",
        alt: "Project 1",
        name: "Duplex Home",
        location: "Sedny",
      },
      {
        img: "/assets/project/(2).jpg",
        alt: "Project2",
        name: "Road Construction",
        location: "New Work",
      },
      {
        img: "/assets/project/(3).jpg",
        alt: "Project3",
        name: "School Bulding",
       location: "Malborn",
      },
      {
        img: "/assets/project/(4).jpg",
        alt: "Project4",
        name: "Road Construction",
        location: "New Work",
      },
    ];
  return (
    <div className="py-16">
      <SectionHeading
        title="Latest Project"
        des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
        aperiam ea eligendi consectetur et quas ipsa impedit."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-3">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects