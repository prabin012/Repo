import { Link } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string; // Link to the project
};
import { Linkedin, Github } from "lucide-react";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/projects/project1", // Link to the project page
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["Vue", "Express", "MySQL"],
      link: "/projects/project2", // Link to the project page
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["Angular", "Firebase", "Node.js"],
      link: "/projects/project3", // Link to the project page
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["Angular", "Firebase", "Node.js"],
      link: "/projects/project3", // Link to the project page
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["Angular", "Firebase", "Node.js"],
      link: "/projects/project3", // Link to the project page
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["Angular", "Firebase", "Node.js"],
      link: "/projects/project3", // Link to the project page
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["Svelte", "Express", "PostgreSQL"],
      link: "/projects/project4", // Link to the project page
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id",
      image: "/images/1.jpg",
      technologies: ["React", "GraphQL", "Apollo"],
      link: "/projects/project5", // Link to the project page
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 text-white py-16"
    >
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mt-4">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-justify">
                    {project.description}
                  </p>
                  <div className="mt-4 flex justify-center space-x-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 justify-around flex">
                    <Link
                      to={project.link}
                      className="text-blue-400 hover:underline border px-10 py-1  flex"
                    >
                      <Linkedin className="text-xs px-1" />
                      Demo
                    </Link>
                    <Link
                      to={project.link}
                      className="text-blue-400 hover:underline border px-10 py-1 flex "
                    >
                      <Github className="text-xs px-1" />
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
