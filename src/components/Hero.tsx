// src/components/Hero.tsx

import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-100"
    >
      <div className="max-w-4xl mx-auto z-10 pt-10 pb-20">
       <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
  Data Engineer & Analyst
</h1>

        <p className="text-xl md:text-2xl text-indigo-900 mb-10 max-w-3xl mx-auto leading-relaxed">
          I specialize in building scalable data pipelines, performing statistical analysis, and creating intuitive dashboards for data-driven decision making.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://github.com/parneet-11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            <Github className="inline-block mr-2" size={20} />
            View My Work
          </a>

          <ScrollLink
            to="contact"
            smooth
            duration={500}
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
          >
            <ExternalLink className="inline-block mr-2" size={20} />
            Get In Touch
          </ScrollLink>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-12 animate-bounce text-indigo-600">
        <ScrollLink to="about" smooth duration={500} className="cursor-pointer">
          <ArrowDown size={28} />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
