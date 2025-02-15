import { Link } from "react-router-dom";

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  link: string;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "SEE",
      institution: "ABC High School",
      duration: "2015 - 2017",
      description:
        "Completed +2 with a focus on Science stream (Physics, Chemistry, Biology).",
      link: "/education/plus2", // Link to more details
    },
    {
      degree: "+2",
      institution: "ABC High School",
      duration: "2015 - 2017",
      description:
        "Completed +2 with a focus on Science stream (Physics, Chemistry, Biology).",
      link: "/education/plus2", // Link to more details
    },
    {
      degree: "B.Tech",
      institution: "XYZ University",
      duration: "2017 - 2021",
      description: "Bachelor of Technology in Computer Science.",
      link: "/education/btech", // Link to more details
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen py-16 bg-gradient-to-r bg-gray-900 "
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-10 py-10 text-gray-100">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {educationItems.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold">{edu.degree}</span>
                </div>
                <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                <p className="text-md text-gray-100">{edu.duration}</p>
                <p className="text-sm text-gray-100 mt-4">{edu.description}</p>
                <div className="mt-6">
                  <Link
                    to={edu.link}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
