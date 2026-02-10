import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-800 tracking-wide">
          Parneet Kaur
        </div>
        <div className="space-x-6 text-blue-800 font-medium text-sm md:text-base">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
