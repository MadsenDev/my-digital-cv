"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects'; // Import the projects data

const ProjectsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Prosjekter</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Trigger animation when the component comes into view
              exit={{ opacity: 0, y: 50 }} // Add exit animation when scrolling out
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }} // Ensures animations can trigger on scroll in and out
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-primary text-white py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Se Prosjekt
                  </a>
                ) : (
                  <span className="text-gray-400 italic">Privat prosjekt</span> // Handling private projects
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;