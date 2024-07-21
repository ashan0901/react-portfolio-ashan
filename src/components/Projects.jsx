import { PROJECTS } from "../constants";
import { color, motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
        id="projects"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={300}
                height={250}
                alt={project.title}
                className="mb-6 rounded transition-transform duration-300 hover:scale-150"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
              {project.link && (
                <a href={project.link} target="_blank" className="mt-4">
                  <button className="mr-2 mt-4 rounded bg-neutral-900 px-6 py-1 text-sm font-medium text-white hover:bg-neutral-700">
                    GitHub Link
                  </button>
                </a>
              )}
              {/* <div>
                <br />
                <a href="www.github.com" target="_blank" className="mt-4">
                  <button className="mr-2 rounded bg-neutral-900 px-6 py-1 text-sm font-medium text-white hover:bg-neutral-700">
                    GitHub
                  </button>
                </a>
              </div> */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
