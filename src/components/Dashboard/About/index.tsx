// import React, { useState } from "react";

// const SaveAsProject = () => {
//   const [projectName, setProjectName] = useState<string>("");
//   const [projectDescription, setProjectDescription] = useState<string>("");

//   const handleSaveProject = () => {
//     // You can add functionality to save the project here.
//     console.log("Project Saved:", { projectName, projectDescription });
//   };

//   return (
//     <section
//       id="save-as-project"
//       className="min-h-screen bg-cover bg-center py-12 px-6"
//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/5775854/pexels-photo-5775854.jpeg')", // Background image URL
//       }}
//     >
//       <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 bg-black bg-opacity-40 p-8 rounded-lg">
//         {/* Left side: Image */}
//         <div className="flex-shrink-0 w-full lg:w-1/2">
//           <img
//             src="https://images.pexels.com/photos/5775854/pexels-photo-5775854.jpeg" // Image URL
//             alt="Project Image"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right side: Project Details */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
//           <h2 className="text-4xl font-semibold">Save as Project</h2>

//           {/* Project Name */}
//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Enter Project Name"
//               value={projectName}
//               onChange={(e) => setProjectName(e.target.value)}
//               className="p-3 w-full bg-white text-black rounded-lg shadow-md"
//             />
//           </div>

//           {/* Project Description */}
//           <div className="mt-6">
//             <textarea
//               placeholder="Enter Project Description"
//               value={projectDescription}
//               onChange={(e) => setProjectDescription(e.target.value)}
//               rows={4}
//               className="p-3 w-full bg-white text-black rounded-lg shadow-md"
//             />
//           </div>

//           {/* Save Button */}
//           <div className="mt-6">
//             <button
//               onClick={handleSaveProject}
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
//             >
//               Save Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SaveAsProject;
import { useState } from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      id="about"
      className="bg-cover mt-10 bg-center py-12 px-6"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/720171/pexels-photo-720171.jpeg')", // Background image URL
      }}
    >
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 bg-gray-800 bg-opacity-40 p-8 rounded-lg pt-10">
        {/* Left side: Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="/images/1.jpg" // Image URL
            alt="About Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right side: About Title and Description */}
        <div className="w-full lg:w-1/2 px-10 text-center lg:text-left text-white">
          <h2 className="text-4xl font-semibold">About Me</h2>

          <p className="mt-6 text-lg">
            {isExpanded
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id condimentum turpis maximus. Integer hendrerit sit amet justo vel iaculis ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id condimentum turpis maximus. Integer hendrerit sit amet justo vel iaculis."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis euismod orci, euismod placerat odio tempus sed. Curabitur vitae ligula nisl. Aliquam erat volutpat. Cras ut quam malesuada, dapibus velit et, eleifend eros. Sed quis interdum elit, ac tempus risus. Vestibulum convallis enim non dolor euismod, id condimentum turpis maximus. Integer hendrerit sit amet justo vel iaculis"}
          </p>

          {/* Learn More Button */}
          <button
            onClick={toggleDescription}
            className="mt-4 text-blue-500 hover:text-blue-700 font-semibold"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-start space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-600"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-800"
            >
              <Github />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
