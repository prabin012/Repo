import { Download, User } from "lucide-react"; // Import icons from lucide-react

const WelcomePage = () => {
  return (
    <section
      id="1"
      className="min-h-screen bg-gray-800 text-white flex items-center justify-center py-12"
    >
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between  bg-opacity-50 p-8">
        {/* Left side: Welcome message and description */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className="text-4xl font-semibold">
            Hello User, Welcome to My Website
          </h2>
          <p className="text-xl">
            I am Prabin Kumar Mahato, a passionate Software Engineer. I create
            efficient and innovative software solutions, focusing on delivering
            high-quality, user-friendly applications. I am constantly learning
            and striving to improve my skills and knowledge to provide the best
            experience.
          </p>

          {/* Buttons for Hire Me and Download CV */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-6">
            <a
              href="#"
              className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              <User /> <span>Hire Me</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              <Download /> <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-10 ml-10">
          <img
            src="/images/1.jpg" // Image URL
            alt="Welcome"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
