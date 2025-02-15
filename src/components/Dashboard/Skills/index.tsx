import React from "react";
import { Link } from "react-router-dom";
import { Code, GitBranch, Server, Database, Users } from "lucide-react"; // Import Lucide icons

type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string; // Link to the documentation page or another tab
};

const Skills = () => {
  const skills: Skill[] = [
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      icon: <Code />,
      link: "/skills/react", // Link to the React documentation page
    },
    {
      title: "Git",
      description:
        "A distributed version control system to track changes in code.",
      icon: <GitBranch />,
      link: "/skills/git", // Link to the Git documentation page
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      icon: <Server />,
      link: "/skills/nodejs", // Link to the Node.js documentation page
    },
    {
      title: "MongoDB",
      description: "A NoSQL database that uses a document-oriented data model.",
      icon: <Database />,
      link: "/skills/mongodb", // Link to the MongoDB documentation page
    },
    {
      title: "Teamwork",
      description: "Working effectively within teams for project success.",
      icon: <Users />,
      link: "/skills/teamwork", // Link to the Teamwork documentation page
    },
  ];

  return (
    <section id="3" className="min-h-screen bg-gray-900 text-white py-16">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Skills</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6 text-center">
                  <div className="text-6xl text-gray-300 mx-auto">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{skill.title}</h3>
                  <p className="mt-3">{skill.description}</p>
                  <div className="mt-6">
                    <Link
                      to={skill.link}
                      className="text-blue-400 hover:underline"
                    >
                      View More
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

export default Skills;
