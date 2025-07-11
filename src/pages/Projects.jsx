import { projects } from "../constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container dark:bg-gray-900 dark:text-white">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300 items-center justify-center">
        <p className="text-justify">
          Welcome to my project gallery! A curated collection of projects that
          reflect my journey in full-stack web and mobile development. With a
          strong foundation in front-end design and real-world experience in
          backend integration, I’ve built applications that are both
          user-friendly and technically robust.
        </p>
        <p className="text-justify">
          From responsive dashboards and mobile utilities to a custom-built
          video conferencing app, my projects showcase skills in UI/UX, API
          integration, state management, and performance optimization. One of my
          standout creations, Interview-Prep, features AI-powered features and
          intelligent API integrations to help users prepare smarter — a
          testament to my ability to work with modern AI tools and backend
          systems.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                {/* <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                /> */}
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
