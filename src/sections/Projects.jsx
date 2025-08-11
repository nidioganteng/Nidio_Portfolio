import Project from "../components/Project";
import { myProjects } from "../constants";
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative c-space pt-10 pb-40"
    >
      <h2 className="text-heading">My Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project}/>
      ))}
    </section>
  );
};

export default Projects;
