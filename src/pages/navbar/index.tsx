import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "about" },
    { id: 3, title: "Skills", path: "skills" },
    { id: 4, title: "Projects", path: "projects" },
    { id: 5, title: "Contact", path: "contact" },
  ];

  return (
    <nav className="bg-gray-800 text-white  border-b border-gray-500 shadow-red-50 p-4 fixed w-full top-0 left-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold italic">Logo</h1>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              smooth={true}
              className="hover:text-gray-400 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Navbar Toggle (Hamburger Menu) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Logout and Modal */}
        <div className="hidden md:flex items-center">
          <span
            className="text-red-400 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Logout
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 text-white p-4 border-b border-gray-200 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              smooth={true}
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-gray-400 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
          <div>
            <span
              className="text-red-400 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Logout
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
